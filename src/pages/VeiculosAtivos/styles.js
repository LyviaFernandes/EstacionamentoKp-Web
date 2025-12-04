import styled from "styled-components";

/* CONTAINER GERAL */
export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.brancoAmarelado};

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
`;


/* BARRA SUPERIOR */
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

/* TÍTULO + BARRA DE BUSCA */
export const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 25px;
  padding: 0 25px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.roxo};
  font-family: ${({ theme }) => theme.fonts.gideon};
  font-size: 50px;
`;

export const SearchBar = styled.input`
  width: 500px;
  height: 45px;

  border-radius: 15px;
  border: none;
  padding: 0 20px;

  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 20px;
  outline: none;

  background: ${({ theme }) => theme.colors.cinza};
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  padding: 20px 80px;
  margin-top: 45px;
`;


/* CARD INDIVIDUAL */
export const Card = styled.div`
  width: 305px;
  height: 125px;

  background: ${({ theme }) => theme.colors.rosa};
  border-radius: 20px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/* PLACA */
export const Plate = styled.p`
  font-family: ${({ theme }) => theme.fonts.interMedium};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.roxo};
`;

/* INFO (DATA/HORA) */
export const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.roxo};
`;

/* BOTÃO REGISTRAR SAÍDA */
export const ExitButton = styled.button`
  width: 130px;
  height: 25px;

  align-self: flex-end;

  background: ${({ theme }) => theme.colors.roxo};
  color: ${({ theme }) => theme.colors.branco};
  
  border: none;
  border-radius: 100px;

  font-family: ${({ theme }) => theme.fonts.nunitoSemi};
  font-size: 15px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;
