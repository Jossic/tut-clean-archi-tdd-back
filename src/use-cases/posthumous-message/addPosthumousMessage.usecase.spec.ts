import { AddPosthumousMessage } from './addPosthumousMessage.usecase';
import { PosthumousMessage } from './posthumousMessage';
import { PosthumousMessageRepositoryStub } from './posthumousMessageRepositoryStub';

describe('add posthumous message', () => {
  let posthumousMessageRepository: PosthumousMessageRepositoryStub;

  const aTitleLongEnough = 'Hello World!';
  const aTitleNotLongEnough = 'Hello';
  const aMessageLongEnough =
    'My super message long enough to be a posthumous message!';
  const aMessageNotLongEnough = 'Hello';
  const someEmails = ['test@yopmail.com'];

  beforeEach(() => {
    posthumousMessageRepository = new PosthumousMessageRepositoryStub();
  });

  it('should add a posthumous message', async () => {
    await createAPosthumousMessage(
      aTitleLongEnough,
      aMessageLongEnough,
      someEmails,
    );

    expectPosthumousMessages(
      new PosthumousMessage(
        '123abc',
        aTitleLongEnough,
        aMessageLongEnough,
        someEmails,
      ),
    );
  });

  it('The title should have more than 5 characters', async () => {
    await createAPosthumousMessage(
      aTitleNotLongEnough,
      aMessageLongEnough,
      someEmails,
    );

    expect(posthumousMessageRepository.findAll()).toEqual([]);
  });

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
