import {
  CardBox,
  Plate,
  Info,
} from "./styles";
import SmallButton from "../SmallButton";

export default function CardAtivo({ placa, data, hora, onExit }) {
  return (
    <CardBox>
      <Plate>{placa}</Plate>
      <Info>Entrada: {data} - {hora}</Info>

      <SmallButton onClick={onExit}>
        Registrar saída
      </SmallButton>
    </CardBox>
  );
}
