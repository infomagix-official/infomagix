import header from '../../../assets/ko/product/common/header.png';

export default function APSDriveControllerVMS3400() {
  return (
    <div className="product-container">
      <h1 className="main-title">APS(Drive) controller VMS3400</h1>
      <img src={header} alt="header" className="product-image" />
      {/* 개요 */}
      <section className="product-section">
        <ul className="product-list">
          <li>
            차량 요구 성능 고도화에 따라, 정밀하고 정량화 및 반복 재현이 가능한
            성능평가 시험을 위해 가속페달 제어기가 필요하게 되었으며,
            테스트 드라이버에 의한 가속페달 제어가 아닌, 정확하고 반복성이
            보장되는 가속페달제어기를 사용하여 보다 정확하고 반복 재현성이
            높은 평가 시험이 가능하게 되었습니다.
          </li>
          <li>
            VMS3400은 기본적으로 시험차량의 APS 개도제어 기능과 속도제어 기능,
            RPM 제어 기능을 제공합니다.
          </li>
          <li>
            APS 개도제어 기능과 속도제어 기능을 이용하여 다양한 조합의 차량 시험을
            수행할 수 있으며, 등속제어, 등가속도제어, 속도 프로파일 제어가
            가능합니다.
          </li>
          <li>
            VMS3400은 시험차량의 속도와 엔진 RPM을 제어하며, 미리 저장된
            주행 커브에 따라 차량을 자동 주행시키는 목적으로 사용할 수 있습니다.
          </li>
          <li>
            가속페달제어기를 사용하여 시험을 시작하기 위해서는 먼저, 차량의 악셀페달과 
            ECU를 연결하는 케이블 커넥터를 분리하여, VMS2400에서 제공되는 APS 커넥터에 
            연결합니다.
          </li>
          <li>
            VMS3400은 APS에서 입력되는 신호와 정밀하게 동일한 형태의 신호를 생성하여, ECU로 내보내게 되며,
            ECU는 이 신호를 운전자가 조작하는 악셀페달 신호로 인식하고 차량을 정상적으로 제어하게 됩니다.
          </li>
        </ul>
      </section>

      {/* 특징 */}
      <section className="product-section">
        <h2 className="product-title">특징</h2>
        <ul className="product-list">
          <li>VMS 3400은 APS 컨트롤러가 내장되어 운전자가 가속페달을 조작할 필요가 없는 성능 시험 장비입니다.</li>
          <li>VMS3400은 Typical 한 APS 커넥터를 제공하여 간편한 APS 센서 연결이 가능하며, 테스트 준비 및 설치 프로세스를 단순화합니다.</li>
          <li>VMS3400은 테스트 항목에 따라 자동으로 테스트를 수행하고 테스트 진행과 동시에 데이터를 측정 및 저장하며 시험결과 데이터를 자동으로 분류 및 관리합니다.</li>
        </ul>
      </section>

      {/* 제공 기능 */}
      <section className="product-section">
        <h2 className="product-title">제공되는 기능</h2>
        <ul className="product-list">
          <li>VMS3400은 기본적으로 차량 속도 제어 및 APS 개방 제어 및 RPM 제어를 제공합니다.</li>
          <li>APS 개방 제어 기능은 차량 성능 테스트의 다양한 조건을 시험하는데 사용될 수 있습니다.</li>
          <li>속도 제어 기능은 테스트 차량의 속도와 엔진 RPM을 제어할 수 있는 기능을 제공합니다.</li>
          <li>속도 제어 기능을 사용하여 일정 속도, 등속한 가속 및 감속을 제어 할 수 있습니다.</li>
          <li>속도 제어 기능은 미리 저장된 주행 곡선에 따라 차량을 자동으로 작동시키는 데 사용될 수 있습니다.</li>
          <li>세 가지 제어 기능의 조합은 모든 차량 주행 상황을 재생할 수 있습니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image1</h2>

      <h2 style={{
        background: "red"
      }}>image2</h2>

      {/* APS 제어 성능 테스트 */}
      <section className="product-section">
        <h2 className="product-title">APS 제어 성능 테스트</h2>
        <ul className="product-list">
          <li> VMS3400은 PC 소프트웨어를 사용하여 “가속 페달”오프닝을 제어하여 차량을 주행시킬 수 있는 APS 제어 기반 차량 성능 평가 장비입니다.</li>
          <li> VMS3400은 Programmed mode에 따라 자동으로 “가속 페달”을 제어 할 수 있으므로 사전에 계획된 조건과 시간에 정밀 테스트를 수행 할 수 있는 차량 성능 평가 장비입니다.</li>
          <li> VMS3400은 운전자의 “가속 페달”입력 유지의 어려움을 줄이고, 오류를 최소화하며, 반복 테스트의 재현성을 향상시킵니다.</li>
          <li> VMS3400은 자동으로 테스트 항목에 따라 테스트를 수행하고 테스트가 진행됨에 따라 데이터를 측정 및 저장하며 테스트 결과 데이터를 자동으로 분류하고 관리합니다.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image</h2>

      <h2 style={{
        background: "red"
      }}>image</h2>

      <h2 style={{
        background: "red"
      }}>image</h2>

      <h2 style={{
        background: "red"
      }}>image</h2>

      {/* APS Pedal Tip-in/Tip-out test */}
      <section className="product-section">
        <h2 className="product-title">APS Pedal Tip-in/Tip-out test</h2>
        <ul className="product-list">
          <li> 가속 페달을 밟기 시작하여 하는 엔진 RPM에 도달하면 미리 설정된 가속페달 개도량 만큼 가속페달을 자동으로 구동하여 측정, 평가 시험을 진행.</li>
          <li> 가속 페달을 해제하여 하는 엔진 RPM에 도달하면 가속페달 개도를 %로 구동하여 다음 테스트 스텝을 진행.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image</h2>

      {/* Vehicle starting acceleration test */}
      <section className="product-section">
        <h2 className="product-title">Vehicle starting acceleration test</h2>
        <ul className="product-list">
          <li> Full 가속 조건에서 가속성능 평가</li>
          <li> 가속 페달을 밟는 여러가지 동작 속도 조건 하에서의 가속성능 평가</li>
          <li> 100 % 완전한 가속도 이외에, 70 % 또는 85 % 와 같은 일정량의 APS 개도 조건에서의 차량 가속 성능 평가</li>
          <li> 차량 출발 가속 성능 및 느낌 측정</li>
          <li> Upshifting 순간의 반응 감각</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image</h2>

      {/* Vehicle constant acceleration test */}
      <section className="product-section">
        <h2 className="product-title">Vehicle constant acceleration test</h2>
        <ul className="product-list">
          <li> 사전 설정된 가속도로 차량의 속도를 제어하는, 즉 특정 가속도 값으로 시험 차량을 가속하는 가속 시험.</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image</h2>

      {/* 드라이브 사이클 테스트 기능 */}
      <section className="product-section">
        <h2 className="product-title">드라이브 사이클 테스트 기능</h2>
        <ul className="product-list">
          <li> 드라이브사이클 테스트 기능은 미리 설정된 속도 제어 목표 값에 따라 차량 속도를 제어하는 테스트 모드입니다.</li>
          <li> VMS3400에는 감속 제어를 위한 브레이크 기능이 없기 때문에 실제 주행 시험에서의 감속은 시험 차량의 자연 감속에 달려 있습니다.</li>
          <li> 사시다이나믹 테스트 중에는 사시다이나믹 브레이크 어시스트 모드 기능을 사용하여 감속 제어가 가능합니다.</li>
        </ul>
      </section>

      {/* Down shift accelerated test */}
      <section className="product-section">
        <h2 className="product-title">Down shift accelerated test</h2>
        <ul className="product-list">
          <li> 사전에 설정한 가속페달 개도 값에 따라서 차량을 가속하는 시험</li>
          <li> 가속 페달의 개도가 증가함에 따라, 변속기는 downshift 변속되고 이 순간, 가속 성능의 개별 downshift 변속 포인트 사이의 주행 감을 측정함으로써 수행된다</li>
        </ul>
      </section>

    </div>
  );
}