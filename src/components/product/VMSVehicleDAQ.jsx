import header from '../../../assets/ko/product/common/header.png';

export default function VMSVehicleDAQ() {
  return (
    <div className="product-container">
      {/* ================== VMS 제품 구성 ================== */}
      <h1 className="main-title">차량 DAQ</h1>
      <img src={header} alt="header" className="product-image" />
      <section className="product-section">
        <h2 className="product-title">VMS 제품구성</h2>
        <ul className="product-list">
          <li>VMS 장비는 범용 데이터계측 장치로 이동성이 요구되는 차량 시험과 벤치장비 모두에 사용이 가능하게 구성되었습니다.</li>
          <li>VMS 장비는 실차 시험을 위하여 차량 내 설치 및 사용이 용이하게, 가볍고 튼튼한 NC 가공 알루미늄구조의 샤시로 만들어 졌으며, 센서 연결이 간편하게 이루어 질 수 있도록 전면에 전용 콘넥터를 배치하고, 차량전원을 이용할 수 있도록 사용 전원 전압 허용범위를 넓게 적용 하였습니다.</li>
          <li>VMS 장비 전면에 설치되는 Thermocouple 커넥터와 LEMO, BNC 커넥터, DSub커넥터 등은 기본으로 장착되어 있으며, 사용 용도에 따라 커넥터 형태를 변경하여 적용화 할 수 있습니다.</li>
          <li>VMS는 알루미늄제 샤시 내부에 입력신호 처리를 위한 채널 별 Amplifier, Filter 및 B2-DAQ AD Converter Board로 구성되는 DAQ 요소 모듈 들이 설치되어 집니다.</li>
          <li>VMS는 신호 입력 신호처리를 위하여 차동(Differential) 신호입력 및 절연처리가 되어있어, 범용 및 Low Noise, 고정도 신호 계측 이 가능하며 다음과 같은 신호연결의 유연성을 제공합니다.</li>
          <li>Voltage / Thermocouple</li>
          <li>Strain Guage / Bridge</li>
          <li>IEPE Accelerometer</li>
          <li>VMS 내부에 설치된 Amplifier, 절연 모듈은 50g 내 충격등급 과 5g, 내 진동등급 및 -40℃~+70℃의 작동온도, 알루미늄 메탈 구조의 견고한 하우징 및 전기적인 절연 성능이 보장됩니다.</li>
          <li>VMS는 8채널 또는 4채널 단위로 입력신호를 선택하여 구성 할수 있으며, 전면의 콘넥터는 사용하는 센서 콘넥터 구조와 적합한 사양으로 구성 가능합니다.</li>
          <li>VMS는 GPS 와 영상카메라 인터페이스 를 제공하여, GPS 를 이용한 차량의 주행 고도 궤적에 대한 모니터링 및 영상카메라를 통한 동영상 모니터링이 가능합니다</li>
          <li>VMS는 DC 9~30V DC 범위의 차량전원을 이용하여 동작이 가능하며, 특히 변동이 심한 밧데리 전압에도 내부 공급전압을 일정하게 유지 할 수 있는 정전압 장치를 내장하고 있어 안정적인 동작이 가능합니다.</li>
          <li>PC 내장형 VMS 모델은 저장된 데이터의 외부 백업과 외부 장치연결을 위한 USB 포트를 구비하고 있어 시험 데이터의 복사 등 편리성을 제공합니다.</li>
          <li>VMS는 ECU와의 CAN버스 연결을 위한 CAN 1 포트와 동시에 CAN 버스 방식의 주변장치 와의 연결을 위한 CAN2 포트를 구비하고 있어 표준 CAN 버스를 사용하는 장치로부터의 데이터 계측이 손쉽게 가능합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image1</h2>

      <h2 style={{
        background: "red"
      }}>image2</h2>

      <section className="product-section">
        <h2 className="product-title">VMS800 개요</h2>
        <ul className="product-list">
          <li>VMS800 모델은 차량용 데이터수집장치(Data Acquisition)로서, 콤팩트하고 견고한 구조의 알루미늄제 샤시 내에 PC와 AD 보드가 일체로 설치되는 PC일체형 데이터수집장치 입니다.</li>
          <li>VMS800 모델은 200kHz/ch, 동시샘플링, 16비트 해상도 AD 보드인 B2-DAQ-16x08을 기본으로 장착하며, 필요시 200kHz/ch, 동시 샘플링, 24 비트 해상도 AD 보드 인 B2-DAQ 24x08 모델을 선택하여 장착할 수 있습니다.</li>
          <li>VMS800 모델은 내부에 밧데리를 장착하여, 급작스런 전원 단락에 대비할 수 있어, 차량 시동 간의 급격한 전압 강하 변동 시에도 안정적인 동작을 보장합니다.</li>
          <li>최대 8채널의 Analog 신호입력 모듈 설치가 가능하며, 샤시 전면에는 Thermocouple 커넥터, LEMO, BNC콘넥터, D-SUB콘넥터를 선택하여 구성할 수 있어 센서를 바로 연결하여 사용 할 수 있습니다.</li>
          <li>입력신호는 사용자 요구에 맞게 필요한 입력 모듈과 그에 따른 전면 커넥터 형태를 선택하여 구성할 수 있습니다.</li>
          <li>VMS 800 은 차량 상태 모니터링 및 필드 데이터 취득시험이 가능하여, 다음의 시험을 동시에 수행할 수 있는 차량용 계측 시스템으로 사용될 수 있습니다.</li>
          <ul>
            <li>차량 연비 시험</li>
            <li>차량 운전성능 시험</li>
            <li>주행성능 시험</li>
            <li>제동성능 시험</li>
            <li>실사용자 조건 주행 거동 파악 및 데이터 취득, 분석</li>
          </ul>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image3</h2>

      <section className="product-section">
        <h2 className="product-title">VMS800 구성 및 사양</h2>
        <ul className="product-list">
          <li>차량 거동 데이터 취득, 모니터링</li>
          <ul>
            <li>차량 ECU 에서 제공하는 스티어링, 조안성, 제동, 승차감 데이터와 차량자세센서(IMU), 조향각센서, 가속도 센서 등의 필드 계측이 가능한 이동식 장비로, 차량 자세센서(IMU), 조향각센서를 연결 할 경우, ECU 신호 외에 부가 데이터를 함께 계측, 저장하여 활용성이 증가됩니다.</li>  
          </ul>
          <li>소프트웨어 기능</li>
          <ul>
            <li>ActiveTX 소프트웨어에서는 범용 데이터 수집 및 모니터링 기능이 제공됩니다.</li>
            <li>ActiveTX 소프트웨어는 연결된 모든 센서와 내장된 GPS 를 이용한 차량 속도 및 거리 측정, CAN 데이터, GPS 데이터, 비디오 데이터를 모두 동기화하여 측정하고 저장하는 기능을 제공합니다.</li>
            <li>ActiveTX 소프트웨어는 ECU 데이터 취득을 범용화하고, CANdb채널 편집 기능을 제공하는 DBC 파일을 지원합니다.</li>
            <li>연료량센서, 차량속도, 거리, 차량 CAN 신호 및 GPS 관련 신호, 영상, 동시 계측(동기화) 및 저장 기능이 제공됩니다.</li>
            <li>ECU 데이터 취득의 범용화를 위해 CANdb 채널 편집 기능제공하며, 범용 데이터 취득, 모니터링 기능제공</li>
          </ul>
          <li>CAN 인터페이스</li>
          <ul>
            <li>VMS800 모델은 센서 데이터 측정과 동시에, CAN 버스 데이터 취득이 가능하게, 2 ~ 4 채널의 CAN 어댑터 모듈을 제공합니다.</li>
            <li>CAN 버스가 적용되는 ECU 등으로 부터 데이터를 취득하기 위해 적용 가능한 CAN 통신 방식은 CANdb 또는 ECU Calibration 을 위해 사용되는 CCP 방식, 진단용 KWP2000 방식이 모두 가능합니다.</li>
            <li>데이터 로그 기능</li>
            <li>사용자가 설정하는 입력 및 저장채널에 대한 설정파일에 따라 자체 데이터 로깅이 가능한 스탠드 얼론 형으로, 취득하고자 하는데이터를 저장하는 독립동작 기능을 제공합니다.</li>
          </ul>
          <li>데이터 로그 기능</li>
          <ul>
            <li>사용자가 설정하는 입력 및 저장채널에 대한 설정파일에 따라 자체 데이터 로깅이 가능한 스탠드 얼론 형으로, 취득하고자 하는 데이터를 저장하는 독립동작 기능을 제공합니다.</li>
          </ul>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image4</h2>

      <section className="product-section">
        <h2 className="product-title">VMS800 시스템 사양</h2>
        <ul className="product-list">
          <li>VMS800 모델 데이터 수집 시스템은 AD 보드, 입력 신호 조절 보드, 통신 보드로 구성되어, 10Hz GPS가 기본으로 장착되며, 고정밀 100Hz GPS를 선택적으로 설치할 수 있습니다.</li>
          <li>200kHz 동시 샘플링, 16 비트</li>
          <li>200kHz 동시 샘플링, 24bit</li>
          <li>250kHz 멀티플렉싱 샘플링, 16 비트</li>
          <li>동작온도 : -5℃ ~ +60℃ (-20℃ ~ +60℃ @ Pre-warmed)</li>
          <li>동작전원 : DC 9 ~ 30V 또는 AC adapter</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">VMS800 PC 사양</h2>
        <ul className="product-list">
          <li>CPU: Core i7</li>
          <li>RAM: 4G ~ 8G</li>
          <li>Storage: SSD 128G / 256G</li>
          <li>(2) USB, (1) LAN, (1) VGA, (1) Keyboard & Mouse</li>
          <li>Operating temperature: -5℃ ~ +60℃</li>
          <li>Operating power: DC 9 ~ 30V</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">VMS800 신호처리모듈</h2>
        <ul className="product-list">
          <li>입력신호처리 모듈은 8채널 단위로 아래의 모듈 중 선택이 가능하며, 모든 입력채널에는 채널 별 하드웨어 필터가 내장되어 있어, 적용하고자 하는 필터 타입을 선택하여 사용이 가능합니다.</li>
          <li>Thermocouple : 8 Channel</li>
          <li>Analog Voltage (DC 100V) 입력채널 : 8 Channel</li>
          <li>Analog (Strain/DC 10V) 입력채널 : 8 Channel</li>
          <li>Analog (IEPE) 입력채널 : 8 Channel</li>
          <li>Pulse 입력채널 : 2 ~ 8 Channel</li>
          <li>CAN 채널 : 2 ~ 4 Channel</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image5</h2>

      <section className="product-section">
        <h2 className="product-title">VMS1301 개요</h2>
        <ul className="product-list">
          <li>VMS1301은 PC와 LAN 으로 연결되어 작동되며, 차량 테스트 및 벤치 용도로 사용될 수 있는 소형 데이터 취득 장치입니다.</li>
          <li>VMS1301은 NC 가공 알루미늄 샤시로 만들어진 차량 테스트용도로 사용하기에 충분히 견고한 구조 입니다.</li>
          <li>정면에 전용 커넥터가 배치되어 센서연결이 간단하며, 광범위한 동작 전원 옵션으로 차량 전원을 사용하여 동작 가능합니다.</li>
          <li>VMS1301은 신호 입력 처리 용 모듈로서, 차동형 신호 컨디셔닝 기능을 갖추고 있어 저노이즈, 고정밀 신호를 고정도로 계측 할 수 있습니다.</li>
          <li>VMS1301은 CAN 포트를 통해 ECU 데이터를 수집 할 수 있으며, 동시에 아날로그 및 디지털 신호를 측정하고, 측정된 모든 데이터는 동기화되어TCP/IP 통신 으로 연결된 PC로 전송되어 저장됩니다.</li>
          <li>VMS1301은 기본적인 데이터 수집 목적과 분석 목적 두 가지 모두에 사용할 수 있으며, 다양한 조건의 차량 거동 측정 및 각종 성능 시험 용도로 사용될 수 있습니다</li>
          <li>PC로 전송되는 데이터는 ActiveTX 소프트웨어를 사용하여 다양한 화면 유형으로 모니터링 할 수 있으며, 또한 ActiveTX 소프트웨어에서는 데이터 저장과 입력 신호 설정 같은 데이터 수집 기능을 위한 다양한 기능 옵션을 제공합니다.</li>
          <li>차량 데이터 측정 용도의 VMS 1301은 차량 거동 측정 및 모니터링, ECU CAN 데이터 모니터링 등의 목적에 매우 적합합니다.</li>
          <li>VMS1301dms TCP/IP 통신으로 연결된 PC와 함께 동작하며, 8채널 16비트 또는 24비트, 200kHz/ch의 동시 샘플링 AD 보드가 장착됩니다.</li>
          <li>VMS1301은 8채널의 아날로그 신호 입력을 제공하며, 소형 열전대 모듈 커넥터 및 범용으로 사용되는 LEMO, BNC 또는 D-SUB형태의 커넥터가 설치되어 편리한 
            센서 연결이 가능하며, 입력 신호는 필요에 따라 선택하여 구성할 수 있으며, 그에 따라 입력 신호 처리 모듈 및 해당 전면 커넥터 유형을 선택하여 
            장착할 수 있습니다.
          </li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image6</h2>

      <section className="product-section">
        <h2 className="product-title">VMS1301 사양</h2>
        <ul className="product-list">
          <li>VMS1301 모델 데이터 수집 시스템은 AD 보드와 입력 신호 컨디셔닝 보드, 통신 보드로 구성되며, 10Hz GPS를 기본을 제공하며, 필요시, 100Hz의 고정밀 GPS를 선택할 수 있습니다.</li>
          <li>설치 가능한 AD 보드는 3 종류의 B2-DAQ 보드 모델에서 선택할 수 있으며, 각 보드의 샘플링 속도는 다음과 같습니다.</li>
          <li>200kHz 동시 샘플링, 16 비트</li>
          <li>200kHz 동시 샘플링, 24bit</li>
          <li>250kHz 멀티플렉싱 샘플링, 16 비트</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">CAN 인터페이스</h2>
        <ul className="product-list">
          <li>
            VMS1301은 2채널 CAN 어탭터 모듈을 설치할 수 있으며, CAN 버스 데이터 수집과 동시에 아날로그 
            입력채널을 통한 센서신호 측정을 가능하게 합니다.
          </li>
          <li>
            CAN 버스는 ECU 및 ECU CAN 통신에 적용될 수 있으며, ECU CAN 통신 방법은 CANdb 및 ECU 보정을 
            위한 CCP, 진단을 위한 J1979 기능을 제공합니다.
          </li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">VMS1301 신호처리기능</h2>
        <ul className="product-list">
          <li>VMS1301 모델 용 B2-Sic 입력 신호 처리 모듈은 8 채널 단위로 아래와 같이 선택 사용 가능하며, 본 신호처리모듈 내에는 각 채널에 대한 하드웨어가 필터가 내장되어 있습니다.</li>
          <li>아날로그 전압 DC 100V 입력 채널 : 8 채널</li>
          <li>아날로그 스트레인 및 DC 10V 입력 채널 : 8 채널</li>
          <li>아날로그 (IEPE) 입력 채널 : 8 채널</li>
          <li>아날로그 입력채널 외에 펄스 입력과 CAN 통신 인터페이스가 제공되며, 넓은 동작온도 범위가 보장됩니다.</li>
          <li>펄스입력 채널 : 2 채널</li>
          <li>CAN 채널 : 2 채널</li>
          <li>작동 온도 : -40℃ ~ +70℃</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image10</h2>

      <h2 style={{
        background: "red"
      }}>image11</h2>

      <h2 style={{
        background: "red"
      }}>image12</h2>

      <section className="product-section">
        <h2 className="product-title">VMS1600 개요</h2>
        <ul className="product-list">
          <li>VMS1600은 차량용 데이터수집장치 장치로서, PC와 B2-DAQ AD 보드 및 신호 컨디셔닝 모듈, 전원장치 등 기타 필수부품이 일체로 설치되는 PC일체형 데이터수집 장치로, 광범위 차량 전원으로 동작 가능한 차량용 데이터 수집 시스템입니다.</li>
          <li>VMS1600은 또한 200kHz/ch, 동시샘플링, 16 비트 해상도 AD 보드인 B2-DAQ-16x16 을 기본으로 장착 가능하며, 필요 시 200kHz/ch, 동시 샘플링, 24 비트 해상도 AD 보드 인 B2-DAQ 24x16 모델을 선택하여 장착할 수 있습니다.</li>
          <li>VMS1600 모델은 최대 32채널의 Analog 신호입력 모듈 설치가 가능하며, 샤시 전면에는 Thermocouple 콘넥터, LEMO, BNC 콘넥터, D-SUB 콘넥터를 선택하여 구성할 수 있어 센서를 바로 연결하여 사용 할 수 있습니다.</li>
          <li>VMS1600 모델은 16채널, 200kHz/ch 동시샘플링 방식 16bit 또는 24bit AD보드를 선택하여 장착할 수 있습니다.</li>
          <li>VMS1600 모델은 8채널의 PULSE/COUNTER 보드를 장착 할 수 있어 펄스형 신호의 누적 COUNTER 계산 또는 펄스간 주기 측정이 가능하게 합니다.</li>
          <li>VMS1600 모델은 옵션에 따라 내부에 배터리를 장착할 수 있어, 차량 시동 순간 등 차량 전원이 급격하게 변하는 조건에서도 안정적인 동작이 가능하며, 내부에 장착된 전용 배터리 콘트롤러가 전원공급 조건에 따라, 충전과 방전, 정전압제어를 가능하게 합니다.</li>
          <li>VMS1600 모델은 센서 데이터 측정과 동시에, CAN 버스 데이터 취득이 가능하게, 2 ~ 4 채널의 CAN 어댑터 모듈을 제공합니다.</li>
          <li>CAN 버스가 적용되는 ECU 등으로 부터 데이터를 취득하기 위해 적용 가능한 CAN 통신 방식은 CANdb 또는 ECU Calibration 을 위해 사용되는 CCP 방식, 진단용 KWP2000 방식이 모두 가능합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image13</h2>

      <section className="product-section">
        <h2 className="product-title">데이터 취득 및 분석</h2>
        <ul className="product-list">
          <li>VMS1600에는 차량용 전용 모니터 장치가 제공됩니다.</li>
          <li>사용하기 쉬운 PC 소프트웨어로 데이터 수집, 장치 설정, 모니터링 및 데이터 저장 기능이 제공됩니다.</li>
          <li>VMS1600 은 기본 데이터 측정 용도에서부터 분석 목적 데이터 수집 시스템으로 사용할 수 있습니다.</li>
          <li>VMS 1600 은 차량 거동 측정 및 다양한 조건의 성능 테스트 용도로 사용될 수 있습니다</li>
          <li>VMS1600 단독 장비로 사용하거나 필요 시 2 개 또는 3 개의 장비를 네트워크 연결 하여 동작이 가능합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">차량 제동, 현가 평가 시험</h2>
        <ul className="product-list">
          <li>VMS1600은 ABS 제동장치, 자동비상제동장치(AEBS), 차량안정성제어장치(ESC)등에 대한 성능평가 시험용 장비로, 적합하며 차량에 설비된 제동, 현가 성능평가용 센서 및 ECU 에서 제공하는 스티어링, 조안성, 제동, 승차감 데이터와 차량자세센서(IMU), 조향각센서, 가속도 센서 등의 필드 계측이 가능한 이동식장비 입니다.</li>
          <li>VMS1600KL은 GPS 위성 좌표 측정 및 Google Map 연동기능, 차량 주행 영상 모니터링 및 GPS 좌표 연동 저장 분석기능, 차량 ECU 에서 제공하는 CAN 데이터를 이용 차량 ECU 데이터 실시간 확인, 계측과 실시간 계측 데이터의 모니터링 및 데이터 저장, 분석기능이 가능합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">평가시험 기능</h2>
        <ul className="product-list">
          <li>VMS1600은 제동장치성능평가장비로, 제동장치 상태 별 성능평가, 노면상태 별 성능평가, 적재상태 별 성능평가 기능 등에 효과적입니다.</li>
          <li>차량 휠속도, 차량속도, 거리 등 평가시험 전용 센서 와 차량 CAN 신호 및 GPS 관련 신호, 영상, 동시 계측(동기화) 및 저장 기능과 ECU 데이터 취득의 범용화를 위해 CANdb 채널 편집 기능이 제공 됩니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">HMI 모니터 기능</h2>
        <ul className="product-list">
          <li>시스템 본체로 입력되는 모든 채널 중 화면에 표시하고자 하는 채널을 선택하여 전용 HMI화면을 구성할 수 있습니다.</li>
          <li>측정중인 차량속도, 거리 등 시스템 본체를 통해 취득하는 차량 ECU CAN 데이터를 이용하여, 차량의 주행상태 (차속, 기어단, APS, TPS, rpm, 연비 등) 스티어링 데이터 등을 계산 표현하는 전용화면 구성이 가능합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image13</h2>

      <section className="product-section">
        <h2 className="product-title">VMS1600 시스템 사양</h2>
        <ul className="product-list">
          <li>VMS1600 모델 데이터 수집 시스템은 AD 보드, 입력 신호 조절 보드, 통신 보드로 구성되어, 10Hz GPS가 기본으로 장착되며, 고정밀 100Hz GPS를 선택적으로 설치할 수 있습니다.</li>
          <li>선택 가능한 AD 보드로, 3 종류의 B2-DAQ 보드 모델을 제공하며, 각 보드의 샘플링 속도는 다음과 같습니다.</li>
          <li>200kHz 동시 샘플링, 16 비트</li>
          <li>200kHz 동시 샘플링, 24bit</li>
          <li>250kHz 멀티플렉싱 샘플링, 16 비트</li>
          <li>동작온도 : -5℃ ~ +60℃ (-20℃ ~ +60℃ @ Pre-warmed)</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">VMS1600 PC 사양</h2>
        <ul className="product-list">
          <li>CPU: Core i7</li>
          <li>RAM: 4G ~ 8G</li>
          <li>Storage: SSD 128G / 256G</li>
          <li>(2) USB, (1) LAN, (1) VGA, (1) Keyboard & Mouse</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">VMS1600 신호처리모듈</h2>
        <ul className="product-list">
          <li>입력신호처리 모듈은 8채널 단위로 아래의 모듈 중 선택이 가능하며, 모든 입력채널에는 채널 별 하드웨어 필터가 내장되어 있어, 적용하고자 하는 필터 타입을 선택하여 사용이 가능합니다.</li>
          <li>Thermocouple : 8 Channel</li>
          <li>Analog Voltage (DC 100V) 입력채널 : 8 Channel</li>
          <li>Analog (Strain/DC 10V) 입력채널 : 8 Channel</li>
          <li>Analog (IEPE) 입력채널 : 8 Channel</li>
          <li>Pulse 입력채널 : 2 ~ 8 Channel</li>
          <li>CAN 채널 : 2 ~ 4 Channel</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image14</h2>

      <section className="product-section">
        <h2 className="product-title">VMS1600KL 개요</h2>
        <ul className="product-list">
          <li>VMS1600KL은 PC 및 LCD가 탑재 된 일체형 차량용 데이터 수집 장치로, 디스플레이, B2-DAQ AD 보드 및 신호 컨디셔닝 모듈 및 기타 필수부품이 모두 하나의 샤시에 통합되고, 광범위 차량 전원으로 동작 가능한 차량용 데이터 수집 시스템입니다.</li>
          <li>VMS1600KL은 또한 200kHz/ch, 동시샘플링, 16 비트 해상도 AD 보드인 B2-DAQ-16x16 을 기본으로 장착 가능하며, 필요 시 200kHz/ch, 동시 샘플링, 24 비트 해상도 AD 보드 인 B2-DAQ 24x16 모델을 선택하여 장착할 수 있습니다.</li>
          <li>VMS1600KL 모델은 최대 32채널의 Analog 신호입력 모듈 설치가 가능하며, 샤시 전면에는 Thermocouple 콘넥터, LEMO, BNC 콘넥터, D-SUB 콘넥터를 선택하여 구성할 수 있어 센서를 바로 연결하여 사용 할 수 있습니다.</li>
          <li>VMS1600 모델은 16채널, 200kHz/ch 동시샘플링 방식 16bit 또는 24bit AD보드를 선택하여 장착할 수 있습니다.</li>
          <li>VMS1600KL 모델은 8채널의 PULSE/COUNTER 보드를 장착 할 수 있어 펄스형 신호의 누적 COUNTER 계산 또는 펄스간 주기 측정이 가능하게 합니다.</li>
          <li>VMS1600KL 모델은 옵션에 따라 내부에 배터리를 장착할 수 있어, 차량 시동 순간 등 차량 전원이 급격하게 변하는 조건에서도 안정적인 동작이 가능하며, 내부에 장착된 전용 배터리 콘트롤러가 전원공급 조건에 따라, 충전과 방전, 정전압제어를 가능하게 합니다.</li>
          <li>VMS1600KL 모델은 센서 데이터 측정과 동시에, CAN 버스 데이터 취득이 가능하게, 2 ~ 4 채널의 CAN 어댑터 모듈을 제공합니다.</li>
          <li>CAN 버스가 적용되는 ECU 등으로 부터 데이터를 취득하기 위해 적용 가능한 CAN 통신 방식은 CANdb 또는 ECU Calibration 을 위해 사용되는 CCP 방식, 진단용 KWP2000 방식이 모두 가능합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image15</h2>

      <section className="product-section">
        <h2 className="product-title">데이터취득 및 분석</h2>
        <ul className="product-list">
          <li>사용하기 쉬운 PC 소프트웨어로 데이터 수집, 장치 설정, 모니터링 및 데이터 저장 기능이 제공됩니다. VMS1600KL은 기본 데이터 측정 용도에서부터 분석 목적 데이터 수집 시스템으로 사용할 수 있습니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">차량 제동, 현가 평가 시험</h2>
        <ul className="product-list">
          <li>VMS1600KL은 ABS 제동장치, 자동비상제동장치(AEBS), 차량안정성제어장치(ESC)등에 대한 성능평가 시험용 장비로, 적합하며 차량에 설비된 제동, 현가 성능평가용 센서 및 ECU 에서 제공하는 스티어링, 조안성, 제동, 승차감 데이터와 차량자세센서(IMU), 조향각센서, 가속도 센서 등의 필드 계측이 가능합니다.</li>
          <li>VMS1600KL은 GPS 위성 좌표 측정 및 Google Map 연동기능, 차량 주행 영상 모니터링 및 GPS 좌표 연동 저장 분석기능, 차량 ECU 에서 제공하는 CAN 데이터를 이용 차량 ECU 데이터 실시간 확인, 계측과 실시간 계측 데이터의 모니터링 및 데이터 저장, 분석기능이 가능합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">평가시험 기능</h2>
        <ul className="product-list">
          <li>VMS1600KL은 제동장치성능평가장비로, 제동장치 상태 별 성능평가, 노면상태 별 성능평가, 적재상태 별 성능평가 기능 등에 효과적입니다.</li>
          <li>차량 휠속도, 차량속도, 거리 등 평가시험 전용 센서 와 차량 CAN 신호 및 GPS 관련 신호, 영상, 동시 계측(동기화) 및 저장 기능과 ECU 데이터 취득의 범용화를 위해 CANdb 채널 편집 기능이 제공 됩니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">HMI 모니터 기능</h2>
        <ul className="product-list">
          <li>시스템 본체로 입력되는 모든 채널 중 화면에 표시하고자 하는 채널을 선택하여 전용 HMI화면을 구성할 수 있습니다.</li>
          <li>측정중인 차량속도, 거리 등 시스템 본체를 통해 취득하는 차량 ECU CAN 데이터를 이용하여, 차량의 주행상태 (차속, 기어단, APS, TPS, rpm, 연비 등) 스티어링 데이터 등을 계산 표현하는 전용화면 구성이 가능합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image15</h2>

      <section className="product-section">
        <h2 className="product-title">VMS1600KL 시스템 사양</h2>
        <ul className="product-list">
          <li>VMS1600KL 모델 데이터 수집 시스템은 AD 보드, 입력 신호 조절 보드, 통신 보드로 구성되어, 10Hz GPS가 기본으로 장착되며, 고정밀 100Hz GPS를 선택적으로 설치할 수 있습니다.</li>
          <li>선택 가능한 AD 보드로, 3 종류의 B2-DAQ 보드 모델을 제공하며, 각 보드의 샘플링 속도는 다음과 같습니다.</li>
          <li>200kHz 동시 샘플링, 16 비트</li>
          <li>200kHz 동시 샘플링, 24bit</li>
          <li>250kHz 멀티플렉싱 샘플링, 16 비트</li>
          <li>동작온도 : -5℃ ~ +60℃ (-20℃ ~ +60℃ @ Pre-warmed)</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">VMS1600KL PC 사양</h2>
        <ul className="product-list">
          <li>CPU: Core i7</li>
          <li>RAM: 4G ~ 8G</li>
          <li>Storage: SSD 128G / 256G</li>
          <li>(2) USB, (1) LAN, (1) VGA, (1) Keyboard & Mouse</li>
          <li>Operating temperature: -5℃ ~ +60℃</li>
          <li>Operating power: DC 9 ~ 30V</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">VMS1600KL 신호처리모듈 specification</h2>
        <ul className="product-list">
          <li>입력신호처리 모듈은 8채널 단위로 아래의 모듈 중 선택이 가능하며, 모든 입력채널에는 채널 별 하드웨어 필터가 내장되어 있어, 적용하고자 하는 필터 타입을 선택하여 사용이 가능합니다.</li>
          <li>Thermocouple : 8 Channel</li>
          <li>Analog Voltage (DC 100V) 입력채널 : 8 Channel</li>
          <li>Analog (Strain/DC 10V) 입력채널 : 8 Channel</li>
          <li>Analog (IEPE) 입력채널 : 8 Channel</li>
          <li>Pulse 입력채널 : 2 ~ 8 Channel</li>
          <li>CAN 채널 : 2 ~ 4 Channel</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image16</h2>
    </div>
  )
}
