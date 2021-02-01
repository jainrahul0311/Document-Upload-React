import React from "react";

function UploadProgress(by, postResponse) {

    let msg = "";

    return (
        <div>
            { postResponse.statusCode !== 0 && showPostResponse(postResponse) }
            { postResponse.statusCode === 0 && (by <= 100 ? <h3>File Transfer Progress...</h3> : <h3>Please wait while we process your Request</h3>) }
            {postResponse.statusCode !== 0 && <h3>Transfer Completed</h3>}
            <h3>{msg}</h3>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated"
                     role="progressbar" aria-valuenow={(by).toString()} aria-valuemin="0" aria-valuemax="100"
                     style={{width: (by).toString() + "%"}}>
                    {(by).toString() + "%"}
                </div>
            </div>
        </div>
    );
}

function showPostResponse(postResponse) {
    console.log("Show Post response was called.")
    if (postResponse.statusCode === 201) {
        return (
            <div className="alert alert-success" role="alert" style={{padding: 25}}><h3 className="h3">Status</h3>File
                was Uploaded Successfully !!</div>);
    } else if (postResponse.statusCode === 400) {
        return (
            <div className="alert alert-warning" role="alert" style={{padding: 25}}><h3 className="h3">Status</h3>Unable
                to Upload the File, {postResponse.message}.</div>);
    } else {
        return (<div className="alert alert-danger" role="alert" style={{padding: 25}}><h3
            className="h3">Status</h3>Unexpected Exception Happened !!</div>)
    }
}

export default UploadProgress;