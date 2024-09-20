import { Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Container4k from '../../components/layouts/container'

const Work = () => {
    return (
        <Layout title="">
            <Container4k>
                <Title>
                    YouTube Autofocus <Badge>2021-</Badge>
                </Title>
                <P>
                    A Firefox extension that automatically focuses on the search bar
                    when YouTube homepage is loaded.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://addons.mozilla.org/en-US/firefox/addon/youtube-autofocus/"
                            target="_blank"
							_focus={{ boxShadow: 'none' }}
                        >
                            Install from Firefox add-on store <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Firefox browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/mrinfinidy/autofocusYT" target="_blank" _focus={{ boxShadow: 'none' }}>
                            Source code <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

            </Container4k>
        </Layout>
    )
}

export default Work
