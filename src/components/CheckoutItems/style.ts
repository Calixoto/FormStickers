import styled from "styled-components";

export const ContainerCheckoutComplete = styled.div`
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Container = styled.div`
  padding: 1.5rem 2.5rem;
  display: grid;
  gap: 1.5rem;

  h2 {
    font-size: 1.125rem;
    text-align: center;
    font-weight: 700;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;

    span {
      background: #dce3e8;
      padding: 0.2rem;
      border-radius: 6px;
    }
  }

  .stickers {
    display: grid;
    gap: 0.6rem;

    ul {
      background: #dce3e8;
      list-style: none;
      margin: 0 auto 0 0;
      padding: 0.2rem;
      border-radius: 6px;

      li {
        font-weight: 400;
      }
    }
  }

  div {
    textarea {
      width: 100%;
      height: 7rem;
      background: #dce3e8;
      border: 1px solid #2e3575;
      border-radius: 6px;
      resize: none;
      font-size: 0.85rem;
    }
  }
`;
