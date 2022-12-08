import { Box, Container, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import useScript from "./useScript";

export default function Events() {
  useScript("https://public.flourish.studio/resources/embed.js");
  return (
    <Container sx={{ pt: 6, pb: 6 }}>
      <Typography variant="h5">
        <b>개인정보 유출 사고</b>
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
        그렇다면, 서비스 제공자는 수집한 여러분의 개인정보를 안전하게 잘
        관리하고 있을까요? 2000년 부터 최근까지 발생한 주요서비스의 개인정보
        유출사고 차트에서 볼 수 있듯이 정보관리의 소홀과 해킹 사고등으로 인해
        정보유출은 점점더 커지고 있습니다. 특히 전세계를 대상으로 온라인
        서비스를 확장하고 있는 상황에서 해킹의 시도는 더욱 빈번해지고, 그로인해
        개인정보 유출의 규모도 기하급수적으로 늘어나고 있습니다.
      </Typography>
      <Box mb={2} border={1} sx={{ borderColor: grey[400] }}>
        <div
          className="flourish-embed"
          data-src="visualisation/12018966"
          data-height="800px"
        />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        href="https://docs.google.com/spreadsheets/d/1JoWXemxTDbMSsSMJrWOZylYBXePxSy_-21jmeeDEKtM/view#gid=928498616"
        target="_blank"
        sx={{ mt: 2 }}
      >
        주요기업 정보유출 사고 데이터 살펴보기 &raquo;
      </Button>
    </Container>
  );
}
