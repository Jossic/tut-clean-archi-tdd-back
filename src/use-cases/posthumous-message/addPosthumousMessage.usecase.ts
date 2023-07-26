import { PosthumousMessage } from './posthumousMessage';
import { PosthumousMessageRepositoryStub } from './posthumousMessageRepositoryStub';

export class AddPosthumousMessage {
  constructor(
    private readonly posthumousMessageRepository: PosthumousMessageRepositoryStub,
  ) {}

  async execute() {
    this.posthumousMessageRepository.save(
      new PosthumousMessage(
        '123abc',
        'Hello World!',
        'My super message long enough to be a posthumous message!',
        ['test@yopmail.com'],
      ),
    );
  }
}
