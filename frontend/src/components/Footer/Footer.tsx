import React from "react";


const Footer: React.FC = () => {
    return (
        <div className="container-fluid d-flex justify-content-between" style={{backgroundColor: "aliceblue"}}>
            <p className="my-2">Version: 2023212</p>
            <p className="my-2 w-auto">© 2023 Tech Link</p>
        </div>
    )
}

export default Footer;