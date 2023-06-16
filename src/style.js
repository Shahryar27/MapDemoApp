import { StyleSheet } from "react-native";
import { COLORS, screenHeight } from "./constants";

export const commonStyles = StyleSheet.create({
  flexRowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.20,
    shadowRadius: 4,
    elevation: 4
  },
  cardWithShadow: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.11,
    shadowRadius: 4,
    elevation: 4
  },
  // PAID & UNPAID DOT
  dotView: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginRight: 5
  },
  // COMMON INPUTTEXT & INPUTVIEW STYLES
  inputView: {
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: screenHeight(1),
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconView: {
    marginRight: 10,
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  // NOTIFICATON POP CARD
  popupCard: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 99,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: COLORS.secondary
  }
})