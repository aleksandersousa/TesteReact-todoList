import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Container, TextButton } from './Styles';

export default function AddTask({ onClick }) {
  const resetTexts = () => {
    window.localStorage.setItem('Título', '');
    window.localStorage.setItem('Descrição', '');
    window.dispatchEvent(new Event('storage'));
  };

  const handleClick = () => {
    resetTexts();
    onClick();
  };

  return (
    <Container onClick={handleClick}>
      <IconButton disableFocusRipple disableRipple>
        <AddOutlined className="iconAdd" />
        <TextButton>Adicionar tarefa</TextButton>
      </IconButton>
    </Container>
  );
}
