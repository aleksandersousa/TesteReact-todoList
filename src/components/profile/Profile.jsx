import { Link } from 'react-router-dom';
import { Container, Email, Name } from './Styles';

export default function Profile({ id, name, email }) {
  return (
    <Link to={`/profile/${id}`}>
      <Container>
        <Name>{name}</Name>
        <Email>{email}</Email>
      </Container>
    </Link>
  );
}
