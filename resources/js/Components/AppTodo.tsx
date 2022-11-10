import React from 'react';
import { BoxProps, HStack, IconButton, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Todo } from '../Types';
import AppCard from './AppCard';

type AppTodoProps = BoxProps & {
  todo: Todo;
};

const AppTodo: React.FC<AppTodoProps> = ({ todo, ...props }) => {
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
          onClick={() => console.log('delete')}
        />
      </HStack>
    </AppCard>
  );
};

export default AppTodo;
