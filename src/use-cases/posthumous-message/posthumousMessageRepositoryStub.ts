import { PosthumousMessage } from './posthumousMessage';

export class PosthumousMessageRepositoryStub {
  private _posthumousMessages: PosthumousMessage[] = [];

  save(message: PosthumousMessage) {
    this._posthumousMessages.push(message);
  }
  findAll() {
    return this._posthumousMessages;
  }
}
