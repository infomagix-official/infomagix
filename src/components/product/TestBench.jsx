import header from '../../../assets/ko/product/common/header.png';

const TestBench = () => {
  return (
    <div class="product-container">
      <h1 className="main-title">Compressor Test Bench 장비개요</h1>
      <img src={header} alt="header" className="product-image" />
      <div class="product-section">
        <h2 class="main-title">시험장비 개요</h2>

        <p class="product-text">
          본 시험장비는 실차 Air-conditioning system (compressor, condenser, evaporator, TXV 등)을
          Test Bench로 구성하여 Compressor의 내구 성능을 측정하는 것을 목적으로 합니다.
        </p>

        <p class="product-text">
          차량의 주행 시 조건 재현을 위해 고속 AC 모터를 사용하여 컴프레서 RPM을 엔진 속도에
          해당하는 RPM으로 제어하며, 공냉식 풍량제어형 냉매 압력 제어 시스템을 구성합니다.
        </p>

        <p class="product-text">
          Evaporator 측 부하 재현을 위해 냉각기 흡입 공기를 전기 히터로 가열하여
          냉각기 입구 온도를 조절할 수 있도록 구성합니다.
        </p>
      </div>

      <div class="product-section">
        <h2 class="product-title">장비 구성</h2>

        <p class="product-text">
          본 장비는 Compressor Stand, Condenser Stand, HEB Stand, Control Rack 및 구동용 Software로 구성되며,
          Clutch 및 Condenser Fan Motor 제어를 위한 DC Power Supply를 포함합니다.
        </p>

        <ul class="product-list">
          <li>컴프레서 RPM</li>
          <li>컴프레서 토출 냉매 압력</li>
          <li>Evaporator 입구 온도 (Ambient ~ 50℃ ± 0.5℃)</li>
          <li>Evaporator 가스 압력 및 과열도</li>
          <li>컴프레서 흡입 가스 압력</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">Automation System 개요</h2>

        <p class="product-text">
          Typical Automation System은 Compressor, Power Steering Pump 등의 부품 성능 및 내구 시험을
          목적으로 적용됩니다.
        </p>

        <p class="product-text">
          Test Bench 제어와 Data Acquisition이 통합된 PC Base Automation System으로
          Bench Control과 Data Acquisition Control을 동시에 수행합니다.
        </p>

        <p class="product-text">
          시험에 필요한 데이터 계측과 함께 물리량 및 Heat Balance를 실시간 계산합니다.
        </p>

        <ul class="product-list">
          <li>Windows OS 기반 동작</li>
          <li>테스트 설정 및 저장, 화면 구성 정의, 데이터 저장</li>
          <li>테스트 시퀀스 제어, 편집, 저장</li>
          <li>Test Bench Safety & Interlock Control</li>
          <li>PID Control (Motor, Valve, Heater)</li>
          <li>Physical Value 및 Heat Balance Calculation</li>
          <li>저장 데이터 분석, 파일 관리 및 리포트 출력</li>
          <li>PID Control 파라미터 입력</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">적용 실적</h2>

        <ul class="product-list">
          <li>D사 연구소 Typical Comp Test Bench Automation 2기 (2004)</li>
          <li>D사 연구소 Typical Comp Test Bench 3기 (2004)</li>
          <li>D사 연구소 Typical Comp Test Bench Automation 2기 (2005)</li>
          <li>D사 연구소 Power Steering Pump Test Bench Automation 1기 (2005)</li>
          <li>D사 연구소 Typical Comp Test Bench 3기 (2006)</li>
          <li>D사 연구소 Typical Comp Test Bench Automation 3기 (2006)</li>
          <li>D사 연구소 Typical Comp Test Bench Automation 3기 (2007)</li>
          <li>D사 컴프레서 에어컨 환경 성능 Test Bench 1기 (2008)</li>
          <li>D사 컴프레서 에어컨 부식 성능 Test Bench 1기 (2008)</li>
          <li>D사 컴프레서 칼로리미터 (2010)</li>
          <li>D사 스틱슬립 내구 테스트벤치 (2010)</li>
          <li>D사 Air Cooled 컴프레서 내구 테스트벤치 (2012)</li>
          <li>D사 컴프레서 내구 테스트벤치 인도공장 (2014)</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">Software 사양</h2>

        <div class="product-block">
          <p class="product-text"><b>Test Bench Control</b></p>
          <ul class="product-list">
            <li>Test Bench Safety & Interlock</li>
            <li>Test Sequence 작성, 편집, 저장</li>
            <li>PID Control</li>
            <li>Auto Test Management</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Configuration</b></p>
          <ul class="product-list">
            <li>Hardware Configuration</li>
            <li>Channel Configuration</li>
            <li>Data Logging, Storage Option</li>
            <li>Data Trigger, Storage Option</li>
            <li>Test Header Information 설정</li>
            <li>Analog Input Channel Calibration, Regression, Linearization</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Operator Interfaces / Displays</b></p>
          <ul class="product-list">
            <li>Screen 직접 편집, 수정, 저장</li>
            <li>Multiple Window Screen 구성</li>
            <li>PID Control Parameter View & 설정</li>
            <li>Test Bench Monitoring & Command Control</li>
            <li>Strip Chart Graph Window</li>
            <li>Alarm / Event Window</li>
            <li>On-line Calibration / Log Data / Raw Data View</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Test Data Calculation</b></p>
          <ul class="product-list">
            <li>Physical Parameter Calculation</li>
            <li>Heat Balance Calculation</li>
            <li>Test Data Validity 검사</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Data Processing</b></p>
          <ul class="product-list">
            <li>Binary Data 저장 방식 고속 처리</li>
            <li>Log Data Tree View / Header Information View</li>
            <li>Text / Graph Format Log Data View</li>
            <li>Multiple Graph Display</li>
            <li>Graph Copy / Cut / Save 기능</li>
            <li>Excel, Text, Access DB 변환</li>
            <li>HTML / Excel / Word 리포트 변환</li>
            <li>Multi Format Report Generator</li>
            <li>EMF Graph Image 변환</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default TestBench;