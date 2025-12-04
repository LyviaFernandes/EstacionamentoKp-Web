import styled from "styled-components";

export const Btn = styled.button`
  width: 250px;
  height: 50px;

  background: ${({ theme }) => theme.colors.roxoMedio};
  color: ${({ theme }) => theme.colors.branco};

  border: none;
  border-radius: 10px;

  font-family: ${({ theme }) => theme.fonts.gideon};
  font-size: 22px;
  justfy-content: center;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
  &:hover {
    opacity: 0.85;
  }
`;
