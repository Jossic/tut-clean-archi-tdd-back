import { PosthumousMessage } from '../../../../../hexagon/models/posthumousMessage';
import { PosthumousMessageRepository } from '../../../../../hexagon/gateways/repositories/posthumousMessageRepository';

export class PosthumousMessageRepositoryStub
  implements PosthumousMessageRepository
{
  private _posthumousMessages: PosthumousMessage[] = [];

  async save(message: PosthumousMessage) {
    this._posthumousMessages.push(message);
  }
  findAll() {
    return this._posthumousMessages;
  }

  async findAllByUserId(userId: string) {
    return this._posthumousMessages.filter(
      (posthumousMessage) => posthumousMessage.userId === userId,
    );
  }

  feedWith(...posthumousMessages: PosthumousMessage[]) {
    for (const posthumousMessage of posthumousMessages)
      this._posthumousMessages.push(posthumousMessage);
  }
}
