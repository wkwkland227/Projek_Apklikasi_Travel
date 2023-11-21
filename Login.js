import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image,} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


//layar home 
const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/logo.png")} style={styles.image} />
            <Text style={styles.title}>
                Login your account
            </Text>
            <View style={styles.email}>
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
                <TouchableOpacity
                    style={{ ...styles.Registerbutton, ...styles.shadow }} onPress={() => navigation.navigate("LandingPage")}
                >
                    <Text style={styles.register}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.or}>
                    OR
                </Text>

                <TouchableOpacity style={styles.nextgoogle} >
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8BCFFF',
        alignItems: "center",
    },
    image: {
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
    email: {
        width: 282,
        height: 352,
        backgroundColor: "#FCF8F8",
        marginTop: 20,
        borderRadius: 20,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    password:{
        marginTop: 16,
      marginBottom: 9,
      fontWeight:"600",
      fontSize:14,
      width:"90%",
    },
    inputpassword:{
        width:246,
        height: 34,
        backgroundColor: "#F2F2F0",
        borderRadius:16,
    },
    Registerbutton: {
        width: 253,
        height: 36,
        backgroundColor: "#1F3F95",
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 34,
    },
    register: {
        color: "white",
        fontWeight: "600",
    },
    or:{
        fontSize:14,
        fontWeight:"600",
        color:"#1F3F95",
        marginTop:27,
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
        marginTop:73,
    },
    text1:{
        color:"white",
        marginRight:6,
        fontWeight:"500",
        fontSize:12,
    },
    text2:{
        color:"#1F3F95",
        fontSize:12,
        
    }
});

export default Login;
