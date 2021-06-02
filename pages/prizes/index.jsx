import React from 'react';
import {
    Flex,
    Stack,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    Link
} from '@chakra-ui/react';
import PrizeItem from '../../components/prizeItem';
import PrizeHero from '../../components/prizeHero'

const IMAGE = "https://images.unsplash.com/photo-1565692936545-c23bd329340a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
const REMERA = "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
const HAMBURGESA = "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
export default function PrizesPage() {
    return (
        <Box>
            <PrizeHero />
            <Flex align="center" justifyContent="center" pb="12">

                <Stack direction="row" spacing="24" >
                    <PrizeItem title="Café Starbucks" price="300" picture={IMAGE} exchangeUrl="/" />
                    <PrizeItem title="Remera blanca" price="300" picture={REMERA} exchangeUrl="/" />
                    <PrizeItem title="Hamburgesa con papas" price="300" picture={HAMBURGESA} exchangeUrl="/" />
                </Stack>

            </Flex>
      
                <Flex align="center" justifyContent="center" pb="12">

                    <Stack direction="row" spacing="24" >
                        <PrizeItem title="Café Starbucks" price="300" picture={IMAGE} exchangeUrl="/" />
                        <PrizeItem title="Remera blanca" price="300" picture={REMERA} exchangeUrl="/" />
                        <PrizeItem title="Hamburgesa con papas" price="300" picture={HAMBURGESA} exchangeUrl="/" />
                        
                    </Stack>

                </Flex>
       
        </Box>

    );
}