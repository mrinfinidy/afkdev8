import NextLink from 'next/link'
import { Container, Box, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

import { BioSection, BioYear } from '../components/bio'

const About = () => (
    <Layout title="">
        <Container>
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Credits
                </Heading>
                <BioSection>
                    <BioYear>
                        <NextLink href="https://www.craftz.dog/" passHref={true}>
                            <Link target="_blank">
                                &#64;craftzdog
                            </Link>
                        </NextLink>
                    </BioYear>
                    Thank you for your amazing video guide. I have used it as a
                    template to create this website.
                </BioSection>
                <BioSection>
                    <BioYear>Jesse Ragos</BioYear>
                    Thank you for your cute Totoro 3d model.
                </BioSection>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4}>
                    View Source <ExternalLinkIcon mx="2px"/>
                </Heading>
            </Section>
        </Container>
    </Layout>
)

export default About
