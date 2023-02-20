import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
  return <Container>
    <Box borderRadius="lg" bg="green.500" p={3} mb={6} align="center">Hello, I&apos;m a front-end developer base in VietNam! 💙</Box>
    <Box display={{md: "flex"}}>
        <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Lương Quốc Huy
            </Heading>
            <p>Digital Craftman ( Developer / Designer / Gamer )</p>
        </Box>
    </Box>
  </Container>
}

export default Page
