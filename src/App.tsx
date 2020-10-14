import React from 'react'

import Jumbotron from "./components/Jumbotron";

import tysonLanding from "./images/tyson-landing.jpeg";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="flex justify-center m-2">
        <div className="md:w-4/5 h-64">
          <Jumbotron image={tysonLanding} title="This is Tys0n" fontSize="text-xl lg:text-2xl"/>
        </div>
      </section>
    </div>
  )
}

export default App