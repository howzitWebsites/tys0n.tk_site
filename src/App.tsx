import React from 'react'

// Components
import Jumbotron from "./components/Jumbotron";
import ContentBlock from "./components/ContentBlock";
import Footer from "./components/Footer";

// Libs
import * as Icons from 'react-feather';

// Images
import tyson_1 from "./images/tyson_1.jpg";

const App: React.FC = () => {
  return (
    <main className="App">
     
      <section className="flex justify-center m-3">
        <div className="h-screen/3 w-full lg:w-3/4 xl:w-3/4 xl:h-screen/2">
          <Jumbotron image={tyson_1}>
            <div className="flex">
              <button className="h-full my-auto p-4" onClick={() => alert("share this!")}>
                <Icons.Share2 className="h-8 md:h-10 stroke-fill text-gray-800"/>
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
              <div className="h-full my-auto mr-3">
                <Icons.BookOpen className="h-8 md:h-10 stroke-fill text-gray-800"/>
              </div>
              <h1 className="text-2xl cursive text-gray-800 font-medium my-auto pt-2">Story</h1>
            </div>
          </ContentBlock>
        </div>
      </section>

      <section className="flex justify-center m-3 mt-6">
        <div className="h-screen/2 w-full lg:w-3/4 xl:w-3/4">
          <ContentBlock gradientDirection="bl">
            <div className="flex ml-2 pt-1">
              <div className="h-full my-auto mr-3">
              <Icons.Image className="h-8 md:h-10 stroke-fill text-gray-800"/>
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
              <div className="h-full my-auto mr-3">
                <Icons.Youtube className="h-8 md:h-10 stroke-fill text-gray-800"/>
              </div>
              <h1 className="text-2xl cursive text-gray-800 font-medium my-auto pt-2">Videos</h1>
            </div>
          </ContentBlock>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="w-full lg:w-3/4 xl:w-3/4">
          <Footer/>
        </div>
      </section>
    </main>
  )
}

export default App