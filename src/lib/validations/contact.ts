import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please tell us who you are."),
  email: z
    .string()
    .email("We need a reachable email to follow up."),
  message: z.string().min(10, "Add a few more details so we can help."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
