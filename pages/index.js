import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a front-end developer base in VietNam! 💙
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Lương Quốc Huy
          </Heading>
          <p>Digital Craftman ( Developer / Designer / Wjbu )</p>
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
            borderRadius="lg"
            src="images/huy.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Huy is a freelance and a full-stack developer based in Ha Noi with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently he is living off of his own
          product called{' '}
          <Link as={NextLink} href="/works/inkdrop">
            Inkdrop
          </Link>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Cao Bang (Cao Bằng), Viet Nam
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the Engineer&apos;s Program in the Software Technology at Ha
          Noi Open University
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Works as a developer at Globits LLC
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I 💙
        </Heading>
        <Paragraph>
          Art, Anime, <Link href="#">Music</Link>, Computer Game, {' '}
          <Link href="#">Playing Guitar</Link>
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
