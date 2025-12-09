import header from '../../../assets/ko/product/common/header.png';

const B2DAQADBoard = () => {
  return (
    <div class="product-container">
      <h1 className="main-title">B2DAQ Board</h1>
      <img src={header} alt="header" className="product-image" />
      <section class="product-section">
        <h2 class="product-title">B2-DAQ 개요</h2>
        <div class="product-block">
          <p class="product-text">
            인포매직스에서는 측정, 제어 및 CAN 버스 통신 애플리케이션을 위한 B2-DAQ 시리즈 보드를 개발 공급하고 있습니다.
          </p>
          <p class="product-text">
            B2-DAQ 시리즈 보드는 다양한 유형의 센서 및 CAN 버스 데이터 측정에 사용할 수 있으며 고정도 데이터 수집 및 제어 어플리케이션의 요구를 충족시키고 고정밀 측정을 가능하게합니다.
            B2-DAQ 시리즈 보드는 광범위한 센서 신호, GPS 신호, 디지털 신호, CAN 버스 시스템에서 데이터를 수집할 수 있는 다 채널, 동시샘플링 방식 데이터 수집 보드입니다.
          </p>
        </div>
      </section>

      <h2 style={{
        background: "red"
      }}>image1</h2>

      <section className="product-section">
        <h2 className="product-title">B2-DAQ 보드 개요</h2>
        <ul className="product-list">
          <li>B2-DAQ 보드는 8 또는 16개의 아날로그 입력 채널, 8개의 32 비트 카운터 / 엔코더 입력 및 16 개의 디지털 입력 및 8 개의 디지털 출력을 제공합니다.</li>
          <li>B2-DAQ 시리즈 보드는 아날로그 입력과 동기측정을 보장하는 CAN 버스 데이터 측정모듈로 구성된 2 ~ 4 채널의 고속 CAN 인터페이스를 제공합니다.</li>
          <li>운용은 RS-232 인터페이스를 내장 한 컨트롤러 모듈 및 데이터 디스플레이 장치를 이용하는데 사용됩니다.</li>
          <li>B2-DAQ의 각 채널은 16 비트 또는 24 비트 해상도를 지원하는, ±10 V 측정범위를 제공합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image2</h2>

      <section className="product-section">
        <h2 className="product-title">B2-24x08 시리즈</h2>
        <ul className="product-list">
          <li>B2-24x08 시리즈는 최대 8 개의 아날로그 입력 채널 (24 비트 해상도, 각 채널은 350 KS / S 의 샘플링 속도)을 제공하며 온보드 메모리와 함께 높은 샘플링 속도로 노이즈 및 진동 레코딩에 적합한 신호 측정 기능을 제공합니다.</li>
          <li>B2-DAQ 시리즈 보드는 최대 샘플링 속도 5.0 MB / s 의 데이터를 전송할 수 있습니다.</li>
          <li>각 채널의 입력 신호는 ADC에 의해 버퍼링되고 샘플링됩니다.</li>
          <li>각 아날로그 입력 채널에는 직접 아날로그 및 ADC를 제어하는 고급 소프트웨어가 제공됩니다.</li>
          <li>또한 B2-DAQ 시리즈 보드는 다양한 유틸리티 및 신호 연결되는 측정 장치를 보다 손쉽게 연결하여 사용할 수 있습니다.</li>
          <li>B2-DAQ 시리즈 보드는 다양한 애플리케이션 및 환경 요구를 충족시키기 위해, -40 °C ~ 70 °C 의 온도 범위에서 사용할 수 있는 동작온도 범위를 제공합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">특징</h2>
        <ul className="product-list">
          <li>데이터 전송을위한 TCP / IP 연결.</li>
          <li>8 ~ 16 채널 동시 아날로그 입력.</li>
          <li>채널 당 200k Samples / sec 와 ±10 V 입력 범위.</li>
          <li>8 채널 32 비트 카운터 / 엔코더.</li>
          <li>16 채널 동기 디지털 입력.</li>
          <li>8 채널 디지털 출력.</li>
          <li>신호 컨디셔닝 모듈과 결합을 위한 RS-232 인터페이스.</li>
          <li>외부 디스플레이 장치 및 RS-232 인터페이스.</li>
          <li>2 ~ 4 채널의 고속 CAN 2.0B 컨트롤러.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">Signal conditioning 개요</h2>
        <ul className="product-list">
          <li>B2-DAQ 보드는 B2-DAQ 보드를 다양한 유형의 센서 및 신호에 직접 연결하는 B2-Sic 프로그래밍 앰프 보드의 입력 신호 컨디셔닝 모듈과 함께 사용됩니다.</li>
          <li>신호 컨디셔닝 보드는 8 채널 단위 앰프 및 필터 모듈이며, 이 모듈은 연결된 센서 신호를 그 대역폭의 표준 전압으로 변환합니다.</li>
          <li>이 신호 컨디셔닝 모듈은 B2DAQ 보드에 직접 연결됨으로 분석 연결을 단순화하고 측정 품질을 향상시킵니다.</li>
          <li>Signal conditioning 특징</li>
          <ul>
            <li>B2 DAQ 보드에 직접 연결</li>
            <li>보드 당 8 채널의 기본 신호 입력</li>
            <li>300 kHz 대역폭</li>
            <li>차동 입력</li>
            <li>다중 센서 입력 범위 선택</li>
          </ul>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image3</h2>
    </div>
  )
}

export default B2DAQADBoard;