import { PosthumousMessage } from './posthumousMessage';
import { PosthumousMessageRepositoryStub } from './posthumousMessageRepositoryStub';

export class AddPosthumousMessage {
  constructor(
    private readonly posthumousMessageRepository: PosthumousMessageRepositoryStub,
  ) {}

  async execute(title: string, text: string, emails: string[]): Promise<void> {
    if (title.length <= 5) return;
    this.posthumousMessageRepository.save(
      new PosthumousMessage('123abc', title, text, emails),
    );
  }
}
