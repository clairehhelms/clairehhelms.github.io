// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { homepage } from "./data/markdown";
import Typist from 'react-typist';

const App = () => {
  return (
    <div className="home">
      {/* <Header /> */}

      <div id="content">
        <Typist> 
          <span>
          {homepage}
          </span>
          </Typist>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
