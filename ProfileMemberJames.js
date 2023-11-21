import React from "react";
import { TouchableOpacity, View, Text, Image} from "react-native";

// layar home
const ProfileMemberJames = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor:'#F2F2F0'}}>
            {/* view komponen atas/ navigasi */}
            <View style={{ flexDirection:'row', flex:1, backgroundColor:'#8BCFFF'}}>
                {/* view untuk icon */}
                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <TouchableOpacity
                onPress={() => navigation.navigate("MemberList")}>
                <Image
                style={{
                    resizeMode: 'contain',
                    height: 30,
                    width: 37,
                    marginTop:35
                }}
                source={require('./assets/back.png')}
                />
                </TouchableOpacity>
                </View>
                {/* view untuk teks */}
                <View style={{flex:4, justifyContent: 'center', marginLeft:40}}>
                    <Text style={{fontWeight:'bold', fontSize:24, color:'#F2F2F0', marginLeft:30, marginTop:35}}>Member list</Text>
                </View>
            </View>

            {/* komponen bawah/ warna putih */}
            <View style={{backgroundColor:'#F2F2F0', flex:9}}>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    {/* kotak biru ditengah */}
                    <View style={{backgroundColor:'#8BCFFF', width:350, height: 640, flexDirection:'column', borderRadius:16}}>
                        {/* profile */}
                        <View style={{flex:6, justifyContent: 'center', alignItems:'center'}}>
                            <Image style={{resizeMode:'contain', height:162, width:150}} source={require('./assets/profileBulat2.png')}/>
                        </View>
                        
                        {/* nama */}
                        <View style={{flex:2, flexDirection:'coloumn', justifyContent:'flex-start', marginLeft:20}}>
                            <Text style={{color:'#FEFBFB', fontWeight:'bold', fontSize:16, marginBottom:8}}>Name : </Text>
                            <Text style={{backgroundColor:'#FEFBFB', width:300, height:35, padding:5, borderRadius:10, color:'#303030'}}>James David Simamora</Text>
                        </View>

                        <View style={{flex:2, flexDirection:'coloumn', justifyContent:'flex-start', marginLeft:20}}>
                            <Text style={{color:'#FEFBFB', fontWeight:'bold', fontSize:16, marginBottom:8}}>Birth Date : </Text>
                            <Text style={{backgroundColor:'#FEFBFB', width:300, height:35, padding:5, borderRadius:10, color:'#303030'}}>December 16th 2023</Text>
                        </View>

                        <View style={{flex:2, flexDirection:'coloumn', justifyContent:'flex-start', marginLeft:20}}>
                            <Text style={{color:'#FEFBFB', fontWeight:'bold', fontSize:16, marginBottom:8}}>Instagram : </Text>
                            <Text style={{backgroundColor:'#FEFBFB', width:300, height:35, padding:5, borderRadius:10, color:'#303030'}}>@james_david.s</Text>
                        </View>
                        
                        <View style={{flex:4, flexDirection:'coloumn', justifyContent:'flex-start', marginLeft:20}}>
                            <Text style={{color:'#FEFBFB', fontWeight:'bold', fontSize:16, marginBottom:8}}>Hobby : </Text>
                            <Text style={{backgroundColor:'#FEFBFB', width:300, height:100, padding:5, borderRadius:10, color:'#303030'}}>Listening to music, Playing drums, Playing guitar, Sports</Text>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
}
export default ProfileMemberJames;
