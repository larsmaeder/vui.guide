import * as React from "react";
import { Box, Text } from "@chakra-ui/react";

const Toast = ({ title, description }) => {
  return (
    <Box color="white" bg="green.400" py={2} px={4} fontFamily="heading" borderRadius="md">
      <Text fontSize="xs" fontWeight="bold">{title}</Text>
      <Text fontSize="xs">{description}</Text>
    </Box>
  );
};

export default Toast;
