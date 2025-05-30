import { Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import { GridItem } from '../../components/grid-item'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Container4k from '../../components/layouts/container'

import uploadModel from '../../public/images/works/saeki/uploadModel.png'
import uploadModelSelected from '../../public/images/works/saeki/uploadModelSelected.png'
import saekiSideMenu from '../../public/images/works/saeki/saekiSideMenu.png'
import prepareStep1 from '../../public/images/works/saeki/prepareStep1.png'
import prepareStep2 from '../../public/images/works/saeki/prepareStep2.png'
import quotes from '../../public/images/works/saeki/quotes.png'

const Work = () => {
	return (
    	<Layout title="">
      		<Container4k>
        		<Title>SAEKI Web App</Title>
        		<P>
          			An online digital manufacturing service to order a 3D printed object.
          			SAEKI is a swiss startup and this web app is used as a demo at the
          			moment.
        		</P>
				<SimpleGrid columns={[1,1,2]} gap={6} my={4}>
					<GridItem
						title="Upload Page"	
						thumbnail={uploadModel}
						href="/images/works/saeki/uploadModel.png"
					>
					</GridItem>
					<GridItem
						title="Side Menu"
						thumbnail={saekiSideMenu}
						href="/images/works/saeki/saekiSideMenu.png"
					>
					</GridItem>
					<GridItem
						title="Model Selected"
						thumbnail={uploadModelSelected}
						href="/images/works/saeki/uploadModelSelected.png"
					>
					</GridItem>
					<GridItem
						title="Prepare Model Step 1"	
						thumbnail={prepareStep1}
						href="/images/works/saeki/prepareStep1.png"
					>
					</GridItem>
					<GridItem
						title="Prepare Model Step 2"
						thumbnail={prepareStep2}
						href="/images/works/saeki/prepareStep2.png"
					>
					</GridItem>
					<GridItem
						title="Quotes Page"
						thumbnail={quotes}
						href="/images/works/saeki/quotes.png"
					>
					</GridItem>
				</SimpleGrid>
        		<List ml={4} my={4}>
          			<ListItem>
           				<Meta>Website</Meta>
            			<Link href="https://sdx-app-d6a5f.web.app/" target="_blank" _focus={{ boxShadow: 'none' }}>
            	  		Try it out here <ExternalLinkIcon mx="2px" />
           				</Link>
          			</ListItem>
          			<ListItem>
            			<Meta>Platform</Meta>
            			<span>Browser</span>
          			</ListItem>
        		</List>
      		</Container4k>
    	</Layout>
  	)
}

export default Work
