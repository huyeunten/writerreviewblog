// import 'tailwindcss/tailwind.css'
// import '../style/globals.scss'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import React from "react";
  
import Post from "./components/Post";
  
const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">
        Blog App using React Js 
      </h1>
      <Post />
    </div>
  );
};
  
export default App;