import styled from "styled-components";

export const CardBox = styled.div`
  width: 305px;
  height: 150px;

  background: ${({ theme }) => theme.colors.cinza};
  border-radius: 20px;

  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Plate = styled.p`
  font-family: ${({ theme }) => theme.fonts.interMedium};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.roxo};
`;

export const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.roxo};
`;

export const Price = styled.p`
  font-family: ${({ theme }) => theme.fonts.interMedium};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.roxo};
  align-self: flex-end;
`;
