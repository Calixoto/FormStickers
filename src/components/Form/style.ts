import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background: var(--shape);

  .formHeader {
    background: #2e3575;
    display: flex;
    padding: 2.5rem 2.5rem 1.5rem;
    justify-content: space-between;
    border-radius: 0 0 100% 80%;
    overflow: hidden;

    h1 {
      color: var(--text-title);
      max-width: 245px;
      font-weight: 200;

      strong {
        font-weight: 700;
      }
    }
  }

  .formBody {
    padding: 1.5rem 2.5rem;

    form {
      display: grid;
      gap: 1.5rem;
      h2 {
        font-size: 1.125rem;
      }
      .checkboxContainer {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        label {
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.2rem;
          line-height: 1.125rem;
          margin: 0 auto 0 0;

          &:nth-child(2) {
            margin-bottom: 0.8rem;
          }
        }
      }

      .amoutboxContainer {
        display: grid;
        gap: 0.6rem;

        div {
          display: flex;
          gap: 0.7rem;
          align-items: flex-end;

          button {
            display: flex;
            border: none;
            background: #2e3575;
            color: var(--text-title);

            transition: linear 0.2s;

            &:hover {
              filter: brightness(1.2);
              transform: scale(1.05);
            }
          }

          input {
            max-width: 2.7rem;
            padding: 0 0.2rem;
            background: #dce3e8;
            border: 1px solid #2e3575;
            border-radius: 6px;
            font-size: 14px;
          }
        }
      }

      .obsContainer {
        display: grid;
        gap: 0.6rem;

        textarea {
          height: 7rem;
          background: #dce3e8;
          border: 1px solid #2e3575;
          border-radius: 6px;
          resize: none;
          font-size: 0.85rem;
        }
      }
    }
  }

  .formFooter {
    background: #dce3e8;
    padding: 1.5rem 2.5rem;
    display: flex;
    justify-content: flex-end;

    button {
      padding: 0.3rem 1.2rem;
      border: none;
      border-radius: 6px;
      background: #2e3575;
      color: var(--text-title);
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;

      transition: linear 0.2s;

      &:hover {
        filter: brightness(1.2);
        letter-spacing: 0.3px;
      }
    }

    .buttonContainer {
      display: flex;
      gap: 0.6rem;
    }
  }
`;
