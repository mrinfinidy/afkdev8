import { Link, Heading, List, ListItem, Box } from '@chakra-ui/react'
import { Title } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Container4k from '../../components/layouts/container'

const YoutubeChannel = () => {
	return (
		<Layout title="">
			<Container4k>
				<Title>My YouTube Channel</Title>
				<P>
					I post relaxing coding videos on&nbsp;
          <Link href="https://www.youtube.com/channel/UCr2rewTU9FWA17Tft891-kw" target="_blank" _focus={{ boxShadow: 'none' }} >my YouTube channel</Link>
					.
          <br />
          You can just watch and enjoy or follow along and use it as a guide.
          <br />
          If there is enough interest I&apos;d also like to post a video about my desktop setup
          or &quot;desktop rice&quot; at some point.
        </P>
        <br />
        <Heading as="h3" fontSize={20}>
          Collection of my videos
        </Heading>
        <br />
        <List>
          <ListItem>
            <Link href="https://www.youtube.com/watch?v=LVJjFvGkAzs" target="_blank">
                Terminal Timetable: Public transport timetable in Terminal using Python
            </Link>
            <Box position="relative" width="100%" height={{ base: "200px", md: "400px", lg: "700px" }} mt={2} mb={4}>
              <Box
                as="iframe"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LVJjFvGkAzs"
                title="Terminal Timetable: Public transport timetable in Terminal using Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                position="absolute"
                top="0"
                left="0"
              />
            </Box>
          </ListItem>
        </List>
			</Container4k>
		</Layout>
	)
}

export default YoutubeChannel
