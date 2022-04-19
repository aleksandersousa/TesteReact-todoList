import { Container } from './Styles';

export default function Button({ text, type, disabled, cancel, onClick }) {
  return (
    <Container onClick={onClick} disabled={disabled} cancel={cancel} type={type}>
      {text}
    </Container>
  );
}
