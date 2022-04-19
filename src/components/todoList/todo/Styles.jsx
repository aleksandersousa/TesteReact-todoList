import styled from 'styled-components';

export const Container = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBorder};
  display: flex;
  align-items: center;
  padding: 0;
  position: relative;
  margin-bottom: 0.5rem;
  cursor: pointer;

  .checkIcon {
    margin-right: 0.5rem;
    transition: all 0.2s ease-in-out;
    border-radius: 50%;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryGreen};
      background: ${({ theme }) => theme.colors.secondaryGreen};
    }
  }

  .disabled {
    margin-right: 0.5rem;
    border-radius: 50%;
  }

  &:hover {
    .actions-active {
      display: flex;
      height: 1.5rem;
      margin-right: 0.25rem;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 0.5rem 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.1875rem;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  flex-grow: 1;
  line-height: 21px;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  color: ${({ theme }) => theme.colors.secondaryGrey};
  font-weight: 100;
  flex-basis: 100%;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Actions = styled.div`
  ${({ isBrowser }) =>
    !isBrowser
      ? `display: flex;
        height: 1.5rem;
        margin-right: 0.25rem;
        `
      : 'display: none;'}

  .activeIcon {
    &:hover {
      background: ${({ theme }) => theme.colors.secondaryGrey};
    }
  }
`;
