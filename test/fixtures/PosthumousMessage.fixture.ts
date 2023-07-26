import { PosthumousMessageProps } from '../../src/posthumous-message-context/hexagon/models/posthumousMessage';

export type PosthumousMessageFixturesKey = 'johnDoe' | 'janeDoe';

const aTitleLongEnough = 't'.repeat(25);
const aTextLongEnough = 'a'.repeat(56);
const someGoodEmails = ['test@yopmail.com'];

const johnDoe = {
  id: '456def',
  userId: '123abc',
  title: aTitleLongEnough,
  text: aTextLongEnough,
  emails: someGoodEmails,
};

export const PosthumousMessageFixtures: Record<
  PosthumousMessageFixturesKey,
  PosthumousMessageProps
> = {
  johnDoe,
  janeDoe: {
    ...johnDoe,
    userId: '888aaa',
  },
};
