import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import MainImage from '../Assets/image1.jpg'
import { HomeStyle } from '../Style/View/HomeStyle'
import { GoBackArrow } from '../Components/GoBackArrow'

const Profile = ({ navigation }) => {
  return (
    <View style={HomeStyle.container}>
      <GoBackArrow navigation={navigation} />

      <Text>Profile</Text>
    </View>
  )
}

export default Profile
