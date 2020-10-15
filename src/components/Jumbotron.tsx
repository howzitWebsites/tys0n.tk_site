import React, {FC} from "react";

interface IJumbotronProps {
    image: string,
};

const Jumbotron: FC<IJumbotronProps> = ({image, children}) => {
    return (
    <div className="h-full w-full">
        <div
            style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}
            className="relative w-full h-full rounded-lg shadow-lg"
        >
            <div className="absolute bg-gradient-to-tr from-green-400 md:via-transparent to-transparent w-full h-full rounded-lg"></div>
            <div className="absolute bottom-0 w-full">
                {children}
            </div>
        </div>
    </div>
    );
}

export default Jumbotron;