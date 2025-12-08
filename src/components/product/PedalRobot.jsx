import header from '../../../assets/ko/product/common/header.png';

export default function PedalRobot() {
  return (
    <div className="product-container">
      <h1 className="main-title">Pedal Robot</h1>
      <img src={header} alt="header" className="product-image" />
      {/* 개요 */}
      <section className="product-section">
        <h2 className="product-title">개요</h2>
        <ul className="product-list">
          <li>
            차량 반복 시험 성능 요구 조건에 따라 정밀하고 정량화된 반복 주행이
            필요한 평가 시험을 위해 가속 및 브레이크 페달 제어기가 필요해졌으며,
            테스트 드라이버에 의한 제어가 아닌 반복성이 보장되는 가속 및 브레이크
            페달 로봇을 사용하여 보다 정밀하고 반복 재현성이 높은 주행 제어 시험이
            가능해졌습니다.
          </li>
          <li>
            VMS3200 및 VMS3400은 페달 로봇 옵션을 제공하며, 가속 페달과 브레이크
            페달의 기계적 제어 기능을 위해 전동식 페달 액츄에이터 형태의 페달로봇
            PDA-200을 연결하여 사용할 수 있습니다.
          </li>
          <li>
            PDA-200은 시험 차량의 APS 개도 제어 기능과 속도 제어 기능, RPM 제어
            기능을 제공합니다.
          </li>
          <li>
            APS 개도제어 기능과 속도제어 기능을 이용하여 다양한 조합의 차량 시험을 할 
            수 있으며, 속도제어 기능을 이용하여 차량의 등속제어, 등가속도 제어, 속도 프
            로파일 제어를 수행할 수 있습니다.
          </li>
          <li>
            페달로봇 PDA-200은 시험 차량의 속도와 엔진 RPM을 제어하는 기능을 제공하며,
            미리 저장된 주행 커브에 따라 차량을 자동주행하게 하는 목적으로 사용될 수 있습니다.
          </li>
        </ul>
      </section>
      <h1 style={{
        background: 'red'
      }}>image1</h1>
      {/* 특징 */}
      <section className="product-section">
        <h2 className="product-title">특징</h2>
        <ul className="product-list">
          <li>
            PDA-200은 컨트롤러가 내장되어 운전자가 가속 및 브레이크 페달을 조작할
            필요가 없는 성능 시험 장치입니다.
          </li>
          <li>
            Typical 페달 연결 로드를 제공하며 간편한 연결이 가능하여 시험 준비 및
            설치 프로세스를 단순화합니다.
          </li>
          <li>
            VMS3400 드라이브 컨트롤 시스템과 연결되어, 테스트 항목에 따라 자동으로 
            테스트를 수행하고 테스트 진행과 동시에 데이터를 측정 및 저장하며, 시험결과 
            데이터를 자동으로 분류 및 관리할 수 있습니다.
          </li>
          <li>
            VMS3200 코스트다운 테스트 시스템과 연결되어, VMS3200 에서 제공되는 모드 
            연비 주행 기능에 따라 자동으로 사전에 저장된 연비주행 모드를 따라 드라이빙을 
            수행하는 드라이브 테스트 기능을 제공하며, 테스트 진행과 동시에 데이터를 측정 및 
            저장하며 시험결과 데이터를 자동으로 분류 및 관리할 수 있습니다.
          </li>
        </ul>
      </section>

      <h1 style={{
        background: 'red'
      }}>image2</h1>

      <h1 style={{
        background: 'red'
      }}>image3</h1>

      <h1 style={{
        background: 'red'
      }}>image4</h1>

      {/* 제공 기능 */}
      <section className="product-section">
        <h2 className="product-title">제공되는 기능</h2>
        <ul className="product-list">
          <li>페달로봇 PDA-200 은 차량 속도 제어, APS 개방 제어, RPM 제어 기능 제공합니다.</li>
          <li>APS 개도 제어 기능은 차량 성능 테스트의 다양한 조합을 수행하는 데 사용할 수 있습니다.</li>
          <li>속도 제어 기능은 테스트 차량의 속도와 엔진 RPM을 제어 할 수 있는 기능을 제공합니다.</li>
          <li>속도 제어 기능을 사용하여 일정 속도, 동등한 가속 속도를 제어 할 수 있습니다.</li>
          <li>속도 제어 기능은 미리 저장된 주행 곡선에 따라 차량을 자동으로 작동시키는 데 사용할 수 있습니다.</li>
          <li>세 가지 제어 기능의 조합은 모든 차량 주행 상황을 재생할 수 있습니다.</li>
        </ul>
      </section>

      {/* 사양 */}
      <section className="product-section">
        <h2 className="product-title">사양</h2>
        <ul className="product-list">
          <li>듀얼 페달 액추에이터 PDA-200은 2개의 모터 액추에이터 장치입니다.</li>
          <li>브레이크 페달과 가속 페달을 모두 제어 할 수 있는 즉, 두 개의 페달 작동 제어 기능이 있습니다.</li>
          <li>PDA-200 듀얼 페달 액추에이터는 다음과 같은 기능을 제공합니다.</li>
          <ul className="product-list">
            <li>차량 속도 제어</li>
            <li>엔진 RPM 제어</li>
            <li>페달 트래블 컨트롤</li>
          </ul>
          <li>PDA-200 듀얼 페달 액추에이터의 사양은 다음과 같습니다.</li>
          <ul>
            <li>최대 페달 힘 : 150N</li>
            <li>최대 페달 속도 : 110mm/s</li>
            <li>최대 페달 스트로크 : 150mm</li>
            <li>Power : DC 24V</li>
            <li>Temp Range : -20℃ (-40℃ with Heater) ~ +50℃</li>
            </ul>
        </ul>
      </section>

      {/* 드라이브 사이클 테스트 */}
      <section className="product-section">
        <h2 className="product-title">드라이브 사이클 테스트 기능</h2>
        <ul className="product-list">
          <li>
            드라이브 사이클 테스트 기능은 차량이 미리 정해진 주행 모드에 따라 
            반복적으로 주행 할 수 있게 하는 기능입니다. 본 기능은 테스트 차량이 
            운전자 없이 페달로봇에 의해 주행할 수 있는 기능으로 똑같은 주행모드를 
            무한 반복 주행하게 하는 기능을 의미합니다. 페달로봇 PDA-200은 이 기능을 
            샤시다이노와 테스트 트랙 모두에서 사용할 수 있습니다.
          </li>
          <li>
            페달로봇 PDA-200을 테스트 트랙과 샤시다이나모에서 사용하는 경우 일반적으로 
            페달 로봇은 가속 구간과 감속 구간 모두에서 차량의 속도를 제어합니다. 또한, 
            샤시다이나모에서 페달 컨트롤러는 샤시다이나모의 작동 모드를 속도 제어 모드로 
            전환하고 목표 속도를 전송하여 샤시다이나모를 사용하여 브레이크 기능을 수행함으로써 
            테스트 차량의 속도를 제어하도록 하는 샤시다이나모 제어 기능을 옵션으로 제공할 수 
            있습니다.
          </li>
        </ul>
      </section>

      <h1 style={{
        background: 'red'
      }}>image5</h1>

      <h1 style={{
        background: 'red'
      }}>image6</h1>

      <h1 style={{
        background: 'red'
      }}>image7</h1>      

      {/* 차량 성능 테스트 연동 */}
      <section className="product-section">
        <h2 className="product-title">차량 성능 테스트 연동 기능</h2>
        <ul className="product-list">
          <li>페달로봇 PDA-200은 PC 소프트웨어를 사용하여 "가속 페달" 개도와 "브레이크 페달"을 제어하여 차량을 주행시킬 수 있는 페달제어 기반 차량 성능 평가 장치입니다.</li>
          <li>페달로봇 PDA-200은 Programmed 모드에 따라 자동으로 "가속 페달"과 "브레이크 페달"을 제어할 수 있으므로 사전에 정해진 조건과 시간에 정밀 테스트를 수행할 수 있는 차량 성능 평가 장치입니다.</li>
          <li>페달로봇 PDA-200은 운전자의 "가속 페달" 열림 유지의 어려움을 줄이고 오류를 최소화하며, 반복 테스트의 재현성을 향상시킵니다.</li>
          <li>페달로봇 PDA-200은 자동으로 테스트 항목에 따라 테스트를 수행하고 테스트가 진행됨에 따라 데이터를 측정 및 저장하며 테스트 결과 데이터를 자동으로 분류하고 관리할 수 있습니다.</li>
        </ul>
      </section>

      {/* 차량 장착 */}
      <section className="product-section">
        <h2 className="product-title">차량 장착</h2>
        <ul className="product-list">
          <li>페달 로봇의 PDA-200 의 차량 장착은 다음과 같은 순서로 행해집니다.</li>
          <li>페달로봇과 베이스를 운전석 바닥에 위치시키고,</li>
          <li>페달로봇 베이스를 고정시키기 위하여, 씨트 레일의 너트를 3~4 바퀴 풀른 뒤,</li>
          <li>페달로봇 베이스와 시트레일 너트를 연결시키는, U-Slot 홀이 있는 Flat Bar로 양 끝을 연결시켜 고정하면 설치는 완료됩니다.</li>
          <li>페달제어기를 사용하여 시험을 시작하기 위해서는 먼저, 차량의 악셀페달 과 브레이크페달 을 페달로봇의 액츄에이터 에 연결하기 위하여 페달로봇 PDA-200 에서 제공되는 로드링크를 악셀페달과 브레이크 페달에 연결합니다.</li>
          <li>페달로봇를 고정한 뒤, 페달의 Travel, 0.0% ~100.0% 를 셋팅하기 위하여, 수동 Forward/Backward 버튼을 이용하여, 페달 Travel 0.0% 와 100.0% 위치를 Record 시키면 동작준비가 마무리 됩니다.</li>
          <li>상기와 같은 절차의 설치, 고정, 위치셋팅 까지의 시간은 보통 5 ~ 10 분 정도 걸립니다.</li>
          <li>페달로봇 PDA-200 은 VMS3400 또는 VMS3200 에서 연결되어 입력되는 페달제어신호에 따라 악셀페달과 브레이크 페달을 조작하여 차량을 정상적으로 주행 가능 하게 제어합니다.</li>
        </ul>
      </section>

      {/* 샤시다이나모 드라이브 사이클 모드 주행*/}
      <section className="product-section">
        <h2 className="product-title">샤시다이나모 드라이브 사이클 모드 주행</h2>
        <ul className="product-list">
          <li>드라이브 사이클 테스트 기능</li>
          <li>드라이브 사이클 테스트 기능은 미리 정해진 주행 모드에 따라 차량이 반복적으로 주행 할 수 있게 하는 기능입니다. 이 기능은 운전자 없이 시험 차량을 운행 할 수 있게 해주는 기능이며 똑같은 드라이브 커브를 무한 반복 실행할 수 있게 하는 기능입니다.</li>
          <li>이 기능은 샤시다이노와 트랙에서 모두 사용할 수 있습니다. 샤시다이노를 사용하는 경우 APS 페달 컨트롤러는 가속 영역에서 차량 속도를 제어합니다.</li>
          <li>감속 구간에서는 APS 페달 제어기가 운전 모드를 속도 제어 모드로 전환하고 목표 속도를 전달하여 샤시다이노를 사용하여 브레이크 기능을 수행함으로써 시험 차량의 속도를 제어하도록 샤시다이노를 제어합니다.</li>
          <li>드라이브 사이클 테스트 는 자동 변속기 또는 더블 클러치 장착 차량에서만 실행이 가능합니다.</li>
        </ul>
      </section>

      {/* 샤시다이나모 페달로봇 인터록 연결*/}
      <section className="product-section">
        <h2 className="product-title">샤시다이나모 페달로봇 인터록 연결</h2>
        <ul className="product-list">
          <li>페달로봇을 이용하여 샤시다이노 에서 주행하기 위하여 샤시다이노와 연결되어야 하는 필수 신호에 대한 사항입니다.</li>
          <li>드라이브컨트롤러는, 드라이브 사이클 주행 중 가속 및 감속구간, 정속구간에서 “가속 및 브레이크 페달 제어” 를 이용하여 차량의 속도를 연속적으로 제어 하며, 일반적으로 샤시다이노의 “Road-Load 모드”에서 드라이브 사이클 을 주행하게 합니다.</li>
          <li>샤시다이노 주행시험을 위해서는 사전에, 샤시다이노 와 드라이브 콘트롤러 간 필수 연결 입출력이 먼저 수행 되어야 합니다.</li>
        </ul>
      </section>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>연결항목</th>
              <th>신호구분</th>
              <th>용도</th>
              <th>기타</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>샤시다이나모 OK 신호</td>
              <td>샤시다이나모 상에서 차량을 주행할 수 있는 정상 조건 신호</td>
              <td>디지털 입력신호</td>
              <td></td>
            </tr>
            <tr>
              <td>샤시다이나모 이상 ESTOP 신호</td>
              <td>
                샤시다이나모의 이상 상황으로 차량을 주행할 수 없는 이상 조건 신호로
                차량의 제어를 중단합니다.
              </td>
              <td>디지털 입력신호</td>
              <td></td>
            </tr>
            <tr>
              <td>다이노 속도 Feedback 신호</td>
              <td>다이노 속도 F/B 신호 : 0 ~ 200Kph / 0 ~ 10V</td>
              <td>Analog 입력 10V 신호</td>
              <td></td>
            </tr>
            <tr>
              <td>차량 이상 ESTOP 신호</td>
              <td>
                차량 또는 페달로봇의 이상으로 샤시다이나모를 긴급으로 정지해야 하는
                상태 신호
              </td>
              <td>디지털 출력신호</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>     

      {/* 샤시다이나모 드라이브 사이클 모드 주행*/}
      <section className="product-section">
        <h2 className="product-title">샤시다이나모 드라이브 사이클 모드 주행</h2>
        <ul className="product-list">
          <li>드라이브 콘트롤러는, 샤시다이노의 Brake Assist 기능 (Dyno Constant Speed Mode) 을 사용하여 감속구간에서 속도제어를 가능하게 할 수 있습니다.</li>
        </ul>
      </section>

      <h1 style={{
        background: 'red'
      }}>image8</h1>      

      {/* 샤시다이나모 속도제어모드 이용 시험*/}
      <section className="product-section">
        <h2 className="product-title">샤시다이나모 속도제어모드 이용 시험</h2>
        <ul className="product-list">
          <li>본 기능은 감속구간에서 샤시다이나모의 속도제어 모드를 이용하여 드라이브사이클을 주행 가능하게 하는 모드입니다.</li>
          <li>드라이브컨트롤러는, 드라이브 사이클 주행 중 가속 및 정속구간은 "APS제어"를 이용하여 차량의 속도를 제어하며, 감속구간에서의 속도제어는 샤시다이나모의 "정속제어 모드"를 활용하여, 드라이브 사이클을 주행하게 하는 모드입니다.</li>
          <li>따라서, 본 샤시다이나모 주행시험을 위해서는 사전에, 샤시다이나모와 드라이브 컨트롤러 간 필수 연결 입출력이 먼저 수행되어야 합니다.</li>
        </ul>
      </section>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>연결항목</th>
              <th>신호구분</th>
              <th>용도</th>
              <th>기타</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>다이노 주행 모드 선택 신호</td>
              <td>Road Load mode/Constant Speed mode 선택 신호</td>
              <td>디지털 출력신호</td>
              <td></td>
            </tr>
            <tr>
              <td>다이노 Constant Speed 목표 속도 지령신호</td>
              <td>
                목표 속도 신호 : 0 ~ 200Kph/0 ~ 10V
              </td>
              <td>Analog 10V 신호</td>
              <td></td>
            </tr>
            <tr>
              <td>다이노 속도 Feedback 신호</td>
              <td>다이노 속도 F/B 신호 : 0 ~ 200Kph/0 ~ 10V</td>
              <td>Analog 10V 신호</td>
              <td></td>
            </tr>
            <tr>
              <td>샤시다이나모 이상 ESTOP 신호 또는 샤시다이나모 OK 신호</td>
              <td>
                샤시다이나모 이상 긴급 정지 신호 입력
              </td>
              <td>디지털 입력 신호</td>
              <td></td>
            </tr>
            <tr>
              <td>차량 이상 ESTOP 신호</td>
              <td>
                샤시다이나모 모드 Road Load 전환
              </td>
              <td>디지털 출력 신호</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>  

      {/* 샤시다이나모 설정*/}
      <section className="product-section">
        <h2 className="product-title">샤시다이나모 설정</h2>
        <ul className="product-list">
          <li>샤시다이나모 와의 신호케이블 연결이 완료되면, 샤시다이나모의 채널 설정이 이루어져야합니다. 다이노 채널 리스트에서 해당 채널과 해당 하드웨어 연결포트를 일치시킵니다.</li>
        </ul>
      </section>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>연결항목</th>
              <th>다이노 채널설정 및 포트 연결 구분</th>
              <th>용도</th>
              <th>기타</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>다이노 주행 모드 선택 신호</td>
              <td>다이노 채널 리스트에서 해당 채널과 해당 하드웨어 디지털 출력 연결 포트를 일치 시킵니다.</td>
              <td>디지털 출력신호</td>
              <td></td>
            </tr>
            <tr>
              <td>다이노 Constant Speed 목표 속도 지령신호</td>
              <td>
                다이노 채널 리스트 에서 외부 목표 속도 입력 포트에 VMS의 아날로그 출력(목표속도 출력) 연결 포트를 일치시킵니다.
              </td>
              <td>Analog 10V 신호</td>
              <td></td>
            </tr>
            <tr>
              <td>다이노 속도 신호</td>
              <td>다이노 속도신호 아날로그 출력을 VMS의 다이노속도입력 포트에 연결합니다.</td>
              <td>Analog 10V 신호</td>
              <td></td>
            </tr>
            <tr>
              <td>샤시다이나모 이상 ESTOP 신호 또는 샤시다이나모 OK 신호</td>
              <td>
                다이노 채널 리스트에서 해당 채널과 해당 하드웨어 디지털 출력 연결 포트를 일치 시킵니다.
              </td>
              <td>디지털 입력 신호</td>
              <td></td>
            </tr>
            <tr>
              <td>차량 이상 ESTOP 신호</td>
              <td>
                다이노 채널 리스트에서 해당 채널과 해당 하드웨어 디지털 출력 연결 포트를 일치 시킵니다.
              </td>
              <td>디지털 출력 신호</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>        

      <h1 style={{
        background: 'red'
      }}>image9</h1>      

      {/* Chassis dynamometer 시험 설정 항목 */}
      <div className="product-section">
        <h2 className="product-title">Chassis dynamometer 시험 설정 항목</h2>

        <ul className="product-list">
          <li>
            ActiveADC의 다이나모미터 모드 기능을 활성화 시키기 위한 코드를 입력 합니다.
            (기본 코드는 “dynamometer” 입니다.)
          </li>
          <li>
            다이나모미터로부터 입력되는 E-Stop 신호의 극성을 선택합니다. (HIGH, LOW)
          </li>
          <li>
            다이나모미터로 출력되는 E-Stop 신호의 극성을 선택합니다. (HIGH, LOW)
          </li>
          <li>
            다이나모미터 모드 선택 신호 극성을 선택합니다.
            (Constant Speed 또는 Road load mode 선택 신호)
          </li>
          <li>
            다이나모미터로 전달하는 속도 제어값을 입력합니다.
            (목표 속도 신호 : 0 ~ 200Kph / 0 ~ 10V)
          </li>
          <li>
            시험 강제 종료 조건을 입력합니다.
          </li>
        </ul>
      </div>

      <h1 style={{
        background: 'red'
      }}>image10</h1>      

      {/* 샤시다이나모 시험 진행 */}
      <div className="product-section">
        <h2 className="product-title">샤시다이나모 시험 진행</h2>

        <ul className="product-list">
          <li>
            샤시다이나모 와의 신호 케이블 연결과 다이노 설정이 완료되면,
            샤시다이나모 의 Road Load Mode 에서 시작하여 드라이브 사이클 주행을 시작할 수 있습니다.
          </li>
          <li>
            드라이브 사이클 주행하면서 드라이브 콘트롤러는 스스로 필요로되는 시점에
            다이노 모드를 자동으로 전환해 가면서 드라이브 사이클 시험을 완성합니다.
          </li>
          <li>
            비상시 리모트 펜던트의 E-STOP 버튼으로 시험을 강제 종료할 수 있습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}