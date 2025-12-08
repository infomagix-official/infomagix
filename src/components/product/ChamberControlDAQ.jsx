import header from '../../../assets/ko/product/common/header.png';

const ChamberControlDAQ = () => {
  return (
    <div class="product-container">
      <h1 className="main-title">챔버 컨트롤 & DAQ</h1>
      <img src={header} alt="header" className="product-image" />
      <div class="product-section">
        <h2 class="main-title">ActiveTS 소개</h2>

        <p class="product-text">
          ActiveTS 프로그램은 PLC, DCS를 이용한 챔버 Control 및 PC Monitoring 전용으로 개발된 프로그램입니다.
        </p>

        <p class="product-text">
          ActiveTS는 챔버 Control과 동시에 Data Acquisition을 구현하는 통합 운전 제어 및 Data Acquisition 프로그램입니다.
        </p>

        <p class="product-text">
          샤시다이나모, 로봇, 배기가스 분석기 등 주변 장비와의 Interface를 통한 원격 제어 및 Monitoring이 가능합니다.
        </p>
      </div>

      <div class="product-section">
        <h2 class="product-title">챔버 Control</h2>

        <ul class="product-list">
          <li>Stand Alone PLC Controller, direct Sensor, Actuator connection</li>
          <li>Micro Processor Compressor / Chiller System Controller</li>
          <li>TCP/IP PC to PLC Communication</li>
          <li>RS485 PC to Compressor / Chiller Communication</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">Data Acquisition</h2>

        <ul class="product-list">
          <li>Industrial DAQ Hardware with 100M E-net PC Interface</li>
          <li>Expandable 16 Thermocouple Analog Input</li>
          <li>Expandable 16 Voltage Analog Input</li>
          <li>16bit resolution Analog Digital Converting</li>
          <li>Sampling Rate : 1Hz, 10Hz, 100Hz, 500Hz, 1Khz</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">주변장치 Interface</h2>

        <ul class="product-list">
          <li>Dynamo Interface : AK Protocol</li>
          <li>Robot Interface : AK Protocol</li>
          <li>Emission Analyzer Interface : AK Protocol</li>
          <li>PLC Interface : OPC Server, Serial (RS422, RS232), TCP/IP</li>
          <li>Barcode Reader Interface</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">적용실적</h2>

        <ul class="product-list">
          <li>A사 완성차 전자시험 환경챔버 Control & DAS 1기 (2002)</li>
          <li>B사 완성차 전장시험 환경챔버 Control & DAS 1기 (2002)</li>
          <li>B사 완성차 기능 환경챔버 Control & DAS 1기 (2002)</li>
          <li>E사 견인전동기 전력장치 환경챔버 Control & DAS 1기 (2003)</li>
          <li>A사 완성차 MACD 환경챔버 Control & DAS 7기 (2004)</li>
          <li>A사 승용디젤엔진 환경챔버 Control & DAS 1기 (2004)</li>
          <li>한국델파이 연구소 완성차 Hot Wind Tunnel 챔버 Control & DAS 1기 (2005)</li>
          <li>E사 환경챔버 Control & DAS 4기 (2005 ~ 2008)</li>
          <li>A사 상용디젤엔진 환경챔버 Control & DAS 1기 (2006)</li>
          <li>A사 성능시험 SHED Control & DAS 1기 (2006)</li>
          <li>A사 차량시험 환경챔버 Control & DAS 6기 (2006 ~ 2009)</li>
        </ul>
      </div>

      <div class="product-section">
        <h2 class="product-title">Refrigeration System Interface</h2>

        <ul class="product-list">
          <li>Compressor Network Interface를 통한 Remote Control & Monitoring</li>
          <li>운전 중 Compressor 제어변수, 물리량 Real-time 계측</li>
          <li>냉동기 운전 물리량 자동 저장 및 일일 운전 보고서 자동 저장</li>
          <li>냉동기 설정값 및 조건 판단값 전송</li>
          <li>100가지 이상의 운전 Message 전송 및 표시</li>
          <li>Event 자동 저장을 통한 냉동기 이상 원인 추적</li>
        </ul>

        <p class="product-text"><b>냉동기 Fault 발생 예시</b></p>
        <ul class="product-list">
          <li>"Suction Gas Temp Low"</li>
          <li>"Hot Gas Valve Opened"</li>
          <li>"Suction Superheat Low"</li>
          <li>"Compressor Stopped"</li>
        </ul>

        <p class="product-text">
          냉동기로부터 발생된 Message 및 냉동기 운전 물리량은 Chamber PC에 자동으로 이력 저장됩니다.
        </p>
      </div>

      <div class="product-section">
        <h2 class="product-title">Software 사양</h2>

        <div class="product-block">
          <p class="product-text"><b>Security</b></p>
          <p class="product-text">Log-in Password 방식의 Security 기능</p>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Test Sequencer</b></p>
          <ul class="product-list">
            <li>Test Sequence 작성, 편집, 저장 Auto Test Management</li>
            <li>Analog / Digital set point output generation</li>
            <li>외부 Controller 제어용 Analog set point 생성</li>
            <li>무제한 Sequence Steps</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Data Analysis</b></p>
          <ul class="product-list">
            <li>Log Data Tree View / Header Information View</li>
            <li>Text / Graph 2가지 Data View</li>
            <li>Multiple Graph Display</li>
            <li>Excel, Text, Access DB File Converting</li>
            <li>HTML / Excel / Word Report File Converting</li>
            <li>Multi Format Report Generator</li>
            <li>EMF Graph Image 변환</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Diagnostics</b></p>
          <p class="product-text">
            Analog input, digital input, analog output, digital output 진단 기능
          </p>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Configuration</b></p>
          <ul class="product-list">
            <li>Hardware Configuration 사용자 설정</li>
            <li>Channel Configuration</li>
            <li>Data Logging, Trigger, Storage Option 설정</li>
            <li>Analog Input Channel Calibration, Regression, Linearization 지원</li>
          </ul>
        </div>

        <div class="product-block">
          <p class="product-text"><b>Operator Interfaces / Displays</b></p>
          <ul class="product-list">
            <li>Screen 직접 편집 가능</li>
            <li>Multiple Window Screen 구성</li>
            <li>PID Control Parameter View & 설정</li>
            <li>Strip Chart Graph Window</li>
            <li>Alarm / Event Window</li>
            <li>On-line Calibration / Log Data / Raw Data View</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ChamberControlDAQ;