import * as React from 'react'

import {
  Heading,
  Box,
  Text,
  Wrap
} from '@chakra-ui/react'

const FindCoachByFeaturedGameSection = () => {
  return (
    <Box mt="4">
      <Heading size="xl">
        Find Coaches By Game
      </Heading>
      <Text fontSize="large">
        We offer support across many popular titles!
      </Text>
      <Wrap my="12" spacing="7">
        <Box>
          <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
          <Heading size="md">Game Title</Heading>
          <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
        </Box>
        <Box>
          <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
          <Heading size="md">Game Title</Heading>
          <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
        </Box>
        <Box>
          <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
          <Heading size="md">Game Title</Heading>
          <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
        </Box>
        <Box>
          <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
          <Heading size="md">Game Title</Heading>
          <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
        </Box>
        <Box>
          <Box mb="4" h="315px" w="225px" bg="gray.700" rounded="lg"/>
          <Heading size="md">Game Title</Heading>
          <Text>{`${Math.floor(Math.random() * 2000)} Coaches`}</Text>
        </Box>
      </Wrap>
    </Box>
  )
}

export default FindCoachByFeaturedGameSection