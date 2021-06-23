import { Grid, GridItem } from "@chakra-ui/react"
import { Icon, useColorModeValue } from "@chakra-ui/react"
import Header from "/components/header"
import Footer from "/components/footer"
export default function Layout({ children }) {
    return <Grid minHeight="100vh" templateRows="fit-content(100%) 1fr fit-content(100%)">
        <GridItem  bgGradient="linear(to-b, #ff5d32, #ff6d26)" >
            {/*
            <Icon
                width={'100%'}
                height={"120px"}
                viewBox="0 0 1000 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                position={'absolute'}
                verticalAlign="center"
                zIndex={-1}
                bgColor="red"
                color={useColorModeValue('blue.300', 'blue.400')}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M145 166.16C179.74 182.38 204.37 284.06 355 256.11C452 238.11 605 269.11 760 269.11C849.58 269.11 1002 251.11 1079 249.11C1161.07 246.98 1227.63 256.48 1267 266.11C1329 281.27 1515.5 281.05 1577.5 256.16C1639.5 231.27 1666 130 1666 130C1666 129.16 1666 0 1666 0C1666 0 0 0 0 0C0 0 10.5 55.5 20.5 58.16C30.5 60.83 125 156.83 145 166.16Z"
                    fill="currentColor"
                />
            </Icon>
            */
            }

            <Header />
        </GridItem>
        <GridItem justifyItems="stretch" p="4">{children}</GridItem>
        <GridItem alignSelf="end"><Footer /></GridItem>
    </Grid>
}