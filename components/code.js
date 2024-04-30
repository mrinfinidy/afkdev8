import { Code, useColorMode } from '@chakra-ui/react'

const CodeStyled = ({ children, mIndent }) => {
	const { colorMode } = useColorMode()
	const colorScheme = colorMode == 'light' ? 'teal' : 'purple'

	return (
		<Code  colorScheme={ colorScheme } style={{ textIndent: mIndent }} overflowX="auto">
			{children}
		</Code>
	)
}

export default CodeStyled
