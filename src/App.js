import './App.css';

import MyImage from './components/MyImage';

import DisplayName from './components/DisplayName';
import MyContainer from './components/MyContainer';
import ReactPlayer from 'react-player';

function App() {


  return (
    <div className="App">
      <h1>Here's my image</h1>
      <MyImage myImageURL="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F384%2F542%2Ff03.jpg" />
      <MyImage myImageURL="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F026%2F489%2Fcrying.jpg" />
      <MyContainer career="developer">Hey man whats up</MyContainer>
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />
    </div>
  );
}

export default App;
