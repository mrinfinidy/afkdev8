import { Container } from "@chakra-ui/react"

const Container4k = ({ children }) => {
    return (
      <Container maxw="4k">
          {children}
      </Container>
    )
}

export default Container4k