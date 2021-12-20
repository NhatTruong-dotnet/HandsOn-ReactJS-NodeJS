import "./App.css";
import {Blog, Footer,Possibility, Header, Features,WhatGPT3} from './containers/index';
import {Navbar, Brand,CTA} from './components/index';

const App = () => {
  return (<div className="App">
    <div className="gradient_bg">
       <Navbar />
      <Header />
    </div>
     <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>);
};

export default App;
