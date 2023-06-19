import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbTwitch from '../public/images/links/twitch.png'
import thumbMedium from '../public/images/links/medium.png'
import thumbKofi from '../public/images/links/kofi.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('yellow.400', 'purple.300')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi! I&apos;m an Industrial Engineer based in Mexico that loves programming, electronics
        and maths!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arturo Avila
          </Heading>
          <p>Industrial Engineer / Keyboard Designer / Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/arturo.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          My Work
        </Heading>
        <Paragraph>
          I&apos;m a freelance mechanical keyboard and electronics designer
          based in Mexico, with a deep pasion for programming, mathematics and
          administration. I&apos;m currently studying Industrial Engineering at
          UNAM, and I use my spare time to learn programming and develop printed
          circuit boards for custom mechanical keyboards. I market my products
          through content published on{' '}
          <Link as={NextLink} href="https://www.twitch.tv/adpenrose" passHref target="_blank">
            Twitch
          </Link>
          , where I show my workflow for the design, programming and testing
          processes for consumer electronics, and through pictures on{' '}
          <Link as={NextLink} href="https://www.instagram.com/adepenrose/" passHref target="_blank">
            Instagram
          </Link>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/my_work"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Began studying Industrial Engineering at FESC UNAM.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started working as a tutor for mathematic-related courses.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Imparted a Software-aided Linear Algebra crash course at FESC UNAM.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Participated in both parts of the VII Encuentro SUMEM: La mejora de la
          educación matemática, una actividad estrictamente creciente.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working as a freelance electronics designer. 
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Working as an Automation & Sustainability Trainee at ECOLAB.
          </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          What I ♥ doing
        </Heading>
        <Paragraph>
          Physics, Playing Piano, Streaming, Gymnastics/Sports in general,
          studying/teaching mathematics.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/adpenrose" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<IoLogoGithub />}
              >
                @adpenrose
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/adepenrose" target="_blank">
              <Button
                variant="ghost"
                colorScheme="pink"
                leftIcon={<IoLogoInstagram />}
              >
                @adepenrose
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          <GridItem
            href="https://www.twitch.tv/adpenrose"
            title="ADPenrose"
            thumbnail={thumbTwitch}
          >
            My Twitch channel.
          </GridItem>
          <GridItem
            href="https://adpenrose.medium.com"
            title="Medium"
            thumbnail={thumbMedium}
          >
            My hardware/design-focused electronics blog.
          </GridItem>
          <GridItem
            href="https://ko-fi.com/adpenrose"
            title="Ko-Fi"
            thumbnail={thumbKofi}
          >
            A place to support me (only if you want to).
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
