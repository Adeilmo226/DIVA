"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/app/contact/actions";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  role: z.enum(
    ["Clinician", "Researcher", "Investor", "Advocate", "Student", "Other"],
    { error: "Please select how you identify" }
  ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full px-4 py-3 bg-white border border-primary/25 rounded-lg font-sans text-ink placeholder-ink/35 focus:outline-none focus:ring-2 focus:ring-primary/40 transition text-sm";

const labelClass = "block font-sans text-sm font-medium text-ink mb-1.5";

const errorClass = "mt-1.5 text-xs text-red-600 font-sans";

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    setServerError(null);
    startTransition(async () => {
      const result = await submitContact(data);
      if (result.success) {
        setSuccess(true);
        reset();
      } else {
        setServerError(result.error ?? "Something went wrong. Please try again.");
      }
    });
  };

  if (success) {
    return (
      <div className="bg-surface border border-primary/25 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-serif text-2xl text-ink mb-3">
          Thanks! We&apos;ll be in touch soon.
        </h2>
        <p className="font-sans text-sm text-ink/60">
          Your message means the world to us. We&apos;ll get back to you within a
          few days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="bg-surface border border-primary/20 rounded-2xl p-8 md:p-10 space-y-6"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name{" "}
          <span aria-hidden="true" className="text-primary">
            *
          </span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
          placeholder="Your full name"
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className={errorClass}>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email{" "}
          <span aria-hidden="true" className="text-primary">
            *
          </span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
          placeholder="you@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className={errorClass}>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className={labelClass}>
          Organization / Affiliation{" "}
          <span className="text-ink/40 font-normal">(optional)</span>
        </label>
        <input
          id="organization"
          type="text"
          autoComplete="organization"
          className={inputClass}
          placeholder="Hospital, university, organization..."
          {...register("organization")}
        />
      </div>

      {/* Role */}
      <div>
        <label htmlFor="role" className={labelClass}>
          How would you describe yourself?{" "}
          <span aria-hidden="true" className="text-primary">
            *
          </span>
        </label>
        <select
          id="role"
          aria-required="true"
          aria-describedby={errors.role ? "role-error" : undefined}
          className={`${inputClass} cursor-pointer`}
          {...register("role")}
        >
          <option value="">Select a role...</option>
          <option value="Clinician">Clinician</option>
          <option value="Researcher">Researcher</option>
          <option value="Investor">Investor</option>
          <option value="Advocate">Advocate</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
        {errors.role && (
          <p id="role-error" role="alert" className={errorClass}>
            {errors.role.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message{" "}
          <span aria-hidden="true" className="text-primary">
            *
          </span>
        </label>
        <textarea
          id="message"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about yourself and how you'd like to connect..."
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className={errorClass}>
            {errors.message.message}
          </p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-red-600 font-sans">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 bg-primary text-white font-sans font-medium rounded-full hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {isPending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
