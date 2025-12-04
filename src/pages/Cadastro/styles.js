import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.rosa};

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

/* Botão Voltar ao início */
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

export const TitleTab = styled.div`
  width: 315px;
  height: 85px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 17px 113px;
  color: ${({ theme }) => theme.colors.roxo};
  font-family: ${({ theme }) => theme.fonts.gideon};
  font-size: 50px;
`;

export const FormBox = styled.div`
  width: 635px;
  background: ${({ theme }) => theme.colors.cinza};
  border-radius: 30px;
  margin-top: 21px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px;
  gap: 15px;
  height: auto;
`;

export const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.roxo};
`;

export const InputField = styled.input`
  width: 535px;
  height: 70px;
  border-radius: 15px;
  border: none;
  margin-top: 5px;
  padding: 0 20px;

  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 20px;
  outline: none;
`;

export const ButtonRegister = styled.button`
  width: 140px;
  height: 55px;
  border-radius: 100px;
  margin-top: 25px;

  background: ${({ theme }) => theme.colors.roxo};
  border: none;
  color: ${({ theme }) => theme.colors.branco};

  font-family: ${({ theme }) => theme.fonts.gideon};
  font-size: 30px;
`;
