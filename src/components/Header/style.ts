import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  background: #892aa7;
  border-radius: 4px;

  img {
    width: 4rem;
    border-radius: 50%;
  }

  span {
    font-size: 24px;
    font-weight: 500;
    color: var(--shape);
    margin-left: 1.5rem;
  }
`;
