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
    Center
} from '@chakra-ui/react';
import ProductCard from '../../components/productCard';

export default function GamesPage() {
    return (
        <Flex align="center" justifyContent="center">
            <Stack direction="row" spacing="24" >
                <ProductCard title="Crucigrama" playedTimes="123" playUrl="/game/crucigrama" />
                <ProductCard title="Ta te ti" playedTimes="321" playUrl="/game/tateti" />
                <ProductCard title="Quiz Battle" playedTimes="123" playUrl="/game/quiz" />
            </Stack>
        </Flex>
    );
}