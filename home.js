import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image,} from 'react-native';


//layar home 
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require("./assets/logo.png")} style={styles.image} />
            <View style={styles.loginbutton}>
                <TouchableOpacity
                    style={{ ...styles.TouchableOpacity, ...styles.shadow }} // Menggunakan gaya shadow di sini
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.Registerbutton, ...styles.shadow }} onPress={() => navigation.navigate("register")} // Menggunakan gaya shadow di sini
                >
                    <Text style={styles.register}>Register</Text>
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Image style={styles.google} source={require("./assets/google.png")} />
                    <Image style={styles.facebook} source={require("./assets/facebook.png")} />
                    <Image style={styles.apple} source={require("./assets/apple.png")} />
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
    image: {
        width: 266,
        height: 266,
    },
    loginbutton: {
        width: 260,
        height: 234,
        backgroundColor: "#FCF8F8",
        marginTop: 20,
        borderRadius: 20,
    },
    TouchableOpacity: {
        width: 224,
        height: 27,
        backgroundColor: "#EAEAEA",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 18,
        marginTop: 62,
    },
    login: {
        color: "#1F3F95",
        fontWeight: "600",
    },
    Registerbutton: {
        width: 224,
        height: 27,
        backgroundColor: "#1F3F95",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 18,
        marginTop: 23,
    },
    register: {
        color: "white",
        fontWeight: "600",
    },
    iconContainer: {
        flexDirection: 'row',
        marginTop: 45,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.72)',
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.72,
        shadowRadius: 12,
    },
});

export default HomeScreen;
