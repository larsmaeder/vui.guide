import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sundial = defineStyle({
  borderRadius: "full",
  background: "gray.100",
  height: "40px",
  width: "40px",
  color: "yellow.400",
});

export const IconButtonStyles = defineStyleConfig({
  variants: { sundial },
});
