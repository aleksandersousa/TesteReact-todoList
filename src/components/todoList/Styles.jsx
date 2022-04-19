import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.25rem 3.4375rem 0 3.4375rem;
  margin: 0 auto;
  max-width: 50rem;
`;

export const Wrapper = styled.ul``;

export const Header = styled.div`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  padding-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
`;

export const IconText = styled.span`
  margin-left: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
