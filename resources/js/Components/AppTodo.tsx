import React from 'react';
import {
  Badge,
  BoxProps,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  useModal,
  useTheme,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { BiLock, FaTrash, FcCancel, FcDeleteRow } from 'react-icons/all';
import { Todo, UpdateCompletedTodo } from '../Types';
import AppCard from './AppCard';
import AppConfirmationDialog from './AppConfirmationDialog';
import useDeleteTodo from '../Hooks/useDeleteTodo';
import useCompleteTodo from '../Hooks/useCompleteTodo';

type AppTodoProps = BoxProps & {
  todo: Todo;
};

const AppTodo: React.FC<AppTodoProps> = ({ todo, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deleteTodo, processing: deleting } = useDeleteTodo();
  const { updateCompletedTodo, processing: updating } = useCompleteTodo();
  return (
    <AppCard padding={4} borderRadius={5} {...props} boxShadow="base">
      <HStack justifyContent="space-between">
        <Text textDecoration={todo.completed ? 'line-through' : 'none'}>
          {todo.description}
          {todo.completed && (
            <Badge ml={2} colorScheme="green" rounded="md">
              <Text fontSize="xx-small">Completed</Text>
            </Badge>
          )}
        </Text>
        <Flex gap={1}>
          <IconButton
            aria-label={todo.completed ? 'Incomplete' : 'Complete'}
            size="xs"
            isLoading={updating}
            onClick={() =>
              updateCompletedTodo({ id: todo.id, completed: !todo.completed })
            }
            icon={
              todo.completed ? (
                <FcCancel color="red.400" />
              ) : (
                <CheckIcon color="green.400" />
              )
            }
          />
          <IconButton
            aria-label="Delete"
            size="xs"
            icon={<FaTrash color="gray" />}
            isLoading={deleting}
            onClick={() => onOpen()}
          />
        </Flex>
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
