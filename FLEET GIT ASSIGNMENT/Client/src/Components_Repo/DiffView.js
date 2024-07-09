import React from "react";

const DiffView = ({ diffData}) => {
    return(
        <div>
            {diffData.map((file,index) => {
                <div key={index}>
                    <h2>{file.fileName}</h2>
                    <pre>{file.patch}</pre>
                </div>
            })}
        </div>
    )

}

export default DiffView;