// import React,{useState} from 'react';
// import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

// const BlogPostForm = () => {
//     const [title, setTitle] = useState(blogPost.title);
//   const [content, setContent] = useState(blogPost.content);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter Title</Text>
//       <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}></TextInput>
//       <Text style={styles.label}>Enter Content</Text>
//       <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}></TextInput>
//       <Button 
//       title='submit'
//       onPress={()=>{;
//                     }
//        }
//       >

//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   label :{
//     fontSize : 20,
//     margin :5,
//   },
//   input: {
//         fontSize:20,
//         borderWidth:1,
//         borderColor:'blue',
//         padding :5,
//         marginBottom :10
//   }
// });
// export default BlogPostForm;