import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbKint from '../public/images/projects/kintsugi.png'
import thumbObi from '../public/images/projects/obi.png'
import thumbShi from '../public/images/projects/shisaku.png'
import thumbAkemi from '../public/images/projects/akemi.png'
import thumbTester from '../public/images/projects/sctester.png'
import thumbDot from '../public/images/projects/dotfiles.png'
import thumbAZ900 from '../public/images/projects/az900.png'
import thumbPiano from '../public/images/projects/piano.png'

const Works = () => (
  <Layout title="My Work">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="kintsugi_v1"
            title="Kintsugi v1"
            thumbnail={thumbKint}
          >
            A 65%-ish keyboard with some extra features.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="obi_v1" title="Obi v1" thumbnail={thumbObi}>
            A 40% keyboard, with options for (very few) multiple layouts.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="shisaku_v1" title="Shisaku V1" thumbnail={thumbShi}>
            A 40% alice-like keyboard, built using only THT components.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="akemipad_v1"
            thumbnail={thumbAkemi}
            title="AkemiPad v1"
          >
            A numpad designed to be the perfect companion to any keyboard.
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="dotfiles" thumbnail={thumbDot} title="Dotfiles">
            My personal dotfiles for Oh-My-Zsh (Linux) and Powershell (Windows).
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="midi_piano"
            thumbnail={thumbPiano}
            title="MIDI Piano"
          >
            DIY MIDI piano, powered by an Arduino UNO.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem
            id="sctester"
            thumbnail={thumbTester}
            title="SC stabilizers tester"
          >
            An FR4 tester for keyboard stabilizers, commisioned by Switch Club.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="az900_guide"
            thumbnail={thumbAZ900}
            title="Guide for the AZ-900 certification"
          >
            Collaborator of an official study guide for the AZ-900 Microsoft Fundamentals certification.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
