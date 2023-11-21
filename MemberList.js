import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

// layar home memberlist
const MemberList = ({ navigation }) => {
    return (
        // view utama
        <View style={{ flex: 1, backgroundColor:'#F2F2F0'}}>
            {/* view untuk component atas */}
            <View style={{ flexDirection:'row', flex:1, backgroundColor:'#8BCFFF'}}>
                {/* view untuk icon */}
                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate("LandingPage")}>
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
    
            {/* view untuk komponen bawah */}
            <View style={{backgroundColor:'#F2F2F0', flex:9}}>
                <View style={{flex:3, alignItems: "center", justifyContent: "center"}}>
                {/* view untuk kotak di tengah */}
                    <View style={{backgroundColor:'#8BCFFF', width:350, height: 560, flexDirection:'column', borderRadius:16}}>
                        <View style={{flex:0.8, justifyContent:'center', alignItems:'center', marginTop:2}}>
                            <Text style={{fontWeight:"bold", fontSize:30, color:'#F2F2F0', marginTop:20}}>Member</Text>
                        </View>

                        <View style={{flex:0.9}}><Text style={{fontWeight:'bold', fontSize:35, marginLeft:22, color:'#FEFBFB'}}>- - - - - - - - - - - - - -</Text></View>



                        <View style={{flex:2, flexDirection:'row', justifyContent:'flex-start', justifyContent:'space-evenly', marginTop:15}}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("ProfileMemberGeorge")}
                            style={{flexDirection:'row'}}>
                            <Image style={{resizeMode:'contain', height:102, width:90}} source={require('./assets/profileBulat2.png')}/>
                            <Text style={{backgroundColor:'#F2F2F0', width:210, height:90, textAlign:'center', paddingTop:25, borderRadius:16, color:'#9B9999', marginLeft:10}}>Hello Im Wilhelmus George Agung Putranto</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex:2, flexDirection:'row', justifyContent:'flex-start', justifyContent:'space-evenly'}}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("ProfileMemberJames")}
                            style={{flexDirection:'row'}}>
                            <Image style={{resizeMode:'contain', height:102, width:90}} source={require('./assets/profileBulat2.png')}/>
                            <Text style={{backgroundColor:'#F2F2F0', width:210, height:90, textAlign:'center', paddingTop:35, borderRadius:16, color:'#9B9999', marginLeft:10}}>Hello Im James David Simamora</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex:2, flexDirection:'row', justifyContent:'flex-start', justifyContent:'space-evenly'}}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("ProfileMemberChelsea")}
                            style={{flexDirection:'row'}}>
                            <Image style={{resizeMode:'contain', height:102, width:90}} source={require('./assets/profileBulat2.png')}/>
                            <Text style={{backgroundColor:'#F2F2F0', width:210, height:90, textAlign:'center', paddingTop:35, borderRadius:16, color:'#9B9999', marginLeft:10}}>Hello Im Chelsea Ramadhani</Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                </View>
            </View>


        </View>
    );
}
export default MemberList;
