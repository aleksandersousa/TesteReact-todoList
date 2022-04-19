import { FilterList } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useRef, useState } from 'react';
import {
  NewTaskModal,
  VisualizeTaskModal,
  EditTaskModal,
  ConfirmDeleteTaskModal,
  Filter,
} from '../index';
import Todo from './todo/Todo';
import AddTask from './addTask/AddTask';
import { Container, Header, IconText, Title, Wrapper } from './Styles';
import { saveTodo } from '../../services/httpCalls';

export default function TodoList({ list }) {
  const [loggedUser, setLoggedUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [todos, setTodos] = useState(list || []);
  const [todo, setTodo] = useState({
    id: -1,
    title: '',
    desc: '',
    status: 'nova',
    isVisible: true,
    isComplete: false,
  });
  const [state, setState] = useState({
    showNewTaskModal: false,
    showVisualizeTaskModal: false,
    showEditTaskModal: false,
    showConfirmDeleteTaskModal: false,
  });

  // controla os text fields dos modals
  const titleRef = useRef();
  const descRef = useRef();

  const _setState = (name, value) => {
    setState(prevState => {
      prevState[name] = value;
      return { ...prevState };
    });
  };

  const addTodo = async t => {
    const newTodos = [t, ...todos];
    setTodos(newTodos);

    const user = JSON.parse(window.localStorage.getItem('user'));
    user.user.password = window.localStorage.getItem('password');
    user.user.list = todos;
    user.user.list.push(t);

    saveTodo(`/users/${user.user.id}`, user.user).catch(err => console.log(err));
  };

  const updateTodo = (t, newValue) => {
    const updatedArr = todos.map(item => (item.id === t.id ? newValue : item));
    setTodos(updatedArr);

    const user = JSON.parse(window.localStorage.getItem('user'));
    user.user.password = window.localStorage.getItem('password');
    user.user.list = updatedArr;

    saveTodo(`/users/${user.user.id}`, user.user).catch(err => console.log(err));
  };

  const removeTodo = t => {
    const removedArr = [...todos].filter(item => item.id !== t.id);
    setTodos(removedArr);

    const user = JSON.parse(window.localStorage.getItem('user'));
    user.user.password = window.localStorage.getItem('password');
    user.user.list = removedArr;

    saveTodo(`/users/${user.user.id}`, user.user).catch(err => console.log(err));
  };

  const completeTodo = id => {
    const updatedTodos = todos.map(t => {
      if (t.id === id) {
        t.isComplete = !t.isComplete;
        t.status = t.isComplete ? 'concluída' : 'nova';
      }
      return t;
    });
    setTodos(updatedTodos);

    const user = JSON.parse(window.localStorage.getItem('user'));
    user.user.password = window.localStorage.getItem('password');
    user.user.list = updatedTodos;

    saveTodo(`/users/${user.user.id}`, user.user).catch(err => console.log(err));
  };

  const changeTodoVisibility = id => {
    const updatedTodos = todos.map(t => {
      if (t.id === id) {
        t.isVisible = !t.isVisible;
      }
      return t;
    });
    setTodos(updatedTodos);

    const user = JSON.parse(window.localStorage.getItem('user'));
    user.user.password = window.localStorage.getItem('password');
    user.user.list = updatedTodos;

    saveTodo(`/users/${user.user.id}`, user.user).catch(err => console.log(err));
  };

  // listener para alterar os usuarios
  window.addEventListener('setUser', () => {
    setLoggedUser(JSON.parse(window.localStorage.getItem('user')));
    setCurrentUser(JSON.parse(window.localStorage.getItem('currentUser')));
  });

  const openFilter = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeFilter = () => {
    setAnchorEl(null);
  };

  const sortTodos = sortBy => {
    let tempTodos = [];

    const sortByStatus = status => {
      const sortedArr = todos;

      if (status === 'complete') {
        sortedArr.sort((a, b) => Number(b.isComplete) - Number(a.isComplete));
      } else if (status === 'new') {
        sortedArr.sort((a, b) => Number(a.isComplete) - Number(b.isComplete));
      }

      return sortedArr;
    };

    const sortByVisibility = visibility => {
      const sortedArr = todos;

      if (visibility === 'show') {
        sortedArr.sort((a, b) => Number(b.isVisible) - Number(a.isVisible));
      } else if (visibility === 'hide') {
        sortedArr.sort((a, b) => Number(a.isVisible) - Number(b.isVisible));
      }

      return sortedArr;
    };

    if (sortBy.value === 'new') {
      tempTodos = sortByStatus('new');
    } else if (sortBy.value === 'complete') {
      tempTodos = sortByStatus('complete');
    } else if (sortBy.value === 'show') {
      tempTodos = sortByVisibility('show');
    } else if (sortBy.value === 'hide') {
      tempTodos = sortByVisibility('hide');
    }

    setTodos(tempTodos);
  };

  return (
    <Container>
      <Header>
        <Title>Minha lista</Title>
        <IconButton onClick={e => openFilter(e)}>
          <FilterList aria-describedby="filter" />
          <IconText>Filtros</IconText>
        </IconButton>
      </Header>
      <Wrapper>
        {todos.map(t => (
          <Todo
            key={t.id}
            todo={t}
            user={loggedUser}
            currentUser={currentUser}
            onOpenVisualizeTaskModal={() => {
              setTodo(t);
              _setState('showVisualizeTaskModal', true);
            }}
            onOpenEditTaskModal={() => {
              window.localStorage.setItem('Título', t.title);
              window.localStorage.setItem('Descrição', t.desc);
              setTodo(t);
              _setState('showEditTaskModal', true);
            }}
            onConfirmDeleteTaskModal={() => {
              setTodo(t);
              _setState('showConfirmDeleteTaskModal', true);
            }}
            completeTodo={completeTodo}
            changeTodoVisibility={changeTodoVisibility}
          />
        ))}
      </Wrapper>
      {currentUser?.id === loggedUser?.user.id && (
        <AddTask
          titleRef={titleRef}
          descRef={descRef}
          onClick={() => _setState('showNewTaskModal', true)}
        />
      )}
      <NewTaskModal
        show={state.showNewTaskModal}
        todo={todo}
        titleRef={titleRef}
        descRef={descRef}
        onSetTodo={setTodo}
        onClose={() => _setState('showNewTaskModal', false)}
        onConfirm={addTodo}
      />
      <VisualizeTaskModal
        show={state.showVisualizeTaskModal}
        todo={todo}
        onClose={() => _setState('showVisualizeTaskModal', false)}
      />
      <EditTaskModal
        show={state.showEditTaskModal}
        todo={todo}
        titleRef={titleRef}
        descRef={descRef}
        onSetTodo={setTodo}
        onClose={() => _setState('showEditTaskModal', false)}
        onConfirm={updateTodo}
      />
      <ConfirmDeleteTaskModal
        show={state.showConfirmDeleteTaskModal}
        todo={todo}
        onClose={() => _setState('showConfirmDeleteTaskModal', false)}
        onConfirm={removeTodo}
      />
      <Filter
        show={state.showFilter}
        anchorEl={anchorEl}
        user={loggedUser}
        currentUser={currentUser}
        onConfirm={sortTodos}
        onClose={closeFilter}
      />
    </Container>
  );
}
