import { Paper, Typography } from "@mui/material";

export default function LeakedStats() {
  return (
    <Paper
      square
      sx={{
        backgroundColor: "primary.main",
        padding: 5,
        color: "common.white",
        textAlign: "center",
      }}
    >
      <Typography variant="h6">개인정보유출 신고수(~2022.08)</Typography>
      <Typography variant="h4" sx={{ pt: 1 }}>
        995,345,345 건
      </Typography>
    </Paper>
  );
}
