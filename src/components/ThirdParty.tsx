import { Container, Typography } from "@mui/material";

export default function ThirdParty() {
  return (
    <Container>
      <Typography variant="h6" sx={{ my: 3 }}>
        <b>Where Does My Data Go?</b>
      </Typography>
      <Typography variant="body1">
        ✏️ Where Does My Data GO? 는 온라인 서비스 제공사들이 개인정보를 얼마나
        수집하고 이를 활용하고 있는지, 개인정보 유출사고로 노출된 개인정보는
        어느정도인지 데이터를 시각화하는 프로젝트입니다.
      </Typography>
      <Typography variant="body1" sx={{ my: 3 }}>
        ✏️ 프로젝트 그룹 ‘‘데이터유괴단'
      </Typography>
      <Typography variant="body1">
        ‘데이터유괴단’은 데이터 시각화를 통해 일반 시민들이 정보를 쉽게 접하고
        이해할 수 있도록 하는 목적으로 현업 기획/개발/디자이너로 구성된 프로젝트
        그룹입니다. 팀 이름에서 드러나듯이 그들만의 유쾌한 시선으로 광고 시장에
        돌풍을 일으키고 있는 ‘돌고래유괴단'에서 영감을 얻어, 어떤 이유에서인지
        잘보이지않고, 복잡하고 어려워 보이는 사회 이슈를 데이터시각화로 쉽게
        풀어 보고자 합니다.
      </Typography>
      <Typography variant="body1" component="div" sx={{ my: 3 }}>
        <div>- 팀원 : 최장현, 김강민, 권오현, 염명수, 서원, 김희수, 허웅</div>
        <div>- 도움주신분: 슬</div>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        데이터 출처 : e-나라지표 {">"} 개인정보 침해 신고/상담 건수,
        위키백과사전, 언론기사
      </Typography>
    </Container>
  );
}
