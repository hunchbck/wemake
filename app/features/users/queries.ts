// all the queries for the users feature

export const getUser = async (id: string) => {
  const user = await db.query.User.findFirst({
    where: eq(User.id, id),
  });
  return user;
};
