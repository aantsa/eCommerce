import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <>
      <Paper>
        <Box display="flex" sx={{ px: 4, pb: 4, pt: 3 }}>
          <Typography variant="h2">Contact</Typography>
        </Box>
        <Box display="flex" sx={{ px: 4 }}>
          <Typography variant="h5">
            LinkedIn:{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/antonfagerholm/"
                rel="noreferrer"
                target="_blank"
              >
                Anton Fagerholm
              </a>
            </span>
          </Typography>
        </Box>
        <Box display="flex" sx={{ px: 4, pb: 3 }}>
          <Typography variant="h5">
            GitHub:{" "}
            <span>
              <a
                href="https://github.com/aantsa"
                rel="noreferrer"
                target="_blank"
              >
                Anton Fagerholm
              </a>
            </span>
          </Typography>
        </Box>
      </Paper>
    </>
  );
}
