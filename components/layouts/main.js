import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelLoader from '../voxel-loader'

const LazyVoxel = dynamic(() => import('../voxel-model'), {
  ssr: false,
  loading: () => <VoxelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Arturo's homepage" />
        <meta name="author" content="Arturo Avila" />
        <meta name="author" content="ADPenrose" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Arturo Avila" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adpenrose" />
        <meta name="twitter:creator" content="@adpenrose  " />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Arturo Avila" />
        <meta name="og:title" content="Arturo Avila" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Arturo Avila - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxel />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
