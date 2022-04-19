import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
  font-weight: 400;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.secondaryGrey};
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBorder};
  flex-basis: 100%;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
`;
