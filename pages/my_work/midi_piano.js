import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="MIDI Piano">
    <Container>
      <Title>
        MIDI Piano <Badge>2022</Badge>
      </Title>
      <P>
        Really simple DIY MIDI piano. Electronics and circuits built as a
        comission made by an arts and communications student. Tested with Logic
        software.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Hardware support</Meta>
          <span>Windows, Linux, MacOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/midi_1.png" alt="MIDI" />
      <WorkImage src="/images/works/midi_2.png" alt="MIDI" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
