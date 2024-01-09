import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../stacks/StackNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import DefaultText from '../components/DefaultText';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';

const users = [
  {image: require('../assets/ceo.jpeg')},
  {image: require('../assets/ceo1.jpg')},
  {image: require('../assets/ceo2.png')},
  {image: require('../assets/ceo3.jpg')},
  {image: require('../assets/ceo4.jpg')},
  {image: require('../assets/ceo5.jpg')},
  {image: require('../assets/ceo6.jpg')},
];
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;
const DetailsScreen = ({route}: DetailsProps) => {
  const navigation = useNavigation();
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ImageBackground source={item.image} style={styles.backgroundImage}>
          <View style={styles.topView}>
            <TouchableHighlight
              style={styles.roundedView}
              onPress={() => navigation.goBack()}>
              <Text style={styles.caretTxt}>&lt;</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.roundedView}>
              <AntDesign name="message1" size={25} color="#fff" />
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailsView}>
        <LinearGradient
          colors={[
            '#392E27',
            '#564536',
            '#6D757A',
            '#49555D',
            '#6E767C',
            '#899297',
            '#828B91',
          ]}
          style={styles.gradient}>
          <View style={styles.nameView}>
            <DefaultText style={styles.nameTxt}>{item.name}</DefaultText>
            <DefaultText style={styles.priceTxt}>
              <Text style={styles.dollarSign}>$</Text>
              {item.price}.00
            </DefaultText>
          </View>
          <View style={styles.addressView}>
            <DefaultText style={styles.addressTxt}>
              <Icon6 name="location-dot" color="red" size={18} /> {item.address}
            </DefaultText>
            <DefaultText>/per person</DefaultText>
          </View>
          <View>
            <DefaultText style={styles.descriptionTxt}>
              {item.description.length > 250 ? (
                <>
                  {item.description.slice(0, 250)}
                  <Text style={styles.seeMoreText}>see more</Text>
                </>
              ) : (
                item.description
              )}
            </DefaultText>
          </View>
          <View style={styles.ratingWrapper}>
            <View style={styles.userView}>
              {users.slice(0, 4).map((user, index) => (
                <View key={index}>
                  <Image source={user.image} style={styles.userImage} />
                </View>
              ))}
              {users.length >= 5 ? (
                <LinearGradient
                  colors={['#757C81', '#515F69', '#465661']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.memberGradient}>
                  <DefaultText style={styles.membersTxt}>
                    +{users.length - 4} members
                  </DefaultText>
                </LinearGradient>
              ) : null}
            </View>
            <View style={styles.ratingView}>
              <DefaultText>{item.star}</DefaultText>
              <Icon name="star" color="yellow" size={15} />
              <DefaultText>({item.review}k review)</DefaultText>
            </View>
          </View>
          <Image source={require('../assets/GTA.png')} style={styles.mapView} />
          <View>
            <TouchableHighlight style={styles.button}>
              <>
                <Icon6 name="bookmark" size={20} color="#fff" />
                <DefaultText style={styles.buttonTxt}>Book Now</DefaultText>
              </>
            </TouchableHighlight>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  background: {
    height: '60%',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  backgroundImage: {
    height: '100%',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  roundedView: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caretTxt: {
    fontSize: 30,
    color: '#fff',
  },
  detailsView: {
    height: '55%',
    width: '100%',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
  },
  gradient: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  nameView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTxt: {
    fontSize: 20,
    fontWeight: '700',
    width: '70%',
  },
  priceTxt: {
    fontSize: 20,
    fontWeight: '700',
  },
  addressView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressTxt: {
    fontSize: 16,
    fontWeight: '700',
    width: '70%',
  },
  descriptionTxt: {
    fontSize: 17,
    fontWeight: '500',
  },
  seeMoreText: {
    color: 'blue',
    fontWeight: '600',
    fontSize: 18,
  },
  mapView: {
    width: '100%',
    height: 100,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#55A4D5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
  },
  buttonTxt: {
    fontSize: 18,
    fontWeight: '500',
  },
  ratingWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: -15,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  memberGradient: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
  },
  membersTxt: {
    fontSize: 17,
    fontWeight: '600',
  },
  dollarSign: {
    color: '#A25450',
  },
});
