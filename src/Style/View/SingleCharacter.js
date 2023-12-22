import { StyleSheet } from 'react-native'

export const SingleCharacterStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    paddingTop: 50,
  },

  apiButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  apiButton: {
    backgroundColor: '#000',
    borderColor: 'white',
    borderWidth: 1,
    width: '10%',
    marginLeft: '5%',
    borderRadius: 25,
    height: 34,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollView: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginHorizontal: '5%',
    maxHeight: '100%',
  },
  scrollViewContainer: {
    width: '100%',
    height: '70%',
    marginTop: 20,
  },
  characterImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  episode: {
    fontSize: 25,
    color: '#000',
  },
  characterCard: {
    width: '30%',
    borderRadius: 9,
    borderWidth: 1,
    borderBlockColor: 'black',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: 150,
    objectFit: 'cover',
    marginHorizontal: '25%',
    borderRadius: 25,
  },
  card: {
    width: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    marginVertical: 20,
    marginHorizontal: '5%',
    borderRadius: 9,
  },
  cardText: {
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  },
  characName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 30,
    width: '90%',
    marginHorizontal: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  none: {
    opacity: 0,
  },
  appear: {
    color: 'gray',
    marginVertical: 10,
    textAlign: 'center',
    width: '50%',
    marginHorizontal: '25%',
  },
})
