import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="">
            <Container>
                <Title>
                    YouTube Quick Search Firefox <Badge>2021-</Badge>
                </Title>
                <P>
                    A Firefox add-on that lets you search highlighted text directly
                    on YouTube by right clicking it and selecting 'Search on YouTube'.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://addons.mozilla.org/en-US/firefox/addon/youtube-quick-search/">
                            Install from Firefox add-on store <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Firefox browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/mrinfinidy/YTSearchFirefox">
                            Source code <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

            </Container>
        </Layout>
    )
}

export default Work
