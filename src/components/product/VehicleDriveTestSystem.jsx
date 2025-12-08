import header from '../../../assets/ko/product/common/header.png';

export default function VehicleDriveTestSystem() {
  return (
    <div class="product-container">
      <h1 className="main-title">Vehicle Drive Test System(Noise, Pulling, Steer, Performance, Brake Test)</h1>
      <img src={header} alt="header" className="product-image" />
      <section class="product-section">
        <h2 class="product-title main-title">배경</h2>
        <ul class="product-list">
          <li>생산된 차량의 주행검사 중, 주행 불안정성, 성능 저하 및 소음 불만의 원인을 정확하게 찾을 수 있는 시험 시스템이 필요하게 되었으며,</li>
          <li>VDTS는 실제 도로 주행 테스트를 통해 NVH 성능, 조향 성능, 제동성능, 동력성능 등을 정량적으로 측정 할 수 있는 테스트 시스템으로 개발되었습니다.</li>
          <li>VDTS는 차량 주행 데이터를 획득하여 다양한 주행 성능에 영향을 미치는 요소를 식별하고 추적 할 수 있는 테스트 시스템으로 주행 테스트를 수행하는 동안 주행 테스트 데이터를 측정 및 분석하여 주행 테스트 결과를 정량화하는 기능을 제공합니다.</li>
        </ul>
      </section>

      
      <section class="product-section">
        <h2 class="product-title main-title">목적</h2>
        <ul class="product-list">
          <li>주행 시험 및 검사 중에 데이터 모니터링, 검사, 데이터 수집 및 정량 분석을 수행 할 수 있는 테스트 시스템.</li>
          <li>다양한 드라이브 테스트 조건에서 NVH 성능 데이터, 조향, 가속, 제동 및 비디오, GPS 데이터 측정</li>
          <li>테스트 중 CAN 데이터 획득, 문제 식별, 검사 및 보고와 같은 일원화된 처리 시스템 으로 개발</li>
          <li>데이터 수집, 검사 및 분석에서 손실되는 시간 최소화</li>
        </ul>
      </section>

      
      <section class="product-section">
        <h2 class="product-title main-title">일반</h2>
        <ul class="product-list">
          <li>VDTS는 차량 주행 테스트를 수행하는 동시에 주행 테스트 데이터를 수집, 저장 및 업로드하는 장치입니다.</li>
          <li>소음, 가속도 센서, 100Hz GPS 및 차량 ECU가 제공하는 CAN 데이터와 같은 필드 데이터를 측정 할 수 있습니다.</li>
          <li>차량 주행 테스트 중 데이터를 저장할 수 있는 장치</li>
          <li>위치 기록용 GPS가 내장 된 GoPro를 사용하여 비디오 및 오디오 데이터를 수집 및 저장 한 후 저장된 CAN 데이터를 업로드하고, 분석 PC를 사용하여 VDTS 테스트 데이터와 통합하여 분석합니다.</li>
          <li>주행 테스트 데이터 업로드 및 주행 비디오 데이터, 데이터 수집 동기화, 재생, 분석, 보고서 등을 위한 전용 소프트웨어가 제공됩니다.</li>
        </ul>
      </section>

      
      <section class="product-section">
        <h2 class="product-title main-title">사양 개요</h2>
        <ul class="product-list">
          <li>VDTS는 컨트롤러, 100Hz GPS, 자이로, CAN 통신, 노이즈 측정을 위한 고속 IEPE 신호 처리, AD 변환, 데이터 저장 매체, 전원 공급 장치가 장착 된 차량 전용으로 사용할 수 있는 구조의 주행 테스트 및 모니터링 장치입니다.</li>
          <li>GoPro를 통한 비디오 데이터는 VDTS 데이터와 동기화되며, 테스트 분석 및 결과 보고서가 자동으로 생성되며, 주행 데이터의 자동 무선 업로드가 가능합니다.</li>
          <li>2~4 채널 마이크 / 가속도 센서 데이터를 수집하기 위한 내장 신호 처리 및 AD 컨버터, 기타 범용 센서 포트가 제공됩니다.</li>
          <li>동시에 100Hz GPS 및 CAN 데이터 측정이 수행됩니다.</li>
          <li>PC 소프트웨어를 통한 장치 구성, 설정, 저장된 데이터의 검색, 분석 및 자동 업로드가 수행됩니다.</li>
        </ul>
      </section>

      
      <section class="product-section">
        <h2 class="product-title main-title">운영 환경</h2>
        <ul class="product-list">
          <li>차량 동력 및 제동 성능 시험과 같이 빠른 가, 감속을 가진 환경에 적합한 구조</li>
          <li>전원 사양 : DC 9 ~ 30V DC 차량 전원 및 외부 배터리 사용 가능</li>
          <li>충격 저항 사양 : 50G 내충격, 내 진동 5G 이상 @ 5Hz ~ 500Hz</li>
          <li>작동온도조건 : -20 ~ 60 ℃</li>
        </ul>
      </section>

      
      <section class="product-section">
        <h2 class="product-title main-title">VDTS 하드웨어 사양</h2>
        <ul class="product-list">
          <li>듀얼 코어 A9 CPU 컨트롤러 및 5” LCD Display, 리모콘 으로 구성</li>
          <li>IEPE 타입 마이크 및 가속도 센서 측정 : 2 ~ 4 채널</li>
          <li>100Hz GPS 속도 센서 및 자이로 내장</li>
          <li>동력 성능 및 브레이크 테스트 만족을 위한 GPS 사양</li>
          <li>업데이트 속도 : 100Hz</li>
          <li>정확성 : 속도 &lt;0.1 km/h / 거리 &lt;0.05% (5cm / 100m) / 위치 &lt;3m @ 95% CEP</li>
          <li>2 채널 CAN 데이터 측정 : 1 채널 유선 및 1 채널 무선</li>
          <li>이더넷 및 무선 데이터 전송</li>
          <li>Micro-SD 및 USB 스토리지로 데이터 로깅 테스트</li>
          <li>주행 테스트 트랙의 날씨 데이터와 함께 데이터를 기록</li>
        </ul>
      </section>

    </div>
  )
}