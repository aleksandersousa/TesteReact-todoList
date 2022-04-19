import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: 12px;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryGrey};
  }
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Email = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
`;
