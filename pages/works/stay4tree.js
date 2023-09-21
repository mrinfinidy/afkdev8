import { Box, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import YouTube from 'react-youtube'

const Stay4Tree = () => {
    return (
        <Layout title="">
            <Container>
                <Title>
                    Stay4Tree 
                </Title>
                <P>
                    An Android app that was developed during a Covid quarantine hackathon. It encourages people to stay at home by rewarding their time at home with real trees beeing planted around the world. <br />
                    Unfortunately (but also fortunately) University resumed from its Covid-vacation right before I could finish this project and launch Stay4Tree.
                </P>
				<br />
				<YouTube
					videoId="Feny7UXY8NM"
				/>
				<br />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>YouTube</Meta>
                        <Link 
                            href="https://www.youtube.com/watch?v=Feny7UXY8NM" target="_blank">
                            Link to YouTube <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link 
                            href="https://devpost.com/software/stay4tree" target="_blank">
                            Here is a more detailed description of Stay4Tree <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android 5.0+</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/mrinfinidy/StayAtHome.git" target="_blank">
                            Source code <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Stay4Tree
