import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import * as S from "./styles";

const orders: Order[] = [
  {
    _id: "6375264185e0cb5b4b74b4e1",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1668544937383-quatro-queijos.png",
          price: 40,
        },
        quantity: 2,
        _id: "6375264185e0cb5b4b74b4e2",
      },
      {
        product: {
          name: "Coca-Cola",
          imagePath: "1668621066424-coca-cola.png",
          price: 7,
        },
        quantity: 1,
        _id: "6375264185e0cb5b4b74b4e3",
      },
    ],
  },
];

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard icon="🕦" title="Fila de Espera" orders={orders} />
      <OrdersBoard icon="🧑🏼‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto" orders={[]} />
    </S.Container>
  );
}
