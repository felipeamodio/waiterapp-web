import * as S from "./styles";
import logo from "../../assets/images/logo.svg";

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe o pedido dos clientes</h2>
        </div>

        <img src={logo} alt="WAITERAPP" />
      </S.Content>
    </S.Container>
  );
}
