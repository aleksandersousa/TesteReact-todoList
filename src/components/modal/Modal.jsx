import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Button } from '../index';
import { Background, Body, Container, Footer, Header, Title } from './Styles';

export default function Modal({
  title,
  width,
  height,
  onConfirm,
  onClose,
  cancelText,
  confirmText,
  children,
  show,
  centerTitle,
  showButtons = true,
}) {
  return (
    <Background show={show}>
      <Container width={width} height={height} centerTitle={centerTitle}>
        <Header>
          <IconButton onClick={onClose} style={{ position: 'fixed' }}>
            <Close />
          </IconButton>
        </Header>
        <Title centerTitle={centerTitle}>{title}</Title>
        <Body centerTitle={centerTitle}>{children}</Body>
        <Footer showButtons={showButtons}>
          {showButtons && (
            <>
              <Button cancel text={cancelText || 'Cancelar'} onClick={onClose} />
              <Button text={confirmText || 'Confirmar'} onClick={onConfirm} />
            </>
          )}
        </Footer>
      </Container>
    </Background>
  );
}
