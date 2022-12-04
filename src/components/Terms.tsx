import { Box, Container, Divider, Typography } from "@mui/material";

export default function Terms() {
  return (
    <Container sx={{ my: 6 }}>
      <Divider sx={{ my: 5, borderColor: "black" }} />
      <Typography variant="h6" sx={{ mt: 4 }}>
        <b>이용약관을 통한 개인정보 수집</b>
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }} component="div">
        ✏️ 우리가 주요 온라인 서비스에서 회원 가입을 할 때, 서비스 제공자는 기본
        서비스 목적 외에 개인(신용)정보 수집, 이용 동의, 개인 정보의 제3자 제공
        동의, 개인 정보의 위탁동의, 위치기반 서비스 이용동의 등 다양한 형태로
        이용자의 정보를 수집/활용하고 있습니다.
        <div>수집하는 정보는 다음과 같습니다.</div>
        <Box sx={{ my: 2 }}>
          <a
            href="https://docs.google.com/spreadsheets/d/1JoWXemxTDbMSsSMJrWOZylYBXePxSy_-21jmeeDEKtM/view#gid=1880544754"
            target="_blank"
            rel="noreferrer"
          >
            {">"} 기업의 개인정보 수집 살펴보기
          </a>
        </Box>
        <div>
          ✏️ 정부에서는 서비스 제공 업체의 무분별한 정보 수집을 제한하고,
          이용자의 소중한 정보를 철저히 관리하기 위해 개인정보보호법 제2조 5호,
          동법 시행령 제 30조 1항을 근거로 ‘개인정보 처리방침'을 수립 및
          공개하도록 하고 있습니다.
          <div>
            <Box sx={{ my: 2 }}>
              <a
                href="https://glaw.scourt.go.kr/wsjo/lawod/sjo192.do?lawodNm=%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%20%EB%B3%B4%ED%98%B8%EB%B2%95&jomunNo=2&jomunGajiNo="
                target="_blank"
                rel="noreferrer"
              >
                제2조 (정의) {">"} 법령 {">"} 법령조문조회 | 종합법률정보
              </a>
            </Box>
          </div>
        </div>
      </Typography>
      <Divider sx={{ my: 5, borderColor: "black" }} />
    </Container>
  );
}
