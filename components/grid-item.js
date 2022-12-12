import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorMode, color } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import {useEffect} from 'react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target={"_blank"}>
                <Text mt={2}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>
                {children}
            </Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/works/${id}`}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>
                    {children}
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const PostGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" align="center">
        <NextLink href={`/posts/${id}`}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/posts/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>
                    {children}
                </Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => {
	const { colorMode } = useColorMode()
	const textSelectionColor = colorMode === 'light' ? '#f0e7db' : '#230015'
	const textSelectionBg = colorMode === 'light' ? 'teal' : '#88ccca'
	const linkSelectionBg = colorMode === 'light' ? '#76B8D7' : '#ff63c3'

	return (
		<Global styles={`
			.grid-item-thumbnail {
				border-radius: 12px;
			}
			
			::selection {
				color: ${textSelectionColor};
				background-color: ${textSelectionBg};
			}

			a::selection {
				color: ${linkSelectionBg};
			}
		`}/>	
	)
}
