// all the models for the users feature

export const User = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});
