import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONTSIZE } from "../../constants";
import { Typography } from "../atoms";

interface Props {
  title: string,
  description: string,
  options?: Array<any>,
}

export const CardPopup = ({ title, description, options = [] }: Props) => {
  
    return (
        <View style={ styles.card }>
          <Typography size={ FONTSIZE.XL } style={{ marginBottom: 10 }}>{ title }</Typography>
          <Typography align='center' textType='light'>{ description }</Typography>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-around',
            width: '100%',
            marginTop: 10
          }}>
            { options.map((option, index) => {
              return (<TouchableOpacity onPress={ option.onPress }>
                <Typography textType='light' size={ FONTSIZE.S }>
                  { option.label }
                </Typography>
              </TouchableOpacity>)
            } ) }
          </View>
        </View>
    );
  };

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: "80%",
    maxWidth: 350,
    borderRadius: 5,
    alignItems: 'center',
    padding: 15
  }
});