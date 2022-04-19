import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 20rem;
`;

export const FilterOptionWrapper = styled.div`
  padding: 0 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
