import {ScrollView, StyleSheet, TouchableHighlight, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {DataProp, data} from '../data/data';
import DefaultText from './DefaultText';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'stacks/StackNavigator';
import {
  FavoriteContext,
  FavoriteContextType,
} from '../content/FavoriteProvider';

const itemCategory = [
  {category: 'all', icon: 'home'},
  {category: 'temple', icon: 'home'},
  {category: 'beach', icon: 'check-circle'},
  {category: 'nature', icon: 'tree'},
];

const NearbyTrips = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [filteredItem, setFilteredItem] = useState<DataProp[]>(data);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const {
    favoritedItems,
    handleAddItemToFavorite,
    handleRemoveItemFromFavorite,
  } = useContext(FavoriteContext) as FavoriteContextType;

  const filterCategory = (category: string) => {
    if (category === 'all') {
      setFilteredItem(data);
      setActiveCategory('all');
    } else {
      const filterItem = data.filter(item => item.category === category);
      setFilteredItem(filterItem);
      setActiveCategory(category);
    }
  };
  const handlePress = (item: DataProp) => {
    return navigation.navigate('DetailsScreen', {item});
  };
  const handleFavoriteClick = (item: DataProp) => {
    const isItemFavorited = favoritedItems.some((favoriteItem: DataProp) => {
      return favoriteItem.id === item.id;
    });
    if (isItemFavorited) {
      handleRemoveItemFromFavorite(item.id);
    } else {
      handleAddItemToFavorite(item);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryView}>
        {itemCategory.map((item, index) => (
          <TouchableHighlight
            key={index}
            style={[
              styles.button,
              activeCategory === item.category ? styles.blueBg : null,
            ]}
            onPress={() => filterCategory(item.category)}>
            <View style={styles.categoryButton}>
              <View
                style={[
                  styles.categoryIconView,
                  activeCategory === item.category ? styles.whiteBg : null,
                ]}>
                <Icon
                  name={item.icon}
                  size={15}
                  color={activeCategory === item.category ? '#26333A' : '#fff'}
                />
              </View>
              <View>
                <DefaultText style={styles.buttonTxt}>
                  {item.category}
                </DefaultText>
              </View>
            </View>
          </TouchableHighlight>
        ))}
      </View>
      <View style={styles.nearbyView}>
        <DefaultText style={styles.nearbyTxt}>Nearby Me</DefaultText>
        <Icon name="ellipsis-h" color="#fff" size={20} />
      </View>
      <ScrollView
        style={styles.scrollViewContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {filteredItem.map((item, index) => (
          <TouchableHighlight
            style={styles.itemWrapper}
            key={index}
            onPress={() => handlePress(item)}>
            <LinearGradient
              colors={['#18538F', '#325775', '#4F4D59', '#673C2F', '#473530']}
              style={styles.gradient}>
              <TouchableHighlight
                style={styles.notificationView}
                onPress={() => handleFavoriteClick(item)}>
                <DefaultText>
                  <Icon
                    name="heart"
                    color={favoritedItems.includes(item) ? '#DB5858' : '#fff'}
                    size={20}
                  />
                </DefaultText>
              </TouchableHighlight>
              {item.image && (
                <Image source={item.image} style={styles.itemImage} />
              )}
              <DefaultText style={styles.nameTxt}>
                {item.name.length > 20
                  ? `${item.name.slice(0, 20)}...`
                  : item.name}
              </DefaultText>
              <DefaultText style={styles.addressTxt}>
                {item.address.length > 30
                  ? `${item.address.slice(0, 30)}...`
                  : item.address}
              </DefaultText>
            </LinearGradient>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};

export default NearbyTrips;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
  },
  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 8,
    paddingHorizontal: 5,
  },
  scrollViewContainer: {
    height: 260,
    width: '100%',
    columnGap: 30,
  },
  itemWrapper: {
    width: 250,
    height: 250,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
    marginRight: 20,
  },
  nearbyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 7,
  },
  button: {
    width: '24%',
    height: 40,
    alignItems: 'flex-start',
    paddingHorizontal: 7,
    justifyContent: 'center',
    backgroundColor: '#222F37',
    borderRadius: 25,
  },
  buttonTxt: {
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: '700',
  },
  nearbyTxt: {
    fontSize: 25,
    fontWeight: '700',
  },
  notificationView: {
    height: 35,
    width: 35,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#255590',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  itemImage: {
    width: '100%',
    height: '65%',
    borderRadius: 20,
  },
  nameTxt: {
    fontSize: 18,
    fontWeight: '700',
    paddingVertical: 10,
  },
  addressTxt: {
    fontWeight: '700',
  },
  blueBg: {
    backgroundColor: '#68B8EB',
  },
  whiteBg: {
    backgroundColor: 'white',
  },
  categoryIconView: {
    height: 25,
    width: 25,
    backgroundColor: '#434E55',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    padding: 5,
    borderRadius: 20,
  },
});
