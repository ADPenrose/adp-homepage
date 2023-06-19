import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const VoxSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const VoxContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-model"
    m="auto"
    mt={['-20px', '-60px', '-230px']}
    mb={['-40px', '-140px', '-180px']}
    w={[280, 480, 640]}
    h={[300, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <VoxContainer>
      <VoxSpinner />
    </VoxContainer>
  )
}

export default Loader