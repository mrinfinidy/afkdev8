import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { Title, PostImage } from '../../components/post'
import { GridItem } from '../../components/grid-item'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import highTechDystopia1 from '../../public/images/posts/stable-diffusion/highTechDystopia1.jpg'
import highTechDystopia2 from '../../public/images/posts/stable-diffusion/highTechDystopia2.jpg'
import highTechDystopia3 from '../../public/images/posts/stable-diffusion/highTechDystopia3.jpg'
import highTechDystopia4 from '../../public/images/posts/stable-diffusion/highTechDystopia4.jpg'

const StableDiffusion = () => {
	return (
		<Layout title="">
			<Container>
				<Title>Stable Diffusion (AI) Creations</Title>
				<P>
					I have recently tried out Stable Diffusion, a text-to-image
					deep learning model. This post contains various images that 
					Stable Diffusion generated from my text inputs.
				</P>
				<br />
				<Heading as="h3" fontSize={15}>
					Input: a high tech dystopian city in the sky, details, high resolution
				</Heading>
				<SimpleGrid columns={[1,1,2]} gap={6} my={4}>
					<GridItem
						title="Result 1"
						thumbnail={highTechDystopia1}
						href="/images/posts/stable-diffusion/highTechDystopia1.jpg"
					>	
					</GridItem>
					<GridItem
						title="Result 2"
						thumbnail={highTechDystopia2}
						href="/images/posts/stable-diffusion/highTechDystopia2.jpg"
					>
					</GridItem>
					<GridItem
						title="Result 3"
						thumbnail={highTechDystopia3}
						href="/images/posts/stable-diffusion/highTechDystopia3.jpg"
					>
					</GridItem>
					<GridItem
						title="Result 4"
						thumbnail={highTechDystopia4}
						href="/images/posts/stable-diffusion/highTechDystopia4.jpg"
					>
					</GridItem>
				</SimpleGrid>
				<P>
					I personally like image 2 and 4 but to be honest none of them are
					particularly surprising. The input is very standard and there are
					many similar AI generated pictures on the internet.
				</P>
				<br />
				<Heading as="h3" fontSize={15}>
					Input: religion parody
				</Heading>
				<PostImage
					src="/images/posts/stable-diffusion/religionParody.jpg"
					alt="Religion Parody"
					
				>
				</PostImage>
				<P>
					This one is quite funny, it probably made a meme because of the keyword
					&quot;parody&quot;. Although I have no idea what this meme could possibly mean
					you can see a lot of christian elemnts in it. The text just seems to be gibberish.
				</P>
				{/*
				<Heading as="h4" fontSize={13}>
					Image 1: Mix between the pope and Bernie Sanders?
				</Heading>
				<Heading as="h4" fontSize={13}>
					Image 2: An orthodox priest
				</Heading>
				<Heading as="h4" fontSize={13}>
					Image 3: A poor person or maybe a monk?
				</Heading>
				<Heading as="h4" fontSize={13}>
					Image 4: An angel
				</Heading>
				<Heading as="h4" fontSize={13}>
					Image 5: Maybe the the white gown or the beard are supposed to look religous
				</Heading>
				<Heading as="h4" fontSize={13}>
					Image 6: Ugly Mary?
				</Heading>
				*/}
				<P>
					Image 1: Mix between the pope and Bernie Sanders?
				</P>
				<P>
					Image 2: An orthodox priest
				</P>
				<P>
					Image 3: A poor person or maybe a monk?
				</P>
				<P>
					Image 4: An angel
				</P>
				<P>
					Image 5: Maybe the white gown or the beard are supposed to look religous
				</P>
				<P>
					Image 6: Ugly Mary?
				</P>
					
				
			</Container>
		</Layout>
	)
}

export default StableDiffusion
