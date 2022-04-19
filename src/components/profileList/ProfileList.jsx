import { Profile } from '../index';
import { Container } from './Styles';

export default function ProfileList({ userList }) {
  return (
    <Container>
      {userList.map(user => (
        <Profile key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </Container>
  );
}
