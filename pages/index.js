import NextLink from 'next/link'
import {
    Button,
    Container,
    Box,
    Heading,
    Image,
    Link,
    List,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BulletSection, BulletPoint } from '../components/bullet'
import { IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hello I&apos;m afkdev8!
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            afkdev8
                        </Heading>
                        <p>Student in KA</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/profile.jpg"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                       	At the moment you can check out my hobby projects on the &quot;Works&quot; page.
			Or just click on &quot;My portfolio&quot; below to go there.
			They are mainly browser add-ons but there is also an Android app that was created
			during a hackathon.
			<br />
			Maybe I can post something about my work in the future. It revolves around three.js and CAD,
			more about it coming soon.
			<br />
                        LINKS: {' '}
                        <NextLink href="/works/stayAtHome">
                            <Link>
                                StayAtHome
                            </Link>
                        </NextLink>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BulletSection>
                        <BulletPoint>19xx</BulletPoint>
                        Born in ?, Europe.
                    </BulletSection>
                    <BulletSection>
                        <BulletPoint>2022</BulletPoint>
                        Created this website.
                    </BulletSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        ???
                    </Heading>
                    <Paragraph>
                        Ghibli,{' '}
                        <Link href="https://www.youtube.com/watch?v=TKy0Lyl4g-s" target="_blank">
                            Music
                        </Link>
                        , 1984, ...
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the Web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/mrinfinidy/" target="_blank">
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<IoLogoGithub />}
                                >
                                    afkdev8 (mr.infinidy)
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <Box align="center" my={4}>
                        <NextLink href="/posts" scroll={false}>
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Posts
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
