import React from 'react';


import "./Home.css";
function Home() {
  return (
      <div className="overlay" id="home">
        <section className="intro"> 
          <div className="content">
            <h1>MyCookBook</h1>
            <h4>Enter your ingredients and applicable recipes will be shown</h4>
            <h4>Have a personal recipe you want to share? Sign in and share it with the world</h4>
          </div>
        </section>
      </div>  
  );
}

export default Home;
