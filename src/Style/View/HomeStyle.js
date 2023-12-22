import { StyleSheet } from 'react-native'

export const HomeStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#14213D',
    paddingTop: 50,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginLeft: '5%',
    marginTop: 30,
  },
  HomeImage: {
    width: '90%',
    height: 200,
    marginHorizontal: '5%',
    borderRadius: 9,
    marginVertical: 30,
  },

  apiButton: {
    backgroundColor: '#14213D',
    borderColor: 'white',
    borderWidth: 1,
    width: '40%',
    marginLeft: '5%',
    borderRadius: 25,
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  apiButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  buttonContainer: {
    width: '90%',
    marginVertical: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  arrow: {
    color: '#fff',
    position: 'absolute',
    top: 30,
    left: 20,
    fontSize: 32,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    width: 50,
    height: 50,
    textAlign: 'center',
    padding: 2,
  },
  arrowContainer: {
    position: 'relative',
  },
})
