import { useState } from 'react';
import { Container, Input, Label, TextArea } from './Styles';

export default function TextField({
  label,
  height,
  paddingTop,
  marginBottom,
  focus,
  customRef,
  type,
  textArea = false,
  disableLabel = false,
}) {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  const handleTextChange = text => {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    window.localStorage.setItem(label, text);
    window.dispatchEvent(new Event('storage'));
  };

  window.addEventListener('storage', () => {
    setValue(window.localStorage.getItem(label) || '');
  });

  return (
    <Container
      height={height}
      paddingTop={paddingTop}
      marginBottom={marginBottom}
      disableLabel={disableLabel}
    >
      {!textArea ? (
        <Input
          ref={customRef}
          autoFocus={focus}
          type={type}
          defaultValue={value}
          onChange={e => handleTextChange(e.target.value)}
        />
      ) : (
        <TextArea
          defaultValue={value}
          ref={customRef}
          onChange={e => handleTextChange(e.target.value)}
        />
      )}
      <Label className={isActive ? 'active' : ''} disableLabel={disableLabel}>
        {label}
      </Label>
    </Container>
  );
}
