import { Button, Container, Flex } from '@chakra-ui/react';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react';
import AppCard from '../../Components/AppCard';
import AppTextField from '../../Components/AppTextField';

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    post('/auth/login', {
      data,
    });
  };

  return (
    <Container
      as={Flex}
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <AppCard
        as="form"
        onSubmit={handleSubmit}
        gap={3}
        display="flex"
        flexDir="column"
      >
        <AppTextField
          label="Email"
          name="email"
          value={data.email}
          hint={errors?.email}
          onChange={(e) => setData('email', e.target.value)}
        />
        <AppTextField
          label="Password"
          name="password"
          value={data.password}
          hint={errors?.password}
          onChange={(e) => setData('password', e.target.value)}
        />
        <Flex justifyContent="flex-end">
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={processing}
            size="sm"
          >
            Login
          </Button>
        </Flex>
      </AppCard>
    </Container>
  );
};

export default Login;
