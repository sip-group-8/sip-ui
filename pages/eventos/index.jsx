import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Grid,
  Stack,
  Button,
  CircularProgress,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAppContext } from "/context/state";
import NewsCard from "../../components/newsCard";
export default function PreguntaDiaria() {
  return (
    <>
      <Heading size="xl">Eventos</Heading>
      <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" autoRows>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
      </Grid>
    </>
  );
}
