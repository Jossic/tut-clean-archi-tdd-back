export interface PosthumousMessageProps {
  id: string;
  userId: string;
  title: string;
  text: string;
  emails: string[];
}

export class PosthumousMessage {
  constructor(private _stateProps: PosthumousMessageProps) {}

  static from(
    id: string,
    userId: string,
    title: string,
    text: string,
    emails: string[],
  ): PosthumousMessage {
    return new PosthumousMessage({ id, userId, title, text, emails });
  }

  get userId() {
    return this._stateProps.userId;
  }
}
