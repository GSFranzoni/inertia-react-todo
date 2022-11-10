import React from 'react';
import { Link, LinkProps, useColorModeValue } from '@chakra-ui/react';

const AppNavLink: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link
    {...props}
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {children}
  </Link>
);

export default AppNavLink;
