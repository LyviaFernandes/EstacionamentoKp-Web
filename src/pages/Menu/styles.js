import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.brancoAmarelado};

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
`;


export const HeaderBar = styled.header`
  width: 100%;
  height: 202px;
  background: ${({ theme }) => theme.colors.roxo};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Logo = styled.img`
  width: 202px;
  height: 202px;
  object-fit: contain;
`;

export const ButtonBack = styled.button`
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

export const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const MenuButton = styled.button`
  width: 320px;
  height: 80px;

  background: ${({ theme }) => theme.colors.roxoMedio};
  border: none;
  border-radius: 25px;

  color: ${({ theme }) => theme.colors.branco};
  font-family: ${({ theme }) => theme.fonts.gideon};
  font-size: 30px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;
