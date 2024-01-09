import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DefaultLinearGradient from '../components/DefaultLinearGradient';
import DefaultText from '../components/DefaultText';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {RootStackParamList} from 'stacks/StackNavigator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const dots = [{width: 30}, {width: 5}, {width: 5}];
function Home({navigation}: HomeProps): JSX.Element {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/temple.jpg')}
        style={styles.background}>
        <View style={styles.textsWrapper}>
          <DefaultText style={styles.invitationTxt}>
            Come along as we explore the world together
          </DefaultText>
          <DefaultText style={styles.experienceTxt}>
            Experience seamless travel planning and booking with our
            user-friendly app
          </DefaultText>
          <View style={styles.dotWrapper}>
            {dots.map((dot, index) => (
              <View key={index} style={[{width: dot.width}, styles.dotView]}>
                <DefaultText style={styles.dotTxt}>.</DefaultText>
              </View>
            ))}
          </View>
        </View>
      </ImageBackground>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={[styles.button, styles.adventureButton]}
          onPress={() => navigation.navigate('AvailableTrips')}>
          <DefaultLinearGradient
            textContent="Start Your Adventure"
            style={styles.button}
          />
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.authButton]}>
          <DefaultText> Already have an account?</DefaultText>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#141414',
  },
  background: {
    height: '83%',
    position: 'relative',
  },
  wrapper: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    rowGap: 10,
    borderWidth: 2,
    borderColor: 'blue',
  },
  textsWrapper: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  invitationTxt: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 10,
  },
  experienceTxt: {
    fontSize: 17,
    color: 'gray',
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    rowGap: 10,
  },
  button: {
    width: '95%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  adventureButton: {
    fontWeight: '800',
    backgroundColor: '#72C4F7',
  },
  authButton: {
    fontWeight: '800',
    backgroundColor: '#373737',
  },
  dotWrapper: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 10,
  },
  dotView: {
    backgroundColor: 'white',
    borderRadius: 50,
  },
  dotTxt: {
    height: 5,
  },
});

export default Home;
