import React, {FC} from "react";

export interface IContentBlockProps {
    gradientDirection: string
}

const ContentBlock: FC<IContentBlockProps> = ({gradientDirection}) => {
    return(
        <div className={`relative w-full h-full bg-gradient-to-${gradientDirection} from-green-400 to-gray-200 rounded-lg shadow-lg p-1`}>
            <div className="w-auto h-full bg-gray-200 rounded-lg">
            </div>
        </div>
    );
}

export default ContentBlock;