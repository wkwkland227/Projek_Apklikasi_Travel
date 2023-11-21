import React from "react";
import { TouchableOpacity, View, Text, Image} from "react-native";

// layar home
const TreasureBayBintan = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor:'#F2F2F0'}}>
            {/* view komponen atas/ navigasi */}
            <View style={{ flexDirection:'row', flex:1, backgroundColor:'#8BCFFF'}}>
                {/* view untuk icon */}
                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <TouchableOpacity>
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
                <View style={{flex:4, justifyContent: 'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'#F2F2F0', marginTop:35, marginLeft:40}}>Treasure Bay Bintan</Text>
                </View>
            </View>

            {/* komponen bawah/ warna putih */}
            <View style={{backgroundColor:'#F2F2F0', flex:9, flexDirection:'coloum'}}>
                <View style={{flex:4, flexDirection:'coloumn', justifyContent:'center', alignItems:'center'}}>
                    <Image
                    style={{
                        height:200,
                        width: 370,
                        borderRadius:10
                    }}
                    source={require('./assets/treasurebaybintan.jpg')}
                    />
                </View>

                <View style={{flex:0.5, flexDirection:'coloumn'}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:3, marginLeft:20}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Rating</Text>
                        </View>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>:</Text>
                        </View>
                        <View style={{flex:4, marginLeft:20}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>4.5/5</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{flex:0.5, flexDirection:'coloumn'}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:3, marginLeft:20}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Harga Tiket</Text>
                        </View>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>:</Text>
                        </View>
                        <View style={{flex:4, marginLeft:20}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Rp 50.000</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{flex:1.5, flexDirection:'coloumn'}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:3, marginLeft:20}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Jam Operasional</Text>
                        </View>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>:</Text>
                        </View>
                        <View style={{flex:4, justifyContent:'center', marginLeft:20}}>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Senin (07:00-16:00)</Text>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Selasa (07:00-16:00)</Text>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Rabu (07:00-16:00)</Text>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Kamis (07:00-16:00)</Text>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Jumat (07:00-15:00)</Text>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Sabtu (07:00-15:00)</Text>
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Minggu (09:00-15:00)</Text>
                        </View>
                    </View>
                </View>
                


                <View style={{flex:5, flexDirection:'coloumn', padding:30}}>
                    <Text style={{color:'#303030', fontSize:14}}>Treasure Bay Bintan dikenal sebagai salah satu wisata rekreasi air terbesar dan nomor satu di Pulau Bintan Kepulauan Riau. Dikembangkan di atas lahan seluas 338 hektar dengan berbagai infrastruktur yang telah memenuhi standar internasional. Laguna air laut buatan ini dirancang mengintegrasikan rekreasi.</Text>

                    <Text style={{color:'#303030', fontSize:14, marginTop:12}}>Treasure Bay menjadi lokasi wisata yang menawarkan pesona dan Treasure Bay menjadi lokasi wisata yang menawarkan pesona dan keindahan alam yang cantik dan indah. Taman rekreasi air sekaligus alam ini mengunggulkan kolam air laut yang telah difilter dengan teknologi modern yang ramah lingkungan dan hemat energi.</Text>

                    <Text style={{color:'#303030', fontSize:14, marginTop:12}}>Treasure Bay menjadi lokasi wisata yang menawarkan pesona dan Treasure Bay menjadi lokasi wisata yang menawarkan pesona dan keindahan alam yang cantik dan indah. Taman rekreasi air sekaligus alam ini mengunggulkan kolam air laut yang telah difilter dengan teknologi modern yang ramah lingkungan dan hemat energi.</Text>

                </View>
                
            </View>
        </View>
    );
}
export default TreasureBayBintan;