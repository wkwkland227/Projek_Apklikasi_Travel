import React from "react";
import { TouchableOpacity, FlatList, View, Text, Image, StyleSheet } from "react-native";

const DATA = [
  {
      image: require('./assets/rajaampat.jpeg'),
      title: "Raja Ampat",
      rate: "4.6/5",
      deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
      link:"RajaAmpat"
  },
  {
    image: require('./assets/danaukelimutu.jpg'),
    title: "Danau Kelimutu",
    rate: "4.7/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:""
  },
  {
    image: require('./assets/airterjunpenimbungan.jpg'),
    title: "Air Terjun Penimbungan",
    rate: "4.8/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:""
  },
  {
    image: require('./assets/candiborobudur.jpg'),
    title: "Candi Boroboro",
    rate: "4.2/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:""
  },
  {
    image: require('./assets/pantaibunaken.jpg'),
    title: "Pantai Bunaken",
    rate: "4.4/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:""
  },
  {
    image: require('./assets/treasurebaybintan.jpg'),
    title: "Treasure Bay Bintan",
    rate: "4.5/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:"TrasureBayBintan"
  },
  {
    image: require('./assets/pantaikuta.jpg'),
    title: "Pantai Kuta",
    rate: "4.9/5",
      deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
      link:""
  },
  {
    image: require('./assets/tamannasionalwaykambas.jpg'),
    title: "Taman Way Kambas",
    rate: "4.4/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:""
  },
  {
    image:  require('./assets/pantaipink.jpg'),
    title: "Pantai Pink",
    rate: "4.6/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:""
  },
  {
    image: require('./assets/bukitmerese.png'),
    title: "Bukit Merese",
    rate: "4.8/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:""
  },
  {
    image: require('./assets/gualemo.jpg'),
    title: "Gua Lemo",
    rate: "4.7/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link:""
  },
  {
    image: require('./assets/setubabakan.jpg'),
    title: "Situ babakan",
    rate: "4.6/5",
    deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
    link: "SetuBabakan"
  },
  {
    image: require('./assets/svargabumi.jpg'),
      title: "Svargha Bumi",
      rate: "4.6/5",
      deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
      link:""
  },
  {
    image: require('./assets/tagalalang.jpg'),
      title: "Tagalalang",
      rate: "4.8/5",
      deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
      link:""
  },
  {
    image: require('./assets/hutanmonyetubud.jpg'),
      title: "Hutan Monyet Ubud",
      rate: "4.4/5",
      deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
      link:""
  },
  {
    image: require('./assets/TamansariJogja-9.jpg'),
      title: "Kampung Wisata Taman Sari",
      rate: "4.6/5",
      deskripsi: "Lorem ipsum dolor set omet, contresctur adoxpatik eit funce ut tortuirconet set",
      link:""
  },
];

// Layar Detail
const ListDestinasi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        List Destinasi Wisata
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navigation.navigate(item.link)}>
              <View>
                <Image
                  style={{ width: 132, height: 89, borderRadius: 10, marginTop: 40}}
                  source={item.image}image
                />

              <View>
                <Text style={{ fontSize: 20, left: 10, flexWrap: 'wrap' }}>{item.title}</Text>
                <Text style={{ fontSize: 10, left: 10 }}>{item.rate}</Text>
                <Text style={{ fontSize: 10, left: 10, flexWrap: 'wrap'}}>{item.deskripsi}</Text>  
              </View>
              </View>
</TouchableOpacity>
            </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Added to center items horizontally
    marginTop: 120,
    left: 10,
    bottom: 30,
  },
  teks: {
    fontSize: 20,
    fontWeight:"bold",
    color: "grey",
    
  }
});

export default ListDestinasi;