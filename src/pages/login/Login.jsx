import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button } from '../../components';
import images from '../../constants/images';
import { Container, Form, Header, Image, Signup, Wrapper } from './Styles';
import { login } from '../../services/httpCalls';

export default function Login() {
  const textFieldHeight = '3rem';
  const labelFontSize = 13;

  const emailRef = useRef();
  const passwordRef = useRef();

  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    login('/login', {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .then(res => {
        window.localStorage.setItem('user', JSON.stringify(res.data));
        window.localStorage.setItem('password', passwordRef.current.value);
        window.dispatchEvent(new Event('storageUser'));
      })
      .catch(err => alert(`Usuário não existe!\n${err}`));
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Image src={images.login} />
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            fullWidth
            variant="filled"
            type="email"
            autoComplete="email"
            inputRef={emailRef}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
            {...register('email', {
              required: 'Obrigatório',
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Email inválido',
              },
            })}
            style={{ marginBottom: '1rem' }}
            InputLabelProps={{ style: { fontSize: labelFontSize } }}
            inputProps={{
              style: {
                height: textFieldHeight,
                padding: '0 13px',
              },
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Senha"
            inputRef={passwordRef}
            type={showPassword ? 'text' : 'password'}
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : null}
            {...register('password', {
              required: 'Obrigatório',
              min: {
                value: 6,
                message: 'Digite no mínimo 6 caracteres!',
              },
            })}
            style={{ marginBottom: '3rem', height: '2rem' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { fontSize: labelFontSize } }}
            inputProps={{
              style: {
                height: textFieldHeight,
                padding: '0 13px',
              },
            }}
          />
          <Button text="Entrar" type="submit" onClick={handleSubmit(onSubmit)} />
          <Signup>
            Ainda não tem uma conta?{' '}
            <Link
              to="/register"
              style={{ textDecoration: 'underline', color: theme.colors.header }}
            >
              Registre-se
            </Link>
          </Signup>
        </Form>
      </Wrapper>
    </Container>
  );
}
