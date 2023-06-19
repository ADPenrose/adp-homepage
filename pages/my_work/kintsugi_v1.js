import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Kintsugi V1">
    <Container>
      <Title>
        Kintsugi v1 <Badge>2021-</Badge>
      </Title>
      <P>
        A 65%-ish keyboard powered by an ATmega32u4 microcontroller, 
        with support for an encoder, an OLED screen, RGB underglow and Kailh hotswap sockets.  
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>QMK Code</Meta>
          <Link href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/adpenrose/kintsugi" target="_blank">
            https://github.com/qmk/qmk_firmware <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>VIA Code</Meta>
          <Link href="https://github.com/the-via/keyboards/blob/master/src/adpenrose/kintsugi" target="_blank">
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

      <WorkImage src="/images/works/kint_01.jpg" alt="Kintsugi v1" />
      <WorkImage src="/images/works/kint_02.jpg" alt="Kintsugi v1" />
      <WorkImage src="/images/works/kint_03.png" alt="Kintsugi v1" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
