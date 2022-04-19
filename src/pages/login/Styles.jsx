import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 350px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 24px;
  -webkit-box-shadow: 0px 0px 20px -3px ${({ theme }) => theme.colors.gold};
  box-shadow: 0px 0px 20px -3px ${({ theme }) => theme.colors.gold};
  padding: 2rem;
`;

export const Header = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Signup = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  text-align: center;
  margin-top: 1rem;
`;
