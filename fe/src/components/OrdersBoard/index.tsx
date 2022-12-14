import * as S from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
}

export function OrdersBoard({ icon, title }: OrdersBoardProps) {
  return (
    <S.Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <S.OrdersContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </S.OrdersContainer>
    </S.Board>
  );
}
