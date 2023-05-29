import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D8FFDB',
    padding: 30,
    flexDirection: 'column',
  },
  paragraph: {
    margin: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#023535',
  },
  button: {
    backgroundColor: '#015958',
    padding: 20,

  },
  buttonMais: {
    backgroundColor: '#015958',
    height: 60,
    width: 60,
    justifyContent: 'center',
    padding: 8,
    marginTop: 20,
  },

  buttonMenos: {
    backgroundColor: '#015958',
    height: 60,
    width: 60,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonZerar: {
    alignItems: 'center',
    backgroundColor: '#015958',
    marginTop: 20,
    height: 60,
    width: 60,
    justifyContent: 'center',
   
  },

  textButton: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  counter: {
    borderWidth: 4,
    borderColor: '#D8FFDB',
    padding: 8,
    marginTop: 8,
    justifyContent: 'center',

  },
  textCounter: {
    fontSize: 32,
    color: '#424242',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 16,

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default styles;