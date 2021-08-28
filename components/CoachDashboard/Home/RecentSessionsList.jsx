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

const RecentSessionList = () => {
  return (
    <Box overflowX="scroll">
      <Table mt="4" variant="simple">
        <Thead>
          <Tr>
            <Th>Student Name</Th>
            <Th>Session Date</Th>
            <Th>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Text ml="4">Student Name</Text>
              </Flex>
            </Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Text ml="4">Student Name</Text>
              </Flex>
            </Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Text ml="4">Student Name</Text>
              </Flex>
            </Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Text ml="4">Student Name</Text>
              </Flex>
            </Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr>
            <Td>
              <Flex align="center">
                <Avatar />
                <Text ml="4">Student Name</Text>
              </Flex>
            </Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default RecentSessionList