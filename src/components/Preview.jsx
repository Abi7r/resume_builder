import React, { useState } from "react";
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
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { addDownloadHistory } from "../services/allApi";
function Preview({ userInput, finish, resumeId, setUserInput }) {
  console.log(resumeId);
  const [downloadStatus, setDownloadStatus] = useState(false);
  const downloadCv = async () => {
    const input = document.getElementById("result");
    const canvas = await html2canvas(input, { scale: 2 });
    const imgUrl = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
    //get Date
    const localeTimeDate = new Date();
    const timeStamp = `${localeTimeDate.toLocaleTimeString()}${localeTimeDate.toLocaleDateString()}`;
    try {
      const result = await addDownloadHistory({
        ...userInput,
        imgUrl,
        timeStamp,
      });
      setDownloadStatus(true);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {userInput.personalDetails.name != "" && (
        <div className="flex-column">
          {finish && (
            <div className="d-flex flex-wrap justify-content-center align-items-center ">
              <button onClick={downloadCv} className="btn text-primary fs-2">
                <MdDownloadForOffline />
              </button>
              <div className="btn text-primary fs-2">
                <Edit resumeId={resumeId} setUpdateResume={setUserInput} />
              </div>

              {downloadStatus && (
                <>
                  {" "}
                  <Link to={"/history"} className="btn text-primary fs-4">
                    {" "}
                    <FaHistory />
                  </Link>
                </>
              )}

              <Link to={"/resume-generator"} className="btn text-primary fs-2">
                {" "}
                <IoArrowBackCircle />
              </Link>
            </div>
          )}
          <Box class="p-5">
            <Paper elevation={5} id="result" sx={{ padding: 4 }}>
              {/* Header Section */}
              <Box sx={{ marginBottom: 3 }}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  fontWeight="bold"
                  align="center"
                >
                  {userInput.personalDetails.name}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  align="center"
                  gutterBottom
                >
                  {userInput.personalDetails.jobTitle}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  align="center"
                  gutterBottom
                >
                  {userInput.personalDetails.email}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  align="center"
                  gutterBottom
                >
                  {userInput.personalDetails.phoneNo}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ marginTop: 2, flexWrap: "wrap", gap: 1 }}
                >
                  {userInput.personalDetails.gitHub && (
                    <Typography variant="body2" align="center">
                      <strong>GitHub:</strong>{" "}
                      <Link
                        href={userInput.personalDetails.gitHub}
                        target="_blank"
                        style={{ textDecoration: "none", color: "#1976d2" }}
                      >
                        {userInput.personalDetails.gitHub}
                      </Link>
                    </Typography>
                  )}
                  {userInput.personalDetails.linkedIn && (
                    <Typography variant="body2" align="center">
                      <strong>LinkedIn:</strong>{" "}
                      <Link
                        href={userInput.personalDetails.linkedIn}
                        target="_blank"
                        style={{ textDecoration: "none", color: "#1976d2" }}
                      >
                        {userInput.personalDetails.linkedIn}
                      </Link>
                    </Typography>
                  )}
                  {userInput.personalDetails.portfolio && (
                    <Typography variant="body2">
                      <strong>Portfolio:</strong>{" "}
                      <Link
                        href={userInput.personalDetails.portfolio}
                        target="_blank"
                        style={{ textDecoration: "none", color: "#1976d2" }}
                      >
                        {userInput.personalDetails.portfolio}
                      </Link>
                    </Typography>
                  )}
                </Stack>
              </Box>

              {/* Summary Section */}
              <Box sx={{ marginY: 3 }}>
                <Divider sx={{ marginBottom: 2 }}>Summary</Divider>
                <Typography variant="body1" paragraph>
                  {userInput.summary}
                </Typography>
              </Box>

              {/* Education Section */}
              <Box sx={{ marginY: 3 }}>
                <Divider sx={{ marginBottom: 2 }}> Education</Divider>
                <Typography variant="body1" paragraph>
                  <h5>{userInput.education.course}</h5>
                  <p>
                    <span>{userInput.education.college}</span>|
                    <span>{userInput.education.university}</span>|
                    <span>{userInput.education.year}</span>
                  </p>
                </Typography>
              </Box>

              <Box sx={{ marginY: 3 }}>
                <Divider sx={{ marginBottom: 2 }}>
                  Professional Experience
                </Divider>
                <Typography variant="body1" paragraph>
                  <h5>{userInput.experience.job}</h5>
                  <p>
                    <span>{userInput.experience.company}</span>|
                    <span>{userInput.experience.duration}</span>|
                    <span>{userInput.experience.location}</span>
                  </p>
                </Typography>
              </Box>

              {/* Skills Section */}
              <Box sx={{ marginY: 3 }}>
                <Divider sx={{ marginBottom: 2 }}> Skills</Divider>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ flexWrap: "wrap", gap: 1, marginTop: 2 }}
                >
                  {/* Add skills from userInput */}
                  {userInput.skills &&
                    userInput.skills.map((skill) => (
                      <Chip label={skill} color="primary" variant="outlined" />
                    ))}

                  {/* Map through actual skills from userInput */}
                </Stack>
              </Box>
            </Paper>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Preview;
