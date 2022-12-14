import { Box, Container, Grid, Typography } from "@mui/material";
import { Parallax as Pa } from "react-parallax";
import databits from "../assets/images/databits.png";
import CountUp from "react-countup";
export default function Parallax() {
  return (
    <Pa bgImage={databits} bgImageAlt="data in bits" strength={300}>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.58)",
        }}
      >
        <Container
          sx={{
            color: "common.white",
            py: 10,
          }}
        >
          <Grid container direction="column">
            <Typography variant="h5">역대 개인정보 유출 건수</Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              <CountUp end={437871245} separator="," />건
            </Typography>
            <Typography variant="h6">(2005~2022, 주요 유출 사례)</Typography>
          </Grid>
          <Typography variant="body1" sx={{ pt: 6 }}>
            온라인 쇼핑몰이나, 카카오톡, 기프티콘, 콘텐츠를 보기 위해 온라인
            서비스를 가입하려면 매번 눈에 띄는것이 법률적인 내용이 작은글씨로
            화면 가득히 담긴 ‘이용약관'과 ‘개인정보처리 방침'입니다. 혹시 이
            페이지를 잘 읽고 회원가입 하시나요?
            <br />
            <br />
            회원가입에서 무심코 정보제공 동의를 한 이름, 전화번호, 생년월일은
            물론 카드번호와 같은 중요한 금융정보들은 안전하게 잘 관리되고
            있을까요?
          </Typography>
        </Container>
      </Box>
    </Pa>
  );
}
