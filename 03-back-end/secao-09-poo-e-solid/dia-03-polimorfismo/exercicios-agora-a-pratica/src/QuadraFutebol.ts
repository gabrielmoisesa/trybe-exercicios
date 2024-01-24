import { Quadra } from "./Quadra";
import { IAgenda } from "./interfaces/IAgenda";
import { IFutebol } from "./interfaces/IFutebol";
import { normas } from "./normas/normasDeUso";

export class QuadraFutebol extends Quadra {
  static futebolData: IFutebol = normas.futebol;

  reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    return {
      protocolo: Quadra.generateProtocol(),
      data,
      regras: QuadraFutebol.futebolData as IFutebol,
    };
  }
}
