
import { Heading, VStack, StackDivider } from "@chakra-ui/react"
import Head from "next/head"
import Link from 'next/link'

import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { keyframes } from "@emotion/react";
import Carousel from "../components/carousel";

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
  Container
} from '@chakra-ui/react';
import NewsArticle from '../components/newsArticle'

export default function Test() {
  const [value, setValue] = React.useState(1);
  const [delay, setDelay] = React.useState(5000);
  const handleChange = e => {
    if (e.target.id === "+") {
      value === 4 ? setValue(0) : setValue(value + 1);
      arr.map(i => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    } else {
      console.log(value - 1);
      if (value - 1 === -1) {
        setValue(4);
      } else {
        setValue(value - 1);
      }
      arr.map(i => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    }
  };
  useInterval(() => {
    // Your custom logic here
    value === 4 ? setValue(1) : setValue(value + 1);
    arr.map(i => {
      return (i.show = "none");
    });
    arr[value].show = "block";
  }, delay);
  return (
    <div>
      <Head>
        <title>Test | Sip Grupo 8</title>
        <meta name="description" content="MVP app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack spacing="4">
        <Heading as="h3">
          Volver{' '}
          <Link href="/">
            <a>al inicio</a>
          </Link>
        </Heading>
      </VStack>
      <SimpleGrid columns={[2, null, 4]} spacing="40px">
        <Box><ProductSimple /></Box>
        <Box><ProductSimple /></Box>
        <Box><ProductSimple /></Box>
        <Box><ProductSimple /></Box>
        <Box><ProductSimple />
        </Box>
      </SimpleGrid>
      <StackEx></StackEx>
      <NewsArticle picture='https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=920&q=80' title="Cumpleaños" articleUrl="cumple-pablo"></NewsArticle>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
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
                Write once,
              </Text>
              <br />
              <Text as={'span'} color={'red.400'}>
                use everywhere!
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Snippy is a rich coding snippets app that lets you create your own
              code snippets, categorize them, and even sync them in the cloud so
              you can use them anywhere. All that is free!
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
                Get started
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
                How It Works
              </Button>
            </Stack>
          </Stack>
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
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                icon={<PlayIcon w={12} h={12} />}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              />
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>

      </Container>
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
        color={useColorModeValue('blue.50', 'blue.400')}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 150 150 C 100 150 100 300 200 250 C 200 350 300 300 300 300 C 350 350 375 300 400 300 C 450 400 500 300 500 300 C 500 300 550 400 600 300 C 650 300 750 300 700 150 Z"
          fill="currentColor"
        />
      </Icon>
      <div>
        {arr.map((item, key) => {
          return (
            <Box
              backgroundColor="#222"
              backgroundImage={`url(${item.url})`}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              width="100vw"
              height="80vh"
              animation={`${fadeIn} ease 3s`}
              display={item.show}
              key={key}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backdropFilter: "contrast(.8)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "inherit",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div style={{ color: "#fff" }}>hola</div>
                  <div style={{ color: "#fff" }}>hola</div>
                </div>
              </div>
            </Box>
          );
        })}
      </div>

      <div>
        <button onClick={handleChange} id="-">{`<<<`}</button>
        <button onClick={handleChange} id="+">
          {`>>>`}{" "}
        </button>
      </div>
      <Carousel></Carousel>
    </div>
  )
}

const fadeIn = keyframes`
0% { opacity:0; }
100% { opacity:1; }
`;



const arr = [
  { show: "block", url: "https://source.unsplash.com/WLUHO9A_xik/1440x960" },
  { show: "none", url: "https://source.unsplash.com/DNE9iZ1Kqzk/1440x960" },
  { show: "none", url: "https://source.unsplash.com/6ccJQ5qPFvY/1440x960" },
  { show: "none", url: "https://source.unsplash.com/qTLyiHW1nIc/1440x960" },
  { show: "none", url: "https://source.unsplash.com/fxX__3GRtsg/1440x960" }
];


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


function Feature({ title, desc, ...rest }) {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      {...rest}
    >
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

export function StackEx() {
  return (
    <HStack spacing={8}>
      <Feature
        title="Lorem Ipsum"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Feature
        title="Lorem Ipsum"
        desc="Sed pellentesque tincidunt ipsum, a vulputate lectus pellentesque non."
      />
    </HStack>
  )
}


const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});



const IMAGE =
  'https://images.unsplash.com/photo-1585338107529-13afc5f02586?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80';

export function ProductSimple() {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('green.100', 'green.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        {/*  */}
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Lorem
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {/* */}
            Crucigrama
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {/* */}
              <Link href="/">
                <a>Jugar</a>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}