import { Quadra } from "./Quadra";
import { IAgenda } from "./interfaces/IAgenda";
import { IFutebol } from "./interfaces/IFutebol";
import { normas } from "./normas/normasDeUso";

export class QuadraFutebol extends Quadra {
  static futebolData: IFutebol = normas.futebol;

  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    return {
      protocolo: Math.random().toString(36).substring(2, 12),
      data,
      regras: QuadraFutebol.futebolData as IFutebol,
    };
  }
}
