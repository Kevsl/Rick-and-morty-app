import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { getCharacters } from '../Service/RickService'
import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SingleCharacterStyle } from '../Style/View/SingleCharacter'
import { GoBackArrow } from '../Components/GoBackArrow'

const SingleCharacter = ({ navigation }) => {
  const route = useRoute()
  const id = route.params?.id
  const [charactersList, setCharactersList] = useState([])
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const [datas, setDatas] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    id > 0 &&
      getCharacters(url).then((res) => {
        setDatas(res)
        setCharactersList(res)
        setIsLoaded(true)
      })
  }, [url])

  return (
    <View>
      {isLoaded ? (
        <View style={SingleCharacterStyle.container}>
          <GoBackArrow navigation={navigation} />

          <Image
            source={{ uri: datas?.image }}
            style={SingleCharacterStyle.logo}
          />
          <View style={SingleCharacterStyle.scrollViewContainer}>
            <Text style={SingleCharacterStyle.characName}>{datas?.name} </Text>

            <ScrollView style={SingleCharacterStyle.scrollView}>
              <Text style={SingleCharacterStyle.appear}>Apparaît dans :</Text>
              <View style={SingleCharacterStyle.cardsContainer}>
                {charactersList &&
                  charactersList.episode.map((episode) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('episode', {
                            id: episode.replace(
                              'https://rickandmortyapi.com/api/episode/',
                              ''
                            ),
                          })
                        }}
                        key={episode}
                        style={SingleCharacterStyle.card}
                      >
                        <Text style={SingleCharacterStyle.cardText}>
                          Episode :
                          {episode.replace(
                            'https://rickandmortyapi.com/api/episode/',
                            ' '
                          )}
                        </Text>
                      </TouchableOpacity>
                    )
                  })}
              </View>
            </ScrollView>
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator size={'large'} color={'#14213D'} />
        </View>
      )}
    </View>
  )
}

export default SingleCharacter
