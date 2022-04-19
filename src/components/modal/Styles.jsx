import styled from 'styled-components';

export const Background = styled.div`
  ${({ show }) =>
    show
      ? `
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200, 0.4);
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-out;
    z-index: 1;
  `
      : 'display: none;'}
`;

export const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ${({ centerTitle }) =>
    centerTitle
      ? 'justify-content: space-around; padding: 0 0.3rem'
      : 'justify-content: space-between;'}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  ${({ centerTitle }) => centerTitle && 'margin-top: 1.5rem'}
`;

export const Body = styled.div``;

export const Footer = styled.div`
  ${({ showButtons }) =>
    showButtons
      ? `display: flex;
        justify-content: center;
        padding-bottom: 1rem;

        button {
          &:first-child {
            margin-right: 2rem;
          }
        }`
      : ''}
`;
