import React from "react";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MdDownloadForOffline } from "react-icons/md";
import Edit from "../components/Edit";
import { FaHistory } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
function Preview() {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center align-items-center ">
        <button className="btn text-primary fs-2">
          <MdDownloadForOffline />
        </button>
        <div className="btn text-primary fs-2">
          <Edit />
        </div>

        <Link to={"/history"} className="btn text-primary fs-4">
          {" "}
          <FaHistory />
        </Link>

        <Link to={"/resume-generator"} className="btn text-primary fs-2">
          {" "}
          <IoArrowBackCircle />
        </Link>
      </div>
      <Box class="p-5">
        <Paper elevation={5} id="result">
          <h2>Name</h2>
          <p>Job title</p>
          <Link target="_blank" href="">
            Github
          </Link>
          <Link target="_blank" href="">
            LinkedIn
          </Link>
          <Link target="_blank" href="">
            Portfolio
          </Link>
          <Divider>Summary</Divider>
          <Divider>Education</Divider>
          <Divider>Professional experience</Divider>
          <Divider>Skills</Divider>
          <Stack
            spacing={2}
            direction="row"
            sx={{ flexWrap: "wrap", gap: "10px", padding: "10px" }}
          >
            <Button variant="contained">Contained</Button>
          </Stack>
        </Paper>
      </Box>
    </div>
  );
}

export default Preview;
