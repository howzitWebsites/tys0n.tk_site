import React from 'react'

import Jumbotron from "./components/Jumbotron";

// import tysonLanding from "./images/tyson-landing.jpeg";
import tyson_1 from "./images/tyson_1.jpg";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="flex justify-center m-3">
        <div className="h-screen/3 lg:w-3/4 xl:w-3/4">
          <Jumbotron image={tyson_1} title="This is Tys0n" fontSize="text-2xl md:text-3xl"/>
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