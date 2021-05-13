import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Center
} from '@chakra-ui/react';

export default function LoginForm() {
    return (
        <Flex align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="test@test.com" />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder="*******" />
                        </FormControl>
                        <Button colorScheme="primary" width="full" mt={4} type="submit">Sign In</Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}