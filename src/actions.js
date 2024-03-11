import { HttpError } from 'wasp/server'

export const createConversation = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Conversation.create({
    data: {
      question: args.question,
      response: args.response,
      userId: context.user.id
    }
  });
}