import { IAgenda } from "./interfaces/IAgenda";

export abstract class Quadra {
  protected abstract reservar<T>(data: Date): IAgenda<T>;
}
