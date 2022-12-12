import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const sundial = defineStyle({
  borderRadius: "full",
  background: "sundial.200",
  height: "40px",
  width: "40px",
  color: "yellow.400",
});

export const IconButtonStyles = defineStyleConfig({
  variants: { sundial },
});
