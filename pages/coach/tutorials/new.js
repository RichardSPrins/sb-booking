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
        <Heading>New Tutorial</Heading>
        
      </Container>
    </CoachLayout>
  )
}

export default CoachDashboardHome