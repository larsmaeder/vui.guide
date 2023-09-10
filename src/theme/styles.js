export const GlobalStyles = {
  global: {
    "html, body": {
      backgroundColor: "white",
      color: "blue.800",
    },
    p: {
      fontSize: ["md", null, "lg", null, "xl", null],
      lineHeight: "1.6",
      my: [3, null, 4, null, 5, null],
    },
    ".chakra-stat": {
      dl: {
        display: "inherit",
        alignItems: "inherit",
      },
    },
    ".default .rsc": {
      fontFamily: "body",
      color: "purple.800",
    },
    ".default .rsc-cs": {
      p: 0,
      m: 0,
      borderRadius: "none",
      boxShadow: "none",
      justifyContent: "flex-start",
      background: "inherit",
    },
    ".default .rsc-content": {
      p: 0,
      m: 0,
      overflowY: "inherit",
    },
    ".default .rsc-ts-image-container": {
      display: "none",
    },
    ".default .rsc-ts-bubble": {
      fontFamily: "heading",
      fontSize: { base: "sm", sm: "md", md: "lg", xl: "xl" },
      color: "blue.800",
      borderColor: "gray.200",
      borderWidth: "1px",
      py: { base: 3, md: 4 },
      px: { base: 4, md: 6 },
      mb: { base: 3, md: 3 },
      background: "white",
      boxShadow: "none",
      borderRadius: 12,
      maxWidth: { base: "full", md: "xl", lg: "2xl" },
    },
    ".default .rsc-container": {
      fontFamily: "inherit",
      borderRadius: "none",
      height: "auto",
      width: "100%",
      boxShadow: "none",
      backgroundColor: "transparent",
      overflow: "visible",
    },
  },
};
