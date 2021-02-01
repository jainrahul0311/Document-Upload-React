import React from "react";

function FileStatsComponent(file,props) {

    return (
        <div className="container-fluid">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">File Name</span>
                <input type="text" className="form-control"
                       placeholder={file.name}
                       aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">File Type</span>
                <input type="text" className="form-control"
                       placeholder={file.type}
                       aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">File Size</span>
                <input type="text" className="form-control"
                       placeholder={file.size}
                       aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div className="input-group mb-5">
                <button type="button" className="btn btn-primary" disabled={false}
                        onClick={onSubmit}>Submit
                </button>
            </div>
        </div>
    );

    function onSubmit() {
        props();
    }
}

export default FileStatsComponent;