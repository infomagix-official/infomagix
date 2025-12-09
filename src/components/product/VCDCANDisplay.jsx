import header from '../../../assets/ko/product/common/header.png';

const VCDCANDisplay = () => {
  return (
    <div class="product-container">
      <h1 className="main-title">VCD CAN display 및 Performance test</h1>
      <img src={header} alt="header" className="product-image" />

      <section className="product-section">
        <h2 className="product-title">VCD-5 개요</h2>
        <ul className="product-list">
          <li>VCD-5는 100Hz의 독립 동작형, 100Hz GPS 및 5 "LCD 디스플레이가 내장된, 차량용 CAN 직접연결 디스플레이 장치입니다.</li>
          <li>VCD-5는 차량 CAN 데이터 및 GPS 데이터를 기반으로 차량 CAN 데이터를 다양한 형태로 표시하는 차량 CAN 모니터링 기능을 제공하며, 차량 CAN 데이터 모니터링을 위해서, DBC 파일과 J1979 프로토콜을 지원합니다.</li>
          <li>VCD-5는 내장된 100Hz GPS로 부터, 각종 GPS 데이터를 제공하며, 동시에 GPS 속도를 이용하여 보정한 차량 CAN 속도 및 GPS 속도 모두를 이용하여 차량 속도 및 거리 출력을 제공할 수 있습니다.</li>
          <h2 style={{
            background: "red"
          }}>image1</h2>
          <li>VCD-5는 CAN 데이터 로깅 기능을 제공하며, 특히 연속 데이터 로깅 및 트리거 조건 데이터 로깅 두 가지 의 데이터 로깅 기능을 제공하므로 필드시험에서 차량 데이터를 수집하는데 편리합니다.</li>
          <li>VCD-5는 CAN 입력을 통해 차량 거동 데이터와 GPS를 통한 운전 경로에 대한 데이터를 쉽게 얻을 수 있어 필드 데이터 취득에 유용합니다.</li>
          <li>100Hz의 빠른 GPS 업데이트 속도를 기반으로 VCD-5는 다양한 테스트 어플리케이션에 사용될 수 있으며, CAN을 통한 차량 속도 출력 아날로그 출력, 펄스 출력을 제공하므로, 기존의 전통적인 광학 속도를 대체 할 수 있습니다.</li>
          <li>VCD-5는 GPS 로 보정된 차량 CAN속도를 제공합니다. 차량 CAN 속도와 실제 GPS 속도를 비교하고, GPS 속도로 보정 된 CAN속도와를 구하고, GPS 속도 와 CAN 속도 간의 자동 전환 기능을 이용하여, GPS 를 사용할 수 없는 구간에서도, 시험 중 중단 없이 정확한 차량 속도를 측정 할 수 있습니다.</li>
          <h2 style={{
            background: "red"
          }}>image2</h2>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">제공되는 기능</h2>
        <ul className="product-list">
          <li>차량 CAN 데이터 및 GPS 데이터 디스플레이</li>
          <li>가속시험, 제동시험, Lap time 시험, 최고속 시험 등 성능평가시험 기능 제공</li>
          <li>GPS 속도와 CAN 속도의 동시 제공</li>
          <li>GPS로 보정 된 정확한 CAN 속도 제공</li>
          <li>차량의 실시간 상태를 표시하는 다량 화면 디스플레이 제공</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">특징</h2>
        <ul className="product-list">
          <li>마이크로 프로세서 컨트롤러 및 5 "LCD 디스플레이</li>
          <li>SD 데이터 저장 매체 및 넓은 동작 범위의 전원 장치</li>
          <li>내장된 100Hz GPS</li>
          <li>GPS 및 CAN 휠 차속 동시 측정</li>
          <li>GPS 속도로 CAN휠 속도 보정 가능</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">사양</h2>
        <ul className="product-list">
          <li>
            본체
          </li>
          <ul>
            <li>ARM 프로세서 기반 컨트롤러, 5"LCD, 20Hz 또는 100Hz GPS 모듈, CAN 통신모듈, IO 모듈, SD 데이터저장매체, 전원장치 등이 내장</li>
            <li>100Hz GPS, 또는 20Hz GPS 내장</li>
            <li>100Hz GPS 기준 100Hz 차량속도 출력</li>
          </ul>
          <li>차량 CAN 데이터 인터페이스</li>
          <ul>
            <li>CANdb 방식</li>
            <li>J1939 방식</li>
          </ul>
          <li>펄스출력 및 Analog 출력</li>
          <ul>
            <li>데이터 트리거 입력 신호 등을 위한 리모콘 등 조작 입력</li>
            <li>차속 펄스출력 및 Analog output 출력</li>
          </ul>
          <li>RS232출력 및 CAN 출력</li>
          <ul>
            <li>차속, 위치 데이터 100Hz 출력</li>
            <li>기타 GPS 데이터 10Hz 출력</li>
          </ul>
          <li>크기 및 케이스</li>
          <ul>
            <li>차량 장착 사용에 적합한 진동 및 습기 방지 구조의 알루미늄 케이스로 구성</li>
            <li>크기 : 150mm x 100mm x 30mm</li>
          </ul>
          <li>동작환경</li>
          <ul>
            <li>감속,가속이 급격한 차량 환경에 적합</li>
            <li>전원사양 : Dual DC 9 ~ 30V DC 차량전원 사용</li>
            <li>동작온도 : -20 °C ~ 60 °C</li>
          </ul>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">사양 비교 : VCD-5GPS vs GPS 속도센서 vs L350</h2>
        <ul className="product-list">
          <li>VCD-5GPS GPS 속도센서 사양</li>
          <ul>
            <li>속도 측정 범위 : 0.0 ~ 500.0 kph</li>
            <li>속도 측정 정도 : ±0.2kph</li>
            <li>거리측정 분해능 : 1.0 cm</li>
            <li>거리 측정 정도 : ±0.2%</li>
            <li>Update rate : 10ms (100Hz)</li>
            <li>기타 GPS 데이터 : 위치데이터 외 제공</li>
          </ul>
          <li>참고 : L350 속도센서(외장)사양</li>
          <ul>
            <li>속도측정범위 : 0.3 ~ 250.0kph</li>
            <li>속도측정정도 : ±0.2%</li>
            <li>거리측정 분해능 : 1.5 cm</li>
            <li>거리측정정도 : ±0.2%</li>
            <li>Update rate : 4ms (250Hz)</li>
            <li>측정지연시간 : 필터 및 평균값계산 출력에 의한 10ms ~ 100ms 출력지연</li>
          </ul>
          <li>VCD-5GPS 특징점</li>
          <ul>
            <li>내장된 100Hz GPS 센서를 이용함</li>
            <li>개방된 공간에서 GPS 속도, 거리 측정을 이용 시험 진행</li>
            <li>내장된 GPS의 위치 데이터를 활용 할 수 있으며</li>
            <li>향상된 속도, 거리 정밀도 (0.2kph) 확보</li>
            <li>간소화된 속도측정 장비 및 시스템 구성</li>
            <li>최소한의 측정 장비 구성 가능</li>
            <li>측정 시스템 구성의 경량화</li>
            <li>측정 장비 본체의 소형 경량화 개선</li>
          </ul>
        </ul>
      </section>      

    </div>
  )
}

export default VCDCANDisplay;