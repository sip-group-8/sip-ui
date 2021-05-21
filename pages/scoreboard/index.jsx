import React from 'react';
import {
    Flex,
    Stack,
    Table,
    Heading,
    TableCaption,
    Thead,
    Tr,
    Td,
    Th,
    Tbody
} from '@chakra-ui/react';

export default function GamesPage() {
    return (
        <Stack spacing="8" px="36" paddingTop="8">
            <Heading>Tabla de puntuaciones</Heading>
            <Stack px="4" mt="8">
                <Table variant="striped" colorScheme="primary">
                    <TableCaption>Tabla de puntuaciones </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Jugador</Th>
                            <Th>Equipo</Th>
                            <Th isNumeric>juegos totales</Th>
                            <Th isNumeric>Puntaje</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Array.from('asdasdasasd').map((item,key) => (
                            <Tr key={key}>
                                <Td>Player Name</Td>
                                <Td>Team Name</Td>
                                <Td isNumeric>12312</Td>
                                <Td isNumeric>1234.4</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Stack>
        </Stack>
    );
}