import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelTotoro from '../voxel-totoro'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} maxw="4k">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>afkdev8 - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxw="container.xl" pt={14}>
                <NoSsr>
                    <VoxelTotoro />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main
