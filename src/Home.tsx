import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeAction } from './store/actions/HomeActions';
import SafeAreaContainer from './containers/SafeAreaContainer';
import { FONTSIZE, IMAGES } from './constants'
import { Typography } from './components/atoms';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 300;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const Home = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state: any) => state.HomeReducer.homeData);

  const _map = useRef(null);
  const _scrollView = useRef(null);
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const [center, setCenter] = useState({
    latitude: 25.2048,
    longitude: 55.2708,
    latitudeDelta: 0.004 * 10,
    longitudeDelta: 0.005 * 10,
  });


  useEffect(() => {
    dispatch(getHomeAction())
  }, [])

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= homeData.length) {
        index = homeData.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { lat, lon } = homeData[index];
          _map.current.animateToRegion(
            {
              latitude: lat,
              longitude: lon,
              latitudeDelta: center.latitudeDelta,
              longitudeDelta: center.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  return (
    <SafeAreaContainer safeArea={false}>
      <View style={styles.container}>
        <MapView
          style={{
            flex: 1,
          }}
          ref={_map}
          region={center}
          initialRegion={center}
          showsUserLocation={true}
          showsMyLocationButton={false}
          showsCompass={false}
          followsUserLocation={true}
          loadingEnabled={true}
          toolbarEnabled={false}
          zoomEnabled={true}
          rotateEnabled={true}>
          <Marker coordinate={center}
          >
            <Image
              source={IMAGES.mapPinIcon}
              resizeMode="contain"
              style={{ height: 180, width: 180 }}
            />
          </Marker>
          {homeData.map((i: any, ind: number) => {
            return (
              <Marker
                coordinate={{
                  latitude: parseFloat(i.lat || 0),
                  longitude: parseFloat(i.lon || 0),
                }}
                key={ind}
                onPress={() => null}>
                <Image
                  source={IMAGES.homeMapIcon}
                  resizeMode="contain"
                  style={{ height: 45, width: 45 }}
                />
              </Marker>
            );
          })}
        </MapView>



        <Animated.ScrollView
          ref={_scrollView}
          horizontal
          pagingEnabled
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + 20}
          snapToAlignment="center"
          style={styles.scrollView}
          contentInset={{
            top: 0,
            left: SPACING_FOR_CARD_INSET,
            bottom: 0,
            right: SPACING_FOR_CARD_INSET
          }}
          contentContainerStyle={{
            paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: mapAnimation,
                  }
                },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          {homeData.map((val: any, index: number) => (
            <View style={styles.card} key={index}>
              <Image
                source={{ uri: val.thumbnail }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Typography size={FONTSIZE.M}>Name: {val.name}</Typography>
                <Typography>Address: {val.address}</Typography>
                <Typography>Timing: {val.timings}</Typography>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    </SafeAreaContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  marker: {
    width: 30,
    height: 30,
  }
});