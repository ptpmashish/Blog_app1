//import React,{useState,useReducer} from 'react';
import createDataContext from './CreateDataContext';


//const BlogContext = React.createContext();  

const blogReducer =(state, action)=> {
  switch (action.type) {
      case 'delete_blogPosts' : 
        return  state.filter((blogPost)=>blogPost.id!==action.payload)
      case 'add_blogPosts' : 
       return [
           ...state, 
        {
            id : Math.floor(Math.random()*99999), 
            title: action.payload.title,
            content : action.payload.content  
        } 
        ];
      case 'edit_blogPosts' : 
       return state.map((blogPost)=> {
           return blogPost.id===action.payload.id? action.payload : blogPost;
       });
      default :
       return state;
  }  
};

const addBlogPosts = (dispatch) => {
    return (title, content,callback) => {
        dispatch({type : 'add_blogPosts', payload: {title,content} });
        callback();
    };
};

const deleteBlogPosts = (dispatch) => {
    return (id) => {
        dispatch({type : 'delete_blogPosts',payload: id});
    };
};

const editBlogPosts = (dispatch) => {
    return (id, title, content, callback) => {
        console.log(id,title, content )
        dispatch({type : 'edit_blogPosts', payload: {id,title,content} });
        callback();
    };
};  

// export const BlogProvider = ({children}) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer,[]);

//     const addBlogPosts = () => {
//         dispatch({type : 'add_blogPosts'});
//     };
//     // const addBlogPosts = () => {
//     //     setBlogPosts([...blogPosts,{title :`blogpost ${blogPosts.length +1}`}]);
//     // };
//     //const blogPosts = [{title: 'blogpost 1'},{title: 'blogpost 2'}];

//     return (<BlogContext.Provider value = {{data :blogPosts,addBlogPosts}} >{children}</BlogContext.Provider>);
// };

// export default BlogContext; 

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPosts, deleteBlogPosts, editBlogPosts},
    [{title:"Hello", content:"Sky",id:1}]
)