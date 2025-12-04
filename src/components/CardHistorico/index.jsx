import {
  CardBox,
  Plate,
  Info,
  Price
} from "./styles";

export default function CardHistorico({
  placa,
  entradaData,
  entradaHora,
  saidaData,
  saidaHora,
  valor
}) {
  return (
    <CardBox>
      <Plate>{placa}</Plate>

      <Info>Entrada: {entradaData} - {entradaHora}</Info>
      <Info>Saída: {saidaData} - {saidaHora}</Info>

      <Price>R$ {valor}</Price>
    </CardBox>
  );
}
