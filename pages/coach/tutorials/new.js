import * as React from 'react'
import dynamic from 'next/dynamic'
import CoachLayout from '../../../layouts/CoachLayout'
import {
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Button,
  Icon,
  Input,
  FormControl,
  FormLabel,
  Box,
  Wrap,
  Text,
  Textarea
} from '@chakra-ui/react'

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
] 

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})

const CoachDashboardHome = () => {
  return (
    <CoachLayout>
      <Container maxW="7xl">
        <Heading>New Tutorial Post</Heading>
        <Box mt="6">
          <form>
            <FormControl mb="6" isRequired>
              <FormLabel>Post Title</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Tags</FormLabel>
            </FormControl>
            <FormControl mb="6">
              <FormLabel>Thumbnail Image</FormLabel>
              <Wrap align="center">
                <Button>Upload Image</Button>
                <Text>No File Uploaded</Text>
              </Wrap>
            </FormControl>
            <FormControl mb="6" isRequired>
              <FormLabel>Post Body</FormLabel>
              <Box rounded="lg" border="1px solid gray" p="2">
                <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
              </Box>
            </FormControl>
            <Button colorScheme="green">Create Post</Button>
          </form>
        </Box>
      </Container>
    </CoachLayout>
  )
}

export default CoachDashboardHome