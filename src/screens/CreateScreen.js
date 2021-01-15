import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View,TextInput ,Button} from 'react-native';
import {Context} from '../context/BlogContext';
 
const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPosts} =useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text1)=>setTitle(text1)}></TextInput>
      <Text style={styles.label}>Enter Content</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text2)=>setContent(text2)}></TextInput>
      <Button 
      title='submit'
      onPress={()=>{addBlogPosts(title,content,() => {
                        navigation.navigate('Index')});
                    }
       }
      >

      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  label :{
      fontSize : 20,
      margin :5,
      justifyContent: 'center',


  },
  input: {
      fontSize:20,
      borderWidth:1,
      borderColor:'blue',
      padding :5,
      marginBottom :10,
      justifyContent: 'center'


  }
});
export default CreateScreen;