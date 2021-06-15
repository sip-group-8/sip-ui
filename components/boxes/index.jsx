    import React from "react"
    import { Box, Badge, Image, StarIcon,Text, Array, Button } from "@chakra-ui/react"

    import {
        AlertDialog,
        AlertDialogBody,
        AlertDialogFooter,
        AlertDialogHeader,
        AlertDialogContent,
        AlertDialogOverlay,
    } from "@chakra-ui/react"

    import {
        Alert,
        AlertIcon,
        AlertTitle,
        AlertDescription,
    } from "@chakra-ui/react"

export default function BoxCard(props) {
    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()
    const { imageUrl, title, descr, price, codigo } = props;
    return (
        <div className="block mrg">
                <a href="#" onClick={() => setIsOpen(true)}
                    >
                <Box  maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image className="imgbox" src={imageUrl} alt="" />

                    <Box p="6">
                        <Box d="flex" alignItems="">
                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                NUEVO
                            </Badge>
                            <Box
                                color="gray.500"
                                fontWeight="semibold"
                                letterSpacing="wide"
                                fontSize="xs"
                                textTransform="uppercase"
                                ml="2"
                            >
                                {title}
                            </Box>
                        </Box>

                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                            >
                            {descr}
                        </Box>

                        <Box color="" fontSize="xl">
                            {price}
                            <Box as="span" color="gray.600" fontSize="sm">
                                / wk
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </a>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Cupón de canje
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        <div id="Idtext">
                            ¿Desea canjear esta promocion?
                        </div>
                        <div id="idalert2" className="hide">
                            <Alert status="success">
                            <AlertIcon />
                                 Cupon :   {codigo}3441245
                            </Alert> 
                        </div>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button colorScheme="blue" ml={3} onClick={() => {
                        var element = document.getElementById("idalert2");
                        element.classList.remove("hide");
                        var element = document.getElementById("Idtext");
                        element.classList.add("hide");
                    }}>
                        Canjear
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </div>
    );
}
