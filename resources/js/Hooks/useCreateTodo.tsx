import { useForm } from '@inertiajs/inertia-react';
import { useToast } from '@chakra-ui/react';

const useCreateTodo = () => {
  const { post, data, setData, ...rest } = useForm();

  const toast = useToast();

  const onSuccess = () => {
    toast({
      title: 'Success',
      description: 'You have successfully created a todo',
      status: 'success',
    });
  };

  const onError = () => {
    toast({
      title: 'Error',
      description: 'There was an error creating your todo',
      status: 'error',
    });
  };

  const onFinish = () => {
    setData('description', '');
  };

  const createTodo = () => {
    post('/todos', {
      data: { ...data },
      onSuccess,
      onError,
      onFinish,
    });
  };

  const setDescription = (description: string) => {
    setData('description', description);
  };

  return {
    createTodo,
    description: data.description,
    setDescription,
    ...rest,
  };
};

export default useCreateTodo;
