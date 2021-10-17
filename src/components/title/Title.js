import { Typography } from "@mui/material";

function Title({ text }) {
  return (
    <Typography variant="h4" ml={2} mt={3} mb={2} sx={{ fontWeight: "bold" }}>
      {text}
    </Typography>
  );
}

export default Title;
