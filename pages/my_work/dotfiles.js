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
  <Layout title="Dotfiles">
    <Container>
      <Title>
        Dotfiles <Badge>2022</Badge>
      </Title>
      <P>
        My configuration files, based on the ones shared by Craftzdog/Takuya
        Matsuyama.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Code</Meta>
          <Link href="https://github.com/ADPenrose/dotfiles" target="_blank">
            https://github.com/ADPenrose/dotfiles <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platforms</Meta>
          <span>Linux, Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Lua, PowerShell</span>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2022/08/19</span>
        </ListItem>
      </List>
     
      <WorkImage src="/images/works/dot_1.png" alt="Dotfiles" />
      <WorkImage src="/images/works/dot_2.png" alt="Dotfiles" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
