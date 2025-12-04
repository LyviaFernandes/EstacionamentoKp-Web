import { SmallBtn } from "./styles";

export default function SmallButton({ children, ...props }) {
  return <SmallBtn {...props}>{children}</SmallBtn>;
}
