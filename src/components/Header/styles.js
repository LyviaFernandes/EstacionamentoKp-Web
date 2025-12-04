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
  right: 25px;
  top: 25px;

  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.branco};
  color: ${({ theme }) => theme.colors.branco};

  border-radius: 100px;
  padding: 8px 20px;

  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 20px;
  cursor: pointer;
`;
