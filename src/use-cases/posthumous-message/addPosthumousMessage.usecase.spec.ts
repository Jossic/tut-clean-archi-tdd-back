import { AddPosthumousMessage } from './addPosthumousMessage.usecase';
import { PosthumousMessage } from './posthumousMessage';
import { PosthumousMessageRepositoryStub } from './posthumousMessageRepositoryStub';

describe('add posthumous message', () => {
  let posthumousMessageRepository: PosthumousMessageRepositoryStub;

  const aTitleLongEnough = 't'.repeat(25);
  const aTitleNotLongEnough = 't'.repeat(4);
  const aTextLongEnough = 'a'.repeat(56);
  const aTextNotLongEnough = 'a'.repeat(18);
  const someGoodEmails = ['test@yopmail.com'];
  const someWrongEmails = ['testyopmail.com'];

  beforeEach(() => {
    posthumousMessageRepository = new PosthumousMessageRepositoryStub();
  });

  it('should add a posthumous message', async () => {
    await createAPosthumousMessage(
      aTitleLongEnough,
      aTextLongEnough,
      someGoodEmails,
    );

    expectPosthumousMessages(
      new PosthumousMessage(
        '123abc',
        aTitleLongEnough,
        aTextLongEnough,
        someGoodEmails,
      ),
    );
  });

  it('The title should have more than 5 characters', async () => {
    await createAPosthumousMessage(
      aTitleNotLongEnough,
      aTextLongEnough,
      someGoodEmails,
    );

    expect(posthumousMessageRepository.findAll()).toEqual([]);
  });

  it('The text should have more than 20 characters', async () => {
    await createAPosthumousMessage(
      aTitleLongEnough,
      aTextNotLongEnough,
      someGoodEmails,
    );

    expect(posthumousMessageRepository.findAll()).toEqual([]);
  });

  // Tester l'email

  const createAPosthumousMessage = async (
    title: string,
    text: string,
    emails: string[],
  ): Promise<void> => {
    return new AddPosthumousMessage(posthumousMessageRepository).execute(
      title,
      text,
      emails,
    );
  };

  const expectPosthumousMessages = (
    ...posthumousMessages: PosthumousMessage[]
  ) => {
    expect(posthumousMessageRepository.findAll()).toEqual(posthumousMessages);
  };
});
