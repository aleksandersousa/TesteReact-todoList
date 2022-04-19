import { Link } from 'react-router-dom';
import { Ul } from './Styles';

export default function Sidebar({ open }) {
  const handleLogout = () => {
    window.localStorage.removeItem('password');
    window.localStorage.removeItem('Título');
    window.localStorage.removeItem('Descrição');
    window.localStorage.removeItem('user');
    window.location.reload();
  };

  return (
    <Ul open={open}>
      <Link to="/">
        <li>Minha Lista &#128203;</li>
      </Link>
      <Link to="/profiles">
        <li>Perfis &#128129;</li>
      </Link>
      <li onClick={handleLogout}>Logout &#127939;</li>
    </Ul>
  );
}
