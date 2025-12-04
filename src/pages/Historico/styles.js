import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.brancoAmarelado};

  display: flex;
  flex-direction: column;

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

/* CABEÇALHO DA PÁGINA */
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
  height: 150px;  /* levemente maior que o card ativo */

  background: ${({ theme }) => theme.colors.cinza};
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

/* TEXTOS */
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
