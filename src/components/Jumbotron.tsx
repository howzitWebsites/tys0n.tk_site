import React, {FC} from "react";

interface IJumbotronProps {
    image: string,
    title: string,
    titleClasses: string
};

const Jumbotron: FC<IJumbotronProps> = ({image, title, titleClasses}) => {
    return (
    <div className="h-full w-full">
        <div
            style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}
            className="relative w-full h-full rounded-lg shadow-lg"
        >
            <div className="absolute bg-gradient-to-tr from-green-300 to-transparent w-full h-full rounded-lg"></div>
            <div className=" absolute items-end ">
                <h1 className={`static ${titleClasses}`}>{title}</h1>
            </div>
        </div>
    </div>
    );
}

export default Jumbotron;