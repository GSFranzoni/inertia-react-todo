import React, { useEffect } from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Fade,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Slide,
  VStack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { AnimatePresence } from 'framer-motion';
import { Todo } from '../Types';
import AppTodo from '../Components/AppTodo';
import MainLayout from '../Layouts/MainLayout';
import useCreateTodo from '../Hooks/useCreateTodo';

type TodoListProps = {
  todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const { createTodo, setDescription, description, processing, wasSuccessful } =
    useCreateTodo();

  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [wasSuccessful]);

  return (
    <MainLayout>
      <Flex justifyContent="center" width="100%">
        <VStack spacing={2} width="500px" maxW="100%">
          {todos.map((todo) => (
            <AppTodo todo={todo} key={todo.id} width="100%" />
          ))}
          <InputGroup width="100%" size="lg">
            <Input
              autoFocus
              ref={inputRef}
              placeholder="Add new todo"
              disabled={processing}
              value={description}
              fontSize="md"
              onChange={(e) => setDescription(e.target.value)}
              onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Enter') {
                  createTodo();
                }
              }}
            />
            <InputRightElement>
              <IconButton
                isLoading={processing}
                rounded="md"
                size="sm"
                aria-label="Add"
                icon={<AddIcon />}
                type="submit"
                onClick={() => createTodo()}
              />
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Flex>
    </MainLayout>
  );
};

export default TodoList;
