import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Obi v1">
    <Container>
      <Title>
        Obi v1 <Badge>2021-</Badge>
      </Title>
      <P>
        A 40% keyboard inspired by the TMOv2 and Nightmare boards, with stepped
        caps lock and split spacebar support, as well as encoder compatibility
        and RGB underglow.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>QMK Code</Meta>
          <Link
            href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/adpenrose/obi"
            target="_blank"
          >
            https://github.com/qmk/qmk_firmware <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>VIA Code</Meta>
          <Link
            href="https://github.com/the-via/keyboards/blob/master/src/adpenrose/obi"
            target="_blank"
          >
            https://github.com/the-via/keyboards <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Hardware support</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C, C++, Makefile, Python, JSON</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/obi_1.jpg" alt="Obi v1" />
      <WorkImage src="/images/works/obi_2.jpg" alt="Obi v1" />
      <WorkImage src="/images/works/obi_3.jpg" alt="Obi v1" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
