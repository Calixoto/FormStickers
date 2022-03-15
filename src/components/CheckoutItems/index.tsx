import { FcApproval } from "react-icons/fc";
import { Container, ContainerCheckoutComplete } from "./style";

interface CheckoutProps {
  items: {
    react: boolean;
    vue: boolean;
    angular: boolean;
  };
  amount: number;
  comments: string;
  checkoutComplete: boolean;
}

export function CheckoutItems({
  items,
  amount,
  comments,
  checkoutComplete,
}: CheckoutProps) {
  return (
    <>
      {!checkoutComplete ? (
        <Container>
          <h2>Confira seus itens: </h2>
          <div className="stickers">
            <h3>Adesivos: </h3>
            <ul>
              {items.react ? <li>React</li> : false}
              {items.vue ? <li>Vue</li> : false}
              {items.angular ? <li>Angular</li> : false}
            </ul>
          </div>
          <h3>
            Quantidade de adesivos: <span>{amount}</span>
          </h3>
          <div>
            <textarea value={comments} disabled={true} />
          </div>
        </Container>
      ) : (
        <ContainerCheckoutComplete>
          <FcApproval style={{ fontSize: "7rem" }} />
          <h2>Pedido Realizado!</h2>
        </ContainerCheckoutComplete>
      )}
    </>
  );
}
