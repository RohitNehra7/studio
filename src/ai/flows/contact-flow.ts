'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - processContactRequest - A function that handles the contact form data.
 * - ContactRequest - The input type for the processContactRequest function.
 * - ContactResponse - The return type for the processContactRequest function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ContactRequestSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});
export type ContactRequest = z.infer<typeof ContactRequestSchema>;

const ContactResponseSchema = z.object({
  message: z.string().describe('A confirmation message to be shown to the user.'),
});
export type ContactResponse = z.infer<typeof ContactResponseSchema>;


const prompt = ai.definePrompt({
  name: 'contactFormPrompt',
  input: { schema: ContactRequestSchema },
  output: { schema: ContactResponseSchema },
  prompt: `You are a helpful assistant for an architectural firm. A user has submitted the contact form on the website.

  Their details are:
  Name: {{name}}
  Email: {{email}}
  Subject: {{subject}}
  Message:
  {{{message}}}

  Generate a simple, friendly confirmation message that we can show to the user. For example: "Thanks for reaching out, {{name}}! We've received your message and will get back to you shortly."
  `,
});

const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactRequestSchema,
    outputSchema: ContactResponseSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    // In a real application, you would add logic here to send an email.
    // For this demo, we are just returning the confirmation message.
    return output!;
  }
);


export async function processContactRequest(input: ContactRequest): Promise<ContactResponse> {
    return await contactFlow(input);
}
