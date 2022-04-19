import { CircularProgress } from '@mui/material';
import { useFetch } from '../../hooks/useFetch';
import { Navbar, ProfileList } from '../../components';
import { Container, Header, Title } from './Styles';

export default function Profiles() {
  const { data, isFetching } = useFetch('/users');

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <Title>Perfis</Title>
        </Header>
        {isFetching ? <CircularProgress /> : <ProfileList userList={data} />}
      </Container>
    </>
  );
}
