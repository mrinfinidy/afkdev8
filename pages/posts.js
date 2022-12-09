import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, PostGridItem } from '../components/grid-item'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbDevAsLife from '../public/images/contents/devaslife.webp'
import rambalacNagoya from '../public/images/contents/rambalac_nagoya.webp'
import thumbErgoDash from '../public/images/posts/ergodash-1.jpg'

const Posts = () => (
    <Layout title="">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                        title="My Inspiration for this site"
                        thumbnail={thumbDevAsLife}
                        href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
                    />
                    <GridItem
                        title="Nagoya (Rambalac)"
                        thumbnail={rambalacNagoya}
                        href="https://www.youtube.com/watch?v=w0SJgbALym8"
                    />
					<PostGridItem 
						id="ergodash"
						title="ErgoDash (work in progress)"
						thumbnail={thumbErgoDash}
					/>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
