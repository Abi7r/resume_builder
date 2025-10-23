import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./landingpage.css";
function LandingPage() {
  return (
    <div>
      <section id="bg1">
        <div className="row pt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 box py-5 rounded mt-5 text-center">
            <h3>Designed tto get hired</h3>
            <h4>Your skills your story your next job all in one</h4>
            <Link to={"/resume-generator"}>
              <Button sx={{ backgroundColor: "purple" }} variant="contained">
                Make your Resume
              </Button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>
      <section className="p-5">
        <h3 className="text-center">Tools</h3>
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited resumes and easily edit them afterwards</p>
            <h4>Cover letter</h4>
            <p>Easily write professional cover letters</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications</p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              width={"70%"}
            />
          </div>
        </div>
      </section>
      <section id="bg2"></section>
      <section className="p-5">
        <h3 className="text-center">Testimony</h3>
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <h4> Trusted by professionals worldwide.</h4>
            <p>
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results. In fact,
              users who used LiveCareer reported getting hired an average of 48
              days faster. Join thousands of job-seekers who’ve fast-tracked
              their careers with a résumé that truly stands out.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://t3.ftcdn.net/jpg/08/23/03/36/360_F_823033654_KrhCSBbsxxDHezPtYtW1nrDlUsoWROVh.jpg"
              width={"70%"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
