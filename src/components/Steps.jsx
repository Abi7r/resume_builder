import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { RxCross2 } from "react-icons/rx";

function Steps() {
  const steps = [
    "Basic information",
    "Contact details",
    "Educational Details",
    "Work Experience",
    "Sills and certificates",
    "Review & Submit",
  ];
  const SuggetionSkills = [
    "Angular",
    "React",
    "Node",
    "Express",
    "MongoDb",
    "Javascript",
    "Tailwind",
    "Git",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3>Personal details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="outlined-basic"
                label="Full name"
                variant="standard"
              />
              <TextField
                id="filled-basic"
                label="Job Title"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Location"
                variant="standard"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3>Contact details</h3>
            <div className="d-flex row p-3">
              <TextField id="outlined-basic" label="Email" variant="standard" />
              <TextField
                id="filled-basic"
                label="Phone No"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Github profile link"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="LinkedIn profile link"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Portfolio link"
                variant="standard"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Education details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="outlined-basic"
                label="Course name"
                variant="standard"
              />
              <TextField
                id="filled-basic"
                label="College Title"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="University"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Year of Passout"
                variant="standard"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Professional details</h3>
            <div className="d-flex row p-3">
              <TextField
                id="outlined-basic"
                label="Job or Internship"
                variant="standard"
              />
              <TextField
                id="filled-basic"
                label="Company Name"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Location"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Duration"
                variant="standard"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Skills</h3>
            <Box>
              <Stack
                spacing={2}
                direction="row"
                sx={{ flexWrap: "wrap", gap: "10px", padding: "10px" }}
              >
                <Button variant="contained">Contained</Button>
              </Stack>
              <div>
                <h5>Suggetions:</h5>
                <div className="d-flex flex-wrap justify-content-between">
                  {SuggetionSkills.map((items) => (
                    <Button variant="outlined">{items}</Button>
                  ))}
                </div>
              </div>
              <div>
                <h5>Added Skills:</h5>
                <div className="d-flex flex-wrap justify-content-between">
                  <span className="btn btn-primary d-flex justify-content-center align-items-center">
                    Skills{" "}
                    <Button className="btn text-light fs-5">
                      <RxCross2 />
                    </Button>
                  </span>
                </div>
              </div>
            </Box>
          </div>
        );
      case 5:
        return (
          <div>
            <h3>Professional Summary</h3>
            <div className="d-flex row p-3">
              <TextField
                id="standard-multiline-static"
                label="Write a short summary of yourself"
                multiline
                rows={4}
                defaultValue={
                  "Eg:I am an experienced full stack developer with indepth knowledge in react nodejs js...."
                }
                variant="standard"
                value=""
              />
            </div>
          </div>
        );
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>{renderStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Steps;
