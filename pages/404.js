import NextLink from 'next/link'
import {
  Link,
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { WorkImage } from '../components/work'

const NotFound = () => (
  <Layout>
    <Container>
      <Heading as="h1">Something&apos;s wrong...</Heading>
      <Text>
        I&apos;m not quite sure what went wrong, but it&apos;s likely that the
        page you&apos;re looking for was not found. So, you can either{' '}
        <NextLink href="/" passHref scroll={false}>
          <Link>go back to the homepage</Link>
        </NextLink>
        , or you can spend eternity looking at this cute, AI-generated cat. Your
        choice.
      </Text>

      <WorkImage src="/images/works/cute_cat.png" alt="A really cute cat" />

      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="green">Take me home</Button>
        </NextLink>
      </Box>
    </Container>
  </Layout>
)

export default NotFound

