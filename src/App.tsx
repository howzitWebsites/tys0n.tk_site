import React from 'react'

import Jumbotron from "./components/Jumbotron";
import ContentBlock from "./components/ContentBlock";

// import * as Icons from "heroicons-react";

import {ReactComponent as Share} from "./icons/outline/share.svg";
import {ReactComponent as BookOpen} from "./icons/outline/book-open.svg";
import {ReactComponent as Photograph} from "./icons/outline/photograph.svg";
import {ReactComponent as VideoCamera} from "./icons/outline/video-camera.svg";

// import tysonLanding from "./images/tyson-landing.jpeg";
import tyson_1 from "./images/tyson_1.jpg";

const App: React.FC = () => {
  return (
    <div className="App">
      <section className="flex justify-center m-3">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <Jumbotron image={tyson_1}>
            <div className="flex">
              <button className="h-full my-auto p-4" onClick={() => alert("share this!")}>
                <Share className="h-8 md:h-10" />
              </button>
              <h1 className="text-3xl cursive text-gray-800 font-medium my-auto">This is Tyson...</h1>
            </div>
          </Jumbotron>
        </div>
      </section>

      <section className="flex justify-center m-3 mt-6">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <ContentBlock gradientDirection="tr">
            <div className="flex ml-2 pt-1">
              <div className="h-full my-auto mr-1">
                <BookOpen className="h-7 md:h-15" height={40}/>
              </div>
              <h1 className="text-2xl cursive text-gray-800 font-medium my-auto pt-2">History</h1>
            </div>
          </ContentBlock>
        </div>
      </section>

      <section className="flex justify-center m-3 mt-6">
        <div className="h-screen/2 w-full lg:w-3/4 xl:w-3/4">
          <ContentBlock gradientDirection="bl">
            <div className="flex ml-2 pt-1">
              <div className="h-full my-auto mr-1">
                <Photograph className="h-7 md:h-15" height={40}/>
              </div>
              <h1 className="text-2xl cursive text-gray-800 font-medium my-auto pt-2">Gallery</h1>
            </div>
          </ContentBlock>
        </div>
      </section>

      <section className="flex justify-center m-3 mt-6">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <ContentBlock gradientDirection="tr">
            <div className="flex ml-2 pt-1">
              <div className="h-full my-auto mr-1">
                <VideoCamera className="h-7 md:h-15" height={40}/>
              </div>
              <h1 className="text-2xl cursive text-gray-800 font-medium my-auto pt-2">Videos</h1>
            </div>
          </ContentBlock>
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