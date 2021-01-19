import { theme } from "@chakra-ui/react";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    main: {
      50: "#fffff0",
      100: "#7BA0FF",
      200: "#5C8AFF",
      300: "#3C71FC",
      400: "#2D61E8",
      500: "#1F50D1",
      600: "#1B4BC9",
      700: "#1341BC",
      800: "#0C349E",
      900: "#03237A",
    },
    secondary: {
      background: "#FBF7EF",
      link: "#4A5568",
      card: "#ffffff",
      inputHelper: "#CBD5E0",
    },
    navItem: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
    },
  },
};
