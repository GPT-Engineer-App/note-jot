import { useState } from 'react';
import { Box, Button, Input, Text, VStack, IconButton, useToast } from '@chakra-ui/react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addNote = () => {
    if (input === '') {
      toast({
        title: 'No content',
        description: "You can't add an empty note!",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setNotes([...notes, input]);
    setInput('');
    toast({
      title: 'Note added',
      description: 'Your note was successfully added!',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    toast({
      title: 'Note deleted',
      description: 'Your note was successfully deleted!',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">Note Taking App</Text>
      <Box display="flex" alignItems="center">
        <Input
          placeholder="Add a new note"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="md"
          mr={2}
        />
        <IconButton
          icon={<FaPlus />}
          onClick={addNote}
          colorScheme="blue"
          aria-label="Add note"
        />
      </Box>
      {notes.map((note, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px" flex="1" width="100%" display="flex" justifyContent="space-between" alignItems="center">
          <Text>{note}</Text>
          <IconButton
            icon={<FaTrash />}
            onClick={() => deleteNote(index)}
            colorScheme="red"
            aria-label="Delete note"
          />
        </Box>
      ))}
    </VStack>
  );
};

export default Index;