import { Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Container4k from '../../components/layouts/container'

const Work = () => {
    return (
        <Layout title="">
            <Container4k>
                <Title>
                    Video Quick Search Chrome (for YouTube)&nbsp;<Badge>2020-</Badge>
                </Title>
                <P>
                    A Chrome extension that lets you search highlighted text directly
                    on YouTube by right clicking it and selecting &apos;Search on YouTube&apos;.
                </P>
                <WorkImage src="/images/works/ytsChrome_ss.jpg" alt="ytsChrome"/>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://chrome.google.com/webstore/detail/youtube-quick-search/algmmcbdjmplgjmligafamelebkahfhh?hl=en"
                            target="_blank"
							_focus={{ boxShadow: 'none' }}
                        >
                            Install from Chrome web store <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Chrome browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/mrinfinidy/YouTubeSearch" target="_blank" _focus={{ boxShadow: 'none' }}>
                            Source code <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container4k>
        </Layout>
    )
}

export default Work
