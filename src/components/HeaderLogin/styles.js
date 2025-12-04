import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 152px;
  background: ${({ theme }) => theme.colors.rosa};

  display: flex;
  
`;

export const LogoImg = styled.img`
  
`;

export const BackBtn = styled.button`
  position: absolute;
  background: transparent;
  color: ${({ theme }) => theme.colors.rosa};
  font-family: ${({ theme }) => theme.fonts.inter};
`;
