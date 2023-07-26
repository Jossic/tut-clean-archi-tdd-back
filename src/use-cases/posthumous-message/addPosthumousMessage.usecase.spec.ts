import { AddPosthumousMessage } from './addPosthumousMessage.usecase';
import { PosthumousMessage } from './posthumousMessage';
import { PosthumousMessageRepositoryStub } from './posthumousMessageRepositoryStub';

describe('add posthumous message', () => {
  let posthumousMessageRepository: PosthumousMessageRepositoryStub;

  beforeEach(() => {
    posthumousMessageRepository = new PosthumousMessageRepositoryStub();
  });

  it('should add a posthumous message', () => {
    createAPosthumousMessage();

    expectPosthumousMessages(
      new PosthumousMessage(
        '123abc',
        'Hello World!',
        'My super message long enough to be a posthumous message!',
        ['test@yopmail.com'],
      ),
    );
  });

  const createAPosthumousMessage = () => {
    new AddPosthumousMessage(posthumousMessageRepository).execute();
  };

  const expectPosthumousMessages = (
    ...posthumousMessages: PosthumousMessage[]
  ) => {
    expect(posthumousMessageRepository.findAll()).toEqual(posthumousMessages);
  };
});
