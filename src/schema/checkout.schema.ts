import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(1),
  email: z.string().email({ message: "Please provide a valid email" }),
});

export const DeliveryInfoSchema = z.object({
  city: z.string(),
  postCode: z.string(),
  address: z.string(),
  shipping: z.enum(["free", "fast", "same_day"]),
});

export const PaymenyInfoSchema = z.object({});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>;
export type PaymentInfo = z.infer<typeof PaymenyInfoSchema>;
