import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Left Section - Brand */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              Resume Builder
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Create professional resumes in minutes
            </Typography>
          </Box>

          {/* Middle Section - Links */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link href="#" color="inherit" underline="hover">
              About
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Terms
            </Link>
          </Box>

          {/* Right Section - Social Media */}
          <Box>
            <IconButton color="inherit" aria-label="GitHub">
              <GitHub />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" aria-label="Email">
              <Email />
            </IconButton>
          </Box>
        </Box>

        <Divider sx={{ my: 2, backgroundColor: "rgba(255,255,255,0.2)" }} />

        {/* Bottom Section - Copyright */}
        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} Resume Builder. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
