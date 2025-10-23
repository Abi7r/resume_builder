import React from "react";
import { CiEdit } from "react-icons/ci";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { RxCross2 } from "react-icons/rx";
function Edit() {
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <h1>Skills</h1>
            <div
              spacing={2}
              className="d-flex flex-wrap align-items-center justify-content-between"
            >
              <TextField
                id="standard-basic"
                variant="standard"
                label="Add skill"
              />
              <Button sx={{ maxWidth: "40px" }} className="me-3 mt-4">
                Add
              </Button>
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
            <Button>Update</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
