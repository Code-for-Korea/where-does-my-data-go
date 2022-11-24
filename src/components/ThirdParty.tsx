import { Box, Container, Typography } from "@mui/material";

export default function ThirdParty() {
  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="body1">
        <a
          href="https://docs.google.com/spreadsheets/d/1JoWXemxTDbMSsSMJrWOZylYBXePxSy_-21jmeeDEKtM/view#gid=1519454052"
          target="_blank"
          rel="noreferrer"
        >
          {">"} 계열사/제3자 정보 제공 데이터 살펴보기
        </a>
      </Typography>
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
          {">"} 개인정보 처리방침개인정보보호법 시행령 바로가기
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
      <Typography variant="h6" sx={{ mt: 6 }}>
        <b>개인정보 유출 사고</b>
      </Typography>
      <Typography variant="body1">
        ✏️ 그렇다면, 서비스 제공자는 수집한 여러분의 개인정보를 안전하게 잘
        관리하고 있을까요? 2000년 부터 최근까지 발생한 주요서비스의 개인정보
        유출사고 차트에서 볼 수 있듯이 정보관리의 소홀과 해킹 사고등으로 인해
        정보유출은 점점더 커지고 있습니다.
      </Typography>
      <div>{">"} 주요기업 정보유출 사고 데이터 살펴보기</div>
      <div>
        ✏️ e나라지표에서 발표한, 개인정보유출과 관련한 상담/사건 데이터를 보면
        매년 늘어고 있습니다.
      </div>
      <div>{">"} 개인정보유출 상담/사고 유형별 데이터 살펴보기</div>
      <div>
        Where Does My Data Go? ✏️ Where Does My Data GO? 는 온라인 서비스
        제공사들이 개인정보를 얼마나 수집하고 이를 활용하고 있는지, 개인정보
        유출사고로 노출된 개인정보는 어느정도인지 데이터를 시각화하는
        프로젝트입니다. ✏️ 프로젝트 그룹 ‘‘데이터유괴단' ‘데이터유괴단’은 데이터
        시각화를 통해 일반 시민들이 정보를 쉽게 접하고 이해할 수 있도록 하는
        목적으로 현업 기획/개발/디자이너로 구성된 프로젝트 그룹입니다. 팀
        이름에서 드러나듯이 그들만의 유쾌한 시선으로 광고 시장에 돌풍을 일으키고
        있는 ‘돌고래유괴단'에서 영감을 얻어, 어떤 이유에서인지 잘보이지않고,
        복잡하고 어려워 보이는 사회 이슈를 데이터시각화로 쉽게 풀어 보고자
        합니다. - 팀원 : OOO, OOOO, OOOO, OOOO 데이터 출처 : e-나라지표 {">"}{" "}
        개인정보 침해 신고/상담 건수, 위키백과사전, 언론기사
      </div>
      <div>footer</div>
    </Container>
  );
}
