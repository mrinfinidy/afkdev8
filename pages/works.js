import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import  Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbStayAtHome from '../public/images/works/thumbStayAtHome.png'
import thumbYTSC from '../public/images/works/thumbYTSC.png'
import thumbYTSF from '../public/images/works/thumbYTSF.png'
import thumbAutoFocus from '../public/images/works/thumbAutoFocus.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="stayAtHome" title="StayAtHome" thumbnail={thumbStayAtHome}>
                        An Android app that was developed during a Covid-Hackathon.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="ytsChrome" title="YouTubeSearch Chrome" thumbnail={thumbYTSC}>
                        A Chrome extension that adds right-click YouTube search to the browser.
                    </WorkGridItem>
                </Section>
                
                <Section delay={0.1}>
                    <WorkGridItem id="ytsFirefox" title="YouTubeSearch Firefox" thumbnail={thumbYTSF}>
                        A Firefox add-on that adds right-click YouTube search to the browser.
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="autofocusYT" title="YouTube Autofocus" thumbnail={thumbAutoFocus}>
                        A Firefox add-on that automatically focus the YouTube search bar.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works
