import { Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Container4k from '../components/layouts/container'
import Section from '../components/section'
import { GridItem, PostGridItem } from '../components/grid-item'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbDevAsLife from '../public/images/contents/devaslife.webp'
import thumbErgoDash from '../public/images/posts/caseAssembled.jpg'
import thumbStableDiffusion from '../public/images/posts/stable-diffusion/highTechDystopia4.jpg'
import thumbTimetable from '../public/images/posts/timetable/timetable-berlin.jpg'
import thumbFakeNativeApp from '../public/images/posts/fake-native-app/firefox.png'

const Posts = () => (
    <Layout title="">
        <Container4k>
            <Heading as="h3" fontSize={20} mb={4}>
                Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
					<PostGridItem 
						id="ergodash"
						title="ErgoDash"
						thumbnail={thumbErgoDash}
					/>
					<PostGridItem 
						id="stable-diffusion"
						title="Stable Diffusion"
						thumbnail={thumbStableDiffusion}
					/>
					<PostGridItem
						id="timetable"
						title="Timetable"
						thumbnail={thumbTimetable}
					/>
          <PostGridItem
            id="fake-native-app"
            title='"Fake" Native App'
            thumbnail={thumbFakeNativeApp}
          />
          <GridItem
              title=""
              thumbnail={thumbDevAsLife}
              href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
          >
						My Inspiration for this Site <ExternalLinkIcon mx="2px" />
					</GridItem>
                </SimpleGrid>
            </Section>
        </Container4k>
    </Layout>
)

export default Posts
