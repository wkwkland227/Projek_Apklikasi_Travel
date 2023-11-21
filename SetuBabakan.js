import React from "react";
import { TouchableOpacity, View, Text, Image} from "react-native";

// layar home
const SetuBabakan = ({ navigation }) => {
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
                    <Text style={{fontWeight:'bold', fontSize:20, color:'#F2F2F0', marginTop:35, marginLeft:75}}>Setu Babakan</Text>
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
                    source={require('./assets/setubabakan.jpg')}
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
                    <Text style={{color:'#303030', fontSize:14}}>Sejak jaman dahulu kala penduduk inti kota Jakarta dan sekitarnya (Bodetabek) adalah orang Betawi. Orang Betawi sebelumnya disebut manusia proto Melayu Betawi adalah manusia yang mendiami kawasan utara Jawa bagian Barat. Disebut proto karena manusia ini belum diketahui namanya. Manusia proto ini sudah berdiam di sini sejak paling tidak abad ke-5 sebelum Masehi. Begitulah informasi yang didapat setelah dilakukan penelusuran atau ekskavasi situs-situs bersejarah yang dilakukan arkeolog atau ahli kepurbakalaan pada tahun 1970-an (periksa buku berjudul Jakarta dari Tepian Air ke Kota Proklamasi karya Sagimun M.D, 1988; dan Historical Site of Jakarta karya Adolf Heuken Sj., 1995).</Text>

                    <Text style={{color:'#303030', fontSize:14, marginTop:12}}>Ada pula informasi dari naskah klasik berjudul Syair Bujangga Manik. Syair ini menurut ahli naskah klasik, Prof. J. Noordhuyn, ditulis pada akhir paruh abad ke-15. Di situ disebutkan beberapa nama tempat sekitar Jakarta Kota, Labuan (Pelabuhan Kalapa), Pabeyaan (sekitar Meseum Bahari), Mandi Rancan (Jl. Kakap dan sekitarnya), Ancol Temyang (kemungkinan daerah Rowa Malaka). Lokasi Dunia Fantasi sekarang di Ancol adalah Ancol Kiji.</Text>

                </View>
                
            </View>
        </View>
    );
}
export default SetuBabakan;