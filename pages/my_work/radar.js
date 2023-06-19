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
  <Layout title="Radar">
    <Container>
      <Title>
        Radar <Badge>2022</Badge>
      </Title>
      <P>
        A simple proximity sensor driven by an Arduino UNO, integrate by a DC
        servomotor and an HC-SR04 ultrasonic sensor. Developed as the final 
        project for the class &quot;Máquinas Eléctricas&quot;.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Code</Meta>
          <Link
            href="https://github.com/ADPenrose/proyecto_maquinas"
            target="_blank"
          >
            https://github.com/ADPenrose/proyecto_maquinas <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Hardware support</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TeX, Processing, C++</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/rad_1.png" alt="Radar" />
      <WorkImage src="/images/works/rad_2.png" alt="Radar" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
