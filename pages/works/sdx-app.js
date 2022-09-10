import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="">
      <Container>
        <Title>SAEKI Web App</Title>
        <P>
          An online digital manufacturing service to order a 3D printed object.
          SAEKI is a swiss startup and this web app is used as a demo at the
          moment.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://sdx-app-d6a5f.web.app/" target="_blank">
              Try it out here <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Browser</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
