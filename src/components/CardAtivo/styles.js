import styled from "styled-components";

export const CardBox = styled.div`
  width: 305px;
  height: 125px;

  background: ${({ theme }) => theme.colors.rosa};
  border-radius: 20px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Plate = styled.p`
  font-family: ${({ theme }) => theme.fonts.interMedium};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.branco};
`;

export const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.branco};
`;
