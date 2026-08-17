import { Resend } from "resend";

console.log("Resend API key exists:", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

const recipients: string[] =
  process.env.CONTACT_EMAILS?.split(",")
    .map((email) => email.trim())
    .filter(Boolean) ?? [];

interface ContactEmailData {
  name: string;
  email: string;
  company: string;
  inquiry: string;
  message: string;
}

export const sendContactEmail = async (data: ContactEmailData) => {
  const { name, email, company, inquiry, message } = data;

  const { data: emailData, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: recipients,

    replyTo: email,

    subject: `New Inquiry: ${inquiry}`,

    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Contact Inquiry</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 40px 20px;
            background-color: #f7f4ed;
            font-family: Arial, sans-serif;
            color: #24352a;
          "
        >

          <div
            style="
              max-width: 650px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              border: 1px solid #e5dfd2;
            "
          >

            <!-- Header -->
            <div
              style="
                padding: 30px;
                background-color: #24352a;
                color: #ffffff;
              "
            >
              <div
                style="
                  font-size: 11px;
                  letter-spacing: 3px;
                  text-transform: uppercase;
                  color: #d5ad4d;
                  margin-bottom: 8px;
                "
              >
                Earthkeepers' Biomass Solutions
              </div>

              <h1
                style="
                  margin: 0;
                  font-size: 28px;
                  font-weight: 600;
                "
              >
                New Contact Inquiry
              </h1>
            </div>

            <!-- Content -->
            <div style="padding: 30px;">

              <div style="margin-bottom: 24px;">
                <div
                  style="
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #8b8377;
                    margin-bottom: 6px;
                  "
                >
                  Full Name
                </div>

                <div
                  style="
                    font-size: 16px;
                    font-weight: 600;
                    color: #24352a;
                  "
                >
                  ${name}
                </div>
              </div>

              <div style="margin-bottom: 24px;">
                <div
                  style="
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #8b8377;
                    margin-bottom: 6px;
                  "
                >
                  Email Address
                </div>

                <div style="font-size: 16px;">
                  ${email}
                </div>
              </div>

              <div style="margin-bottom: 24px;">
                <div
                  style="
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #8b8377;
                    margin-bottom: 6px;
                  "
                >
                  Company / Organization
                </div>

                <div style="font-size: 16px;">
                  ${company}
                </div>
              </div>

              <div style="margin-bottom: 24px;">
                <div
                  style="
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #8b8377;
                    margin-bottom: 6px;
                  "
                >
                  Inquiry Type
                </div>

                <div
                  style="
                    display: inline-block;
                    padding: 8px 12px;
                    border-radius: 20px;
                    background: #f4ead2;
                    color: #6f5720;
                    font-size: 14px;
                    font-weight: 600;
                  "
                >
                  ${inquiry}
                </div>
              </div>

              <div>
                <div
                  style="
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #8b8377;
                    margin-bottom: 6px;
                  "
                >
                  Message
                </div>

                <div
                  style="
                    padding: 18px;
                    background: #f8f6f1;
                    border-radius: 12px;
                    font-size: 15px;
                    line-height: 1.7;
                    white-space: pre-wrap;
                  "
                >
                  ${message}
                </div>
              </div>

            </div>

            <!-- Footer -->
            <div
              style="
                padding: 20px 30px;
                background: #f8f6f1;
                border-top: 1px solid #e5dfd2;
                color: #8b8377;
                font-size: 12px;
              "
            >
              This inquiry was submitted through the
              Earthkeepers' Biomass Solutions website.
            </div>

          </div>

        </body>
      </html>
    `,
  });

  if (error) {
    throw error;
  }

  return emailData;
};
