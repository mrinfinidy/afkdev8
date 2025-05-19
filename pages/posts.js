import { Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Container4k from '../components/layouts/container'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbErgoDash from '../public/images/posts/ergodash/caseAssembled.jpg'
import thumbStableDiffusion from '../public/images/posts/stable-diffusion/highTechDystopia4.jpg'
import thumbTimetable from '../public/images/posts/timetable/timetable-berlin.jpg'
import thumbFakeNativeApp from '../public/images/posts/fake-native-app/firefox.png'
import thumbYoutubeChannel from '../public/images/posts/youtube-channel/youtube-channel-profile.jpg'
import thumbNixOs from '../public/images/posts/nixos/neofetch-nixos.png'

const Posts = () => (
    <Layout title="">
      <Container4k>
        <Heading as="h3" fontSize={20} mb={4}>
              Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1,2,2]} gap={6}>
            <PostGridItem
              id="youtube-channel"
              title="My YouTube Channel"
              thumbnail={thumbYoutubeChannel}
            />
            <PostGridItem
              id="nixos"
              title="NixOS"
              thumbnail={thumbNixOs}
            />
				    <PostGridItem 
					    id="ergodash"
					    title="ErgoDash"
					    thumbnail={thumbErgoDash}
				    />
				    <PostGridItem
				    	id="timetable"
				    	title="Timetable"
				    	thumbnail={thumbTimetable}
				    />
				    <PostGridItem 
				    	id="stable-diffusion"
				    	title="Stable Diffusion"
				    	thumbnail={thumbStableDiffusion}
				    />
            <PostGridItem
              id="fake-native-app"
              title='"Fake" Native App'
              thumbnail={thumbFakeNativeApp}
            />
          </SimpleGrid>
        </Section>
      </Container4k>
    </Layout>
)

export default Posts
