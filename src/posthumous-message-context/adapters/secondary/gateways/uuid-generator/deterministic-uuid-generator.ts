import { UuidGenerator } from '../../../../hexagon/gateways/uuid-generator/uuid-generator';

export class DeterministicUuidGenerator implements UuidGenerator {
  private _nextUuid: string | null = null;
  async generate(): Promise<string> {
    return this._nextUuid;
  }

  set nextUuid(value: string | null) {
    this._nextUuid = value;
  }
}
