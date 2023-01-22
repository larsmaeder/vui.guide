export const GlobalStyles = {
  global: {
    "html, body": {
      backgroundColor: "white",
      color: "font.100",
    },
    ".chakra-stat": {
      dl: {
        display: "flex",
        alignItems: "center",
      },
    },
    ".default .rsc": {
      fontFamily: "body",
      color: "font.100",
    },
    ".default .rsc-cs": {
      p: 0,
      m: 0,
      borderRadius: "none",
      boxShadow: "none",
      justifyContent: "flex-start",
    },
    ".default .rsc-content": {
      p: 0,
      m: 0,
    },
    ".default .rsc-ts-image-container": {
      display: "none",
    },
    ".default .rsc-ts-bubble": {
      fontSize: { base: "md", sm: "lg", md: "xl", xl: "2xl" },
      // borderTopLeftRadius: 12,
      // borderTopRightRadius: 12,
      // borderBottomRightRadius: 12,
      // borderBottomLeftRadius: 0,
      // borderRadius: "12px 4 4 0",
      color: "inherit",
      py: { base: 3, md: 4 },
      px: { base: 4, md: 6 },
      m: 0.5,
      backgroundColor: "gray.200",
      boxShadow: "none",
      maxWidth: { base: "100%", md: "65%" },
    },
    ".default .rsc-container": {
      fontFamily: "inherit",
      borderRadius: "none",
      height: "auto",
      width: "100%",
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  },
};
