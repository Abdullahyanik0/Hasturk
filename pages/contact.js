import { useState } from 'react';
import {
  Flex,
  Box,
  Button,
  VStack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Heading,
  IconButton,
  Text
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

import { MainTemplate, Meta } from '../templates';
import { Maps } from '../components';

const data = [
  {
    title: 'Adres',
    text: 'Doğanevler mah.',
    icon: <MdLocationOn />
  },
  {
    title: 'Telefon',
    text: '+90 531 255 19 97',
    icon: <MdPhone />
  },
  {
    title: 'Email',
    text: 'info@hasturkfirça.com',
    icon: <MdEmail />
  }
];

export default function Contact() {
  return (
    <MainTemplate
      meta={<Meta title="İletişim | Hastürk Fırça" description="Hastürk Fırça İletişim" />}>
      <Flex alignItems="center" justifyContent="center" className="py-24">
        <ContactForm />
      </Flex>
    </MainTemplate>
  );
}

const ContactForm = () => {
  const [formData, setFormData] = useState();

  const handleChange = ({ target: { value, name } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="lg"
      p={8}
      color={useColorModeValue('gray.700', 'whiteAlpha.900')}
      shadow="2xl"
      className="w-full flex flex-col md:w-2/3">
      <div className="flex items-center w-full justify-around">
        {data?.map((d) => (
          <IconText data={d} key={d.text} />
        ))}
      </div>
      <Heading as="h2" size="lg" isTruncated>
        İletişime Geçin
      </Heading>
      <div className="w-full flex justify-between flex-col items-center md:flex-row ">
        <form className="w-full" onSubmit={handleSumbit}>
          <VStack spacing={5} className="w-full">
            <FormControl isRequired>
              <FormLabel>Ad Soyad</FormLabel>

              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input type="text" name="name" placeholder="Ad Soyad" onChange={handleChange} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>E-posta</FormLabel>

              <InputGroup>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input type="email" name="email" placeholder="E-posta" onChange={handleChange} />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mesajınız</FormLabel>

              <Textarea
                name="message"
                placeholder="Mesajınız"
                rows={6}
                resize="none"
                onChange={handleChange}
              />
            </FormControl>

            <div className="w-full flex justify-end">
              <Button
                type="submit"
                colorScheme="blue"
                bg="red.400"
                color="white"
                width={200}
                _hover={{
                  bg: 'red.500'
                }}>
                Gönder
              </Button>
            </div>
          </VStack>
        </form>

        <VStack className="my-12 md:ml-12 w-full">
          <Maps />
        </VStack>
      </div>
    </Box>
  );
};

const IconText = ({ data }) => {
  return (
    <div className="flex items-end m-8">
      <IconButton isRound colorScheme="red" aria-label="Send email" icon={data.icon} />
      <div className="flex flex-col ml-4">
        <Text fontSize="sm" fontWeight="bold">
          {data.title}
        </Text>
        <Text fontSize="sm">{data.text}</Text>
      </div>
    </div>
  );
};
