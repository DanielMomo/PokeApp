import React from "react";

const Card = (props) => {
    return (
        <div className="h-screen bg-gray-200 p-6 flex flex-wrap content-center">
            <div className="bg-gray-100 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4">
                {props.children}
            </div>
        </div>
    );
}

export default Card;