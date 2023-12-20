import { z } from 'zod';

// zod validation

const fullNameValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const addressValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const orderValidation = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});
const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: fullNameValidation,
  age: z.number(),
  email: z.string(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()).optional(),
  address: addressValidation,
  orders: z.array(orderValidation).optional(),
});

export default userValidationSchema
