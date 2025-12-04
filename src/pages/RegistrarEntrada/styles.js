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


export const TitleTab = styled.div`
  width: 515px;
  height: 85px;
  margin-top: 101px;

  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 17px 50px;

  color: ${({ theme }) => theme.colors.roxo};
  font-family: ${({ theme }) => theme.fonts.gideon};
  font-size: 50px;
  text-align: center;
`;

export const FormBox = styled.div`
  width: 635px;
  background: ${({ theme }) => theme.colors.rosa};
  border-radius: 30px;

  margin-top: 21px;
  padding: 50px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  align-items: center;
`;

export const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.roxoMedio};
`;

export const InputField = styled.input`
  width: 535px;
  height: 70px;

  border-radius: 15px;
  border: none;
  outline: none;

  margin-top: 5px;
  padding: 0 20px;

  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 20px;
`;

export const ButtonSubmit = styled.button`
  width: 250px;
  height: 50px;

  margin-top: 25px;
  border-radius: 100px;

  background: ${({ theme }) => theme.colors.roxo};
  color: ${({ theme }) => theme.colors.branco};
  border: none;

  font-family: ${({ theme }) => theme.fonts.gideon};
  font-size: 30px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;
