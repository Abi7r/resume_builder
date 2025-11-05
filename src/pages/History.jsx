import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { getDownloadHistory } from "../services/allApi";
import { Link } from "react-router-dom";
import { deleteDownloadHistory } from "../services/allApi";
import Box from "@mui/material/Box";
function History() {
  const [resume, setResume] = useState([]);
  const getHistory = async () => {
    try {
      const result = await getDownloadHistory();
      console.log(result);
      setResume(result.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);
  const handleRemove = async (id) => {
    try {
      await deleteDownloadHistory(id);
      setResume((prevResume) => prevResume.filter((item) => item.id != id));
    } catch (error) {
      console.log("An error occured while deleteing", error);
    }
  };
  return (
    <div>
      <h2 className="text-center mt-2">Downloaded Resume history</h2>
      <Link to={"/"} className="float-end me-5">
        BACK
      </Link>
      <Box component="section" className="container-fluid">
        <div className="row">
          {resume?.length > 0 ? (
            resume.map((item) => (
              <div className="col-md-4" key={item.id}>
                <Paper elevation={3} sx={{ my: 5, p: 3, textAlign: "center" }}>
                  <div className="d-flex align-items-center justify-content-evenly">
                    <h6>
                      Review at <br />
                      {item.timeStamp}
                    </h6>
                    <button
                      onClick={() => handleRemove(item?.id)}
                      className="btn text-danger ms-5 fs-4"
                    >
                      <MdDelete />
                    </button>
                  </div>
                  <div className="border rounded p-3">
                    <img src={item.imgUrl} className="img-fluid " alt="" />
                  </div>
                </Paper>
              </div>
            ))
          ) : (
            <p>Nothing to display</p>
          )}
        </div>
      </Box>
    </div>
  );
}

export default History;
