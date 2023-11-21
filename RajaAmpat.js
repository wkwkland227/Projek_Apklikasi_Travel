import React from "react";
import { TouchableOpacity, View, Text, Image} from "react-native";

// layar home
const RajaAmpat = ({ navigation }) => {
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
                    <Text style={{fontWeight:'bold', fontSize:20, color:'#F2F2F0', marginTop:35, marginLeft:30}}>Wisata Terumbu Karang</Text>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'#F2F2F0', marginLeft:77}}>Raja Ampat</Text>
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
                    source={require('./assets/rajaampat.jpeg')}
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
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>4.6/5</Text>
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
                            <Text style={{color:'#303030', fontSize:12, fontWeight:'bold'}}>Rp150.000</Text>
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
                    <Text style={{color:'#303030', fontSize:14}}>Terletak di dalam Bentang Laut Kepala Burung dan berada di jantung Segitiga Terumbu Karang Dunia, Raja Ampat adalah salah satu lokasi keanekaragaman hayati laut tertinggi di bumi. Mencakup 4.6 juta hektar daratan dan laut, di mana lebih dari 2 juta hektar-nya adalah kawasan konservasi perairan, kepulauan ini merupakan rumah bagi lebih dari 1.600 spesies ikan, 75% spesies karang yang dikenal di dunia, 6 dari 7 jenis penyu yang terancam punah, dan 17 spesies mamalia laut yang diketahui.</Text>

                    <Text style={{color:'#303030', fontSize:14, marginTop:12}}>Arus laut dalam yang kuat membawa nutrisi ke perairan Raja Ampat, hingga ke hutan bakau, danau air asin, dan hamparan padang lamunnya: membentuk jejaring makanan kompleks yang menjadi sumber makanan bagi keanekaragaman kehidupan laut yang spektakuler. Dijuluki pabrik spesies, Raja Ampat adalah pusat dari keanekaragaman hayati yang signifikan bagi dunia. Terumbu karang melimpah yang mengelilingi pulau-pulau di Raja Ampat menyediakan sumber nutrisi penting dan juga sebagai mata pencaharian masyarakat lokal.</Text>
                </View>
                
            </View>
        </View>
    );
}
export default RajaAmpat;
