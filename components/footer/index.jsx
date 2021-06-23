import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import Logo from "/components/logo"
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue( 'whiteAlpha.100', 'blackAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('whiteAlpha.100', 'blackAlpha.100'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box borderTopWidth="gray.700" borderTopWidth="1px" bgGradient="linear(to-b, #ff4431, #f5231e)">
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text color="white">© 2021 Sip Grupo 8.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton  label={'Twitter'} href={'#'}>
              <FaTwitter color="white" />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube color="white" />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram color="white" />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }