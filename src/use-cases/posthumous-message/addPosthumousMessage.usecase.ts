import { PosthumousMessage } from './posthumousMessage';
import { PosthumousMessageRepositoryStub } from './posthumousMessageRepositoryStub';

export class AddPosthumousMessage {
  constructor(
    private readonly posthumousMessageRepository: PosthumousMessageRepositoryStub,
  ) {}

  async execute(
    userId: string,
    title: string,
    text: string,
    emails: string[],
  ): Promise<void> {
    if (title.length <= 5) return;
    if (text.length <= 20) return;

    const posthumousMessage = PosthumousMessage.from(
      '456def',
      userId,
      title,
      text,
      emails,
    );
    return this.posthumousMessageRepository.save(posthumousMessage);
  }
}
