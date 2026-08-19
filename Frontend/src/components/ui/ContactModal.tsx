import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);

  // Open / close DaisyUI modal
  useEffect(() => {
    const modal = modalRef.current;

    if (!modal) return;

    if (isOpen && !modal.open) {
      modal.showModal();
    }

    if (!isOpen && modal.open) {
      modal.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("full_name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      company: formData.get("company")?.toString().trim(),
      inquiry: formData.get("inquiry")?.toString(),
      message: formData.get("message")?.toString().trim(),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }

    setSubmitted(true);
  };

  return (
    <dialog
      ref={modalRef}
      className="modal modal-bottom sm:modal-middle"
      onCancel={(e) => {
        e.preventDefault();
        handleClose();
      }}
      onClose={() => {
        if (isOpen) {
          onClose();
        }
      }}
    >
      {/* Modal Box */}
      <div
        className="
        modal-box
        w-full
        max-w-2xl
        max-h-[92vh]
        overflow-y-auto
        rounded-t-3xl
        rounded-b-none
        border
        border-beige-200
        bg-beige-50
        p-0
        shadow-2xl
        sm:w-11/12
        sm:rounded-3xl
      "
      >
        {/* Header */}
        <div className="border-b border-beige-200 px-6 py-6 sm:px-8">
          <button
            type="button"
            onClick={handleClose}
            className="
              btn
              btn-circle
              btn-sm
              absolute
              right-4
              top-4
              border-0
              bg-transparent
              text-earth-500
              hover:bg-beige-200
              hover:text-forest-800
            "
          >
            ✕
          </button>

          <div className="mb-2 font-body text-[10px] font-bold uppercase tracking-[0.22em] text-gold-600">
            Get In Touch
          </div>

          <h2 className="pr-10 font-display text-3xl font-semibold tracking-tight text-forest-800 sm:text-4xl">
            Let’s build something{" "}
            <span className="font-normal italic text-moss-600">
              sustainable.
            </span>
          </h2>

          <p className="mt-3 max-w-lg font-body text-sm font-light leading-relaxed text-earth-500">
            Have a question, partnership idea, or renewable energy project? Send
            us a message and our team will get back to you.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            /* Success State */
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="
                flex
                min-h-[380px]
                flex-col
                items-center
                justify-center
                px-6
                text-center
                sm:px-8
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-moss-100
                  text-moss-600
                "
              >
                <CheckCircle2 size={30} strokeWidth={1.7} />
              </div>

              <h3 className="font-display text-2xl font-semibold text-forest-800">
                Message received.
              </h3>

              <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-earth-500">
                Thank you for reaching out to Earthkeepers' Biomass Solutions.
                We appreciate your interest in building a more sustainable
                energy future.
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="
                  mt-7
                  rounded-full
                  bg-forest-800
                  px-6
                  py-3
                  font-body
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-forest-700
                "
              >
                Close
              </button>
            </motion.div>
          ) : (
            /* Contact Form */
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="space-y-5 px-6 py-7 sm:px-8"
            >
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-body text-xs font-semibold text-forest-800">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="full_name"
                    required
                    placeholder="Your name"
                    className="
                      input
                      input-bordered
                      w-full
                      rounded-xl
                      border-beige-300
                      bg-white
                      font-body
                      text-sm
                      text-forest-800
                      placeholder:text-earth-400
                      focus:border-gold-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-gold-500/10
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block font-body text-xs font-semibold text-forest-800">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="
                      input
                      input-bordered
                      w-full
                      rounded-xl
                      border-beige-300
                      bg-white
                      font-body
                      text-sm
                      text-forest-800
                      placeholder:text-earth-400
                      focus:border-gold-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-gold-500/10
                    "
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="mb-2 block font-body text-xs font-semibold text-forest-800">
                  Company / Organization
                  <span className="ml-1 font-normal text-earth-400">
                    (Optional)
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Your company or organization"
                  name="company"
                  className="
                    input
                    input-bordered
                    w-full
                    rounded-xl
                    border-beige-300
                    bg-white
                    font-body
                    text-sm
                    text-forest-800
                    placeholder:text-earth-400
                    focus:border-gold-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-gold-500/10
                  "
                />
              </div>

              {/* Inquiry */}
              <div>
                <label className="mb-2 block font-body text-xs font-semibold text-forest-800">
                  What can we help you with?
                </label>

                <select
                  required
                  name="inquiry"
                  defaultValue=""
                  className="
                    select
                    select-bordered
                    w-full
                    rounded-xl
                    border-beige-300
                    bg-white
                    font-body
                    text-sm
                    text-forest-800
                    focus:border-gold-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-gold-500/10
                  "
                >
                  <option value="" disabled>
                    Select an inquiry
                  </option>

                  <option value="partnership">Partnership Opportunity</option>

                  <option value="biomass">Biomass Solutions</option>

                  <option value="energy">Renewable Energy Project</option>

                  <option value="community">Community Partnership</option>

                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block font-body text-xs font-semibold text-forest-800">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your project or inquiry..."
                  className="
                    textarea
                    textarea-bordered
                    w-full
                    resize-none
                    rounded-xl
                    border-beige-300
                    bg-white
                    font-body
                    text-sm
                    leading-relaxed
                    text-forest-800
                    placeholder:text-earth-400
                    focus:border-gold-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-gold-500/10
                  "
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs font-body text-[10px] leading-relaxed text-earth-400">
                  By submitting this form, you agree to be contacted regarding
                  your inquiry.
                </p>

                <button
                  type="submit"
                  className="
                    btn
                    border-0
                    rounded-full
                    bg-gold-500
                    px-7
                    font-body
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-gold-500/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-gold-400
                    hover:shadow-gold-400/30
                  "
                >
                  Send Message
                  <Send size={15} />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* DaisyUI backdrop */}
      <form
        method="dialog"
        className="
        modal-backdrop
        bg-forest-950/70
        backdrop-blur-md
        "
      >
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  );
}
