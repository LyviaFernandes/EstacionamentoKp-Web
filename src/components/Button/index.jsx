import { Btn } from "./styles";

export default function Button({ children, ...props }) {
  return <Btn {...props}>{children}</Btn>;
}
