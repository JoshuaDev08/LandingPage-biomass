import type { Request, Response } from "express";
import { sendContactEmail } from "../services/email.services.js";

interface ContactRequest {
  name: string;
  email: string;
  company?: string;
  inquiry: string;
  message: string;
}

const inquiryLabels: Record<string, string> = {
  partnership: "Partnership Opportunity",
  biomass: "Biomass Solutions",
  energy: "Renewable Energy Project",
  community: "Community Partnership",
  general: "General Inquiry",
};

export const submitContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, company, inquiry, message } =
      req.body as ContactRequest;

    if (!name || !email || !inquiry || !message) {
      res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });

      return;
    }

    const inquiryLabel = inquiryLabels[inquiry] || "General Inquiry";

    await sendContactEmail({
      name,
      email,
      company: company || "Not provided",
      inquiry: inquiryLabel,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Your inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to send your inquiry. Please try again later.",
    });
  }
};
