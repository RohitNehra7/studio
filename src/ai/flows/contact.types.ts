/**
 * @fileOverview Types for the contact flow.
 */

import { z } from "zod";

export const ContactRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
export type ContactRequest = z.infer<typeof ContactRequestSchema>;

export const ContactResponseSchema = z.object({
  message: z.string().describe('A confirmation message to be shown to the user.'),
});
export type ContactResponse = z.infer<typeof ContactResponseSchema>;
