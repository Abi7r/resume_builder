import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { RxCross2 } from "react-icons/rx";
import { editResumeApi, getResumeApi } from "../services/allApi";
import swal from "sweetalert";
function Edit({ resumeId, setUpdateResume }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    maxHeight: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    overflowY: "auto",
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [userInput, setUserInput] = useState({});
  const [userSkill, setUserSkill] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getEditResume = async () => {
    try {
      const result = await getResumeApi(resumeId);
      console.log("Data recieved in get edit resume", result);
      if (result?.data) {
        setUserInput(result?.data);
      }
    } catch (error) {
      console.log("error Occured In get Edit resume", error);
    }
  };
  useEffect(() => {
    resumeId && getEditResume();
  }, []);
  const addSkill = () => {
    if (userSkill.trim()) {
      const currentSkills = userInput.skills || [];
      if (currentSkills.includes(userSkill)) {
        alert("SKill already added");
      } else {
        setUserInput({
          ...userInput,
          skills: [...currentSkills, userSkill],
        });
        setUserSkill("");
      }
    }
  };
  const removeSkill = (skill) => {
    setUserInput({
      ...userInput,
      skills: userInput.skills.filter((item) => item != skill),
    });
  };
  const handleUpdateResume = async () => {
    try {
      const result = await editResumeApi(userInput?.id, userInput);
      console.log(result);
      setUpdateResume(result?.data);
      swal("Success", "Resume Updated", "success");
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={handleOpen} className="btn text-primary fs-2">
        <CiEdit />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h3>Personal details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="outlined-basic"
                label="Full name"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      name: e.target.value,
                    },
                  })
                }
                value={userInput.personalDetails?.name}
              />
              <TextField
                id="filled-basic"
                label="Job Title"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      jobTitle: e.target.value,
                    },
                  })
                }
                value={userInput.personalDetails?.jobTitle}
              />
              <TextField
                id="standard-basic"
                label="Location"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      location: e.target.value,
                    },
                  })
                }
                value={userInput.personalDetails?.location}
              />
            </div>
            <h3>Contact details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="standard"
                value={userInput.personalDetails?.email}
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      email: e.target.value,
                    },
                  })
                }
              />
              <TextField
                id="filled-basic"
                label="Phone No"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      phoneNo: e.target.value,
                    },
                  })
                }
                value={userInput.personalDetails?.phoneNo}
              />
              <TextField
                id="standard-basic"
                label="Github profile link"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      gitHub: e.target.value,
                    },
                  })
                }
                value={userInput.personalDetails?.gitHub}
              />

              <TextField
                id="standard-basic"
                label="LinkedIn profile link"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      linkedIn: e.target.value,
                    },
                  })
                }
                value={userInput.personalDetails?.linkedIn}
              />
              <TextField
                id="standard-basic"
                label="Portfolio link"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    personalDetails: {
                      ...userInput.personalDetails,
                      portfolio: e.target.value,
                    },
                  })
                }
                value={userInput.personalDetails?.portfolio}
              />
            </div>

            <h3>Education details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="outlined-basic"
                label="Course name"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    education: {
                      ...userInput.education,
                      course: e.target.value,
                    },
                  })
                }
                value={userInput.education?.course}
              />
              <TextField
                id="filled-basic"
                label="College Title"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    education: {
                      ...userInput.education,
                      college: e.target.value,
                    },
                  })
                }
                value={userInput.education?.college}
              />
              <TextField
                id="standard-basic"
                label="University"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    education: {
                      ...userInput.education,
                      university: e.target.value,
                    },
                  })
                }
                value={userInput.education?.university}
              />
              <TextField
                id="standard-basic"
                label="Year of Passout"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    education: { ...userInput.education, year: e.target.value },
                  })
                }
                value={userInput.education?.year}
              />
            </div>
            <h3>Professional details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="outlined-basic"
                label="Job or Internship"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      job: e.target.value,
                    },
                  })
                }
                value={userInput.experience?.job}
              />
              <TextField
                id="filled-basic"
                label="Company Name"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      company: e.target.value,
                    },
                  })
                }
                value={userInput.experience?.company}
              />
              <TextField
                id="standard-basic"
                label="Location"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      location: e.target.value,
                    },
                  })
                }
                value={userInput.experience?.location}
              />
              <TextField
                id="standard-basic"
                label="Duration"
                variant="standard"
                onChange={(e) =>
                  setUserInput({
                    ...userInput,
                    experience: {
                      ...userInput.experience,
                      duration: e.target.value,
                    },
                  })
                }
                value={userInput.experience?.duration}
              />
              <h1>Skills</h1>
              <div
                spacing={2}
                className="d-flex flex-wrap align-items-center justify-content-between"
              >
                <TextField
                  id="standard-basic"
                  variant="standard"
                  label="Add skill"
                  onChange={(e) => setUserSkill(e.target.value)}
                  value={userSkill}
                />
                <Button
                  sx={{ maxWidth: "40px" }}
                  className="me-3 mt-4"
                  onClick={addSkill}
                >
                  Add
                </Button>
                <h5>Added Skills:</h5>
                <div className="d-flex flex-wrap justify-content-between">
                  {userInput?.skills?.length > 0 &&
                    userInput.skills.map((skill) => (
                      <span className="btn btn-primary d-flex justify-content-center align-items-center">
                        {skill}
                        <Button
                          className="btn text-light fs-5"
                          onClick={() => removeSkill(skill)}
                        >
                          <RxCross2 />
                        </Button>
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <Button onClick={handleUpdateResume}>Update</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
