import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  Stack,
  Button,
  CircularProgress,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAppContext } from "/context/state";

export default function PreguntaDiaria() {
  const toast = useToast();
  const router = useRouter();
  const { user } = useAppContext();
  console.log(user);
  const [respondio, setRespondio] = useState(false);
  const responderPregunta = async (id) => {
    setRespondio(true);
    const response = await fetch(`http://localhost:8080/usuario/sumarpuntos`, {
      method: "POST",
      body: JSON.stringify({
        id: user.id,
        idjuego: 2,
        puntos: 50,
      }),
      headers: {
        "content-type": "application/json",
      },
      mode: "no-cors",
    });
    if (response.status === 200) {
      toast({
        title: "Respuesta enviada correctamente.",
        description:
          "Gracias por colaborar a mejorar la cultura de la empresa.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      router.push("/");
    } else {
      setRespondio(false);
      toast({
        title: "Error al enviar la peticion, intenta nuevamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };
  if (respondio) {
    return (
      <Flex align="center" justifyContent="center" paddingTop="48px">
        <CircularProgress isIndeterminate size="120px" />
      </Flex>
    );
  }
  return (
    <Flex align="center" justifyContent="center" paddingTop="48px">
      <Stack>
        <Heading size="xl">PREGUNTA PA JODA BROO</Heading>
        <Stack>
          {[1, 2, 3, 4].map((pregunta) => (
            <Button onClick={responderPregunta}>TEST {pregunta}</Button>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}
