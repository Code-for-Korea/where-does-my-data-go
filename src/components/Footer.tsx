import { Paper, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      sx={{
        backgroundColor: "primary.main",
        padding: 5,
        color: "common.white",
      }}
    >
      <Typography>
        ✏️ 본 사이트에서 사용된 데이터는 ‘데이터유괴단'팀원이 인터넷을 통해
        검색/취합한 데이터로, 정리 과정에서 일부 정보 오류가 있을 수 있습니다.
        정정이 필요한 경우 ‘코드포코리아'로 연락주세요.
      </Typography>
      <Typography sx={{ my: 3 }} variant="h6">
        Where Does My Data Go?
      </Typography>
      <Typography>2022 - 데이터유괴단</Typography>
      <Typography>
        지원 -{" "}
        <Typography
          sx={{ color: "white" }}
          component="a"
          href="https://www.pipc.go.kr"
          target="_blank"
          rel="noreferrer"
        >
          개인정보위원회
        </Typography>
        ,
        <Typography
          sx={{ color: "white" }}
          component="a"
          href="https://www.codefor.kr"
          target="_blank"
          rel="noreferrer"
        >
          코드포코리아
        </Typography>
      </Typography>
    </Paper>
  );
}
