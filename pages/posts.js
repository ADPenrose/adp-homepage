import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbGuide1 from '../public/images/posts/blog-guide-1.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Blog Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="¿Quiúbole con el diseño de teclados mecánicos? — Parte 1: La idea, la teoría y los prerrequisitos"
            thumbnail={thumbGuide1}
            href="https://adpenrose.medium.com/quiúbole-con-el-diseño-de-teclados-mecánicos-parte-1-la-idea-la-teoría-y-los-prerrequisitos-6eca3bf9ff8"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
