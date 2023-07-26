import { PosthumousMessage } from '../../models/posthumousMessage';
import { PosthumousMessageRepositoryStub } from '../../../adapters/secondary/gateways/repositories/testing/posthumousMessageRepositoryStub';
import { UuidGenerator } from '../../gateways/uuid-generator/uuid-generator';

export class AddPosthumousMessage {
  constructor(
    private readonly posthumousMessageRepository: PosthumousMessageRepositoryStub,
    private readonly uuidGenerator: UuidGenerator,
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
      await this.uuidGenerator.generate(),
      userId,
      title,
      text,
      emails,
    );
    return this.posthumousMessageRepository.save(posthumousMessage);
  }
}
