import { Button, Container, Heading, Link, Stack } from '@chakra-ui/react'
import { Title } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { BulletSection, BulletPoint } from '../../components/bullet'
import CodeStyled from '../../components/code'
import { IoLogoGithub } from 'react-icons/io5'
import { ExternalLinkIcon  }from '@chakra-ui/icons'
import { WorkImage } from '../../components/work'

const Timetable = () => {
	return (
		<Layout title=''>
			<Container>
				<Title>Timetable</Title>
				<P>
					This post explains how to make your own timtable display.
					In principle it is a Raspberry Pi running a Python program
					which is connected to a monitor. It can be useful to have a
					display showing public transport connections close to your
					office for example. Follow this to make your own display table.
					<br />
					<WorkImage src='/images/posts/timetable/timetable-berlin.jpg' />
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
					<Link href="https://www.fahrplan.guru/" target="_blank" _focus={{ borderShadow: 'none' }}> fahrplan.guru <ExternalLinkIcon mx='2px' /></Link>.
					This site is intended for german public transport but it works for other european
					cities like Vienna, Paris or Rome too. You can do a quick check on their website
					to see if they have information about your city.
					<br />
					We are going to use this site&apos;s option to show all outgoing connections from a
					specific station.
				</P>
				<br />
				<Heading as="h3" fontSize={14}>1) Retrieve Information For Fome Station (E.g. Berlin Hauptbahnhof)</Heading>
				<br />
				Import libraries
				<Stack direction='column' spacing={0}>
					<CodeStyled>import requests</CodeStyled>	
					<CodeStyled>import json</CodeStyled>
				</Stack>
				<br />
				Define function for each stop you want to add
				<Stack direction='column' spacing={0}>
					<CodeStyled>def times_berlin_hbf(time, date, timetable):</CodeStyled>
				</Stack>
				<P>
				Our function takes three parameters. &apos;time&apos; and &apos;date&apos; contain the current
				time and date so that we can make a request for the desired departing time.
				&apos;timetable&apos; is a list where each index indicates a stop.
				</P>
				<br />
				Retrieve information from API
				<Stack direction='column' spacing={0}>
					<CodeStyled>url = &apos;https://www.fahrplan.guru/api/haltestelle?city=berlin&date=&apos; + date + &apos;&dir=dep&name=berlin-hauptbahnhof&state=berlin&time=&apos; + time</CodeStyled>
					<CodeStyled>res = requests.get(url)</CodeStyled>
					<CodeStyled>res = json.loads(res.text)</CodeStyled>
				</Stack>
				<P>
					We resolve our request as json to be able to easily extract the information we want.
				</P>
				<br />
				Add the stop to timetable
				<Stack direction='column' spacing={0}>
					<CodeStyled>timetable.append(0)</CodeStyled>
				</Stack>
				<P>In our case 0 indicates Berlin Hauptbahnhof. Each stop you add should have a unique id</P>
				<br />
				Extract desired information
				<Stack direction='column' spacing={0}>
					<CodeStyled>for i in range(5):</CodeStyled>
					<CodeStyled mIndent={30}>berlin_hbf_entry = []</CodeStyled>
					<CodeStyled mIndent={30}>berlin_hbf_entry.append(res[&quot;transports&quot;][i][&quot;nearest_trip_time&quot;])</CodeStyled>
					<CodeStyled mIndent={30}>berlin_hbf_entry.append(res[&quot;transports&quot;][i][&quot;transport_info&quot;][&quot;full_name&quot;])</CodeStyled>
					<CodeStyled mIndent={30}>berlin_hbf_entry.append(res[&quot;transports&quot;][i][&quot;stop_title&quot;])</CodeStyled>
					<CodeStyled mIndent={30}>timetable.append(berlin_hbf_entry)</CodeStyled>
				</Stack>
				<P>
					We create another list where we store our extracted information. We want the departure time,
					the bus/train/metro line and its destination. You can inspect the json file and extract
					further information that you find useful.
				</P>
				<br />
				<Heading as='h3' fontSize={14}>2) Display Extracted Information</Heading>
				<br />
				Import libraries
				<Stack direction='column' spacing={0}>
					<CodeStyled>import os</CodeStyled>
					<CodeStyled>import datetime</CodeStyled>
					<CodeStyled>from time import sleep</CodeStyled>
					<CodeStyled>from stops.berlin_hbf import times_berlin_hbf</CodeStyled>
				</Stack>
				<P>Import the stop we created in the previous step.</P>
				<br />
				Get current date
				<Stack direction='column' spacing={0}>
					<CodeStyled>def get_date():</CodeStyled>
					<CodeStyled mIndent={30}>today = datetime.date.today()</CodeStyled>
					<CodeStyled mIndent={30}>day = datetime.datetime.strptime(str(today.day), &quot;%d&quot;).strftime(&quot;%d&quot;)</CodeStyled>
					<CodeStyled mIndent={30}>month = datetime.datetime.strptime(str(today.month), &quot;%m&quot;).strftime(&quot;%m&quot;)
