import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image,} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


//layar home 
const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView style={styles.scroll}>
            <View style={styles.container}>
            <Image source={require("./assets/logo.png")} style={styles.image} />
            <Text style={styles.title}>
                Make your account
            </Text>
            <View style={styles.wraper}>
              <Text style={styles.textemail}>
              Telephone or email
              </Text>
                <TextInput style={styles.inputemail} placeholder='Insert your phone number / email'>
                    
                </TextInput>

                <Text style={styles.password}>
                    Password
                </Text>
                <TextInput style={styles.inputpassword} placeholder='Input your password'secureTextEntry={true}>

                </TextInput>
                
                <Text style={styles.confirmtext}>
                    Confirm Password
                </Text>

                <TextInput style={styles.confirm} placeholder='Input your password'secureTextEntry={true}>

</TextInput>
                <TouchableOpacity
                    style={{ ...styles.Registerbutton, ...styles.shadow }}onPress={() => navigation.navigate("LandingPage")} // Menggunakan gaya shadow di sini
                >
                    <Text style={styles.register}>register</Text>
                </TouchableOpacity>

                <Text style={styles.or}>
                    OR
                </Text>

                <TouchableOpacity style={styles.nextgoogle}>
                    <Image source={require("./assets/google.png")} />
                    <Text>
                        Continue With Google
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.extra}>
                <Text style={styles.text1}>
                Don't have an account yet?
            </Text>
            <Text style={styles.text2}>
            Register
            </Text>
            </View>
        </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8BCFFF',
        alignItems: "center",
        width:360,
        height:810,
    },
    image: {
        marginTop:2,
        width: 266,
        height: 266,
    },
    title:{
        width:"75%",
        color:"white",
        fontWeight:"500",
        fontSize:16,
    },
    textemail: {
      marginTop: 25,
      marginBottom: 9,
      fontWeight:"600",
      fontSize:14,
      width:"90%",
    },
    TextInput:{
        marginLeft:18,
        },

    inputemail:{
        width:246,
        height: 34,
        flexShrink:0,
        backgroundColor: "#F2F2F0",
        borderRadius:10,

    },
    wraper: {
        width: 282,
        height: 407,
        backgroundColor: "#FCF8F8",
        marginTop: 9,
        borderRadius: 20,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    password:{
        marginTop: 10,
      marginBottom: 9,
      fontWeight:"600",
      fontSize:14,
      width:"90%",
    },
    inputpassword:{
        width:246,
        height: 34,
        backgroundColor: "#F2F2F0",
        borderRadius:10,
    },
    confirmtext:{
        marginTop: 10,
      marginBottom: 9,
      fontWeight:"600",
      fontSize:14,
      width:"90%",
    },
    confirm:{
        width:246,
        height: 34,
        backgroundColor: "#F2F2F0",
        borderRadius:10,
    },
    Registerbutton: {
        width: 253,
        height: 36,
        backgroundColor: "#1F3F95",
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 27,
    },
    register: {
        color: "white",
        fontWeight: "600",
    },
    or:{
        fontSize:14,
        fontWeight:"600",
        color:"#1F3F95",
        marginTop:20,
        marginBottom:15,
    },
    nextgoogle:{
        width:226,
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderColor:"gray",
        borderRadius:8,
    },
    extra:{
        display:"flex",
        flexDirection:"row",
        marginTop:46,
    },
    text1:{
        color:"white",
        marginRight:6,
        fontWeight:"800",
        fontSize:12,
    },
    text2:{
        color:"#1F3F95",
        fontSize:12,
        fontWeight:"800"
    },
    scroll:{
        marginVertical:-39
       },

});

export default Register;
