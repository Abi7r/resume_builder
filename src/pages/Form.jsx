import Steps from "../components/Steps";

import Preview from "../components/Preview";
import { useState } from "react";
function Form() {
  const [userInput, setUserInput] = useState({
    personalDetails: {
      name: "",
      jobTitle: "",
      portfolio: "",
      email: "",
      gitHub: "",
      linkedIn: "",
      location: "",
      phoneNo: "",
    },
    education: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    experience: {
      job: "",
      company: "",
      duration: "",
      location: "",
    },
    skills: [],
    summary: "",
  });
  const [finish, setFinish] = useState(false);
  const [resumeId, setResumeId] = useState("");

  return (
    <div>
      <div className="row p-5">
        {finish ? (
          <div className="row">
            <div className="col-3"></div>
            <div className="col-8">
              <Preview
                resumeId={resumeId}
                userInput={userInput}
                setUserInput={setUserInput}
                finish={finish}
              />
            </div>
            <div className="col-1"></div>
          </div>
        ) : (
          <div className="row p-5">
            <div className="col-6">
              <Steps
                setResumeId={setResumeId}
                userInput={userInput}
                setUserInput={setUserInput}
                setFinish={setFinish}
              />
            </div>
            <div className="col-6">
              <Preview userInput={userInput} setUserInput={setUserInput} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
