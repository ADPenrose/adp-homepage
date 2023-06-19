import {
  Container,
  Badge,
  Heading,
  Center
} from '@chakra-ui/react'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AkemiPad v1">
    <Container>
      <Title>
        AkemiPad <Badge>2022-</Badge>
      </Title>
      <P>
        A numpad powered by a ProMicro, with multiple layout options and support
        for an encoder, a piezo buzzer, an OLED, and per-key RGB lighting.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Work in progress</Center>
      </Heading>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
