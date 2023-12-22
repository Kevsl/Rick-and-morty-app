import { Image, Text, TouchableOpacity, View } from 'react-native'
import MainImage from '../Assets/image1.jpg'
import { HomeStyle } from '../Style/View/HomeStyle'

const Home = ({ navigation }) => {
  return (
    <View style={HomeStyle.container}>
      <Text style={HomeStyle.mainTitle}> Explore moutains </Text>

      <Image style={HomeStyle.HomeImage} source={MainImage} />
      <View style={HomeStyle.buttonContainer}>
        <TouchableOpacity
          style={HomeStyle.apiButton}
          onPress={() => {
            navigation.navigate('Profile')
          }}
        >
          <Text style={HomeStyle.apiButtonText}> Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={HomeStyle.apiButton}
          onPress={() => {
            navigation.navigate('Cards')
          }}
        >
          <Text style={HomeStyle.apiButtonText}> Cards</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home
