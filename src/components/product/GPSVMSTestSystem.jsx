import header from '../../../assets/ko/product/common/header.png';

export default function GPSVMSTestSystem() {
  return (
    <div className="product-container">
      <h1 className="main-title">GPS + VMS test system</h1>
      <img src={header} alt="header" className="product-image" />
      {/* 개요 */}
      <section className="product-section">
        <h2 className="product-title">개요</h2>
        <ul className="product-list">
          <li>
            [GPS + VMS] 테스트 시스템인 VMS3301 은 고정밀 GPS가 결합 된 테스트 시스템으로서, GPS 속도센서, 데이터 측정 및 로깅 기능 및 차량 CAN 데이터 표시 기능 등, 실시간으로 테스트 상태 및 결과를 확인할 수 있는 통합 테스트 기능을 제공합니다. GPS 결합 테스트 시스템 VMS 3301 은 100Hz GPS 속도 센서가 내장되어 있으며, 연료량을 측정할 수 있는 유량센서, 차량 성능 테스트를 수행하는 종속 센서 등 다양한 주변 장치 인터페이스를 제공합니다.
          </li>
          <li>
            VMS 3301 은 내장된 GPS 속도센서 외에도, 비접촉 속도센서 입력 기능을 구비하고 있으며, 동시에 대기압, 온도 측정 센서를 내장하여 차량 통합 시험 인터페이스를 제공 하고 있습니다. 이러한 형태의 유연한 인터페이스가 제공하는 다양한 주변 장치 연결 기능으로 VMS+ GPS test system 은 다음과 같은 전용 테스트를 구현 할 수 있습니다.
          </li>
        </ul>
      </section>

      {/* 전용 테스트  */}
      <section className="product-section">
        <h2 className="product-title">전용 테스트</h2>
        <ul className="product-list">
          <li>코스트다운 시험</li>
          <li>연료 소비 시험</li>
          <li>출발 가속 시험</li>
          <li>추월 가속 시험</li>
          <li>제동 거리 시험</li>
          <li>트립 레코더</li>
          <li>속도계, 거리계 시험</li>
          <li>최고속 시험</li>
        </ul>
      </section>


      <h2 style={{
        background: "red"
      }}>image1</h2>

      <h2 style={{
        background: "red"
      }}>image2</h2>      

      {/* 데이터 로깅 기능 */}
      <section className="product-section">
        <h2 className="product-title">VMS3301 데이터 수집 및 로깅</h2>
        <ul className="product-list">
          <li>센서 및 CAN 데이터 모두 수집가능한 데이터 취득 및 로깅 기능</li>
          <li>설정 가능한 입력채널 신호 설정 및 CAN 데이터 취득을 위한 DBC 지원</li>
          <li>USB 메모리 스틱에 데이터 저장 기능</li>
          <li>다양한 분석 기능을 갖춘 그래프 기능 분석 결과 보기 기능</li>
          <li>전용 운전자 디스플레이 기능</li>
        </ul>
      </section>

      {/* 내장 GPS 및 외부 센서 */}
      <section className="product-section">
        <h2 className="product-title">내장 GPS 및 외부 센서 기능</h2>
        <ul className="product-list">
          <li>VMS33301은 기본적으로 100Hz GPS 속도 센서를 내장하고 있으나, 경우에 따라 GPS 신호가 손실되는 특정 지역 등에서 사용할 수 있도록 별도의 비접촉 속도 센서를 연결할 수 있는 기능을 제공함으로, VMS33301은 어디에서나 테스트가 가능합니다.</li>
        </ul>
      </section>

      {/* 운전자 디스플레이 */}
      <section className="product-section">
        <h2 className="product-title">전용 운전자 디스플레이</h2>
        <ul className="product-list">
          <li>시험 진행을 가이드 하기 위한 5" LCD 드라이버 디스플레이</li>
          <li>CAN 데이터 및 센서 값 표시하기 위한 디스플레이 화면 제공</li>
        </ul>
      </section>

      {/* 리모콘 컨트롤 팬던트 */}
      <section className="product-section">
        <h2 className="product-title">리모콘 컨트롤 팬던트</h2>
        <ul className="product-list">
          <li>조이스틱형 리모콘</li>
          <li>시험 선택 및 작동 제어</li>
          <li>시험 진행 제어 및 가이드</li>
          <li>표시 페이지 선택</li>
          <li>기능 설정</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image2</h2>
      
      {/* 차량 성능 시험 */}
      <section className="product-section">
        <h2 className="product-title">차량 성능 시험</h2>
        <ul className="product-list">
          <li>VMS3301은 시험자동화 기능을 갖춘 차량 성능 시험 장치로서 코스트 다운 시험, 연비 시험, 성능 시험 및 브레이크 시험 등에 적합합니다.</li>
          <li>고성능 컨트롤러 VMS3301은 실시간 데이터 취득과 동시에 수집된 데이터에 대한 시험 결과의 적합성을 결정하는 기능, 수집된 데이터를 분석하는 기능을 
            제공함으로서, 한 번에 시험과 결과 분석을 수행하는 기능의 프로그램을 내장하고 있습니다.
          </li>
          <li>측정 및 분석기능 겸용 시험 장치인 VMS3301은 별도의 분석 과정이나 프로그램을 필요로 하지 않습니다.</li>
          <li>VMS3301은 시험 절차를 자동화 함으로써 시험진행 중 장비조작 회수를 최소화 하였으며, 시험 완료 후 결과를 즉시 알려주고, 저장 및 디스플레이에 표시 될 수 있게 최적 구성하였습니다.</li>

        </ul>
      </section>

      {/* 규격 성능 시험 */}
      <section className="product-section">
        <h2 className="product-title">규격 성능 시험</h2>
        <ul className="product-list">
          <li>WLTP, SAE J2263, SAE J1263 규격 Coast-down 시험</li>
          <li>EC 규격 Coast-down 시험</li>
          <li>연비 시험</li>
          <li>가속 성능 시험</li>
          <li>속도계·주행거리계 시험</li>
          <li>브레이크 거리 시험</li>
        </ul>
      </section>

      {/* 응용 기능 */}
      <section className="product-section">
        <h2 className="product-title">응용 기능</h2>
        <ul className="product-list">
          <li>단일 장비로 다양한 주행 성능 시험 수행</li>
          <li>시험 진행 자동화 개선을 통한 장비 조작 최소화</li>
          <li>자체 기상 데이터 측정 기능 제공으로 별도의 데이터 입력 불필요</li>
          <li>시험 진행 방향을 감지하여 연속 시험 자동화 가능</li>
          <li>시험 완료 후 결과 및 양, 부 여부를 즉시 확인할 수 있습니다.</li>
          <li>내장된 코스트다운 데이터 분석 루틴으로 코스트 다운 방정식 해석 결과 제공</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image4</h2>

      {/* 시스템 구성 */}
      <section className="product-section">
        <h2 className="product-title">시스템 구성</h2>
        <ul className="product-list">
          <li>VMS3301 본체</li>
          <li>리모콘 팬던트</li>
          <li>운전자 디스플레이 VDU</li>
        </ul>
      </section>

      {/* VMS3301 본체 */}
      <section className="product-section">
        <h2 className="product-title">VMS3301 본체</h2>
        <ul className="product-list">
          <li>시험 제어 및 측정 중심 장치</li>
          <li>100Hz GPS 내장</li>
          <li>기압·온도 센서 포함</li>
          <li>센서 연결용 커넥터 포함</li>
        </ul>
      </section>

      {/* VMS3301 시스템 사양 */}
      <section className="product-section">
        <h2 className="product-title">VMS3301 시스템 사양</h2>
        <ul className="product-list">
          <li>100Hz GPS 속도 센서</li>
          <li>고속 A/D 측정 보드 내장</li>
          <li>AD 보드 : B2-DAQ 16×08, 200kHz/ch, 16bit 분해능</li>
          <li>아날로그 입력 : 풍속·풍향·추가측정 센서 각 1채널</li>
          <li>펄스 카운터 입력 : 연료·외부 속도·추가 측정 센서 각 1채널</li>
          <li>CAN : 입력 1채널, 출력 1채널</li>
          <li>작동 전원 : 차량 전원 DC 9 ~ 30V</li>
          <li>충격 사양 : 50G 충격 등급</li>
          <li>진동 사양 : 진동등급 5G @ 5Hz ~ 500Hz</li>
          <li>동작 온도 : -40℃ ~ 70℃</li>
        </ul>
      </section>

      {/* 전용 센서 포트 */}
      <section className="product-section">
        <h2 className="product-title">VMS 3301은 편리한 테스트를 위해 전용 센서 포트를 제공합니다.</h2>
        <ul className="product-list">
          <li>내장된 GPS센서 외 별도의 비접촉식 속도 센서 연결 포트</li>
          <li>표준 출력 연료 유량 센서</li>
          <li>SAE J2263 시험 규격의 풍향, 풍속 센서</li>
          <li>기압 센서 및 공기 온도 센서</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>
        image5
      </h2>

      {/* 성능 테스트 자동 */}
      <section className="product-section">
        <h2 className="product-title">성능 테스트 자동</h2>
        <ul className="product-list">
          <li>연비 시험</li>
          <ul>
            <li>정해진 주행 패턴으로 운전하면서, 전체 시험 구간에 걸쳐 소비된 연료를 측정하여 연비를 측정하는 테스트</li>
          </ul>
          <li>코스트다운 시험</li>
          <ul>
            <li>SAE J2263 등 코스트다운시험은 법규 규격 방정식의 매개변수를 구하기 위한 시험</li>
          </ul>
          <li>가속 성능 시험</li>
          <ul>
            <li>정지 시 부터 지정된 속도까지 가속시간을 측정하는 시험</li>
            <li>지정된 거리까지 가속도를 측정하는 시험</li>
          </ul>
          <li>속도·주행거리계 시험</li>
          <ul>
            <li>속도·주행거리계 시험은 차량 속도계 및 거리계의 정밀도 규격을 검사하는 시험</li>
          </ul>
          <li>브레이크 시험</li>
          <ul>
            <li>제동 거리 측정 및 특정 요소 측정, 계산값을 구하기 위한 시험</li>
          </ul>
          <li>분석 소프트웨어</li>
          <ul>
            <li>VMS3301은 다양한 형태의 데이터 측정 및 수집된 시험데이터의 분석, 테스트 규격 절차에 따라 자동으로 
              시험을 안내하고 진행하는 기능을 제공합니다.
            </li>
          </ul>
        </ul>
      </section>

      {/* Coast-down 분석 */}
      <section className="product-section">
        <h2 className="product-title">Coast-down (J2263) 모델 방정식 분석</h2>
        <ul className="product-list">
          <li>SAE J2263 규격은 주행저항 값을 결정하는 방법을 정의합니다.</li>
          <li>차량 속도가 60 ~ 20MPH 구간에서, 차량 저항값을 구하기 위한 코스트다운 시험 절차를 적용하며, 주행 저항
            방정식은 기준 대기 온도 및 대기압 조건에서 변수로서 차량 속도만으로 표현됩니다.
          </li>
          <li>SAE J2263은 이전에 정의된 SAE J1263을 보완하기 위하여 새롭게 정의된 다차원 변수 방정식으로, 바람의 방향과 
            속도 인자를 고려한 주행 저항 측정용 규격으로, 차량 전방에 부착된 풍속 / 풍향 센서를 이용하여 측정된 상대 풍속 및 
            상대 풍향, 대기온도 및 대기압 측정값을 데이터 보정 요소로 통합하여 주행 저항 모델 방정식을 구성하고 그 값을 측정하게 
            됩니다.
          </li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image6</h2>
    </div>
  );
}