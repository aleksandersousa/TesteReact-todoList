import styled from 'styled-components';

export const Ul = styled.ul`
  width: 18rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  z-index: 1;

  li {
    padding: 1rem 0;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.body};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: ${({ theme }) => theme.colors.primaryLight};
      padding-left: 1rem;
      &:hover {
        color: ${({ theme }) => theme.colors.header};
      }
    }
  }
`;
