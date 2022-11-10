import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  BoxProps,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { MdLogout } from 'react-icons/all';
import useLogout from '../Hooks/useLogout';

const AppHeader: React.FC<BoxProps> = ({ ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { logout, processing } = useLogout();

  return (
    <Box {...props} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={3}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <IconButton
              onClick={logout}
              isLoading={processing}
              aria-label="Logout"
              icon={<MdLogout />}
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AppHeader;
