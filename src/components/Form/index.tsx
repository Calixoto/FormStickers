import { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi";
import { CheckoutItems } from "../CheckoutItems";
import { Container } from "./style";

interface CheckboxProps {
  languages: {
    react: boolean;
    vue: boolean;
    angular: boolean;
  };
}

export function Form() {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [comments, setComments] = useState("");
  const [amount, setAmount] = useState(0);
  const [isChecked, setIsChecked] = useState<CheckboxProps>({
    languages: {
      react: false,
      vue: false,
      angular: false,
    },
  });

  function handleIncreaseAmount() {
    setAmount(amount + 1);
  }

  function handleDecreaseAmount() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  function handleCheckout() {
    if (
      amount > 0 &&
      (isChecked.languages.angular ||
        isChecked.languages.react ||
        isChecked.languages.vue)
    ) {
      setIsCheckout(true);
    }

    if (amount === 0) {
      alert("Insira a quantidade de adesivos");
    }

    if (
      !isChecked.languages.angular &&
      !isChecked.languages.react &&
      !isChecked.languages.vue
    ) {
      alert("Escolha um adesivo");
    }
  }

  function handleBackCheckout() {
    if (isCheckoutComplete) {
      setComments("");
      setAmount(0);
      setIsChecked({
        languages: {
          react: false,
          vue: false,
          angular: false,
        },
      });
    }
    setIsCheckout(false);
    setIsCheckoutComplete(false);
  }

  function getComments(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComments(e.target.value);
  }

  function handleChangeCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "React") {
      setIsChecked({
        languages: { ...isChecked.languages, react: e.target.checked },
      });
    }
    if (e.target.value === "Vue") {
      setIsChecked({
        languages: { ...isChecked.languages, vue: e.target.checked },
      });
    }
    if (e.target.value === "Angular") {
      setIsChecked({
        languages: { ...isChecked.languages, angular: e.target.checked },
      });
    }
  }

  return (
    <Container>
      <section className="formHeader">
        <h1>
          Formulário <br /> para compra de <strong>Pacote de adesivos</strong>
        </h1>
        <BsBoxSeam style={{ fontSize: "150px", color: "#181746" }} />
      </section>
      {!isCheckout ? (
        <section className="formBody">
          <form action="">
            <div className="checkboxContainer">
              <h2>Quais adesivos:</h2>
              <label htmlFor="react">
                <input
                  type="checkbox"
                  id="react"
                  onChange={(e) => handleChangeCheckbox(e)}
                  checked={isChecked.languages?.react}
                  value="React"
                />{" "}
                React
              </label>
              <label htmlFor="vue">
                <input
                  type="checkbox"
                  id="vue"
                  onChange={(e) => handleChangeCheckbox(e)}
                  checked={isChecked.languages?.vue}
                  value="Vue"
                />{" "}
                Vue
              </label>
              <label htmlFor="angular">
                <input
                  type="checkbox"
                  id="angular"
                  onChange={(e) => handleChangeCheckbox(e)}
                  checked={isChecked.languages?.angular}
                  value="Angular"
                />{" "}
                Angular
              </label>
            </div>

            <div className="amoutboxContainer">
              <h2>Quantos adesivos de cada?</h2>
              <div>
                <button type="button" onClick={() => handleDecreaseAmount()}>
                  <HiMinus style={{ fontSize: "32px" }} />
                </button>
                <input type="text" value={amount} disabled={true} />
                <button type="button" onClick={() => handleIncreaseAmount()}>
                  <HiPlus
                    style={{
                      fontSize: "32px",
                    }}
                  />
                </button>
              </div>
            </div>

            <div className="obsContainer">
              <h2>Observações:</h2>
              <textarea
                placeholder="Alguma duvida? Recado?"
                onChange={(e) => getComments(e)}
              />
            </div>
          </form>
        </section>
      ) : (
        <CheckoutItems
          items={isChecked.languages}
          comments={comments}
          amount={amount}
          checkoutComplete={isCheckoutComplete}
        />
      )}
      <section className="formFooter">
        {!isCheckout ? (
          <button type="button" onClick={() => handleCheckout()}>
            Enviar
          </button>
        ) : (
          <div className="buttonContainer">
            <button type="button" onClick={() => handleBackCheckout()}>
              Voltar
            </button>
            <button
              type="button"
              onClick={() => setIsCheckoutComplete(true)}
              style={{ display: isCheckoutComplete ? "none" : "block" }}
            >
              Confirmar
            </button>
          </div>
        )}
      </section>
    </Container>
  );
}
