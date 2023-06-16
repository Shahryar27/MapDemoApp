import { Dimensions } from "react-native";

export const BASEURL = '';

export const IMAGEURL = '';

export const MAP_KEY = '';

export const STRIPE_PK = ''

export const screenHeight = (percent: number) => {
  const windowHeight = Dimensions.get("window").height;
  return (windowHeight * percent) / 100;
};

export const screenWidth = (percent: number) => {
  const windowWidth = Dimensions.get("window").width;
  return (windowWidth * percent) / 100;
};

export const COLORS = {
  // primary: "#02579A",
  primary: "#0590C2",
  onPrimary: "#fff",
  // secondary: "#17c2eb",
  secondary: "#04b3dd",
  onSecondary: "#333258",
  secondaryGradient: ['#00B2DD', '#20C9F2', '#00B2DD'],
  secondaryLight: "#0fbbe4",

  surface: "#fff",
  surfaceInv: "#101420",
  onSurface: "#000",
  background: "#fff",
  text: "#1d2733",

  muted: "#b2b4b7",
  disable: "#989799",
  overlay: "#00000040",
  rating: "#ffb301",
  border: "#e5e5e5",
  danger: "#FF6961",
  darkDanger: "#F2272C",

  black: "#000",
  white: "#fff",
  yellow: "#FDB515",
  lightGray: "#e5e5e5",
  gray: "#e5e5e5",
  darkGray: "#999B9F",
  extraLightGray: "#F9F9FC"
};

export const FONTS = {
  PoppinsBold: "Poppins-Bold",
  PoppinsSemiBold: "Poppins-SemiBold",
  PoppinsRegular: "Poppins-Regular",
  PoppinsMedium: "Poppins-Medium",
};

export const FONTSIZE = {
  XXL: 22,
  XL: 20,
  L: 18,
  M: 16,
  S: 14,
  XS: 12,
  XXS: 10,
};

export const IMAGES = {
  logo: require("./assets/images/logo.png"),
  mapPinIcon: require('./assets/images/map_pin.png'),
  homeMapIcon: require('./assets/images/home_map_icon.png')
};

export const headerHeight = 50;
