import React from 'react'

import Jumbotron from "./components/Jumbotron";
import ContentBlock from "./components/ContentBlock";

// import tysonLanding from "./images/tyson-landing.jpeg";
import tyson_1 from "./images/tyson_1.jpg";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="flex justify-center m-3">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <Jumbotron image={tyson_1} title="This is Tyson..." titleClasses="text-2xl md:text-3xl cursive"/>
        </div>
      </section>

      <section className="flex justify-center m-3">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <ContentBlock />
        </div>
      </section>
{/* 
      <section className="flex justify-center m-3">
        <div className="container h-screen/3">
          <Jumbotron image={tysonLanding} title="This is Tys0n" fontSize="text-xl lg:text-2xl"/>
        </div>
      </section>

      <section className="flex justify-center m-3">
        <div className="container h-screen/3">
          <Jumbotron image={tysonLanding} title="This is Tys0n" fontSize="text-xl lg:text-2xl"/>
        </div>
      </section>

      <section className="flex justify-center m-3">
        <div className="container h-screen/3">
          <Jumbotron image={tysonLanding} title="This is Tys0n" fontSize="text-xl lg:text-2xl"/>
        </div>
      </section> */}
    </div>
  )
}

export default App