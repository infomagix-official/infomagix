import header from '../../../assets/ko/product/common/header.png';

import VMS_model from '../../../assets/ko/product/vmscoastdowntesting/model.jpg'

export default function VMSCoastDownTesting() {
  return (
    <div className="product-container">
      <h1 className="main-title">VMS 연비, 코스트다운시험</h1>
      <img src={header} alt="header" className="product-image" />
      <section className="product-section">
        <h2 className="product-title">코스트다운 시험 범위 및 SAE J1263 / J2263</h2>
        <ul className="product-list">
          <li>코스트다운 시험 범위인 SAE J1263 에서는 차속 60MPH ~ 20MPH 범위에서 차량의 주행 저항치를 결정하는 방법을 규정하고 있으며, 이를 구하기 위해 Coastdown 방법을 적용토록 하고 있습니다. 차량공력형상에 대한 최종 결과 값은 차량 만속 반속 하는, 표준 대기온도 및 대기압 상태에서의 차속 방식으로 표시 되도록 되어 있습니다.</li>
          <li>강화된 법규 SAE J2263 은 앞서 SAE J1263 에 대한 보완 규정으로 차속 범위를 115KPH ~ 15KPH 로 확대하고 차량에 대한 주행저항치를 구함에 있어서 실시간으로 측정된 풍향과 풍속에 대한 패턴을 고려하는 새로운 3차 반속 방정식을 적용토록 규정하고 있습니다. J2263 이전의 다른 시험 방법은 모두 별도의 측정 장산에서 계측한 평균 풍향을 사용해왔습니다.</li>
          <li>이 밖에 ECE 에서 규정한 별도의 시험 범위 인쇄서 별도의 시험 속도 구간과 시험 방법에 약간의 차이가 있습니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">풍향 및 풍속량 보정 코스트다운 모델 방정식(J2263)</h2>
        <ul className="product-list">
          <li>J2263방식의 경우 실시간으로 계측된 풍향, 풍속이 필요합니다. J2263시험시는 차량전면에 부착, 설치하는 풍향 풍속 센서를 통해 상대 풍속 및 풍향을 계측, 온도 및 대기압 값과 함께 데이터를 보정하는 팩터를 이용, 주행 저항치를 계산합니다.</li>
          <img src={VMS_model} alt="모델 방정식" />
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">코스트다운 모델방정식의 해법</h2>
        <ul className="product-list">
          <li>J2263방식의 경우 실시간으로 계측된 풍향,풍속이 필요합니다. J2263시험시는 차량전면에 부착,설치하는 풍향 풍속 센서를 통해 상대 풍속 및 풍향을 계측, 온도 및 대기압 값과 함께 데이터를 보정하는 팩터를 이용, 주행 저항치를 계산합니다. 계측 데이터를 분석하여 코스트다운(Coastdown) 방정식을 풀어주기 위해 사용되는 회귀분석 방법은 회귀분석법(Regression Analysis)과 최소자승법(Least Square Method)을 이용합니다.</li>
          <img src={VMS_model} alt="모델 방정식" />
          {/* $M_e\frac{dV}{dt}=A_m+BmV+CmV^2+\frac{1}{2}rAV_r^2(a_0+a_1Y+a_2Y^2+a_3Y^3+a_4Y^4)\pm Mg\frac{dh}{ds}$ */}
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">실차주행연비시험 및 ECU 데이터 취득</h2>
        <ul className="product-list">
          <li>실차주행 연비 측정을 위해서는, 차체형 실차 연비계를 시험차량에 장착하고, 속도, 거리 센서를 통해 누적 주행한 거리, 연비 측정 시작과 끝점을 기준으로 실 주행 연비를 계산 하게됩니다. 코스트다운 시험에 연이어 실차 연비시험을 동일 장비(VMS3200)와 프로그램(ActiveVT)으로 수행가능하게 구성되어있습니다. 코스트다운, 연비, 등속성능 시험 등을 수행함과 동시에 ECU 데이터 취득이 가능하며, 이를 위해 Calibration 용으로 작성된 CAN 파일 Import 기능과 CAN파라미터 선택, 데이터 취득기능을 제공합니다.</li>
          <li>실차주행 연비시험을 위해 사용하는 속도, 거리 센서는 광학방식 비접촉식, GPS기반 속도센서, 차량 ECU CAN 속도 등 다양한 적용이 가능하며, 사시다이나모 상에서 연비시험이 필요한 경우, 사시다이나모 롤(Roll)인코더를 이용할 수도 있습니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image1</h2>
        
      <section className="product-section">
        <h2 className="product-title">장비 개요</h2>
        <ul className="product-list">
          <li>연비 코스트다운 시험</li>
          <li>SAE J2263 에서는 규정하는 Coast down 시험을 수행하기 위해서는 비접촉식 속도센서와 풍향, 풍속센서가 필요하며, 이 센서를 사용하여 Coast down 시험을 수행하고, 데이터를 기록하여 차량에 대한 주행저항치를 계산하게 됩니다. 연비시험은 차체형 실차 연비 센서를 장착하고, 정해진 시험모드에 따라 반복주행하며, 반복주행의 정확성유지 유지를 위해 드라이버에이드(Driver’s Aid) 기능이 제공됩니다.</li>
          <li>차량에 장착되는 센서 데이터는 차량 내부에 설치되는 VMS (Vehicle Monitor System) 장치로 모두 수집되어 저장되며, 이를 이용하여 거동을 해석, 코스트다운 주행특성, 순간연비, 평균연비 등을 계산 출력하게 됩니다. 또한 시험중 ECU 파라미터, 데이터 추출을 위해 ECU CCP (CAN Calibration Protocol) 방식 데이터 통신이 가능하므로, 시험차량에 연비 코스트다운 장비의 별도의 INCA 장비를 추가로 연결하는 번거로움을 피할 수 있습니다.</li>
          <li>시험을 위해 장착하는 진동 센서 이외에도, 차량 거동 데이터 취득을 위해 별도로 연결하는 센서 및 ECU CAN 통신 (CANdb 및 CCP 동시적용)을 통해 동기화된 통합데이터 취득이 가능하며, 주행상태에서 계측한 데이터는 모두 저장되어 Replay 가 가능하며, 실시간 모니터링 표시는 그래프, 아날로그 게이지, 디지털미터 등 다양한 형태가 가능합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image2</h2>

      <section className="product-section">
        <h2 className="product-title">VMS3200</h2>
        <ul className="product-list">
          <li>VMS3200 본체 개요</li>
          <ul>
            <li>100Hz GPS 내장한 코스트다운 성능 평가용 데이터 측정, 분석시스템</li>
            <li>100Hz GPS 속도센서를 내장하여, 별도의 L350 속도센서 없이 코스트다운시험과 연비시험을 동시에 수행</li>
            <li>실 도로 주행 시험장에서의 실차 연비 측정을 위한 실차용 연비측정 DAQ장치 및 Driver’s Aid 시스템</li>
            <li>100Hz GPS(내장) 차량주행 거리/속도 센서</li>
            <li>연료량 측정, 순시 유량 계산 및 데이터 측정시스템</li>
            <li>Driver’s Aid 프로그램 및 차량용 Monitor</li>
            <li>구간/조건 신호용 트리거스위치</li>
            <li>코스트다운 분석, 연비 데이터 측정 및 연비 계산 소프트웨어</li>
          </ul>
          <li>VMS3200 GPS System 사양</li>
          <ul>
            <li>100Hz GPS 속도센서 내장</li>
            <li>외장 속도센서 지원</li>
            <li>TCP/IP 통신</li>
            <li>전원 Outlet 2 포트</li>
            <li>Analog Input : ±20V</li>
            <li>속도센서, 풍향풍속센서</li>
            <li>리모트 운전자지시기 포트</li>
            <li>Thermocouple : 4 채널</li>
            <li>CAN : 2 채널</li>
            <li>동작전원 : DC 9 ~ 30V</li>
            <li>환경조건 : -20 ~ 70℃</li>
            <li>크기 : 280 x 185 x 83 (기존 VMS3200 : 330 x 275 x 91)</li>
          </ul>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image3</h2>

      <section className="product-section">
        <h2 className="product-title">풍향 풍속계 및 TC</h2>
        <ul className="product-list">
          <li>풍속풍향센서</li>
          <ul>
            <li>Wind Monitor 05103시리즈는 Analog방식의 풍향, 풍속 측정센서로 초음파등을 이용하는 Digital방식에 비해 응답이 빠르고 선형성이 우수하여 상대적으로 풍향의 작은 변화도 측정이 가능합니다.</li>
            <li>Wind Monitor는 경량적인 방식의 4날 프로펠러를 사용하여 차량전면에 견딜수 있는 플라스틱, 스테인리스, 애노다이징 처리된 알루미늄과 같은 내구성을 가진 재질로 구성되어 있습니다.</li>
          </ul>
          <li>신호출력방식</li>
          <ul>
            <li>아날로그</li>
            <li>펄스</li>
          </ul>
          <li>동작전원 : 8~24 VDC (12V에서 5mA)</li>
          <li>풍속계측</li>
          <ul>
            <li>측정범위 : 0~100 m/s (0~224 mph)</li>
            <li>정확도 : ±0.3 m/s (±0.6 mph)</li>
          </ul>
          <li>풍향계측</li>
          <ul>
            <li>측정범위 : 0~360°</li>
            <li>정확도 : ±3° 이내</li>
          </ul>
          <li>▶ 온도센서 (Thermocouple)</li>
          <ul>
            <li>T Type, J Type Thermocouple wire</li>
            <li>Standard Connector</li>
          </ul>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image4</h2>

      <section className="product-section">
        <h2 className="product-title">비 접촉식 속도계</h2>
        <ul className="product-list">
          <li>-내장형 GPS 센서의 별도의 비접촉식 속도 센서 업그레이드</li>
          <li>표준 출력 연료 유량 센서</li>
          <li>SAE J2263 시험 규정의 풍향 풍속 센서</li>
          <li>기압 센서 및 공기 온도 센서</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image5</h2>

      <section className="product-section">
        <h2 className="product-title">실차용 연비계</h2>
        <ul className="product-list">
          <li>실차용 연비계는 차량에 적재되는 유량검출기 부위와 이를 계측하고 표시하는 유량계로 구성됩니다.</li>
          <li>계측하는 연속 질량 유량은 연비계 Interface 를 통하여 계측이 가능하며,</li>
          <li>유량검출기는 사용되는 연료의 종류에 따라 적용됩니다.</li>
          <li>- 가솔린 : MF2200, FP2000 계열</li>
          <li>- 디젤 : MF3200</li>
          <li>- LPG : 214H</li>
          <li>유량계의 Interface 는 온도, 압력, 순간유량 등이 Pulse 또는 Analog 신호로 계측되며, 계측시작의 시작과 끝의 시간을 측정하여, 총 유량의 계산 및 계측이 가능합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image6</h2>

      <section className="product-section">
        <h2 className="product-title">연비 코스트다운 Software 개요</h2>
        <ul className="product-list">
          <li>연비, 코스트다운 프로그램(ActiveVT)은 차량 연비, 코스트다운시험에 필요한 테스트를 만들고, 데이터의 계측과 동시에, 코스트다운 시험, 연비시험, 정행성능시험 등 결과를 자동으로 실행하는 통합 Test 프로그램 입니다.</li>
          <li>특정한 시험을 위한 경우 제공되는 채널 설정 기능과, 필요한 테스트 설정기능을 이용하여 다양한 테스트 (코스트다운, 연비, 가속성능, 정행성능 등)를 구성함으로써 간단히 테스트를 시작할 수 있습니다.</li>
          <li>연비, 코스트다운 프로그램은 사용자의 목적과 취향에 맞도록 화면을 구성하고, 필요 시 간단한 조작으로 화면을 변경할 수 있는 Screen Editor 기능을 제공합니다.</li>
          <li>연비, 코스트다운 프로그램은 장비의 유지보수를 위한 Software Calibration 기능을 제공하며, 다양한 형태 신호의 센서를 별도의 하드웨어 처리 없이 직접취득이 가능한 Software Filter, 센서 Linearizer 등을 제공합니다.</li>
          <li>연비, 코스트다운 프로그램은 사용자의 데이터 취득 관련하여 다양한 IO 연계 기능을 제공하여, 연비, 코스트다운 시험 중 센서 데이터 취득과 동시에 ECU CAN 데이터(CANdb 및 CCP 지원), GPS 위치데이터 등 다양한 동기화 데이터 취득 기능을 제공하며, 취득 데이터 저장기능, 다양한 Trigger/Logging조건 설정 기능을 제공합니다.</li>
          <li>연비, 코스트다운 프로그램은 시험설정(정속, 아이들, 모드 별 연비시험, 코스트다운시험, 가속성능시험, 정행성능)에 따라 정해진 규칙에 맞춰 데이터를 취득 저장하여 하나의 시험에 대한 결과 데이터베이스를 생성하며, 이를 저장 시험 종료 즉시 결과의 일부 확인이 가능하며, 최적데이터와 보고서 생성 까지 일관된 프로세스 기능을 갖고 있습니다. 아울러, 시험설정과 동시에 데이터 취득을 위해 연결한 센서 또는 ECU CAN 데이터를 동시에 저장 요청 즉시 각종 차량 데이터의 Replay 및 분석이 가능합니다. 저장데이터의 필요 구간 편집 Data Edit, File Export, 자동 Excel Report Generation 기능이 가능합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">방정식 해석 수식 설정</h2>
        <ul className="product-list">
          <li>계측, 저장된 시간, 속도, Yaw 데이터를 이용 코스트다운(Coastdown) 파라미터를 구하기 위해서는, 저장된 표준 데이터 행렬에 대해 Linear/Non-Linear Regression 분석을 수행합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image7</h2>

      <section className="product-section">
        <h2 className="product-title">User Graphic Interface</h2>
        <ul className="product-list">
          <li>-마우스 클릭만으로 모든 테스트를 설정, 제어 할 수 있는 Graphic Screen 을 구성할 수 있습니다.</li>
          <li>-동시에 여러 개의 화면을 사용할 수 있습니다.</li>
          <li>-프로그램에서 제공되는 그래픽 컴포넌트를 끌어서 붙이는 방식의 인터페이스를 제공합니다.</li>
          <li>-입력상 상태, 값, 메시지,등 다양한 그래픽 형태로 표현 가능합니다.</li>
          <li>-제공되는 그래픽 컴포넌트는 중고속 그래프, 아날로그 게이지, 바 게이지, 디지털 미터, 라벨 미터, LCD 판넬 미터, 버튼, 스위치, 테스트시퀀스, Picture 등이 제공됩니다.</li>
          <li>-다양한 속성을 제공하여 그래픽 컴포넌트의 모습을 사용자의 취향에 맞게 변경 설정이 가능합니다.</li>
          <li>-실행 중 속성 변경이나, 화면레이아웃 변경이 가능하며, 변경 후 프로그램의 중단 없이 바로 적용이 가능합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image8</h2>

      <section className="product-section">
        <h2 className="product-title">Data Analysis</h2>
        <ul className="product-list"></ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image9</h2>
    </div>
  );
}