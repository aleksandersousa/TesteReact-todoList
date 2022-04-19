import { Link } from 'react-router-dom';
import Burger from './burger/Burger';
import images from '../../constants/images';
import { Container, Logo } from './Styles';

export default function Navbar() {
  return (
    <Container>
      <Link to="/">
        <Logo src={images.logo} />
      </Link>
      <Burger />
    </Container>
  );
}
