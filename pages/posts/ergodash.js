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
				<Title>ErgoDash Keyboard (work in progress)</Title>
				<P>
					<Link href="https://github.com/omkbd/ErgoDash">ErgoDash </Link>
					is an open source split keyboard. I was introduced to it by a
					generous friend when he gave me two ErgoDash PCBs and let me
					try out the one he built. No need to say I was amazed.
					I will not go into details about the build guide but you can
					check out my progress in the picture below.
				</P>	
				<SimpleGrid columns={[1,1,2]} gap={6} my={4} >
					<GridItem 
						title="3D Print Switch Case"
						thumbnail={printCase}
						href="/images/posts/printCase.jpg"
					>
						I 3D printed all the case parts like the switch plate and
						bottom plate. You can find various models on Thingiverse.
					</GridItem>
					<GridItem 
						title="Solder Diodes on PCB"
						thumbnail={diodesSoldered}
						href="/images/posts/diodesSoldered.jpg"
					>
						Here you can see the diodes and backlight LEDs soldered
						on the backside of the PCB.
					</GridItem>
					<GridItem 
						title="Install and Solder Switches"
						thumbnail={switchesInstalled}	
						href="/images/posts/switchesInstalled.jpg"
					>
						It took me about two afternoons to finish soldering everything.		
					</GridItem>
					<GridItem 
						title="Assemble Case"
						thumbnail={caseAssembled}
						href="/images/posts/caseAssembled.jpg"
					>
						It was actually not that easy to get 6mm spacers (fast).
						They are used to create the space between switch and bottom plate.
					</GridItem>
				</SimpleGrid>
				<P>
					The next step is to get the firmware working for a custom key mapping
					and backlight. As you can see I also still need to get a nice set of keycaps.
					<br /> <br />
					To be continued...
				</P>

			</Container>
		</Layout>
	)
}

export default ErgoDash
