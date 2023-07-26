export class PosthumousMessage {
  constructor(
    private readonly id: string,
    private readonly title: string,
    private readonly text: string,
    private readonly emails: string[],
  ) {}
}
