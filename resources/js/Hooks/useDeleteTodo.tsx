import { useForm } from '@inertiajs/inertia-react';
import { useToast } from '@chakra-ui/react';
import { DeleteTodo } from '../Types';

const useDeleteTodo = () => {
  const { delete: remove, ...rest } = useForm();

  const toast = useToast();

  const onSuccess = () => {
    toast({
      title: 'Success',
      description: 'You have successfully deleted a todo',
      status: 'success',
    });
  };

  const onError = (errors: Record<string, string>) => {
    toast({
      title: 'Error',
      description: errors.description,
      status: 'error',
    });
  };

  const deleteTodo = ({ id }: DeleteTodo) => {
    remove(`/todos/${id}`, {
      onSuccess,
      onError,
    });
  };

  return {
    deleteTodo,
    ...rest,
  };
};

export default useDeleteTodo;
