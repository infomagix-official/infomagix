import header from '../../../assets/ko/product/common/header.png';

const ActiveSoftware = () => {
  return (
    <div class="product-container">
      <h1 className="main-title">ActiveEYE Software</h1>
      <img src={header} alt="header" className="product-image" />
      <div class="product-section">
        <h2 class="main-title">ActiveEye 소개</h2>
        <p class="product-text">
          ActiveEye 소프트웨어는 공장 설비 감시 및 운영 자동화를 위해 개발된 설비 제어 및 유지관리 프로그램으로,
          설비 시스템의 운영성을 향상시키고 유지 보수를 편리하게 하며 설비의 신뢰성 향상을 도모하는 솔루션입니다.
        </p>
        <p class="product-text">
          Facility control & maintenance management system은 설계, 제작, 설치, 운전, 보전 및 설비 관리 단계를 통합하여
          설비자산을 효율적으로 활용하고 생산성을 높이며, 설비 Life Cycle 기간 동안 유지관리 비용을 절감하기 위한 통합 시스템입니다.
        </p>
      </div>

      <div class="product-section">
        <h2 class="product-title">도입효과</h2>

        <div class="product-block">
          <p class="product-text"><b>표준화 작업</b></p>
          <ul class="product-list">
            <li>정비 기술 표준화 및 지속적인 기술 축적</li>
            <li>작업 인력, 자재, 표준 작업 방법 사전 파악 가능</li>
            <li>지식경영(Knowledge Management) 현장 적용 가능</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>작업 효율화</b></p>
          <ul class="product-list">
            <li>설비이력 조회 및 관리</li>
            <li>정비 성과 지표 간편 계산</li>
            <li>작업계획의 체계적 관리</li>
            <li>표준 문서 작업 경감</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Database 구축</b></p>
          <ul class="product-list">
            <li>설비 및 Spare Parts Spec Data DB화</li>
            <li>설비, 작업 History, 사용량 데이터 구축</li>
            <li>예방정비 주기 분석 기초자료 제공</li>
            <li>보전비용 절감 및 설비 신뢰성 향상</li>
          </ul>
        </div>
      </div>

      <div class="product-section">
        <h2 class="product-title">주요기능</h2>

        <div class="product-block">
          <p class="product-text"><b>설비운전 및 제어 관리</b></p>
          <p class="product-text">모든 시설에 대한 통합 제어 및 감시 기능 제공</p>
        </div>

        <div class="product-block">
          <p class="product-text"><b>설비운영 및 보전 관리</b></p>
          <ul class="product-list">
            <li>시설 배치도 기반 설비 관리</li>
            <li>설비 클릭을 통한 실시간 정보 확인</li>
            <li>월·분기·연 단위 통계 분석</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>도면, 문서 통합 관리</b></p>
          <ul class="product-list">
            <li>시각적 정보 관리 시스템</li>
            <li>신속한 의사 결정 지원</li>
            <li>유지보수 노력 최소화</li>
          </ul>
        </div>
      </div>

      <div class="product-section">
        <h2 class="product-title">ActiveEYE 특징</h2>
        <ul class="product-list">
          <li>멀티태스킹 기반 고효율 시스템</li>
          <li>네트워크 데이터 공유</li>
          <li>Historical Database 리포트 출력</li>
          <li>트렌드 분석 및 로깅 기능</li>
          <li>사용자 친화적 GUI</li>
          <li>Client / Server 분산 네트워크</li>
          <li>Excel, Word 연동</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">Data Acquisition & Interface</h2>
        <ul class="product-list">
          <li>PLC, DDC, Embedded Controller 연동</li>
          <li>Block Communication, Cache Memory 기반 통신</li>
          <li>History Database 자동 저장</li>
          <li>API 기반 실시간 데이터 접근</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">Performance</h2>
        <ul class="product-list">
          <li>I/O Server Read & Write 최적화</li>
          <li>Alarm Event 우선 처리</li>
          <li>User 설정 Sample Rate Trending</li>
          <li>On Demand 처리 방식</li>
          <li>Cache Memory 활용</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">도면 열람</h2>
        <p class="product-text">
          도면은 툴바를 이용해 확대 및 축소가 가능하며, 각 화면은 탭 구조로 이동할 수 있습니다.
        </p>
      </div>

      <div class="product-section">
        <h2 class="product-title">장비 등록 및 관리</h2>
        <p class="product-text">
          장비 등록, 점검 일정 관리, 점검 이력 관리, 장애 이력 관리 기능 제공
        </p>
      </div>

      <div class="product-section">
        <h2 class="product-title">장비 목록 보기</h2>
        <p class="product-text">
          장비 더블 클릭 시 상세 정보 확인 및 수정 가능하며, 도면 기반 설비 선택도 지원합니다.
        </p>
      </div>

      <div class="product-section">
        <h2 class="product-title">점검 이력 열람</h2>
        <p class="product-text">
          장비에 대한 점검 항목 등록 및 이력 조회 가능
        </p>
      </div>
    </div>
  )
}

export default ActiveSoftware;