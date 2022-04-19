import { useEffect } from 'react';
import { Modal, TextField } from '../index';
import { Container, Wrapper } from './Styles';

export default function EditTaskModal({
  show,
  todo,
  titleRef,
  descRef,
  onSetTodo,
  onConfirm,
  onClose,
}) {
  useEffect(() => {
    window.localStorage.setItem('Título', todo.title);
    window.localStorage.setItem('Descrição', todo.desc);
    window.dispatchEvent(new Event('storage'));
  }, [todo]);

  const handleSave = () => {
    const title = titleRef.current.value;
    const desc = descRef.current.value;

    if (title === '' || desc === '') {
      alert('Existem campos vazios!');
      return;
    }

    const updatedTodo = {
      ...todo,
      title,
      desc,
    };

    onConfirm(todo, updatedTodo);
    onSetTodo(updatedTodo);
    onClose();
  };

  return (
    <Container>
      <Modal
        show={show}
        onConfirm={handleSave}
        onClose={onClose}
        title="Editar tarefa"
        width="28rem"
        height="28rem"
      >
        <Wrapper>
          <TextField
            customRef={titleRef}
            label="Título"
            height="5rem"
            paddingTop="1rem"
            disableLabel
          />
          <TextField
            customRef={descRef}
            label="Descrição"
            height="7rem"
            paddingTop="1.5rem"
            textArea
            disableLabel
          />
        </Wrapper>
      </Modal>
    </Container>
  );
}
