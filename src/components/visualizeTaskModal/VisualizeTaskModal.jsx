import { Modal } from '../index';
import { Container, Description, TextWrapper, Title, Wrapper } from './Styles';

export default function VisualizeTaskModal({ show, todo, onClose, customRef }) {
  function Text({ title, desc }) {
    return (
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </TextWrapper>
    );
  }

  return (
    <Container>
      <Modal
        customRef={customRef}
        show={show}
        title="Visualizar tarefa"
        onClose={onClose}
        width="28rem"
        height="26rem"
        showButtons={false}
      >
        <Wrapper>
          <Text title="Título" desc={todo.title} />
          <Text title="Descrição" desc={todo.desc} />
          <Text title="Status" desc={todo.status} />
          <Text title="Visibilidade" desc={todo.isVisible ? 'pública' : 'privada'} />
        </Wrapper>
      </Modal>
    </Container>
  );
}
