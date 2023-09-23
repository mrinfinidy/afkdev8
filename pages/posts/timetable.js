import { Container, Heading, Link, Stack, Code } from '@chakra-ui/react'
import { Title } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { BulletSection, BulletPoint } from '../../components/bullet'

const Timetable = () => {
	return (
		<Layout title=''>
			<Container>
				<Title>Timetable</Title>
				<P>
					This post explains how to make you own timtable display.
					In principle it is a Raspberry Pi running a Python program
					which is connected to a monitor. It can be useful to have a
					display showing public transport connections close to your
					office for example. Follow this to make your own display table.
					<br />
				</P>
				<br />
				<Heading as="h2" fontSize={17}>
					Requirements
				</Heading>
				<BulletSection>
					<BulletPoint>&bull; Raspberry Pi</BulletPoint>
					I use the Pi 2 model B. Baically you just need a hardware
					that has an HDMI output, can run python and is able to connect to the internet.
					<br />
				</BulletSection>
				<BulletSection>
					<BulletPoint>&bull; Monitor</BulletPoint>
					Any monitor with an HDMI input
				</BulletSection>
				<BulletSection>
					<BulletPoint>&bull; LAN cable</BulletPoint>
					If your Raspberry has wifi you do not need a LAN cable
				</BulletSection>
				<BulletSection>
					<BulletPoint>&bull; HDMI cable</BulletPoint>
				</BulletSection>
				<br />
				<Heading as='h2' fontSize={17}>
					Timetable Python Code
				</Heading>
				<P>
					We are going to use an (inofficial) API by
					<Link href="https://www.fahrplan.guru/" target="_blank"> fahrplan.guru</Link>.
					This site is intended for german public transport but it works for other european
					cities like Vienna, Paris or Rome too. You can do a quick check on their website
					to see if they have information about your city.
					<br />
					We are going to use this site's option to show all outgoing connections from a
					specific station.
				</P>
				<br />
				<Heading as="h3" fontSize={14}>1) Retrieve information for some station (e.g. Berlin Hauptbahnhof)</Heading>
				Import libraries
				<Stack direction='column' spacing={0}>
					<Code>
						Hello
					</Code>	
					<Code style={{ textIndent: 20 }} >
						World
					</Code>	
				</Stack>
			</Container>
		</Layout>	
	)
}

export default Timetable
