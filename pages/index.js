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
          Huy is a frontend developer based in Ha Noi who is passionate about
          crafting exceptional digital experiences that align with his vision.
          Possessing two years of experience in frontend development and UI/UX
          design, Huy has honed his knowledge of web development fundamentals,
          including HTML, CSS, and JavaScript. He is well-versed in popular
          frontend frameworks such as React, Angular, or Vue, and has a proven
          track record of building responsive and user-friendly websites and web
          applications. Huy also has extensive experience working with
          industry-standard design tools such as Figma and Sketch and possesses
          a solid grasp of design principles like typography, color theory, and
          layout. With his diverse skill set, Huy is committed to delivering
          exceptional solutions that blend aesthetics and functionality to
          create seamless user experiences. If you want to explore some of
          Huy&apos;s exciting projects, take a peek at{' '}
          <Link href="https://www.github.com/huy289cb">his Github profile</Link>
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
          Art, Manga, Anime, <Link href="#">Music</Link>, Computer Game,{' '}
          <Link href="#">Playing Guitar</Link>
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
