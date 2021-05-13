import { Grid, GridItem } from "@chakra-ui/react"
import Header from "/components/header"
import Footer from "/components/footer"
export default function Layout({ children }) {
    return <Grid minHeight="100vh" autoRows>
        <GridItem><Header /></GridItem>
        <GridItem justifyItems="stretch">{children}</GridItem>
        <GridItem alignSelf="end"><Footer /></GridItem>
    </Grid>
}