</CodeStyled>
					<CodeStyled mIndent={30}>year = datetime.datetime.strptime(str(today.year), &quot;%Y&quot;).strftime(&quot;%Y&quot;)</CodeStyled>
					<CodeStyled mIndent={30}>return day + &apos;.&apos; + month + &apos;.&apos; + year</CodeStyled>
				</Stack>
				<br />
				Get current time
				<Stack direction='column' spacing={0}>
					<CodeStyled>def get_time(station):</CodeStyled>
					<CodeStyled mIndent={30}>now = datetime.datetime.now()</CodeStyled>
					<CodeStyled mIndent={30}>if station == &apos;berlin_hbf&apos;:</CodeStyled>
					<CodeStyled mIndent={60}>now + datetime.timedelta(minutes=2)</CodeStyled>
					<CodeStyled mIndent={30}>elif station == &apos;berlin_pankow&apos;:</CodeStyled>
					<CodeStyled mIndent={60}>now + datetime.timedelta(minutes=3)</CodeStyled>
					<CodeStyled mIndent={30}>hour = datetime.datetime.strptime(str(now.hour), &quot;%H&quot;).strftime(&quot;%H&quot;)</CodeStyled>
					<CodeStyled mIndent={30}>minute = datetime.datetime.strptime(str(now.minute), &quot;%M&quot;).strftime(&quot;%M&quot;)</CodeStyled>
					<CodeStyled mIndent={30}>return hour + &apos;%3A&apos; + minute</CodeStyled>
				</Stack>
				<P>
					Add a few extra minutes to the current time to only show the connections that
					are reachable in time. You can adjust the value for each stop depending on how long
					it takes to get there.
				</P>
				<br />
				Format and print timetable
				<Stack direction='column' spacing={0}>
					<CodeStyled>def get_timetable(timetable):</CodeStyled>
					<CodeStyled mIndent={30}>times_berlin_hbf(get_time(&apos;berlin_hbf&apos;), get_date(), timetable)</CodeStyled>
					<CodeStyled mIndent={30}>times_berlin_pankow(get_time(&apos;berlin_pankow&apos;), get_date(), timetable)</CodeStyled>
					<CodeStyled mIndent={30}>for row in timetable:</CodeStyled>
					<CodeStyled mIndent={60}>if row == 0:</CodeStyled>
					<CodeStyled mIndent={90}>print(&apos;\nBERLIN HAUPTBAHNHOF&apos;)</CodeStyled>
					<CodeStyled mIndent={90}>continue</CodeStyled>
					<CodeStyled mIndent={60}>if row == 1:</CodeStyled>
					<CodeStyled mIndent={90}>print(&apos;\nBERLIN-PANKOW&apos;)</CodeStyled>
					<CodeStyled mIndent={90}>continue</CodeStyled>
					<CodeStyled mIndent={30}>print(&#147;&#123;&#58; &gt;20&#125; &#123;&#58; &gt;20&#125; &#123;&#58; &gt;50&#125;&#147;.format(*row))</CodeStyled>
				</Stack>
				<P>
					First Retrieve stops we want to display which get added to timetable. Then for each stop in timetable
					print the matching stop name and add some spacing between the departure time, line and destination so
					it is easier to read.
				</P>
				<br />	
				Call the timetable function
				<Stack direction='column' spacing={0}>
					<CodeStyled>while True:</CodeStyled>
					<CodeStyled mIndent={30}>timetable = []</CodeStyled>
					<CodeStyled mIndent={30}>_ = os.system(&apos;clear&apos;)</CodeStyled>
					<CodeStyled mIndent={30}>get_timetable(timetable)</CodeStyled>
					<CodeStyled mIndent={30}>sleep(30)</CodeStyled>
				</Stack>
				<P>
					We clear the terminal every time before we print the timetable. Then we call the timetable and
					wait 30 seconds before we reapeat this process.
				</P>
				<br />
				<P>
				You can check out the full source code on
					<Link href='https://github.com/mrinfinidy/timetable-showcase.git' target='_blank'>
						<Button
							variant='ghost'
							colorScheme='teal'
							leftIcon={<IoLogoGithub />}
							rightIcon={<ExternalLinkIcon />}
							_focus={{ borderShadow: 'none' }}
						>
							GitHub
						</Button>
					</Link>

				</P>
				<br />
				<Heading as='h3' fontSize={14}>3) Configure Raspberry Pi</Heading> 
				<br />
				<Link href='https://www.raspberrypi.com/documentation/computers/getting-started.html#installing-the-operating-system' target='_blank' _focus={{ borderShadow: 'none' }}>
					Install Raspberry Pi OS <ExternalLinkIcon mx='2px' />
				</Link>
				<br />
				<br />
				Run startup script on Pi
				<Stack direction='column' spacing={0}>
					<CodeStyled>#!/usr/bin/env bash</CodeStyled>
					<CodeStyled>lxterminal --command=&quot;/usr/bin/python /home/notadmin/Documents/kvv-timetable/main.py&quot;</CodeStyled>
				</Stack>
				<P>
					Create a bash script &apos;autostart-timetable&apos; and make it executable by running&nbsp;
					<CodeStyled mIndent={0}>chmod +x autostart-timetable</CodeStyled>.
					<br />
					Now make the script run automatically every time the Pi is booted by
					adding <CodeStyled mIndent={0}>@path/to/autostart-timetable</CodeStyled>
					&nbsp;to the LXDE autostart file. I stored &apos;autostart-timetable&apos; in&nbsp;
					<CodeStyled mIndent={0}>~/Documents/</CodeStyled> and useed a user specific
					LXDE autostart file so I added <CodeStyled mIndent={0}>@Documents/autostart-timetable</CodeStyled> to
					<CodeStyled mIndent={0}>~/.config/lxsession/LXDE-pi/autostart</CodeStyled>.
					<br />
					<Link href='https://www.raspberrypi-spy.co.uk/2014/05/how-to-autostart-apps-in-rasbian-lxde-desktop/' target='_blank' _focus={{ boxShadow: 'none' }}>Here<ExternalLinkIcon mx='2px' /></Link>
					&nbsp;is a more detailed explanation about autostart on Pi.
				</P>
				<br />
				<Heading as='h3' fontSize={14}>4) End</Heading>
				<br />
				<WorkImage src='/images/posts/timetable/timetable-showcase.jpg' />
				Connect the Raspberry Pi to a monitor and enjoy you custom timtable display!
			</Container>
		</Layout>	
	)
}

export default Timetable
