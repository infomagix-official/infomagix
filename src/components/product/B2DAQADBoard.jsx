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

      <section class="product-section">
        <h2 class="product-title">B2-DAQ 보드 구성</h2>
        <div class="product-block">
          <p class="product-text">
            B2-DAQ 보드는 8 또는 16개의 아날로그 입력 채널, 8 개의 32 비트 카운터 / 엔코더 입력 및 16 개의 디지털 입력 및 8 개의 디지털 출력을 제공합니다.
          </p>
          <p class="product-text">
            B2-DAQ 시리즈 보드는 아날로그 입력과 동기측정을 보장하는 CAN 버스 데이터 측정모듈로 구성된 2 ~ 4 채널의 고속 CAN 인터페이스를 제공합니다.
          </p>
          <p class="product-text">
            온보드 RS-232 인터페이스는 내부 신호 컨디셔닝 앰프 및 외부 데이터 디스플레이 장치를 제어하는데 사용됩니다.
          </p>
        </div>
      </section>

      <section class="product-section">
        <h2 class="product-title">B2-24x08 시리즈 및 샘플링 특성</h2>
        <div class="product-block">
          <p class="product-text">
            B2-24x08 시리즈는 최대 8 개의 아날로그 입력 채널 (24 비트 해상도, 각 채널은 350 KS / s의 샘플링 속도)을 제공하며 온보드 메모리와 함께 높은 샘플링 속도로 노이즈 및 진동 레코딩에 적합한 신호 측정기능을 제공합니다.
          </p>
          <p class="product-text">
            B2-DAQ 시리즈 보드는 최대 샘플링 속도로 5.0 MB / s의 데이터를 전송할 수 있습니다. 각 채널의 입력 신호는 ADC에 의해 버퍼링되고 샘플링됩니다.
            각 아날로그 입력 채널은 독립적인 신호 경로와 별도의 ADC를 제공하므로 모든 아날로그 입력 채널을 동시에 샘플링 할 수 있습니다.
            또한 B2-DAQ 시리즈 보드는 다양한 유형의 센서 및 신호에 연결되는 측정 전용 신호 컨디셔닝 보드와 함께 사용됩니다.
          </p>
          <p class="product-text">
            B2-DAQ 시리즈 보드는 다양한 어플리케이션 및 환경 요구를 충족시키기 위해, -40˚C ~ 70˚C의 온도 범위에서 사용할 수 있는 동작온도 범위를 제공합니다
          </p>
        </div>
      </section>

      <section class="product-section">
        <h2 class="product-title">특징</h2>
        <div class="product-block">
          <ul class="product-list">
            <li>데이터 전송을위한 TCP / IP 연결.</li>
            <li>8 ~ 16 채널 동시 아날로그 입력.</li>
            <li>채널 당 200 kSamples /ch 및 ±10 V입력 범위.</li>
            <li>8 채널 32 비트 동기 카운터 / 엔코더.</li>
            <li>16 채널 동기식 디지털 입력.</li>
            <li>8 채널 디지털 출력.</li>
            <li>신호 컨디셔닝 모듈의 제어를위한 RS-232 인터페이스.</li>
            <li>외부 디스플레이 장치 용 RS-232 인터페이스.</li>
            <li>2 ~ 4 채널의 고속 CAN 2.0B 컨트롤러.</li>
          </ul>
        </div>
      </section>

      <section class="product-section">
        <h2 class="product-title">Signal conditioning 개요</h2>
        <div class="product-block">
          <p class="product-text">
            B2-DAQ 보드는 B2-DAQ 보드를 다양한 유형의 센서 및 신호에 직접 연결하는 B2-Sic 프로그래밍형 앰프 보드의 입력 신호 컨디 셔닝 모듈과 함께 사용됩니다.
            신호 컨디셔닝 보드는 8 채널 단 위 앰프 및 필터 모듈이며, 이 모듈은 연결된 센서 신호를 고 대 역폭의 표준 전압으로 변환합니다.
            이 신호 컨디셔닝 모듈은 B2DAQ 보드에 직접 연결되므로 센서 연결을 단순화하고 측정 품질을 향상시킵니다 .
          </p>
          <p class="product-text">
            -Signal conditioning 특징<br />
            B2 DAQ 보드에 직접 연결<br />
            보드 당 8 채널의 기본 신호 입력<br />
            300 kHz 대역폭<br />
            차동 입력<br />
            다중 센서 입력 범위 선택
          </p>
        </div>
      </section>

    </div>
  )
}

export default B2DAQADBoard;