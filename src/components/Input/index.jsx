import { Wrapper, Label, Field } from "./styles";

export default function Input({ label, ...props }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Field {...props} />
    </Wrapper>
  );
}
