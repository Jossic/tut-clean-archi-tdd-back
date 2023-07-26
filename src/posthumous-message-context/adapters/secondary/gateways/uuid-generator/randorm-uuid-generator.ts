import { v4 as uuidV4 } from 'uuid';
import { UuidGenerator } from '../../../../hexagon/gateways/uuid-generator/uuid-generator';

export class RandomUuidGenerator implements UuidGenerator {
  async generate(): Promise<string> {
    return uuidV4();
  }
}
