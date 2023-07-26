import { PosthumousMessage } from '../../models/posthumousMessage';

export interface PosthumousMessageRepository {
  save(posthumousMessage: PosthumousMessage): Promise<void>;
  findAllByUserId(userId: string): Promise<PosthumousMessage[]>;
}
