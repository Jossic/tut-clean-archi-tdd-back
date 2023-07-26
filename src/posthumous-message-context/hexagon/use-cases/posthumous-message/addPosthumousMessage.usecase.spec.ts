import { AddPosthumousMessage } from './addPosthumousMessage.usecase';
import { PosthumousMessage } from '../../models/posthumousMessage';
import { PosthumousMessageRepositoryStub } from '../../../adapters/secondary/gateways/repositories/testing/posthumousMessageRepositoryStub';
import { PosthumousMessageFixtures } from '../../../../../test/fixtures/PosthumousMessage.fixture';
import { DeterministicUuidGenerator } from '../../../adapters/secondary/gateways/uuid-generator/deterministic-uuid-generator';

describe('add posthumous message', () => {
  let posthumousMessageRepository: PosthumousMessageRepositoryStub;
  let uuidGenerator: DeterministicUuidGenerator;

  const aTitleLongEnough = 't'.repeat(25);
  const aTitleNotLongEnough = 't'.repeat(4);
  const aTextLongEnough = 'a'.repeat(56);
  const aTextNotLongEnough = 'a'.repeat(18);
  const someGoodEmails = ['test@yopmail.com'];
  const someWrongEmails = ['testyopmail.com'];

  beforeEach(() => {
    posthumousMessageRepository = new PosthumousMessageRepositoryStub();
    uuidGenerator = new DeterministicUuidGenerator();
    uuidGenerator.nextUuid = '456def';
  });

  it('should add a posthumous message', async () => {
    await createAPosthumousMessage(
      PosthumousMessageFixtures.johnDoe.userId,
      aTitleLongEnough,
      aTextLongEnough,
      someGoodEmails,
    );

    expectPosthumousMessages(
      new PosthumousMessage(PosthumousMessageFixtures.johnDoe),
    );
  });

  it('The title should have more than 5 characters', async () => {
    await createAPosthumousMessage(
      PosthumousMessageFixtures.johnDoe.userId,
      aTitleNotLongEnough,
      aTextLongEnough,
      someGoodEmails,
    );

    expect(posthumousMessageRepository.findAll()).toEqual([]);
  });

  it('The text should have more than 20 characters', async () => {
    await createAPosthumousMessage(
      PosthumousMessageFixtures.johnDoe.userId,
      aTitleLongEnough,
      aTextNotLongEnough,
      someGoodEmails,
    );

    expect(posthumousMessageRepository.findAll()).toEqual([]);
  });

  // Tester l'email

  it('The email should be valid', async () => {
    //
  });

  // We should not be able to see others messages
  it('should not be possible to display other users message', async () => {
    //
    posthumousMessageRepository.feedWith(
      new PosthumousMessage(PosthumousMessageFixtures.janeDoe),
    );

    await createAPosthumousMessage(
      PosthumousMessageFixtures.johnDoe.userId,
      aTitleLongEnough,
      aTextLongEnough,
      someGoodEmails,
    );

    expect(
      posthumousMessageRepository.findAllByUserId(
        PosthumousMessageFixtures.johnDoe.userId,
      ),
    ).toEqual([new PosthumousMessage(PosthumousMessageFixtures.johnDoe)]);
  });

  const createAPosthumousMessage = async (
    userId: string,
    title: string,
    text: string,
    emails: string[],
  ): Promise<void> => {
    return new AddPosthumousMessage(
      posthumousMessageRepository,
      uuidGenerator,
    ).execute(userId, title, text, emails);
  };

  const expectPosthumousMessages = (
    ...posthumousMessages: PosthumousMessage[]
  ) => {
    expect(posthumousMessageRepository.findAll()).toEqual(posthumousMessages);
  };
});