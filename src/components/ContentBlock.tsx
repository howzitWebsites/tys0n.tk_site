import React, {FC} from "react";

export interface IContentBlockProps {
    gradientDirection: string
}

const ContentBlock: FC<IContentBlockProps> = ({gradientDirection, children}) => {
    return(
        <div className={`relative w-full h-full bg-gradient-to-${gradientDirection} from-green-400 to-gray-200 rounded-lg shadow-lg p-3p md:p-2p`}>
            <div className="w-auto h-full bg-gray-200 rounded-lg">
                {children}
            </div>
        </div>
    );
}

export default ContentBlock;