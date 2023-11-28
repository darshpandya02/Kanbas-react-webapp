import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import axios from "axios";

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a
          href="https://kanbas-node-server-app-qcek.onrender.com/a5/welcome"
          className="list-group-item">
          Welcome
        </a>
      </div>
      {/* <SimpleAPIExamples /> */}
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
