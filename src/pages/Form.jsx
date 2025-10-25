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
  return (
    <div>
      <div className="row p-5">
        <div className="row">
          {/* <div className="col-3">
            <div className="col-8">
              <Preview />
            </div>
            <div className="col-1"></div>
          </div> */}
          <div className="row p-5">
            <div className="col-6">
              <Steps userInput={userInput} setUserInput={setUserInput} />
            </div>
            <div className="col-6">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
