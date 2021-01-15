import React,{useContext} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesome} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{blogPost.title}</Text>
      <Text style={styles.label}>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({navigation})=> {
  return {
     headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id:navigation.getParam('id')} )
     }>
      <FontAwesome name='pencil' size ={40} />
     </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  label: {
    marginTop: 60,
    fontSize:30,
    padding: 5
  }
});
export default ShowScreen;
