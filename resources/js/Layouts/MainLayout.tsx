import React, { PropsWithChildren } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import AppHeader from '../Components/AppHeader';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <VStack width="100%" height="100%">
      <AppHeader width="100%" />
      <Box as="main" width="100%" height="100%" overflowY="auto">
        {children}
      </Box>
    </VStack>
  );
};

export default MainLayout;
