import { Container, SimpleGrid, Link } from '@chakra-ui/react'
import { Title } from '../../components/post'
import { GridItem } from '../../components/grid-item'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import printCase from '../../public/images/posts/printCase.jpg'
import diodesSoldered from '../../public/images/posts/diodesSoldered.jpg'
import switchesInstalled from '../../public/images/posts/switchesInstalled.jpg'
import caseAssembled from '../../public/images/posts/caseAssembled.jpg'

const ErgoDash = () => {
	return (
		<Layout title="">
			<Container>
				<Title>ErgoDash keyboard (work in progress)</Title>
				<P>
					<Link href="https://github.com/omkbd/ErgoDash">ErgoDash</Link>
					is an open source split keyboard. I was introduced to it by a
					generous friend when he gave me two ErgoDash PCBs and let me
					try out the on he built. No need to say that I was amazed.
				</P>	
				<SimpleGrid columns={[1,1,2]} gap={6} my={4} >
					<GridItem 
						title=""
						thumbnail={printCase}
						href="/images/posts/printCase.jpg"
					>
						Switch case printed
					</GridItem>
					<GridItem 
						title=""
						thumbnail={diodesSoldered}
						href="/images/posts/diodesSoldered.jpg"
					>
						Diodes soldered
					</GridItem>
					<GridItem 
						title=""
						thumbnail={switchesInstalled}	
						href="/images/posts/switchesInstalled.jpg"
					>
						Switches installed
					</GridItem>
					<GridItem 
						title=""
						thumbnail={caseAssembled}
						href="/images/posts/caseAssembled.jpg"
					>
						Case assembled
					</GridItem>
				</SimpleGrid>
				<P>
					ErgoDash keyboard placeholder text.
				</P>

			</Container>
		</Layout>
	)
}

export default ErgoDash
