import { FaFileAlt } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function ResumeGenerator() {
  return (
    <div>
      <div className="row my-5 d-flex justify-content-evenly text-center">
        <h3 className="text-center my-5">
          {" "}
          Create a job winning resume in minutes
        </h3>
        <div className="col-4 border shadow p-5 text-center">
          <FaFileAlt className="fs-1 text-primary my-3" />
          <h4>Add your information</h4>
          <p>Add prewritten examples to each decision</p>
          <h5>Step 1</h5>
        </div>
        <div className="col-4 border shadow p-5 text-center">
          <LiaFileDownloadSolid className="fs-1 text-danger my-3" />
          <h4>Download your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>
        </div>
        <Link to={"/form"}>
          <Button
            sx={{ backgroundColor: "blueGrey" }}
            variant="contained"
            className="my-5"
          >
            Lets Start
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ResumeGenerator;
