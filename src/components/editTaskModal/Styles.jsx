import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  > * {
    &:first-child {
      padding-bottom: 1.5rem;
    }
  }
`;
