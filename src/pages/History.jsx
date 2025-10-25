import { Paper } from "@mui/material";
import React from "react";
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <h2 className="text-center mt-2">Downloaded Resume history</h2>
      <Link to={"/"} className="float-end me-5">
        BACK
      </Link>
      <Box component="section" className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Paper elevation={3} sx={{ my: 5, p: 3, textAlign: "center" }}>
              <div className="d-flex align-items-center justify-content-evenly">
                <h6>
                  Review at <br />
                  item
                </h6>
                <button className="btn text-danger ms-5 fs-4">
                  <MdDelete />
                </button>
              </div>
              <div className="border rounded p-3">
                <img src="" className="img-fluid " alt="" />
              </div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default History;
