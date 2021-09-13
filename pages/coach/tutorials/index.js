import * as React from 'react'
import CoachLayout from '../../../layouts/CoachLayout'
import {
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Button,
  Icon
} from '@chakra-ui/react'
import {FiPlus} from 'react-icons/fi'
import TutorialPreview from '../../../components/shared/TutorialPreview'

const CoachDashboardHome = () => {
  return (
    <CoachLayout>
      <Container maxW="7xl">
        <Flex justify="space-between" flexWrap="wrap">
          <Heading>My Tutorials</Heading>
          <Button leftIcon={<Icon as={FiPlus}/>} colorScheme="green">New Post</Button>
        </Flex>
        <SimpleGrid spacing="4" columns={{base: 1,lg: 2, xl: 3}}>
          <TutorialPreview />
          <TutorialPreview />
          <TutorialPreview />
          <TutorialPreview />
          <TutorialPreview /> 
        </SimpleGrid>
      </Container>
    </CoachLayout>
  )
}

export default CoachDashboardHome