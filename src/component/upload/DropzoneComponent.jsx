import React, {Component} from "react"
import Dropzone from "react-dropzone";
import "../../css/dropzone.css"

class DropzoneComponent extends Component {


    render() {
        return (
            <Dropzone onDrop={this.onDropFile}>
                {({getRootProps, getInputProps}) => (
                    <section className="container">
                        <div {...getRootProps()} className="dropzone">
                            <input {...getInputProps()} />
                            <h4 className="h4">Drag 'n' drop some files here, or click to select files</h4>
                        </div>
                    </section>
                )}
            </Dropzone>
        );
    }

    onDropFile = (files) =>{
        console.log("File Drop is Triggered on Inner Component");
        this.props.setFile(files[0]);
    }
}

export default DropzoneComponent;