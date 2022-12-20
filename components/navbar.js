import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
	useColorMode
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
	const { colorMode } = useColorMode()

    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? (colorMode === 'light' ? 'teal' : 'glassTeal') : undefined}
                color={active ? (colorMode === 'light' ? '#f0e7db' : '#230015') : inactiveColor}
				borderRadius={12}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#23001580')}
            style={{ backdropFilter:'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="/about" path={path}>
                        About
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md:'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList
                                bg={useColorModeValue('whiteAlpha.900', 'blackAlpha.800')}
                                color={useColorModeValue('teal', 'glassTeal')}
                                borderColor={useColorModeValue('teal', 'glassTeal')}
                            >
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                                <NextLink href="/about" passHref>
                                    <MenuItem as={Link} variant="outline">About</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
