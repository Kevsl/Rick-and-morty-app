import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { CardStyle } from '../Style/View/CardStyle'
import { getCharacters } from '../Service/RickService'
import { useEffect, useState } from 'react'
import headerImage from '../Assets/rnm.png'
import { GoBackArrow } from '../Components/GoBackArrow'

const Cards = ({ navigation }) => {
  const [charactersList, setCharactersList] = useState([])
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
  const [datas, setDatas] = useState()

  useEffect(() => {
    getCharacters(url).then((res) => {
      setDatas(res)
      setCount(res.info.count)
      setCharactersList(res.results)
    })
  }, [url])

  return (
    <View style={CardStyle.container}>
      <Image source={headerImage} style={CardStyle.logo} />
      <View style={CardStyle.scrollViewContainer}>
        <Text style={CardStyle.cardText}>{count} résultats</Text>

        <ScrollView style={CardStyle.scrollView}>
          <View style={CardStyle.cardsContainer}>
            {charactersList &&
              charactersList.map((character) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('singleCharacter', {
                        id: character.id,
                      })
                    }
                    key={character.id}
                    style={CardStyle.card}
                  >
                    <Image
                      source={{ uri: character.image }}
                      style={CardStyle.characterImage}
                    />
                    <Text style={CardStyle.cardText}>{character.name}</Text>
                    <Text style={CardStyle.cardText}>{character.species}</Text>
                    <Text style={CardStyle.cardText}>
                      {character.origin.name}
                    </Text>
                  </TouchableOpacity>
                )
              })}
          </View>
        </ScrollView>
        <View style={CardStyle.buttonContainer}>
          <TouchableOpacity
            style={datas?.info.prev ? CardStyle.apiButton : CardStyle.none}
            onPress={() => {
              datas.info.prev && setUrl(datas.info.prev)
            }}
          >
            <Text style={CardStyle.apiButtonText}> {'<'} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CardStyle.apiButton}
            onPress={() => {
              datas.info.next && setUrl(datas.info.next)
            }}
          >
            <Text style={CardStyle.apiButtonText}> {'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Cards
