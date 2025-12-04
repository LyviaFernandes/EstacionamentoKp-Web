import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.roxo};
`;

export const Field = styled.input`
  width: 535px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.branco};
  color: ${({ theme }) => theme.colors.roxo};

  border-radius: 15px;
  border: none;
  padding: 0 20px;

  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 20px;
  outline: none;
`;
