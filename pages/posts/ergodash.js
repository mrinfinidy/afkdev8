import { Container, SimpleGrid } from '@chakra-ui/react'
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
				<SimpleGrid columns={[1,1,2]} gap={6}>
				<GridItem 
					title="Switch case printed"
					thumbnail={printCase}
					href="/images/posts/printCase.jpg"
				/>
				<GridItem 
					title="Diodes soldered"
					thumbnail={diodesSoldered}
					href="/images/posts/diodesSoldered.jpg"
				/>
				<GridItem 
					title="Switches installed and soldered"
					thumbnail={switchesInstalled}	
					href="/images/posts/switchesInstalled.jpg"
				/>
				<GridItem 
					title="Case assembled"
					thumbnail={caseAssembled}
					href="/images/posts/caseAssembled.jpg"
				/>
				</SimpleGrid>
				<P>
					ErgoDash keyboard placeholder text.
				</P>

			</Container>
		</Layout>
	)
}

export default ErgoDash
