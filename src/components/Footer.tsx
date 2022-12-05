import { Paper, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      sx={{
        backgroundColor: "primary.main",
        padding: 5,
        color: "common.white",
        borderRadius: 0,
      }}
    >
      <Container>
        <Typography variant="h5" sx={{ mb: 1 }}>
          <b>Where Does My Data Go?</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          <u>Where Does My Data GO?</u> 는 온라인 서비스 제공사들이 개인정보를 얼마나
          수집하고 이를 활용하고 있는지, 개인정보 유출사고로 노출된 개인정보는
          어느정도인지 데이터를 시각화하는 프로젝트입니다.
        </Typography>

        <Typography sx={{ mb: 1 }}>
          <b>프로젝트 그룹 ‘‘데이터유괴단'</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          <div>
            ‘데이터유괴단’은 데이터 시각화를 통해 일반 시민들이 정보를 쉽게 접하고
            이해할 수 있도록 하는 목적으로 현업 기획/개발/디자이너로 구성된 프로젝트
            그룹입니다. 팀 이름에서 드러나듯이 그들만의 유쾌한 시선으로 광고 시장에
            돌풍을 일으키고 있는 ‘돌고래유괴단'에서 영감을 얻어, 어떤 이유에서인지
            잘보이지않고, 복잡하고 어려워 보이는 사회 이슈를 데이터시각화로 쉽게
            풀어 보고자 합니다.
          </div>
          <div>- 팀원 : 최장현, 김강민, 권오현, 염명수, 서원, 김희수, 허웅</div>
          <div>- 도움주신분: 슬</div>
        </Typography>

        <Typography sx={{ mb: 1 }}>
          <b>데이터 출처</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          <div>e-나라지표 {">"} 개인정보 침해 신고/상담 건수, 위키백과사전, 언론기사</div>
          <div>
            본 사이트에서 사용된 데이터는 ‘데이터유괴단'팀원이 인터넷을 통해
            검색/취합한 데이터로, 정리 과정에서 일부 정보 오류가 있을 수 있습니다.
            정정이 필요한 경우 ‘코드포코리아'로 연락주세요.
          </div>
        </Typography>

        <Typography>
          <Typography
            sx={{ color: "white"}}
            component="a"
            href="https://www.pipc.go.kr"
            target="_blank"
            rel="noreferrer"
          >
            개인정보보호위원회
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
      </Container>
    </Paper>
  );
}
