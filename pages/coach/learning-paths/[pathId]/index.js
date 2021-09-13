import * as React from 'react'
import CoachLayout from '../../../../layouts/CoachLayout'
import {
  Container,
  Heading,
  SimpleGrid,
  Grid,
  GridItem,
  Button,
  Flex,
  Avatar,
  Box,
  Text,
  Progress,
  Icon,
  VStack
} from '@chakra-ui/react'
import {FiPlus, FiEdit} from 'react-icons/fi'
import LearningPath from '../../../../components/CoachDashboard/LearningPaths/LearningPath'

const LearningPathDetailsPage = () => {
  return (
    <CoachLayout>
      <Container maxW="7xl">
        <Flex align="center" justify="space-between">
          <Heading>Apex Legends Team 1 Training</Heading>
          <Button  bg="green.400" _hover={{bgColor: "green.600"}} leftIcon={<Icon as={FiEdit}/>}>Edit Path</Button>
        </Flex>
        {/* <Heading size="lg" color="gray.500">Student Name</Heading> */}
        <Grid

          mt="6"
          templateRows="auto"
          templateColumns="repeat(8, 1fr)"
          gap="4"
        >
          <GridItem colSpan={{base: 8, xl: 5}} rowSpan="1fr" >
            <Heading size="lg">Steps</Heading>
            <Box>
              <LearningPath />
            </Box>
          </GridItem>
          <GridItem  colSpan={{base: 8, xl: 3}}>
            <Box rounded="lg" p="4"  bg="gray.700">
              <Heading size="lg">Student Progress</Heading>
              <VStack width="100%" spacing="4">
                <Flex width="100%" mt="4">
                  <Flex width="100%">
                    <Avatar />
                    <Box ml="4" width="100%">
                      <Text>Student Name</Text>
                      <Progress colorScheme="green" rounded="full" value={Math.floor(Math.random() * 100)} width="100%" />
                    </Box>
                  </Flex>
                </Flex>
                <Flex width="100%" mt="4">
                  <Flex width="100%">
                    <Avatar />
                    <Box ml="4" width="100%">
                      <Text>Student Name</Text>
                      <Progress colorScheme="green" rounded="full" value={Math.floor(Math.random() * 100)} width="100%" />
                    </Box>
                  </Flex>
                </Flex>
                <Flex width="100%" mt="4">
                  <Flex width="100%">
                    <Avatar />
                    <Box ml="4" width="100%">
                      <Text>Student Name</Text>
                      <Progress colorScheme="green" rounded="full" value={Math.floor(Math.random() * 100)} width="100%" />
                    </Box>
                  </Flex>
                </Flex>
                <Flex width="100%" mt="4">
                  <Flex width="100%">
                    <Avatar />
                    <Box ml="4" width="100%">
                      <Text>Student Name</Text>
                      <Progress colorScheme="green" rounded="full" value={Math.floor(Math.random() * 100)} width="100%" />
                    </Box>
                  </Flex>
                </Flex>
                <Flex width="100%" mt="4">
                  <Flex width="100%">
                    <Avatar />
                    <Box ml="4" width="100%">
                      <Text>Student Name</Text>
                      <Progress colorScheme="green" rounded="full" value={Math.floor(Math.random() * 100)} width="100%" />
                    </Box>
                  </Flex>
                </Flex>
                <Flex width="100%" mt="4">
                  <Flex width="100%">
                    <Avatar />
                    <Box ml="4" width="100%">
                      <Text>Student Name</Text>
                      <Progress colorScheme="green" rounded="full" value={Math.floor(Math.random() * 100)} width="100%" />
                    </Box>
                  </Flex>
                </Flex>
                <Flex width="100%" mt="4">
                  <Flex width="100%">
                    <Avatar />
                    <Box ml="4" width="100%">
                      <Text>Student Name</Text>
                      <Progress colorScheme="green" rounded="full" value={Math.floor(Math.random() * 100)} width="100%" />
                    </Box>
                  </Flex>
                </Flex>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </CoachLayout>
  )
}

export default LearningPathDetailsPage