import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Stack,
  CloseButton,
  useToast,
  Icon,
  Flex,
} from "@chakra-ui/react";

const Toast = ({ title, description, id, icon, ...style }) => {
  const toast = useToast();
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
          <Box fontWeight="bold">{title}</Box>
          <Box>{description}</Box>
        </Box>
        <CloseButton onClick={closeToast} aria-label="Close" size="sm" />
      </Stack>
    </Box>
  );
};

export default Toast;

Toast.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  colorScheme: PropTypes.string,
  size: PropTypes.string,
};

Toast.defaultProps = {
  icon: undefined,
  colorScheme: "gray",
  size: "md",
};
