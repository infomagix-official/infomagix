import header from '../../../assets/ko/product/common/header.png';

export default function GPSSpeedSensorVSD() {
  return (
    <div className="product-container">
      <h1 className="main-title">GPS speed sensor VSD</h1>
      <img src={header} alt="header" className="product-image" />
      {/* 개요 */}
      <section className="product-section">
        <h2 className="product-title">개요</h2>
        <ul className="product-list">
          <li>
            VSD-2는 100Hz GPS를 내장하고, 3.5 인치 LCD 디스플레이를 갖춘 속도 센서로 100Hz GPS로 측정 한 차량 속도 및 거리를 출력하고 차량 CAN으로부터 차량 휠 속도를 동시에 측정합니다. GPS를 기반으로 CAN 휠 속도를 교정하여 정확한 차량 속도를 제공하며, GPS를 통한 운전 경로 데이터를 쉽게 얻을 수 있습니다.
          </li>
          <li>
            100Hz의 빠른 GPS 업데이트 속도로 VSD-2는 차량 속도 측정 장치와 CAN 또는 아날로그를 통한 차량 속도 출력, 펄스 출력 기능으로, 기존의 광학 속도 센서를 대체하여 다양한 테스트 어플리케이션에 사용 가능 합니다.
          </li>
          <li>
            VSD-2는 차량 CAN 속도와 실제 GPS 속도를 비교하여 보정 된 CAN 차량 속도를 제공하며, GPS 위성 강도에 따라 GPS로 보정 된 CAN 속도와 GPS 속도를 선택해서 자동으로 전환하기 때문에 GPS 신호가 손실되는 구간 주행 중에 방해받지 않고 정확한 차량 속도를 측정 할 수 있습니다.
          </li>
        </ul>
      </section>

      {/* 제공되는 기능들 */}
      <section className="product-section">
        <h2 className="product-title">제공되는 기능들</h2>
        <ul className="product-list">
          <li>
            차량 속도 및 거리 측정 속도측정 입력 소스 : GPS 및 CAN 휠 속도, 외부 속도 센서
          </li>
          <li>속도, 거리 및 GPS 데이터의 100Hz 데이터 출력</li>
          <li>
            GPS 음영 지역에서도 속도를 원활하게 측정할 수 있는 GPS 속도 또는 CAN 휠
            속도 자동 선택 기능
          </li>
          <li>GPS 속도에 기반한 정확한 CAN 속도 보정</li>
        </ul>
      </section>

      {/* 특징 */}
      <section className="product-section">
        <h2 className="product-title">특징</h2>
        <ul className="product-list">
          <li>마이크로 프로세서 기반 독립형 컨트롤러</li>
          <li>3.5인치 LCD 디스플레이 모듈</li>
          <li>내장형 100Hz GPS</li>
          <li>내장형 CAN 입력 컨트롤러</li>
          <li>
            자동 전환 기능이 있는 연속 차량 속도 측정 기능, CAN 휠 속도와 GPS 속도 간
            자동 선택 기능
          </li>
          <li>차량 속도 및 GPS 데이터의 CAN 데이터 출력</li>
          <li>넓은 입력 범위의 전원 장치</li>
          <li>CAN, Pulse, Analog 출력을 통한 100Hz 차량 속도 출력</li>
        </ul>
      </section>

      {/* 차량 CAN 데이터 입력인터페이스 */}
      <section className="product-section">
        <h2 className="product-title">차량 CAN 데이터 입력인터페이스</h2>
        <ul className="product-list">
          <li>CANdb 방식</li>
          <li>J1939 방식</li>
        </ul>
      </section>

      {/* 펄스 출력 및 Analog 출력 */}
      <section className="product-section">
        <h2 className="product-title">펄스 출력 및 Analog 출력</h2>
        <ul className="product-list">
          <li>데이터 트리거 입력 신호 등을 위한 리모콘 등 조작 입력</li>
          <li>차축 펄스 출력 및 Analog output 출력</li>
        </ul>
      </section>

      {/* CAN 출력 */}
      <section className="product-section">
        <h2 className="product-title">CAN 출력</h2>
        <ul className="product-list">
          <li>차속, 위치 데이터 100Hz 출력</li>
          <li>기타 GPS 데이터 10Hz 출력</li>
        </ul>
      </section>

      {/* 크기 및 케이스 */}
      <section className="product-section">
        <h2 className="product-title">크기 및 케이스</h2>
        <ul className="product-list">
          <li>
            차량 장착 사용에 적합한 진동 및 습기 방지 구조의 알루미늄 케이스로 구성
          </li>
          <li>크기 : 150mm × 100mm × 30mm</li>
        </ul>
      </section>

      {/* 동작환경 */}
      <section className="product-section">
        <h2 className="product-title">동작환경</h2>
        <ul className="product-list">
          <li>감속·가속이 급격한 차량 환경에 적합</li>
          <li>전원 사양 : DC 9 ~ 30V 차량 전원 사용</li>
          <li>동작온도 : -20℃ ~ 60℃</li>
        </ul>
      </section>
      <h2 style={{
        background: "red"
      }}>image1</h2>
      <h2 style={{
        background: "red"
      }}>image2</h2>
      <h2 style={{
        background: "red"
      }}>image3</h2>
      <h2 style={{
        background: "red"
      }}>image4</h2>
    </div>
  );
}