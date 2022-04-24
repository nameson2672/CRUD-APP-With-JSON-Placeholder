import { useState, useEffect } from "react";
import { uuid } from 'uuidv4';
import Container from '@mui/material/Container';
import { Pagination } from "@mui/material";
import Post from "./Components/Post";
import CreatePost from "./Components/CreatePost";
import BaseLineUrl from './Components/ApiCalls/BaseLineUrl';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function App() {
  const [posts, setPost] = useState(null);
  const [viewPosts, setViewPosts] = useState(10);
  const [openCreateModel, setOpenCreateModel] = useState(false);
    const handleOpenCreateModel = () => setOpenCreateModel(true);
    const handleCloseCreateModel = () => {setOpenCreateModel(false);}

  useEffect(() => {
    async function fetchData() {
      const getPosts = await BaseLineUrl.get("/posts");
      setPost(getPosts.data);
    }
    fetchData();


  }, []);

  const deletPost = async (id) => {
    await BaseLineUrl.delete(`/posts/${id}`);
    const newPosts = posts.filter((item) => {
      return item.id !== id;
    });
    setPost(newPosts);
  }

  const UpdatePostApiCall = async (newData) => {
    if(newData.id<=100 ){
      await BaseLineUrl.put(`/posts/${newData.id}`, newData);
    }
    console.log(typeof posts[0].id);
    console.log(typeof newData.id);
    const newpostsAfterUpdate = posts.filter((item)=>{
      if(item.id === newData.id){
        item.body = newData.body;
        item.title = newData.title;
        console.log("fond");
      }
      return item;
    })
    setPost(newpostsAfterUpdate);
  }
  
  const CreatePostApiCall = async (newData)=>{
    await BaseLineUrl.post(`/posts`,newData)
    setPost([newData,...posts]);
    setViewPosts(10);
  }
  const PaganationChange = (e,page)=>{
    setViewPosts(page*10);
  }

  return (
    <>
    <Box sx={{ '& > :not(style)': { m: 1 }, position:"fixed", bottom:"50px", right:"50px" }} onClick={handleOpenCreateModel}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Box>
    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px", flexDirection: "column"}}>
    
      {posts != null &&

        posts.slice(viewPosts-10,viewPosts+1).map((item) => (<Post key={item.id} id={item.id} userId={item.userId} title={item.title} body={item.body} deletPost={deletPost} UpdatePostApiCall={UpdatePostApiCall} />))
      }
      <Pagination count={10} shape="rounded" onChange={PaganationChange} Margin={"2"} sx={{my:5}}/>
    </Container>
      <CreatePost id={posts?.length+1} handleClose={handleCloseCreateModel} open={openCreateModel} CreatePostApiCall={CreatePostApiCall}/>
    </>
  );
}

export default App;
