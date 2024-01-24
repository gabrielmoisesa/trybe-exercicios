import { Clube } from "./Clube";
import { QuadraFutebol } from "./QuadraFutebol";
import { QuadraTenis } from "./QuadraTenis";

const clube = new Clube();
const quadraDeFutebol = new QuadraFutebol();
const quadraDeTenis = new QuadraTenis();

clube.adicionarQuadra(quadraDeFutebol);
clube.adicionarQuadra(quadraDeTenis);

console.log(quadraDeFutebol.reservar(new Date()));
console.log(quadraDeTenis.reservar(new Date()));

console.log(clube.buscarQuadra(0));
console.log(clube.buscarQuadra(1));
