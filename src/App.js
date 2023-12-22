import { View } from 'react-native'
import { AppStyle } from './Style/View/AppStyle'
import MainImage from './Assets/image1.jpg'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './View/Home'
import Profile from './View/Profile'
import Cards from './View/Cards'
import SingleCharacter from './View/SingleCharacter'
import Episodes from './View/Episodes'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <View style={AppStyle.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Cards"
            component={Cards}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000',
              },
            }}
          />

          <Stack.Screen
            name="singleCharacter"
            component={SingleCharacter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="episode"
            component={Episodes}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: '#000',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App
