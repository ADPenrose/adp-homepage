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
  <Layout title="SC Stabs Tester">
    <Container>
      <Title>
        Switch Club Stabilizers Tester <Badge>2022</Badge>
      </Title>
      <P>
        FR4 stabilizer tester commissioned by Switch Club, feautring a keycap
        ruler.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Hardware Availability (Pending)</Meta>
          <Link href="https://switchclub.com.mx">
            https://switchclub.com.mx <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/sct_1.png" alt="SC Tester" />
      <WorkImage src="/images/works/sct_2.png" alt="SC Tester" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
