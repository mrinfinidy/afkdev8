import NextLink from 'next/link'
import { Heading, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Container4k from '../components/layouts/container'

import { BulletSection, BulletPoint } from '../components/bullet'

const About = () => (
    <Layout title="">
        <Container4k>
            <Section delay={0.1}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Credits
                </Heading>
                <BulletSection>
                    <BulletPoint>
                        <NextLink href="https://www.craftz.dog/" passHref={true}>
                            <Link target="_blank" _focus={{ boxShadow: 'none' }}>
                                &#64;craftzdog
                            </Link>
                        </NextLink>
                    </BulletPoint>
                    <br></br>
                    Thank you for your amazing video guide. I have used it as a
                    template to create this website.
                </BulletSection>
                <BulletSection>
                    <BulletPoint>
                        <NextLink href="https://www.cgtrader.com/jkielr" passHref={true}>
                            <Link target="_blank" _focus={{ boxShadow: 'none' }}>
                                Jesse Ragos
                            </Link>
                        </NextLink>
                    </BulletPoint>
                    <br></br>
                    Thank you for your cute Totoro 3d model.
                </BulletSection>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={4}>
                    View Source
                </Heading>
                <NextLink href="https://github.com/mrinfinidy/afkdev8" passHref={true}>
                    <Link target="_blank" _focus={{ boxShadow: 'none' }}>
                        Source Code <ExternalLinkIcon mx="2px"/>
                    </Link>
                </NextLink>
            </Section>
        </Container4k>
    </Layout>
)

export default About
