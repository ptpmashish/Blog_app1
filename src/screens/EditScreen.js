import React,{useContext,useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput,Button} from 'react-native';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation}) => {
  const {state,editBlogPosts} = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    // <View style={styles.container}>
    //   {/* <Text style={styles.label}>{blogPost.title}</Text>
    //   <Text style={styles.label}>{blogPost.content}</Text> */}
    //     <Text style={styles.label}>{navigation.getParam('id')}</Text> 
    // </View>
    <View style={styles.container}>
    <Text style={styles.label} marginTop= '30'>Edit Title</Text>
    <TextInput style={styles.input} value={title} onChangeText={(text1)=>setTitle(text1)}></TextInput>
    <Text style={styles.label}>Edit Content</Text>
    <TextInput style={styles.input} value={content} onChangeText={(text2)=>setContent(text2)}></TextInput>
    <Button 
    title='submit'
    onPress={()=>{editBlogPosts(navigation.getParam('id'),title,content,() => {
                      navigation.navigate('Index')});
                  }
     }
    >

    </Button>
  </View>
  );
}

// ShowScreen.navigationOptions = ({navigation})=> {
//   return {
//      headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Edit')}>
//       <FontAwesome name='pencil' size ={30} />
//      </TouchableOpacity>
//   };
// };

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },
  label: {
    fontSize:20,
    margin :5,
    alignItems: 'center',

  },
  input: {
    fontSize:20,
    borderWidth:1,
    borderColor:'blue',
    paddingHorizontal :30,
    marginBottom :10,
    


}
});
export default EditScreen;
