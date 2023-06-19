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
  <Layout title="Shisaku v1">
    <Container>
      <Title>
        Shisaku v1 <Badge>2022-</Badge>
      </Title>
      <P>
        A 40% alice-like keyboard, assembled only with THT components, featuring
        a solenoid to achieve that characteristic typewriter sound.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>QMK Code</Meta>
          <Link
            href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/adpenrose/shisaku"
            target="_blank"
          >
            https://github.com/qmk/qmk_firmware <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>VIA Code</Meta>
          <Link
            href="https://github.com/the-via/keyboards/blob/master/src/adpenrose/shisaku"
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
      <WorkImage src="/images/works/shisaku_1.jpg" alt="Shisaku v1" />
      <WorkImage src="/images/works/shisaku_2.jpg" alt="Shisaku v1" />
      <WorkImage src="/images/works/shisaku_3.jpg" alt="Shisaku v1" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
