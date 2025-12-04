import styled from "styled-components";

export const SmallBtn = styled.button`
  width: 130px;
  height: 35px;

  background: ${({ theme }) => theme.colors.roxo};
  color: ${({ theme }) => theme.colors.branco};

  border: none;
  border-radius: 10px;

  font-family: ${({ theme }) => theme.fonts.nunitoSemi};
  font-size: 15px;

  align-self: flex-end;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
