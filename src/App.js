import TypingBox from "./Components/TypingBox";
import {GlobalStyles} from "./Styles/global";
var randomWords = require('random-words');

function App() {

  const words = randomWords(50);
  
  return (
    <div className="canvas">
      
      <GlobalStyles/> //styling
      <h1>Header</h1>
      <TypingBox words ={words}/>
      <h1>Footer</h1>
    </div>
  );
}

export default App;