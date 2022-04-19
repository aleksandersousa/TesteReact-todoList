import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.header};
  -webkit-box-shadow: 0px 9px 10px -3px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 9px 10px -3px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.img`
  flex: 2;
  margin-top: 0.4rem;
  margin-right: 0.5rem;
  width: 55%;
  cursor: pointer;
`;
