import logo from './logo.svg';
import './App.css';

function App() {
  const user = {
    image: "#",
    authenticated: true
  }
  
  const blogs = [
    {
      id: 1,
      title: "learning js",
      author: user,
    }
  ]
  
  return (
    <div>
      user.authernticated ? (
        <>
          <h1>welcome to the app</h1>
          <h5>user.firstName</h5>
        </>
      ) : 
    </div>
  );
}

export default App;
