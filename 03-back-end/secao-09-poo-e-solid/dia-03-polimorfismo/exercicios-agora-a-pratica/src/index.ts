import { Clube } from "./Clube";
import { QuadraFutebol } from "./QuadraFutebol";

const clube = new Clube();
const quadraDeFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraDeFutebol);

console.log(quadraDeFutebol.reservar(new Date()));
