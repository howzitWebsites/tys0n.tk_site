import React from 'react'

import Jumbotron from "./components/Jumbotron";
import ContentBlock from "./components/ContentBlock";

// import * as Icons from "heroicons-react";

import {ReactComponent as Share} from "./icons/solid/share.svg";

// import tysonLanding from "./images/tyson-landing.jpeg";
import tyson_1 from "./images/tyson_1.jpg";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="flex justify-center m-3">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <Jumbotron image={tyson_1} title="">
            <div className="flex">
              <button className="h-full my-auto p-4" onClick={() => alert("share this!")}>
                <Share className="h-8 md:h-10 text-gray-800 fill-current" />
              </button>
              <h1 className="text-3xl md:text-4xl cursive text-gray-800 font-medium my-auto">This is Tyson...</h1>
            </div>
          </Jumbotron>
        </div>
      </section>

      <section className="flex justify-center m-3 mt-6">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <ContentBlock gradientDirection="tr">
            {/* <h1><Icons.PhoneMissedCall/> test</h1> */}
          </ContentBlock>
        </div>
      </section>

      <section className="flex justify-center m-3 mt-6">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <ContentBlock gradientDirection="bl"/>
        </div>
      </section>

      <section className="flex justify-center m-3 mt-6">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <ContentBlock gradientDirection="tr"/>
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