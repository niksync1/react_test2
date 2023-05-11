import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import EditPost from './EditPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes  } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize.js';
import { DataProvider } from './context/DataContext';

function App() {
 
  const { width } =useWindowSize();
 
  return (
    <DataProvider>
    <Routes>
      
      <Route path="/" element={<Layout width = { width}/>}>
      
        <Route index element={<Home/>} />        
        <Route path="post">
          <Route index element={<NewPost/>} />        
          <Route path=":id" element={<PostPage/>} />
          <Route path="/post/:id/edit/:id" element={<EditPost/>} />
        </Route>      
        <Route path="edit/:id"
          element={<EditPost/>}
          />
        <Route path="about" element={<About />} />        
        <Route path="*" element={<Missing />} />        
      </Route>     
    </Routes>
    </DataProvider>
  );
}

export default App;