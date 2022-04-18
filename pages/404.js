import Link from 'next/link';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, #231f20, teal.600)"
          backgroundClip="text">
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Sayfa Bulunamadı
        </Text>
        <Text color={'gray.500'} mb={6}>
          Üzgünüz , aradığınız sayfa bulunamadı.
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, #231f20,  teal.600)"
          color="white"
          variant="solid">
          <Link href="/">Ana Sayfaya Dön</Link>
        </Button>
      </Box>
    </div>
  );
}
