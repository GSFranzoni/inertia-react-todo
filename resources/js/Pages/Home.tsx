import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Container,
  Flex,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react';
import AppCard from '../Components/AppCard';
import AppTextField from '../Components/AppTextField';
import MainLayout from '../Layouts/MainLayout';

type HomeProps = {
  message: string;
};

const Home: React.FC<HomeProps> = ({ message }) => {
  const {
    post,
    wasSuccessful,
    errors,
    processing,
    data: { name },
    setData,
  } = useForm({
    name: '',
  });

  const handleClick = () => {
    post('fake', {
      data: {
        name,
      },
    });
  };

  const toast = useToast();

  useEffect(() => {
    if (wasSuccessful) {
      toast({
        title: 'Success',
        description: 'You have successfully submitted the form',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [toast, wasSuccessful]);

  return (
    <MainLayout>
      <Flex alignItems="center" justifyContent="center">
        <AppCard>
          <Flex flexDir="column" gap={4} width={400}>
            <Text fontSize="3xl">{message}</Text>
            <AppTextField
              label="Name"
              placeholder="Enter your name"
              value={name}
              hint={errors.name}
              onChange={(event) => setData('name', event.target.value)}
            />
            <Flex justifyContent="flex-end">
              <Button onClick={handleClick} isLoading={processing}>
                Click me
              </Button>
            </Flex>
            {wasSuccessful && (
              <Alert status="success">
                <AlertTitle mr={2}>Success!</AlertTitle>
                <AlertDescription>
                  Form submitted successfully.
                </AlertDescription>
              </Alert>
            )}
          </Flex>
        </AppCard>
      </Flex>
    </MainLayout>
  );
};

export default Home;
