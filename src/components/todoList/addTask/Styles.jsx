import styled from 'styled-components';

export const Container = styled.div`
  button {
    padding: 0;

    .iconAdd {
      border-radius: 50%;
      transition: all 0.2s ease-in-out;
    }
  }

  &:hover {
    cursor: pointer;

    button {
      .iconAdd {
        background-color: ${({ theme }) => theme.colors.gold};
        color: ${({ theme }) => theme.colors.primaryLight};
      }

      span {
        color: ${({ theme }) => theme.colors.gold};
      }
    }
  }
`;

export const TextButton = styled.span`
  margin-left: 0.5rem;
  transition: all 0.2s ease-in-out;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
