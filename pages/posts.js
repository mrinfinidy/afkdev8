import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, PostGridItem } from '../components/grid-item'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import thumbDevAsLife from '../public/images/contents/devaslife.webp'
import rambalacNagoya from '../public/images/contents/rambalac_nagoya.webp'
import thumbErgoDash from '../public/images/posts/caseAssembled.jpg'

const Posts = () => (
    <Layout title="">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                        title=""
                        thumbnail={thumbDevAsLife}
                        href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
                    >
						My inspiration for this site <ExternalLinkIcon mx="2px" />
					</GridItem>
                    <GridItem
						title=""
                        thumbnail={rambalacNagoya}
                        href="https://www.youtube.com/watch?v=w0SJgbALym8"
                    >
						Nagoya (Rambalac) <ExternalLinkIcon mx="2px" />
					</GridItem>
					<PostGridItem 
						id="ergodash"
						title="ErgoDash"
						thumbnail={thumbErgoDash}
					/>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
