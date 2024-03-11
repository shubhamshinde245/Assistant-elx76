import { HttpError } from 'wasp/server'

export const getConversations = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Conversation.findMany({
    where: { userId: context.user.id }
  });
}