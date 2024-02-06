import { Container, Heading, Link, SimpleGrid } from '@chakra-ui/react'
import { Title, PostImage } from '../../components/post'
import { GridItem } from '../../components/grid-item'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import highTechDystopia1 from '../../public/images/posts/stable-diffusion/highTechDystopia1.jpg'
import highTechDystopia2 from '../../public/images/posts/stable-diffusion/highTechDystopia2.jpg'
import highTechDystopia3 from '../../public/images/posts/stable-diffusion/highTechDystopia3.jpg'
import highTechDystopia4 from '../../public/images/posts/stable-diffusion/highTechDystopia4.jpg'
import femaleBradPitt from '../../public/images/posts/stable-diffusion/femaleBradPitt.png'
import maleAngelinaJolie from '../../public/images/posts/stable-diffusion/maleAngelinaJolie.png'
import handSimple from '../../public/images/posts/stable-diffusion/handSimple.png'
import handWaveOldPhoto from '../../public/images/posts/stable-diffusion/handWaveOldPhoto.png'
import handWaveTrump from '../../public/images/posts/stable-diffusion/handWaveTrump.png'
import handWaveHillary from '../../public/images/posts/stable-diffusion/handWaveHillary.png'

const StableDiffusion = () => {
	return (
		<Layout title="">
			<Container>
				<Title>Stable Diffusion (AI) Creations</Title>
				<P>
					I have recently tried out Stable Diffusion, a text-to-image
					deep learning model. This post contains various images that 
					Stable Diffusion generated from my text and image inputs.
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
				<P>
					Just out of curiosity I added the word &quot;slum&quot; and
					upscaled it to see what happens. This was the result.
				</P>
				<PostImage
					src={"/images/posts/stable-diffusion/highTechDystopiaSlum.png"}
					alt="High Dystopia Slum"
				>
				</PostImage>
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
				<br />
				<Heading as="h3" fontSize={15}>
					Input 1: male brad pitt
					<br />
					Input 2: female angelina jolie
				</Heading>
				<SimpleGrid columns={[1,1,2]} gap={6} my={4}>
					<GridItem
						title="Female Brad Pitt"
						thumbnail={femaleBradPitt}
						href="/images/posts/stable-diffusion/femaleBradPitt.png"
					>
					</GridItem>	
					<GridItem
						title="Male Angelina Jolie"
						thumbnail={maleAngelinaJolie}
						href="/images/posts/stable-diffusion/maleAngelinaJolie.png"
					>
					</GridItem>
				</SimpleGrid>
				<P>
					This is just me having some more fun. I was actually surprised
					how well the faces turned out. As you will see in the
					next images human anatomy is not always easy.
				</P>	
				<br />
				<Heading as="h3" fontSize={15}>
					Input: old person plays on wooden grand piano, nostalgic
				</Heading>
				<PostImage
					src="/images/posts/stable-diffusion/oldPersonPiano.png"
					alt="Old Person Plays Piano"
				>
				</PostImage>
				<P>
					The most egregious flaw must be the hands. They resemble more
					of feet than hands. There are serveral more issues like the piano
					keys, the legs and it seems like the &quot;nostalgic&quot; keyword
					was forgotten.
				</P>
				<br />
				<Heading as="h3" fontSize={15}>
					Input: pianist plays on brown grand piano, concert
				</Heading>
				<PostImage
					src="/images/posts/stable-diffusion/pianistOriginal.png"
					alt="Pianist Original"
				>
				</PostImage>
				<P>
					My first attempt in order to get a better result was to input
					words that are more context related. This image is already a lot
					closer to what I imagined and although you can recognize the hands
					they look very wrong. The next image has been generated using
					the image to image method and with only one input word &quot;hands&quot;.	
				</P>
				<br />
				<Heading as="h3" fontSize={15}>
					Input: hands
				</Heading>
				<PostImage
					src="/images/posts/stable-diffusion/pianistProcessed1.png"
					alt="Pianist Processed 1"
				>
				</PostImage>
				<P>
					The idea was to only focus on one thing.
					Now the right hand has something like a thumb and the left hand
					has 3.5 fingers instead of 3. But to be honest the left hand looks
					more wrong in this image.
				</P>
				<br />
				<Heading as="h3" fontSize={15}>
					Input: pianist, piano, hand, looking down, detailed, detailed skin,
					detailed face, relaxed, light, shadow, photo, symmetrical ears and face shape,
					symmetrical circular eyes reflecting the environment, natural color
				</Heading>
				<PostImage
					src="/images/posts/stable-diffusion/pianistProcessed2.png"
					alt="Pianist Processed 2"
				>
				</PostImage>
				<P>
					This input has yielded the best result so far. It describes in detail
					what the image should include and the negative prompt includes about
					as many specifics. But it is still far from perfect. The relfection of
					the keys is the other way around and the lid is deformed. I guess the
					more complex an activity is the harder it is to get it right. I also
					think it does not help that we are very familiar with human
					anatomy and its depiction so that any oddness will immediately stand out.	
				</P>
				<P>
					Next I tried to generate something simpler as a comparison.
					Take a look at the following four images of just a hand and people waving respectively. 
					I am not going to include the input for each picture but I have used this 
					<Link 
						href="https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/"
						target="_blank"
						_focus={{ boxShadow: 'none' }}
					> Reddit post</Link> as a reference.
				</P> 
				<SimpleGrid columns={[1,1,2]} gap={6} my={4}>
					<GridItem
						title="Hand"	
						thumbnail={handSimple}
						href="/images/posts/stable-diffusion/handSimple.png"
					>
					</GridItem>
					<GridItem
						title="Old Photo of Man Waving"
						thumbnail={handWaveOldPhoto}
						href="/images/posts/stable-diffusion/handWaveOldPhoto.png"
					>
					</GridItem>
					<GridItem
						title="Donald Trump Waving"
						thumbnail={handWaveTrump}
						href="/images/posts/stable-diffusion/handWaveTrump.png"
					>
					</GridItem>
					<GridItem
						title="Hillary Clinton Waving"
						thumbnail={handWaveHillary}
						href="/images/posts/stable-diffusion/handWaveHillary.png"
					>
					</GridItem>
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export default StableDiffusion
