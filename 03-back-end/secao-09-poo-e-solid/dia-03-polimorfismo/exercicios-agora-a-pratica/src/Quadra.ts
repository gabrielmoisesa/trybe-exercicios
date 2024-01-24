import { IAgenda } from "./interfaces/IAgenda";

export abstract class Quadra {
  protected abstract reservar<T>(data: Date): IAgenda<T>;

  static generateProtocol(): string {
    return Math.random().toString(36).substring(2, 12);
  }
}
