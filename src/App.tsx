import React from 'react'

import Jumbotron from "./components/Jumbotron";

import tysonLanding from "./images/tyson-landing.jpeg";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="flex justify-center m-3">
        <div className="container xl:w-3/5 h-screen/3">
          <Jumbotron image={tysonLanding} title="This is Tys0n" fontSize="text-xl lg:text-2xl"/>
        </div>
      </section>

      <section className="flex justify-center m-3">
        <div className="container xl:w-3/5 h-screen/3">
          <Jumbotron image={tysonLanding} title="This is Tys0n" fontSize="text-xl lg:text-2xl"/>
        </div>
      </section>

      <section className="flex justify-center m-3">
        <div className="container xl:w-3/5 h-screen/3">
          <Jumbotron image={tysonLanding} title="This is Tys0n" fontSize="text-xl lg:text-2xl"/>
        </div>
      </section>

      <section className="flex justify-center m-3">
        <div className="container xl:w-3/5 h-screen/3">
          <Jumbotron image={tysonLanding} title="This is Tys0n" fontSize="text-xl lg:text-2xl"/>
        </div>
      </section>
    </div>
  )
}

export default App