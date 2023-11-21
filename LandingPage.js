import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, } from 'react-native';

// layar home 
const Landingpage = ({ navigation }) => {
  return (
    // membuat container
    <View style={styles.container}>
      {/* membuat judul kata sambutan */}
      <View style={styles.title}>
        {/* pembuatan kata terpisah welcome to dan locawisata */}
        <Text style={styles.welcome}>
          Welcome to
        </Text>
        <Text style={styles.locawisata}>
          Locawisata
        </Text>
      </View>
      <View>
      {/* membuat keterangan menu */}
      <Text style={styles.menu}>
        Menu
      </Text>
      </View>
      {/* membuat kotak pilihan member list dan destination list */}
      {/* membuat background kotak */}
      <View style={styles.kotak1}>
        
        <View style={{ flex: 1}}>

        </View>
        <View style={styles.kotak2}>
          <Text style={styles.ourmember}>
              Our member
          </Text>
          <TouchableOpacity style={styles.member}  onPress={() => navigation.navigate("MemberList")}>
              <Image source={require("./assets/Group.png")} style={styles.gambarmember}/>
          </TouchableOpacity>
          <Text style={styles.ourmember}>
            Destination
          </Text>
          <TouchableOpacity style={styles.member} onPress={() => navigation.navigate("ListDestinasi")}>
              <Image source={require("./assets/Destination.png")} style={styles.gambardestinasi}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BCFFF',
    alignItems: "center",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    marginTop: 54,

  },
  welcome: {
    color: "#1F3F95",
    fontSize: 24,
    fontWeight: "600",
    marginRight: 8
  },
  locawisata: {
    color: "#FCF8F8",
    fontSize: 24,
    fontWeight: "600",
  },
  menu: {
    color: "#FCF8F8",
    fontSize: 20,
    fontWeight: "400",
    marginTop: 36,
  },
  kotak1: {
    position: 'relative',
    width: 262,
    height: 525,
    backgroundColor: "#028CB9",
    borderRadius: 17,
    marginTop: 34,
    // flex: 1
  },
  kotak2: {
    width: 262,
    height: 484,
    backgroundColor: "#FCF8F8",
    borderRadius: 16,
    // flex: 2,
    // marginTop,
  },
  ourmember:{
    color:"#1F3F95",
    fontWeight:"600",
    fontSize:20,
    marginTop:35,
    textAlign:"center"
  },
  member:{
    width:234,
    height:132,
    backgroundColor:"#028CB9",
    marginLeft:15,
    marginTop:13,
    borderRadius:11,
  },
  gambarmember:{
    alignItems:"center",
    marginLeft:60,
    marginTop:10
  },
  gambardestinasi:{
    width: '100%', 
    height: '100%',
    resizeMode: 'contain', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Landingpage;
