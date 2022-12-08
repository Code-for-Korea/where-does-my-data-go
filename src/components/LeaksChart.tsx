import { Box, Container, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function LeaksChart() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h5">
        <b>개인정보 계열사/제3자 정보 제공</b>
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
        네이버, 카카오등의 온라인 서비스들은 수집한 이용자의 정보를 ‘더 나은
        서비스를 위한 계열사/제3자 정보 제공'이라는 조항으로 여러분의 정보를
        다른 기업에 제공한다는 내용은 익히 알고있는 사실입니다. 그럼 주요
        서비스들이 여러분의 개인정보를 제공하는 기업 수는 얼마나 될까요?
      </Typography>
      <Box mb={2} border={1} sx={{ borderColor: grey[400] }}>
        <div
          className="flourish-embed flourish-network"
          data-src="visualisation/12045451"
          data-height="1000px"
        ></div>
      </Box>

      <Button
        variant="outlined"
        color="primary"
        size="large"
        href="https://docs.google.com/spreadsheets/d/1JoWXemxTDbMSsSMJrWOZylYBXePxSy_-21jmeeDEKtM/view#gid=1519454052"
        target="_blank"
        sx={{ mt: 2 }}
      >
        계열사/제3자 정보 제공 데이터 살펴보기
      </Button>
    </Container>
  );
}
