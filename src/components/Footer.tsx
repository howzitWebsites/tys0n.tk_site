import React, {FC} from "react";
import {GitHub, Twitter, Linkedin, Globe} from "react-feather";

const Footer: FC = () => {
    return(
        <footer className="h-16 w-full">
            <p className="flex text-gray-500 text-sm items-center h-full mx-3">
                <a href="https://hcal.cf" target="_hcal" className="mr-1">Callum Fleming</a> - 2020 - 
                <a href="https://hcal.cf" target="_hcal"><Globe className="mr-1 my-auto h-4"/></a>
                <a href="https://github.com/howzitcal" target="_githib"><GitHub className="mr-1 my-auto h-4"/></a>
                <a href="https://linkedin.com/in/howzitcal" target="_linkedin"><Linkedin className="mr-1 my-auto h-4"/></a>
                <a href="https://twitter.com/howzitcal" target="_twitter"><Twitter className="mr-1 my-auto h-4"/></a>
            </p>
        </footer>
    )
}

export default Footer;