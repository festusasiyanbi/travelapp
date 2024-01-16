import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import {DataProp} from '../data/data';
import LinearGradient from 'react-native-linear-gradient';
import DefaultText from '../components/DefaultText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'stacks/StackNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import {
  FavoriteContext,
  FavoriteContextType,
} from '../content/FavoriteProvider';

const Favorite = () => {
  const {favoritedItems} = useContext(FavoriteContext) as FavoriteContextType;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = (item: DataProp) => {
    return navigation.navigate('DetailsScreen', {item});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parentWrapper}>
        <View style={styles.popularView}>
          <DefaultText style={styles.popularTxt}>Favorited Items</DefaultText>
        </View>
        {favoritedItems.length ? (
          <ScrollView style={styles.scrollViewContainer}>
            {favoritedItems.map((item, index) => (
              <TouchableHighlight
                style={styles.itemWrapper}
                key={index}
                onPress={() => handlePress(item)}>
                <LinearGradient
                  colors={[
                    '#18538F',
                    '#325775',
                    '#4F4D59',
                    '#673C2F',
                    '#473530',
                  ]}
                  style={styles.gradient}>
                  {item.image && (
                    <Image source={item.image} style={styles.itemImage} />
                  )}
                  <View style={styles.detailsView}>
                    <DefaultText style={styles.nameTxt}>
                      {item.name.length > 20
                        ? `${item.name.slice(0, 20)}...`
                        : item.name}
                    </DefaultText>
                    <View style={styles.locationView}>
                      <Icon6 name="location-dot" color="red" size={18} />
                      <DefaultText style={styles.addressTxt}>
                        {item.address.length > 30
                          ? `${item.address.slice(0, 30)}...`
                          : item.address}
                      </DefaultText>
                    </View>
                    <View style={styles.ratingView}>
                      <View style={styles.reviewView}>
                        <DefaultText style={styles.ratingTxt}>
                          {item.star}
                          <Icon name="star" color="yellow" size={12} />
                        </DefaultText>
                        <DefaultText style={styles.ratingTxt}>
                          {item.review}k
                        </DefaultText>
                      </View>
                      <View>
                        <DefaultText style={styles.ratingTxt}>
                          ${item.price}.00
                        </DefaultText>
                      </View>
                    </View>
                    <View style={styles.descriptionView}>
                      <DefaultText style={styles.descriptionTxt}>
                        {item.description.length > 50
                          ? `${item.description.slice(0, 50)}...`
                          : item.description}
                      </DefaultText>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableHighlight>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyView}>
            <DefaultText style={styles.emptyTxt}>
              Your favorite list is empty.
            </DefaultText>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0A171F',
  },
  parentWrapper: {
    rowGap: 20,
    paddingHorizontal: 10,
  },
  scrollViewContainer: {
    height: '90%',
    width: '100%',
  },
  popularView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemWrapper: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    marginVertical: 10,
  },
  popularTxt: {
    fontSize: 25,
    fontWeight: '700',
    paddingTop: 5,
  },
  itemImage: {
    width: '30%',
    height: '100%',
    borderRadius: 20,
  },
  detailsView: {
    width: '70%',
    flexDirection: 'column',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
  },
  locationView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: 5,
    paddingVertical: 10,
  },
  nameTxt: {
    fontSize: 20,
    fontWeight: '700',
  },
  addressTxt: {
    fontSize: 17,
    fontWeight: '700',
  },
  ratingView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
  },
  descriptionView: {
    width: '100%',
    paddingVertical: 10,
  },
  descriptionTxt: {
    fontWeight: '600',
  },
  ratingTxt: {
    fontSize: 18,
    fontWeight: '700',
  },
  gradient: {
    width: '100%',
    height: '100%',
    padding: 5,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emptyView: {
    alignItems: 'center',
    marginTop: 20,
  },
  emptyTxt: {
    fontSize: 20,
    color: 'red',
  },
});
