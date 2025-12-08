import header from '../../../assets/ko/product/common/header.png';

const VCDCANDisplay = () => {
  return (
    <div class="product-container">
      <h1 className="main-title">VCD CAN display 및 Performance test</h1>
      <img src={header} alt="header" className="product-image" />
      <section class="product-section">
        <h2 class="product-title main-title">VCD-5 개요</h2>
        <p class="product-text">
          VCD-5는 100Hz의 독립 동작형, 100Hz GPS 및 5" LCD 디스플레이가 내장된 차량용 CAN 직접연결 디스플레이 장치입니다.
        </p>
        <p class="product-text">
          차량 CAN 데이터 및 GPS 데이터를 기반으로 차량 CAN 데이터를 다양한 형태로 표시하며, DBC 파일과 J1979 프로토콜을 지원합니다.
        </p>
        <p class="product-text">
          내장된 100Hz GPS를 통해 GPS 속도로 보정된 차량 CAN 속도 및 GPS 속도를 동시에 제공합니다.
        </p>
      </section>

      <section class="product-section">
        <h3 class="product-title">데이터 로깅 기능</h3>
        <p class="product-text">
          VCD-5는 연속 데이터 로깅 및 트리거 조건 데이터 로깅을 모두 지원하여 필드 시험 시 데이터 수집에 매우 유용합니다.
        </p>
        <p class="product-text">
          CAN 입력을 통해 차량 거동 데이터와 GPS 기반 주행 경로 데이터를 동시 획득할 수 있습니다.
        </p>
      </section>

      <section class="product-section">
        <h3 class="product-title">제공되는 기능</h3>
        <ul class="product-list">
          <li>차량 CAN 데이터 및 GPS 데이터 디스플레이</li>
          <li>가속, 제동, Lap Time, 최고속 시험</li>
          <li>GPS 속도와 CAN 속도 동시 제공</li>
          <li>GPS 보정 CAN 속도 제공</li>
          <li>차량 실시간 상태 다중 화면 디스플레이</li>
        </ul>
      </section>

      <section class="product-section">
        <h3 class="product-title">특징</h3>
        <ul class="product-list">
          <li>마이크로 프로세서 컨트롤러 및 5" LCD 디스플레이</li>
          <li>SD 데이터 저장 매체 및 넓은 동작 전원 범위</li>
          <li>내장형 100Hz GPS</li>
          <li>GPS 및 CAN 휠 차속 동시 측정</li>
          <li>GPS 기반 CAN 속도 보정 가능</li>
        </ul>
      </section>

      <section class="product-section">
        <h3 class="product-title">사양</h3>

        <div class="product-block">
          <p class="product-text"><strong>본체</strong></p>
          <ul class="product-list">
            <li>ARM 기반 컨트롤러, 5" LCD, GPS, CAN 통신, SD 저장 매체 내장</li>
            <li>100Hz 또는 20Hz GPS 내장</li>
            <li>차량 속도 출력 100Hz</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><strong>CAN 인터페이스</strong></p>
          <ul class="product-list">
            <li>CANdb 방식</li>
            <li>J1939 방식</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><strong>펄스 출력 및 Analog 출력</strong></p>
          <ul class="product-list">
            <li>리모콘 트리거 입력</li>
            <li>차속 펄스 출력 및 Analog Output 출력</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><strong>RS232 출력 및 CAN 출력</strong></p>
          <ul class="product-list">
            <li>차속, 위치 데이터 100Hz 출력</li>
            <li>GPS 데이터 10Hz 출력</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><strong>크기 및 케이스</strong></p>
          <ul class="product-list">
            <li>알루미늄 방진·방습 케이스</li>
            <li>150mm × 100mm × 30mm</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><strong>동작 환경</strong></p>
          <ul class="product-list">
            <li>전원: Dual DC 9~30V</li>
            <li>동작 온도: -20℃ ~ 60℃</li>
          </ul>
        </div>
      </section>

      <section class="product-section">
        <h3 class="product-title">GPS 속도센서 사양 비교</h3>

        <p class="product-text"><strong>VCD-5GPS</strong></p>
        <ul class="product-list">
          <li>속도 범위: 0.0 ~ 500.0 kph</li>
          <li>정확도: ±0.2 kph</li>
          <li>거리 분해능: 1.0 cm</li>
          <li>Update rate: 100Hz</li>
        </ul>

        <p class="product-text"><strong>L350 속도센서</strong></p>
        <ul class="product-list">
          <li>속도 범위: 0.3 ~ 250.0 kph</li>
          <li>정확도: ±0.2%</li>
          <li>거리 분해능: 1.5 cm</li>
          <li>Update rate: 250Hz</li>
        </ul>
      </section>

    </div>
  )
}

export default VCDCANDisplay;