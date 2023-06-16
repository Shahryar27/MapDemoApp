import React, {useContext, useEffect, useImperativeHandle, useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Typography} from '../components/atoms';
import {CardPopup} from '../components/molecules/CardPopup';
import {COLORS, FONTSIZE} from '../constants';
import {commonStyles} from '../style';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    {/* <SafeAreaView> */}
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    {/* </SafeAreaView> */}
  </View>
);

export default SafeAreaContainer = props => {
  const {toast, loader} = useSelector(state => state.AppReducer);
  const statusPopup = useSelector(state => state.AppReducer.statusPopup);

  const {mode = 'dark', backgroundColor = 'transparent', style = {}} = props;

  return (
    <View
      style={[
        styles.AndroidSafeArea,
        {
          flex: 1,
          ...style,
        },
      ]}>
      {loader && <Loader />}
      {toast.show && <PopUpToast />}
      {statusPopup && <StatusPopUp />}

      <MyStatusBar
        backgroundColor={backgroundColor}
        barStyle={mode === 'light' ? 'dark-content' : 'light-content'}
      />
      {/* NOTIFICATION POPUP */}
      {/* { 
                false && <View style={{
                    ...commonStyles.popupCard,
                    top: 45
                }}>
                    <Typography size={FONTSIZE.M} color={ COLORS.primary }>
                        Booking Accepted By Jhon Doe
                    </Typography>
                    <Typography size={FONTSIZE.XS} textType='light'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </View>
            } */}
      {props.children}
    </View>
  );
};

const StatusPopUp = () => {
  const user = useSelector(state => state.UserReducer.user);

  switch (user.status) {
    case 0:
      return (
        <CardPopup
          title="Account Verification"
          description="You acount is under verification. Please wait for admin approval."
        />
      );
    case 2:
      return (
        <CardPopup
          title="Account Rejected"
          description={`You acount is rejected. Due to ${user.reason}`}
        />
      );
    case 3:
      return (
        <CardPopup
          title="Account Inactive"
          description={`You acount is inactive. Plesase contact admin for more information.`}
        />
      );

    default:
      return <></>;
  }
};

export const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: 0.5,
        zIndex: 999,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator color="#fff" size={'large'} />
    </View>
  );
};

export const PopUpToast = () => {
  const dispatch = useDispatch();
  const {toast} = useSelector(state => state.AppReducer);

  const translateAnim = useRef(new Animated.Value(150)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const duration = 300;
  useEffect(() => show(), []);

  const show = () => {
    Animated.parallel([
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }).start(),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      setTimeout(() => hide(), 2000);
    });
  };

  const hide = () => {
    Animated.parallel([
      Animated.timing(translateAnim, {
        toValue: 150,
        duration: duration,
        useNativeDriver: true,
      }).start(),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      dispatch({
        type: 'SHOW_TOAST',
        toast: {
          show: false,
          title: '',
        },
      });
    });
  };

  return (
    <Animated.View
      style={{
        ...commonStyles.popupCard,
        alignItems: 'center',
        bottom: 45,
        opacity: fadeAnim,
        transform: [{translateY: translateAnim}],
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
      }}>
      <Typography size={FONTSIZE.S} color={'#fff'} textType={'light'}>
        {toast.title}
      </Typography>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
