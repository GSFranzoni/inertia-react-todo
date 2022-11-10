import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { UpdateCompletedTodo } from '../Types';

const useCompleteTodo = () => {
  const [processing, setProcessing] = useState(false);

  const toast = useToast();

  const onSuccess = () => {
    toast({
      title: 'Success',
      description: 'You have successfully updated your todo',
      status: 'success',
    });
  };

  const onError = (errors: Record<string, string>) => {
    toast({
      title: 'Error',
      description: errors.completed,
      status: 'error',
    });
  };

  const onFinish = () => {
    setProcessing(false);
  };

  const updateCompletedTodo = ({ id, completed }: UpdateCompletedTodo) => {
    setProcessing(true);
    Inertia.patch(
      `/todos/${id}`,
      {
        completed,
      },
      {
        onSuccess,
        onError,
        onFinish,
      }
    );
  };

  return {
    updateCompletedTodo,
    processing,
  };
};

export default useCompleteTodo;
