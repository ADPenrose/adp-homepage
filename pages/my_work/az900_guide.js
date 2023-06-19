import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="AZ-900 guide">
    <Container>
      <Title>
        AZ-900 Certification Guide <Badge>2021</Badge>
      </Title>
      <P>Contributed to the AZ-900 Microsoft Fundamentals study guide.</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Code</Meta>
          <Link
            href="https://github.com/josejesusguzman/acordeon-az900-innovaccion"
            target="_blank"
          >
            See the section &quot;Contribuidores&quot; to find me! <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
