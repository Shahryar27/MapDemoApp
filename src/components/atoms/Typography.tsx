import React from "react";
import { Text } from "react-native";
import { COLORS, FONTS, FONTSIZE } from "../../constants";

type Props = {
  textType?: 'bold' | 'semiBold' | 'regular' | 'light';
  size?: number;
  color?: string;
  align?: string;
  style?: Object;
  children: any;
  numberOfLines?: number,
  capitalize?: boolean,
  onPress?: () => void,
};

export const Typography = (props: Props) => {

  const {
    textType = 'regular',
    size = FONTSIZE.S,
    color = COLORS.text,
    align = 'left',
    style = {},
    numberOfLines = undefined,
    onPress,
    capitalize = false
  } = props;
  
  let textStyle: any = {
    lineHeight: size * 1.6,
    fontSize: size,
    color: color,
    textAlign: align,
    textTransform: capitalize ? 'capitalize': 'none',
    ...style
  }
  switch (textType) {
    case 'bold':
      textStyle.fontFamily = FONTS.PoppinsBold;
      break
    case 'semiBold':
      textStyle.fontFamily = FONTS.PoppinsSemiBold;
      break
    // case 'regular':
    //   textStyle.fontFamily = FONTS.PoppinsMedium;
    //   break
    // case 'light':
    //   textStyle.fontFamily = FONTS.PoppinsRegular;
    //   break
    // default:
    //   textStyle.fontFamily = FONTS.PoppinsRegular;
    //   break
  }
  
  return (
      <Text style={ textStyle } onPress={onPress} suppressHighlighting={true} numberOfLines={numberOfLines}  >
        {props.children}
      </Text>
  );
};
