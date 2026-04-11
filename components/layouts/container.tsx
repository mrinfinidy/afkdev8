import { Container } from "@chakra-ui/react"

const Container4k = ({
    children
}: any) => {
    return (
      <Container maxW="4k">
          {children}
      </Container>
    )
}

export default Container4k
