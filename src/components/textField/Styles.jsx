import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: ${({ height }) => height};
  margin-bottom: ${({ marginBottom }) => marginBottom || ''};
  padding: 0;

  ${({ disableLabel }) =>
    !disableLabel
      ? `.active {
          transform: translate(0, 5px) scale(0.75);
        }

        &:focus-within {
          label {
            transform: translate(0, 5px) scale(0.75);
          }
        }`
      : ''}

  input,
  textArea {
    height: ${({ height }) => height};
    transition: all 0.5s ease-in-out;
    border: 1px solid transparent;
    padding-left: 0.63rem;
    padding-top: ${({ paddingTop }) => paddingTop || ''};
    background: ${({ theme }) => theme.colors.body};
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSizes.small};

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.border};
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.boxShadow};
    }
  }
`;

export const Input = styled.input`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TextArea = styled.textarea`
  resize: none;
`;

export const Label = styled.label`
  position: absolute;
  padding-left: 1rem;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.secondaryGrey};
  opacity: 0.8;
  pointer-events: none;
  transform: translate(0, 11px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
  ${({ disableLabel }) =>
    disableLabel ? `transform: translate(0, 5px) scale(0.75);` : ''}
`;
