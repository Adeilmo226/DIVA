"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  role: z.enum(
    ["Clinician", "Researcher", "Investor", "Advocate", "Student", "Other"],
    { error: "Please select a role" }
  ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof schema>;

// TODO: Set RESEND_API_KEY in .env.local — get your key at https://resend.com/api-keys
// TODO: Set CONTACT_EMAIL in .env.local — the address that receives form submissions
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const validated = schema.safeParse(data);
  if (!validated.success) {
    return { success: false, error: "Please check your form entries." };
  }

  const { name, email, organization, role, message } = validated.data;

  try {
    await resend.emails.send({
      // TODO: Replace from address with a verified Resend domain once set up
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL ?? "teamdiva@example.com",
      subject: `New message from ${name} — D.I.V.A Contact Form`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization ?? "N/A"}`,
        `Role: ${role}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Failed to send your message. Please try again later.",
    };
  }
}
