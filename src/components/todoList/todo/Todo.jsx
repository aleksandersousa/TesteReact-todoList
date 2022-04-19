import {
  Delete,
  ModeEditOutline,
  TaskAltOutlined,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { isBrowser } from 'react-device-detect';
import { useTheme } from 'styled-components';
import {
  Actions,
  Container,
  Content,
  ContentWrapper,
  Description,
  Title,
} from './Styles';

export default function Todo({
  todo,
  user,
  currentUser,
  onOpenVisualizeTaskModal,
  onOpenEditTaskModal,
  onConfirmDeleteTaskModal,
  completeTodo,
  changeTodoVisibility,
}) {
  const [isVisible, setVisibility] = useState(todo.isVisible);
  const theme = useTheme();

  const handleVisibility = () => {
    setVisibility(prev => !prev);
    changeTodoVisibility(todo.id);
  };

  return (
    (currentUser?.id === user?.user.id || todo.isVisible) && (
      <Container>
        {currentUser?.id === user?.user.id && (
          <Tooltip title={!todo.isComplete ? 'Concluir tarefa' : 'Retomar tarefa'}>
            <IconButton
              disableFocusRipple
              disableRipple
              style={{ padding: '0' }}
              onClick={() => completeTodo(todo.id)}
            >
              <TaskAltOutlined className={!todo.isComplete ? 'checkIcon' : 'disabled'} />
            </IconButton>
          </Tooltip>
        )}
        <Content onClick={onOpenVisualizeTaskModal}>
          <ContentWrapper>
            <Title>{todo.title}</Title>
            <Description>{todo.desc}</Description>
          </ContentWrapper>
        </Content>
        {currentUser?.id === user?.user.id && (
          <Actions className="actions-active" isBrowser={isBrowser}>
            {isVisible ? (
              <Tooltip title="Tornar tarefa privada">
                <IconButton
                  onClick={handleVisibility}
                  style={{ padding: '0.3rem', color: theme.colors.blue }}
                >
                  <Visibility />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Tornar tarefa pública">
                <IconButton
                  onClick={handleVisibility}
                  style={{ padding: '0.3rem', color: theme.colors.blue }}
                >
                  <VisibilityOff />
                </IconButton>
              </Tooltip>
            )}
            {!todo.isComplete && (
              <Tooltip title="Editar tarefa">
                <IconButton
                  style={{ padding: '0.3rem', color: theme.colors.gold }}
                  onClick={onOpenEditTaskModal}
                >
                  <ModeEditOutline />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Deletar tarefa">
              <IconButton
                style={{ padding: '0', color: theme.colors.delete }}
                onClick={onConfirmDeleteTaskModal}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Actions>
        )}
      </Container>
    )
  );
}
