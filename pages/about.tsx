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
            <Link as={NextLink} href="https://www.instagram.com/marliscuts/" target="_blank" _focus={{ boxShadow: 'none' }}>
                &#64;marliscuts
            </Link>
          </BulletPoint>
          <br></br>
          Thank you Marlis for designing my beautiful logo ♥
        </BulletSection>
        <BulletSection>
          <BulletPoint>
            <Link as={NextLink} href="https://www.craftz.dog/" target="_blank" _focus={{ boxShadow: 'none' }}>
                &#64;craftzdog
            </Link>
          </BulletPoint>
          <br></br>
          Thank you for your amazing video guide. I have used it as a
          template to create this website.
        </BulletSection>
        <BulletSection>
          <BulletPoint>
            <Link as={NextLink} href="https://www.cgtrader.com/jkielr" target="_blank" _focus={{ boxShadow: 'none' }}>
                  Jesse Ragos
            </Link>
          </BulletPoint>
          <br></br>
          Thank you for your cute Totoro 3d model.
        </BulletSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" fontSize={20} mb={4}>
          View Source
        </Heading>
        <Link as={NextLink} href="https://github.com/mrinfinidy/afkdev8" target="_blank" _focus={{ boxShadow: 'none' }}>
            Source Code <ExternalLinkIcon mx="2px"/>
        </Link>
      </Section>
    </Container4k>
  </Layout>
)

export default About
