import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Arturo Avila. All Rights Reserved.
      Built based on the code provided by{' '}
      <NextLink href="https://www.craftz.dog" passHref>
        <Link target="_blank">Takuya Matsuyama</Link>
      </NextLink>
        .
    </Box>
  )
}

export default Footer