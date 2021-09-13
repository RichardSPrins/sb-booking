import * as React from 'react'
import CoachLayout from '../../../layouts/CoachLayout'
import StudentList from '../../../components/CoachDashboard/Students/StudentList'
import {
  Container,
  Heading
} from '@chakra-ui/react'

const CoachDashboardHome = () => {
  return (
    <CoachLayout>
      <Container maxW="7xl">
        <Heading>Students</Heading>
        <StudentList />
      </Container>
    </CoachLayout>
  )
}

export default CoachDashboardHome