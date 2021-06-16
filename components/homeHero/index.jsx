
import { Heading, VStack, StackDivider } from "@chakra-ui/react"
import Head from "next/head"
import Link from 'next/link'
import { useDisclosure } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react"

import {
    SimpleGrid,
    Box,
    HStack,
    Text,
    Center,
    useColorModeValue,
    Stack,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    Image,
    Button,
    Flex,
    Container,
    Textarea,
    Alert,
    AlertIcon
} from '@chakra-ui/react';

export default function HomeHero() {
    return (
        <Container maxW={'10xl'}>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 100 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>

                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Icon
                        width={'100%'}
                        viewBox="0 0 578 440"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        w={'150%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue('red.50', 'red.400')}>
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                            fill="currentColor"
                        />
                    </Icon>
                    <Box
                        position={'relative'}
                        height={'400px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'800px'}
                        overflow={'hidden'}>
                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                'https://www.lancetalent.com/blog/wp-content/uploads/SuperMix_04-1.png'
                            }
                        />
                    </Box>
                </Flex>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.400',
                                zIndex: -1,
                            }}>
                            Recursos
                        </Text>
                        <br />
                        <Text as={'span'} color={'red.400'}>
                            Humanos
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        Tenes alguna duda, alguna inquietud, alguna inquietud. ¡Contactanos!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis ut quis, dolores eligendi recusandae facilis debitis quod eum doloremque, sunt labore minus assumenda officiis adipisci aspernatur laudantium numquam non.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit enim repudiandae tenetur sequi eos assumenda, adipisci in sapiente corporis cum facilis minima natus laborum numquam? Temporibus ut magni ipsam consequatur.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            colorScheme={'red'}
                            bg={'red.400'}
                            _hover={{ bg: 'red.500' }}>
                            Enviar Mensaje
                        </Button>
                        <CustomModal
                            showModalButtonText="Enviar Mensaje"
                            modalHeader="¿En que podemos ayudarlo?"
                            modalBody="Escriba el cuerpo del mensaje"
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}

const CustomModal = ({ showModalButtonText, modalHeader, modalBody }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'red.400'}
                _hover={{ bg: 'red.500' }} onClick={onOpen}>
                {showModalButtonText}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <Textarea placeholder="Ingrese el el mensaje.." />

                            <div id="idalert" className="hide">
                                <Alert status="success">
                                    <AlertIcon />
                                    ¡Mensaje enviado
                                </Alert>
                            </div>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={() => {
                                var element = document.getElementById("idalert");
                                element.classList.remove("hide");
                            }}
                        >
                            Enviar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
