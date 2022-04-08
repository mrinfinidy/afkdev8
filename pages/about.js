import NextLink from 'next/link'
import { Container, Box, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

import { BulletSection, BulletPoint } from '../components/bullet'

const About = () => (
    <Layout title="">
        <Container>
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Credits
                </Heading>
                <BulletSection>
                    <BulletPoint>
                        <NextLink href="https://www.craftz.dog/" passHref={true}>
                            <Link target="_blank">
                                &#64;craftzdog
                            </Link>
                        </NextLink>
                    </BulletPoint>
                    Thank you for your amazing video guide. I have used it as a
                    template to create this website.
                </BulletSection>
                <BulletSection>
                    <BulletPoint>
                        <NextLink href="https://www.cgtrader.com/jkielr" passHref={true}>
                            <Link target="_blank">
                                Jesse Ragos
                            </Link>
                        </NextLink>
                    </BulletPoint>
                    Thank you for your cute Totoro 3d model.
                </BulletSection>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4}>
                    View Source
                </Heading>
                <Paragraph>
                    <NextLink href="https://github.com/mrinfinidy/afkdev8" passHref={true}>
                        <Link target="_blank">
                            Source Code <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </NextLink>
                </Paragraph>
            </Section>
        </Container>
    </Layout>
)

export default About