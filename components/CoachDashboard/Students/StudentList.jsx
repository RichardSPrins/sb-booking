import * as React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Avatar,
  Flex,
  Text,
  Box
} from '@chakra-ui/react'

const StudentList = () => {
  const [status, _setStatus] = React.useState(['Active', 'Inactive', 'Complete'])
  const [game, _setGame] = React.useState(['Apex Legends', 'Warzone', 'League of Legends', 'Rocket League', 'Splitgate'])
  return (
    <Box overflowX="scroll">
      <Table mt="4" variant="simple">
        <Thead>
          <Tr>
            <Th>Student Name</Th>
            <Th>Session Date</Th>
            <Th>Game</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Box>
                <Text ml="4">Student Name</Text>
                <Text color="gray.500" ml="4">Student Email</Text>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Box>
                <Text ml="4">Student Name</Text>
                <Text color="gray.500" ml="4">Student Email</Text>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Box>
                <Text ml="4">Student Name</Text>
                <Text color="gray.500" ml="4">Student Email</Text>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Box>
                <Text ml="4">Student Name</Text>
                <Text color="gray.500" ml="4">Student Email</Text>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Box>
                <Text ml="4">Student Name</Text>
                <Text color="gray.500" ml="4">Student Email</Text>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Box>
                <Text ml="4">Student Name</Text>
                <Text color="gray.500" ml="4">Student Email</Text>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Box>
                <Text ml="4">Student Name</Text>
                <Text color="gray.500" ml="4">Student Email</Text>
                </Box>
              </Flex>
            </Td>
            <Td>{new Date().toLocaleString()}</Td>
            <Td>{game[Math.floor(Math.random() * 5)]}</Td>
            <Td>{status[Math.floor(Math.random() * 3)]}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}
export default StudentList