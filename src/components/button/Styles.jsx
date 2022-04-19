import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  background: ${({ cancel, theme }) =>
    cancel ? theme.colors.header : theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
