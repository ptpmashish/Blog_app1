import React,{useCallback, useContext,useEffect} from 'react'; 
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    const {state,deleteBlogPosts, getBlogPosts} = useContext(Context);

    //used to make sure getBlogposts is called only once otherwise we are gonna end up calling getblogposts everytime state
    //changes and rerenders indexscreen and causes and infinte loop
    useEffect(()=> {
      getBlogPosts();
      //below code ensures to call getblogposts everytime we come back to indexscreen
      navigation.addListener('didFocus',()=>{
        getBlogPosts();
      });
      return () => {
        listener.remove();
      }
    }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor ={(blogpost)=> blogpost.title }
        renderItem={({item}) =>{
            return (
            <TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})}>
              <View style={styles.row}>
                  <Text style={styles.font}>{item.title}-{item.content}</Text>
                  <TouchableOpacity onPress={()=> deleteBlogPosts(item.id)}>
                    <Feather style={styles.icon} name="trash"/>
                  </TouchableOpacity>
              </View>
            </TouchableOpacity>
            );
        }}
      />
    </View>
  );
}

 IndexScreen.navigationOptions = ({navigation})=> {
   return {
      headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
      <Feather name='plus' size ={30} />
      </TouchableOpacity>
   };
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d35f19',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  row : {
      flexDirection : 'row',
      justifyContent :'space-between',
      paddingVertical : 20,
      borderBottomWidth: 2,
      borderColor : 'gray',
      paddingHorizontal:10
  },
  font : {
    fontSize : 20,
  
  },
  icon : {
    fontSize : 25
  }
});

export default IndexScreen;