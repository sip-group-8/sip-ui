import React from "react";
import {
  Stack,
  Container,
  Avatar,
  Flex,
  Text,
  ButtonGroup,
  Button,
  IconButton,
  Box,
  Spacer,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Table,
  Tfoot,
  Thead,
  Tr,
  Th,
  TableCaption,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useAppContext } from "/context/state";
export default function Profile() {
  const { user } = useAppContext();
  return (
    <Flex px="36" paddingTop="8" align="center" direction="column">
      <Tabs width="680px">
        <TabList>
          <Tab>Datos Personales</Tab>
          <Tab>Partidas jugadas</Tab>
          <Tab>Historial de canjes</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Container backgroundColor="primary.500" borderRadius="8" p="32px">
              <Flex>
                <Avatar
                  size="2xl"
                  src="https://images.unsplash.com/photo-1506935077180-46af676a2f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                ></Avatar>
                <Box flex="1" pl="32px">
                  <Stack spacing="3">
                    <Flex>
                      <Box>
                        <Text fontSize="xl" fontWeight="bold">
                          {user.nombre} {user.apellido}
                        </Text>
                      </Box>
                      <Spacer />
                      <Box>
                        <Button
                          size="sm"
                          leftIcon={<EditIcon />}
                          colorScheme="primary.500"
                          variant="outline"
                        >
                          Editar
                        </Button>
                      </Box>
                    </Flex>
                    <Text fontSize="l">{user.descripcion}</Text>
                    <Text fontSize="l">{user.mail}</Text>
                    <Text fontSize="l">Puntos: {user.puntos}</Text>
                  </Stack>
                </Box>
              </Flex>
            </Container>
          </TabPanel>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Juego</Th>
                  <Th isNumeric>Puntos</Th>
                </Tr>
              </Thead>
              <Tbody>
                {user &&
                  user.puntajes &&
                  user.puntajes.map((c) => {
                    return (
                      <Tr>
                        <Td>{c.juego}</Td>
                        <Td isNumeric>{c.puntos}</Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Producto</Th>
                  <Th isNumeric>Puntos</Th>
                </Tr>
              </Thead>
              <Tbody></Tbody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
