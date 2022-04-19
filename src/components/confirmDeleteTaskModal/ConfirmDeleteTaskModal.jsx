import React from 'react';
import { Modal } from '../index';
import { Container } from './Styles';

export default function ConfirmDeleteTaskModal({ show, todo, onConfirm, onClose }) {
  return (
    <Container>
      <Modal
        show={show}
        onConfirm={() => {
          onConfirm(todo);
          onClose();
        }}
        onClose={onClose}
        title="Você tem certeza de que deseja excluir a tarefa?"
        width="28rem"
        height="15rem"
        centerTitle
      />
    </Container>
  );
}
