import { OrdersBoard } from "../OrdersBoard";
import * as S from "./styles";

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard icon="🕦" title="Fila de Espera" />
      <OrdersBoard icon="🧑🏼‍🍳" title="Em preparação" />
      <OrdersBoard icon="✅" title="Pronto" />
    </S.Container>
  );
}
