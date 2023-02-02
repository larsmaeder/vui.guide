import * as React from "react";
import {
  Box,
  Stack,
  Text,
  CloseButton,
  useToast,
  Icon,
  Flex,
} from "@chakra-ui/react";

const Toast = ({ title, description, id, icon, ...style }) => {
  const toast = useToast();
  // check id and close Toast if matching
  function closeToast() {
    if (id) {
      toast.close(id);
    }
  }
  return (
    <Box
      color="white"
      bg={`${style.colorScheme}.600`}
      py={2}
      px={4}
      fontFamily="heading"
      borderRadius="md"
      boxShadow="base"
      fontSize={`${style.size}`}
    >
      <Stack direction="row" spacing={3}>
        {icon && (
          <Flex align="center">
            <Icon as={icon} boxSize={5} />
          </Flex>
        )}
        <Box>
          <Text fontWeight="bold">{title}</Text>
          <Text>{description}</Text>
        </Box>
        <CloseButton onClick={closeToast} aria-label="Close" size="sm" />
      </Stack>
    </Box>
  );
};

export default Toast;
