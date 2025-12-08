import header from '../../../assets/ko/product/common/header.png';

export default function VMSVehicleDAQ() {
  return (
    <div className="product-container">
      {/* ================== VMS 제품 구성 ================== */}
      <section className="product-section">
        <h2 className="main-title">▶ VMS 제품구성</h2>
        <img src={header} alt="header" className="product-image" />

        <div className="product-block">
          <p className="product-text">
            VMS 장비는 범용 데이터계측 장치로 이동성이 요구되는 차량 시험과 벤치장비 모두에 사용이 가능하게 구성되었습니다.
            VMS 장비는 실차 시험을 위하여 차량 내 설치 및 사용이 용이하게, 가볍고 튼튼한 NC 가공 알루미늄구조의 샤시로 만들어졌으며,
            센서 연결이 간편하게 이루어질 수 있도록 전면에 전용 커넥터를 배치하고 차량전원을 이용할 수 있도록 사용 전원 전압 허용범위를
            넓게 적용하였습니다.
          </p>

          <p className="product-text">
            VMS 장비 전면에 설치되는 Thermocouple 커넥터와 LEMO, BNC 커넥터, D-sub 커넥터 등은 기본으로 장착되어 있으며,
            사용 용도에 따라 커넥터 형태를 변경하여 전용화 할 수 있습니다.
          </p>

          <p className="product-text">
            VMS는 알루미늄제 샤시 내부에 입력신호 처리를 위한 채널 별 Amplifier, Filter 및 B2-DAQ AD Converter Board로
            구성되는 DAQ 요소 모듈 들이 설치되어 집니다.
          </p>
        </div>
      </section>

      {/* ================== VMS800 개요 ================== */}
      <section className="product-section">
        <h2 className="main-title">VMS800 개요</h2>

        <div className="product-block">
          <p className="product-text">
            VMS800 모델은 차량용 데이터수집장치(Data Acquisition)로서, 컴팩트하고 견고한 구조의 알루미늄제 샤시 내에
            PC와 AD 보드가 일체로 설치되는 PC일체형 데이터수집장치 입니다.
          </p>

          <ul className="product-list">
            <li>차량 연비 시험</li>
            <li>차량 운전성능 시험</li>
            <li>주행성능 시험</li>
            <li>제동성능 시험</li>
            <li>실사용자 조건 주행 거동 파악 및 데이터 취득, 분석</li>
          </ul>
        </div>
      </section>

      {/* ================== VMS800 시스템 사양 ================== */}
      <section className="product-section">
        <h2 className="main-title">VMS800 시스템 사양</h2>

        <div className="product-block">
          <ul className="product-list">
            <li>200kHz 동시 샘플링, 16비트</li>
            <li>200kHz 동시 샘플링, 24bit</li>
            <li>250kHz 멀티플렉싱 샘플링, 16비트</li>
            <li>동작온도 : -5℃ ~ +60℃ (-20℃ ~ +60℃ @ Pre-warmed)</li>
            <li>동작전원 : DC 9 ~ 30V 또는 AC Adapter</li>
          </ul>
        </div>
      </section>

      {/* ================== VMS1301 개요 ================== */}
      <section className="product-section">
        <h2 className="main-title">VMS1301 개요</h2>

        <div className="product-block">
          <p className="product-text">
            VMS1301은 PC와 LAN으로 연결되어 작동되며, 차량 테스트 및 벤치 용도로 사용될 수 있는 소형 데이터 취득 장치입니다.
          </p>

          <p className="product-text">
            VMS1301은 CAN 포트를 통해 ECU 데이터를 수집 할 수 있으며,
            동시에 아날로그 및 디지털 신호를 측정하고 모든 데이터는 TCP/IP 통신으로 PC에 저장됩니다.
          </p>
        </div>
      </section>

      {/* ================== VMS1600 개요 ================== */}
      <section className="product-section">
        <h2 className="main-title">VMS1600 개요</h2>

        <div className="product-block">
          <p className="product-text">
            VMS1600은 차량용 데이터수집장치 장치로서 PC와 B2-DAQ AD 보드 및 신호 컨디셔닝 모듈,
            전원장치 등이 일체로 설치되는 PC일체형 데이터수집 장치입니다.
          </p>

          <ul className="product-list">
            <li>차량 거동 측정 및 다양한 조건의 성능 테스트 가능</li>
            <li>2 ~ 4 채널 CAN 어댑터 모듈 지원</li>
            <li>Pulse / Counter 입력 지원</li>
            <li>내부 배터리 옵션 장착 가능</li>
          </ul>
        </div>
      </section>

      {/* ================== 이미지 영역 예시 ================== */}
      <section className="product-section">
        <h2 className="main-title">제품 설치 예시</h2>

        <div className="product-block">
          {/* <img
            src="/images/vms-example.jpg"
            alt="VMS 제품 장착 예시"
            className="product-image"
          /> */}
        </div>
      </section>

    </div>
  )
}
