import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { Navbar, TodoList } from '../../components';
import { useFetch } from '../../hooks/useFetch';
import { Container } from './Styles';

export default function Home() {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const { data, isFetching } = useFetch(`/users/${user.user?.id}`);

  useEffect(() => {
    if (!isFetching) {
      window.localStorage.setItem('currentUser', JSON.stringify(data));
      window.dispatchEvent(new Event('setUser'));
    }
  }, [isFetching]);

  return (
    <>
      <Navbar />
      <Container>
        {isFetching ? <CircularProgress /> : <TodoList list={data.list} />}
      </Container>
    </>
  );
}
