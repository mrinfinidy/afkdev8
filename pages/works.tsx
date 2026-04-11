import { Heading, SimpleGrid, useColorMode } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Container4k from '../components/layouts/container'

import thumbSaeki from '../public/images/works/thumbnails/thumbSaeki.png'
import thumbSaekiLight from '../public/images/works/thumbnails/thumbSaekiLight.png'
import thumbStay4Tree from '../public/images/works/thumbnails/thumbStay4Tree.png'
import thumbYTQSC from '../public/images/works/thumbnails/thumbYTQSC.png'
import thumbYTQSF from '../public/images/works/thumbnails/thumbYTQSF.png'
import thumbAutoFocus from '../public/images/works/thumbnails/thumbAutoFocus.png'

const Works = () => {
	const { colorMode } = useColorMode()

  return (
    <Layout>
      <Container4k>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="sdx-app"
              title="SAEKI Web App"
              thumbnail={colorMode === 'light' ? thumbSaekiLight : thumbSaeki}
            >
              An online digital manufacturing service to order a 3D printed
              object. &#x28;demo&#x29;
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="stay4tree"
              title="Stay4Tree"
              thumbnail={thumbStay4Tree}
            >
              An Android app that was developed during a Covid-Hackathon.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="ytqsChrome"
              title="Video Quick Search Chrome"
              thumbnail={thumbYTQSC}
            >
              A Chrome extension that adds right-click YouTube search to the
              browser.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="ytqsFirefox"
              title="YouTube Quick Search Firefox"
              thumbnail={thumbYTQSF}
            >
              A Firefox add-on that adds right-click YouTube search to the
              browser.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="ytAutofocus"
              title="YouTube Autofocus"
              thumbnail={thumbAutoFocus}
            >
              A Firefox add-on that automatically focus the YouTube search bar.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container4k>
    </Layout>
  )
}

export default Works
