import React,{Component} from "react"
import DropzoneComponent from "./DropzoneComponent";
import FileStatsComponent from "./FileStatsComponent";
import UploadProgress from "./UploadProgress";
import axios from "axios";
class UploadComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            file : null,
            submitClicked : false,
            uploadProgress : 0,
            postResult : {
                statusCode : 0,
                message : ''
            }
        }
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.submitClicked === false
                        ? (this.state.file === null
                                ? <DropzoneComponent setFile={this.updateFile}/>
                                : FileStatsComponent(this.state.file,this.uploadFile)
                            )
                        : UploadProgress(this.state.uploadProgress,this.state.postResult)
                }
            </div>
        );
    }

    updateFile = (file) => {
        this.setState({file});
        console.log(this.state.file);
    }

    uploadFile = () => {
        this.setState({submitClicked:true});
        let postConfig = {
            onUploadProgress : onprogress => this.setState({uploadProgress : Math.round((onprogress.loaded/this.state.file.size)*100)}),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Authorization": process.env.REACT_APP_EXTERNAL_SYSTEM_BASE64_AUTHORIZATION,
                'Content-Type': this.state.file.type
            },
            params: {
                "enableDebug": "true",
                "docName": this.state.file.name,
                "owner": "Rahul",
                "docDescription": "This Some Random Data"
            }
        }
        axios.post(process.env.REACT_APP_EXTERNAL_SYSTEM_API_URL, this.state.file, postConfig)
            .then((response) => {
                    console.log(response);
                    this.setState({postResult : {statusCode : response.status, message : response.data.status}});
                })
            .catch((error) => {
                console.log(error.response);
                let msg = error.response.status === 400 ? error.response.data.error : error.response.statusText;
                this.setState({postResult : {statusCode : error.response.status, message : msg}});
            });
    }
}
export default UploadComponent;