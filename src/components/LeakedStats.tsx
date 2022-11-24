import { Paper, Typography } from "@mui/material";
import useGoogleSheets from "use-google-sheets";
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
      <Stats />
    </Paper>
  );
}

function Stats() {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.REACT_APP_GOOGLE_SHEETS_API_KEY,
    sheetId: process.env.REACT_APP_GOOGLE_SHEETS_PUBLIC_ID,
    sheetsOptions: [{ id: "연도별 유출건수(피벗)" }],
  });
  if (error) return <div>{JSON.stringify(error)}</div>;
  else if (loading) return <div>"loading..."</div>;
  const leakedData = data?.at(0)?.data?.at(0) || {};
  return (
    <div>
      <Typography variant="h6">{Object.keys(leakedData).join("")}</Typography>
      <Typography variant="h4" sx={{ pt: 1 }}>
        {Object.values(leakedData).join("")}건
      </Typography>
    </div>
  );
}
