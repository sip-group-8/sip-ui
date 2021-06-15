import { Center, Text } from "@chakra-ui/react";

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Link
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiGift } from "react-icons/fi";

export default function NewsArticle({ picture, title, articleUrl, resumen }) {
    return (
        <Box
            bg={useColorModeValue("white", "gray.800")}
            maxW="600"
            maxH="500"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            roundedTop="lg"
        >
            <Link href={`/news/${articleUrl}`}>
                <Image src={picture} alt={`Picture of ${title}`} roundedTop="lg" minW="600" />
            </Link>
            <Box p="6">
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                    <Box
                        fontSize="2xl"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {title}
                    </Box>
                </Flex>

                <Flex justifyContent="space-between" alignContent="center">
                    <Box fontSize="1xl" color={useColorModeValue("gray.800", "white")}>
                        {`${resumen}`}
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
