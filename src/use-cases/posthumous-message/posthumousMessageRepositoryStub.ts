import { PosthumousMessage } from './posthumousMessage';

export class PosthumousMessageRepositoryStub {
  private _posthumousMessages: PosthumousMessage[] = [];

  save(message: PosthumousMessage) {
    this._posthumousMessages.push(message);
  }
  findAll() {
    return this._posthumousMessages;
  }

  findByUser(userId: string) {
    return this._posthumousMessages.filter(
      (posthumousMessage) => posthumousMessage.userId === userId,
    );
  }

  feedWith(...posthumousMessages: PosthumousMessage[]) {
    for (const posthumousMessage of posthumousMessages)
      this._posthumousMessages.push(posthumousMessage);
  }
}
