import { Container, Box, Heading, Image } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="green.500" p={3} mb={6} align="center">
        Hello, I&apos;m a front-end developer base in VietNam! 💙
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lương Quốc Huy
          </Heading>
          <p>Digital Craftman ( Developer / Designer / Gamer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="8px"
            src="images/huy.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
