import { Box, Container, Typography } from "@mui/material";
import useScript from "./useScript";

export default function LeaksChart() {
  useScript("https://public.flourish.studio/resources/embed.js");
  return (
    <Container sx={{ my: 6 }}>
      <Box mb={6}>
        <div
          className="flourish-embed flourish-network"
          data-src="visualisation/11936083"
        ></div>
      </Box>
     
      <Typography variant="h6" sx={{ mt: 6 }}>
        <b>개인정보 계열사/제3자 정보 제공</b>
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        네이버, 카카오등의 온라인 서비스들은 수집한 이용자의 정보를 ‘더 나은
        서비스를 위한 계열사/제3자 정보 제공'이라는 조항으로 여러분의 정보를
        다른 기업에 제공한다는 내용은 익히 알고있는 사실입니다. 그럼 주요
        서비스들이 여러분의 개인정보를 제공하는 기업 수는 얼마나 될까요?
      </Typography>
    </Container>
  );
}
