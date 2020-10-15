import React, {FC} from "react";

interface IJumbotronProps {
    image: string,
    title: string,
    fontSize: string
};

const Jumbotron: FC<IJumbotronProps> = ({image, title, fontSize}) => {
    return (
    <div className="h-full w-full">
        <img src={image} className="object-cover w-full h-full rounded-lg shadow-lg" alt="Jumbotron"/>
        <div className="flex justify-center text-center -mt-20">
            <h1 className={`bg-gradient-to-r from-teal-400 to-blue-500 w-4/5 md:w-1/2 p-5 rounded-lg shadow-lg ${fontSize}`}>{title}</h1>
        </div>
    </div>
    );
}

export default Jumbotron;