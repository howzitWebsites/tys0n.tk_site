import React, {FC} from "react";

interface IJumbotronProps {
    image: string,
    title: string,
    titleClasses: string
};

const Jumbotron: FC<IJumbotronProps> = ({image, title, titleClasses}) => {
    return (
    <div className="h-full w-full">
        <img src={image} className="object-cover w-full h-full rounded-lg shadow-lg" alt="Jumbotron"/>
        <div className="flex justify-center text-center -mt-8 md:-mt-10">
            <h1 className={`bg-gradient-to-r from-white to-gray-500 p-3 w-4/5 md:w-1/2 md:p-5 rounded-lg shadow-lg ${titleClasses}`}>{title}</h1>
        </div>
    </div>
    );
}

export default Jumbotron;