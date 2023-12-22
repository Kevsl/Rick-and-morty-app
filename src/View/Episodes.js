import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { CardStyle } from '../Style/View/CardStyle'
import { getCharacters } from '../Service/RickService'
import { useEffect, useState } from 'react'
import headerImage from '../Assets/rnm.png'
import { useRoute } from '@react-navigation/native'
import { GoBackArrow } from '../Components/GoBackArrow'

const Episodes = ({ navigation }) => {
  const route = useRoute()
  const id = route.params?.id
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/episode/${id}`
  )
  const [datas, setDatas] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [charactersData, setCharactersData] = useState([])

  useEffect(() => {
    getCharacters(url).then((res) => {
      setDatas(res)

      Promise.all(res.characters.map((res2) => getCharacters(res2))).then(
        (responses) => {
          setCharactersData(responses)
          setIsLoaded(true)
        }
      )
    })
  }, [url])

  return (
    <View style={CardStyle.container}>
      {isLoaded ? (
        <View>
          <Image source={headerImage} style={CardStyle.logo} />
          <GoBackArrow navigation={navigation} />

          <View style={CardStyle.scrollViewContainer}>
            <Text style={CardStyle.cardText}>{datas.name} </Text>
            <Text style={CardStyle.cardText}>{datas.episode} </Text>

            <ScrollView style={CardStyle.scrollView}>
              <View style={CardStyle.cardsContainer}>
                {charactersData &&
                  charactersData.map((loop) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('singleCharacter', {
                            id: loop.id,
                          })
                        }
                        key={loop.id}
                        style={CardStyle.card}
                      >
                        <Image
                          source={{ uri: loop.image }}
                          style={CardStyle.characterImage}
                        />
                        <Text style={CardStyle.cardText}>{loop.name}</Text>
                        <Text style={CardStyle.cardText}>{loop.species}</Text>
                        <Text style={CardStyle.cardText}>
                          {loop.origin.name}
                        </Text>
                      </TouchableOpacity>
                    )
                  })}
              </View>
            </ScrollView>
          </View>
        </View>
      ) : (
        <ActivityIndicator color="#fff" size="large" />
      )}
    </View>
  )
}

export default Episodes
