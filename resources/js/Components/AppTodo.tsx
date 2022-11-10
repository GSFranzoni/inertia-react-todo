import React from 'react';
import {
  BoxProps,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  useModal,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Todo } from '../Types';
import AppCard from './AppCard';
import AppConfirmationDialog from './AppConfirmationDialog';
import useDeleteTodo from '../Hooks/useDeleteTodo';

type AppTodoProps = BoxProps & {
  todo: Todo;
};

const AppTodo: React.FC<AppTodoProps> = ({ todo, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteTodo, processing } = useDeleteTodo();
  return (
    <AppCard borderRadius={10} {...props}>
      <HStack justifyContent="space-between">
        <Text textDecoration={todo.completed ? 'line-through' : 'none'}>
          {todo.description}
        </Text>
        <IconButton
          aria-label="Delete"
          size="xs"
          icon={<CloseIcon />}
          isLoading={processing}
          onClick={() => onOpen()}
        />
      </HStack>
      <AppConfirmationDialog
        title="Confirm"
        message="Are you sure you want to delete this todo?"
        onConfirm={() => deleteTodo({ id: todo.id })}
        isOpen={isOpen}
        onClose={onClose}
      />
    </AppCard>
  );
};

export default AppTodo;
