import * as React from "react";
import { Box, Stack, Text, CloseButton } from "@chakra-ui/react";

const Toast = ({ title, description, closeFunc }) => {
  return (
    <Box
      color="white"
      bg="gray.600"
      py={2}
      px={4}
      fontFamily="heading"
      borderRadius="md"
      boxShadow="base"
    >
      <Stack direction="row" spacing={3}>
        <Box>
          <Text fontSize="xs" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="xs">{description}</Text>
        </Box>
        <CloseButton onClick={closeFunc} aria-label="Close" size="sm" />
      </Stack>
    </Box>
  );
};

export default Toast;
