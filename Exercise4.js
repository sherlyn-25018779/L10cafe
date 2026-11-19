import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image,} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const datasource = [
  {
    data: [
      {
        name: 'Iced Matcha Latte',
        price: '$5.80',
        description: 'Earthy green tea whisked with chilled milk over ice.',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-ozgla1-XvRP5Tp-yzBbFCtrOYgPM9KfSDhFa_UdAQ&s=10',
      },
      {
        name: 'Latte Art Espresso',
        price: '$5.20',
        description: 'Smooth espresso shot with velvety steamed milk.',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCMWm8TDBUIvIPMVf_ufcyj-kjRbs5VEhrsAtCQXEfLaz_LCCHrtnfTG0&s=10',
      },
      {
        name: 'Iced Americano',
        price: '$4.50',
        description: 'Bold espresso poured over cold water and ice.',
        image:
            'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Iced Caramel Macchiato',
        price: '$6.20',
        description: 'Creamy milk and espresso finished with caramel drizzle.',
        image:
            'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
    title: 'DRINKS',
    icon: 'cup',
    bgcolor: '#D8E8DF',
    rowBg: '#F4F9F6',
  },
  {
    data: [
      {
        name: 'Butter Croissant',
        price: '$4.50',
        description: 'Flaky, golden pastry with a soft buttery center.',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZteOet3NatEauPQtamqOsPWGeUlyIbsKmJQ07osQz1Q&s=10',
      },
      {
        name: 'Classic Tart',
        price: '$4.80',
        description: 'Crisp pastry shell filled with sweet cream and fruit.',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKzC3alqB7XlSEtv7DRtgSsBVbHjizezYnxaVr0xKdw&s=10',
      },
      {
        name: 'Cinnamon Roll',
        price: '$4.90',
        description: 'Soft swirled bun spiced with cinnamon and sweet glaze.',
        image:
            'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Blueberry Muffin',
        price: '$4.20',
        description: 'Tender bakery muffin packed with sweet blueberries.',
        image:
            'https://images.pexels.com/photos/1657343/pexels-photo-1657343.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
    title: 'PASTRIES',
    icon: 'cupcake',
    bgcolor: '#F3E5D8',
    rowBg: '#FDF8F3',
  },
];

const renderItem = ({ item, section }) => {
  return (
      <TouchableOpacity
          style={[styles.opacityStyle, { backgroundColor: section.rowBg }]}
          onPress={() =>
              Alert.alert(`${item.name} (${item.price})`, item.description)
          }
      >
        <View style={styles.textGroup}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.priceStyle}>{item.price}</Text>
          <Text style={styles.descStyle}>{item.description}</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Cafe Menu List</Text>

        <SectionList
            sections={datasource}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderItem}
            contentContainerStyle={{ padding: 10 }}
            renderSectionHeader={({ section: { title, icon, bgcolor } }) => (
                <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                  <MaterialCommunityIcons name={icon} size={20} color="#2F3E36" /> {title}
                </Text>
            )}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    marginTop: 25,
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginHorizontal: 14,
    marginTop: 10,
    marginBottom: 4,
    color: '#2B303A',
  },
  opacityStyle: {
    borderWidth: 1,
    borderColor: '#D6D8E0',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  textGroup: {
    flex: 1,
    marginRight: 12,
  },
  textStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1F2421',
    textAlign: 'left',
  },
  priceStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A6B5D',
    marginTop: 4,
    textAlign: 'left',
  },
  descStyle: {
    fontSize: 13,
    color: '#5C6670',
    marginTop: 4,
    lineHeight: 18,
    textAlign: 'left',
  },
  itemImage: {
    width: 130,
    height: 130,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 19,
    marginTop: 8,
    marginBottom: 8,
    paddingVertical: 7,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2F3E36',
    borderWidth: 1,
    borderColor: '#C5CCD4',
    borderRadius: 8,
  },
});