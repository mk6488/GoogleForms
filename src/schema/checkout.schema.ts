import { z } from "zod";

const cardNumberRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

export const PersonalInfoSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name should be at least two characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please provide a valid email" }),
});

export const DeliveryInfoSchema = z.object({
  address: z.string({ required_error: "Address is required" }),
  city: z.string({ required_error: "City is required" }),
  postCode: z.string({ required_error: "Postcode is required" }),
  shipping: z.enum(["standard", "fast", "same_day"]),
});

export const PaymenyInfoSchema = z.object({
  number: z.string().regex(cardNumberRegex),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/)
    .refine(
      (dateString) => {
        const [month, year] = dateString.split("/");
        const parsedMonth = parseInt(month, 10);
        const parsedYear = parseInt(year, 10) + 2000;
        var date = new Date(parsedYear, parsedMonth - 1);
        return date > new Date();
      },
      { message: "Card has expired" }
    ),
  securityCode: z.coerce.number().gte(100).lte(999),
  saveInfo: z.boolean(),
});

export const CheckoutInfoSchema =
  PersonalInfoSchema.merge(DeliveryInfoSchema).merge(PaymenyInfoSchema);

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>;
export type PaymentInfo = z.infer<typeof PaymenyInfoSchema>;
export type CheckoutData = z.infer<typeof CheckoutInfoSchema>;
