import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultText from '../components/DefaultText';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const date = new Date();
  const year = date.getFullYear();
  const userProfile = {
    name: 'Festus',
    email: 'festusasiyanbi80@gmail.com',
    balance: 10,
    navigations: [
      {icon: 'user', type: 'Profile'},
      {icon: 'envelope', type: 'Communications'},
      {icon: 'credit-card', type: 'Payments'},
      {icon: 'tag', type: 'Coupons'},
      {icon: 'dollar', type: 'Credits'},
      {icon: 'cog', type: 'Settings'},
      {icon: 'question-circle-o', type: 'Help and Feedback'},
    ],
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View>
          <DefaultText style={styles.nameTxt}>
            Hi, {userProfile.name}
          </DefaultText>
          <DefaultText style={styles.emailTxt}>{userProfile.email}</DefaultText>
        </View>
        <View>
          <DefaultText style={styles.balanceTxt}>
            ${userProfile.balance}.00
          </DefaultText>
        </View>
      </View>
      <DefaultText>
        Manage your profile, rewards, and preferences all in one place
      </DefaultText>
      <View style={styles.navigationWrapper}>
        {userProfile.navigations.map((navigation, index) => (
          <View key={index} style={styles.navigationView}>
            <View style={styles.typeView}>
              <View style={styles.typeIconView}>
                <Icon name={navigation?.icon} size={20} color="#fff" />
              </View>
              <View>
                <DefaultText style={styles.typeTxt}>
                  {navigation.type}
                </DefaultText>
              </View>
            </View>
            <View>
              <DefaultText style={styles.caretTxt}>&gt;</DefaultText>
            </View>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <DefaultText style={styles.logoutButtonTxt}>Log out</DefaultText>
      </TouchableOpacity>
      <View style={styles.policyView}>
        <DefaultText>Privacy Policy | Term of use</DefaultText>
        <DefaultText style={styles.rightTxt}>
          &copy; Copyright {year} | Festus Asiyanbi {'\n'} All rights reserved.
        </DefaultText>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    height: '100%',
    backgroundColor: '#0A171F',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  nameTxt: {
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 5,
  },
  emailTxt: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
  },
  balanceTxt: {
    fontSize: 25,
    fontWeight: '700',
    paddingBottom: 5,
  },
  navigationWrapper: {
    rowGap: 10,
  },
  navigationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
  },
  typeView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '50%',
    columnGap: 15,
  },
  typeIconView: {
    width: 25,
  },
  typeTxt: {
    fontSize: 18,
  },
  caretTxt: {
    fontSize: 20,
    fontWeight: '700',
  },
  logoutButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#5194C1',
    height: 45,
    borderRadius: 10,
    marginVertical: 30,
  },
  logoutButtonTxt: {
    color: '#5194C1',
  },
  policyView: {
    alignItems: 'center',
    rowGap: 10,
    marginTop: 20,
  },
  rightTxt: {
    color: 'lightgray',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
