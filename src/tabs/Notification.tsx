import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DefaultText from '../components/DefaultText';
import Icon from 'react-native-vector-icons/FontAwesome';

const Notifcation = () => {
  const date = new Date();
  const day = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const notifications = [
    {
      id: 1,
      type: 'Hike',
      flight_name: 'PHL',
      new_price: 359,
      date: day,
      message:
        'Track Price changes for your recent SAN-PHL search for' +
        "Jan 10 - Jan 12 so you don't miss out on a good deal",
    },
    {
      id: 2,
      type: 'Dip',
      flight_name: 'PHL',
      new_price: 329,
      date: day,
      message:
        'Track Price changes for your recent SAN-PHL search for' +
        "Jan 10 - Jan 12 so you don't miss out on a good deal",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.notificationView}>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.itemView}>
            <View style={styles.arrowView}>
              {notification.type === 'Hike' ? (
                <Icon name="arrow-up" color="#fff" style={styles.arrow} />
              ) : (
                <Icon name="arrow-down" color="#fff" style={styles.arrow} />
              )}
            </View>
            <View style={styles.messageView}>
              <DefaultText style={styles.typeTxt}>
                Price {notification.type}: {notification.flight_name}
                &nbsp;flights now ${notification.new_price}
              </DefaultText>
              <DefaultText>{notification.message}</DefaultText>
              <DefaultText style={styles.dateTxt}>
                {notification.date}
              </DefaultText>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Notifcation;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    height: '100%',
    backgroundColor: '#0A171F',
    paddingTop: 5,
  },
  notificationView: {
    rowGap: 15,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    columnGap: 10,
    paddingHorizontal: 10,
    height: 100,
  },
  arrowView: {
    width: '5%',
  },
  arrow: {
    fontSize: 20,
  },
  messageView: {
    width: '90%',
    rowGap: 10,
  },
  typeTxt: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateTxt: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
  },
});
