import './css/bootstrapv4_1_0.min.css';
import HeaderComponent from "./component/HeaderComponent";
import UploadComponent from "./component/upload/UploadComponent";

function App() {
  return (
      <div>
        <HeaderComponent/>

        <div className="jumbotron text-center">
          <h3>{process.env.REACT_APP_JUMBOTRON_NAME}</h3>
        </div>

        <UploadComponent/>
      </div>
  );
}

export default App;
