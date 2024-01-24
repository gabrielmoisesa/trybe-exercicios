import { Quadra } from "./Quadra";
import { IAgenda } from "./interfaces/IAgenda";
import { ITenis } from "./interfaces/ITenis";
import { normas } from "./normas/normasDeUso";

export class QuadraTenis extends Quadra {
  static tenisData: ITenis = normas.tenis;

  reservar<ITenis>(data: Date): IAgenda<ITenis> {
    return {
      protocolo: Quadra.generateProtocol(),
      data,
      regras: QuadraTenis.tenisData as ITenis,
    };
  }
}
