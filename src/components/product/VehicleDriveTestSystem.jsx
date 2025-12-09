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

      <h2 style={{
        background: "red"
      }}>image1</h2>
    
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

      <h2 style={{
        background: "red"
      }}>image2</h2>
      
      <h2 style={{
        background: "red"
      }}>image3</h2>

      <h2 style={{
        background: "red"
      }}>image4</h2>      

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


          <li>정확성</li>
          <ul>
            <li>
              속도 {'<'} 1.0km /h
            </li>
            <li>
              거리 {'<'} 0.05% (5cm / 100m)
            </li>
            <li>
              위치 {'<'} 3m @ 95% CEP
            </li>
          </ul>
          <li>2 채널 CAN 데이터 측정 : 1 채널 유선 및 1 채널 무선</li>
          <li>이더넷 및 무선 데이터 전송</li>
          <li>Micro-SD 및 USB 스토리지로 데이터 로깅 테스트</li>
          <li>주행 테스트 트랙의 날씨 데이터와 함께 데이터를 기록</li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image5</h2>

      <section className="product-section">
        <h2 className="product-title">드라이버 디스플레이 및 스피커</h2>
        <ul className="product-list">
          <li>드라이버 디스플레이용 8.5" LCD 화면 및 테스트 진행, 결과 안내</li>
          <li>부저, 가변 주파수로 다양한 음성 조건을 표현할 수 있는 스피커</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">통신 표준</h2>
        <ul className="product-list">
          <li>Wi-Fi (802.11N)</li>
          <li>유선 데이터 전송 (이더넷)</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">저장</h2>
        <ul className="product-list">
          <li>마이크로 SD 64G 또는 USB</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">전원 및 배터리</h2>
        <ul className="product-list">
          <li>DC 9 ~ 30V, 광범위한 전원 공급 장치</li>
          <li>OBD 포트를 통한 주 전원 공급 장치</li>
          <li>외장 배터리 팩 4 시간 용량 제공</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">IEPE / DC 신호 센서 측정 포트 : 4 채널</h2>
        <ul className="product-list">
          <li>NVH 데이터 수집을 위해 직접 연결되는 AC/DC IEPE 센서</li>
          <li>다양한 유형의 IEPE 센서의 직접 연결을 구성하기 위한 내부 신호 컨디셔닝</li>
          <li>AD 샘플링 레이트 : 50 kHz/ch</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">고품질 마이크 센서 사양</h2>
        <ul className="product-list">
          <li>주파수 범위 : 20Hz ~ 20 Khz</li>
          <li>감도 (감도) : -55dBV / Pa</li>
          <li>S / N 비율 : -35dBa @ 1kHz, 1Pa, 가중 네트워크</li>
          <li>다이나믹 레인지 : 130dB</li>
          <li>최대 SPL : 130dB 최대 SPL</li>
          <li>차량 장착 고품질 포함</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">G 센서 사양</h2>
        <ul className="product-list">
          <li>범위 : ± 5G (단축)</li>
          <li>정확도 : 0.1 %</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">CAN 인터페이스</h2>
        <ul className="product-list">
          <li>VDTS는 1개의 유선 CAN 통신 포트와 1개의 무선 CAN 통신 포트를 동시에 제공합니다.</li>
          <li>ECU 통신 프로토콜을 위한 Cdb 및 CCP 사용 가능</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">CAN 사양</h2>
        <ul className="product-list">
          <li>유선 CAN 2.0b 및 CAN-FD 지원</li>
          <li>유선 CAN 프로토콜 : CANdb 및 CCP</li>
          <li>무선 CAN 프로토콜 : 진단 CAN</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">펄스 / 디지털 채널</h2>
        <ul className="product-list">
          <li>2 채널 : 차량속도, RPM 측정을 위한 펄스 차형의 신호 입력 채널 제공</li>
          <li>데이터 트리거 입력 신호 등을 위한 디지털 입력 채널 제공</li>
          <li>장치 작동 상태를 LED 표시를 통하기 위한 디지털 출력</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">리모콘 / 트리거 스위치</h2>
        <ul className="product-list">
          <li>시작 / 정지, 테스트 모드 선택, 화면 전환 및 설정과 같은 장치 작동을 위한 조이스틱 형 리모콘</li>
          <li>스위치에는 장치 작동 상태를 표시하는 LED 램프가 포함됨</li>
          <li>데이터 기록을 시작하는 트리거 스위치를 클릭하면 일정 시간 동안 데이터가 저장되고 다시 클릭하면 저장이 중지됩니다.</li>
          <li>데이터로 저장하는 동안 스위치를 클릭하면 저장된 데이터에 표시 기능이 제공됩니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">데이터 로깅 기능</h2>
        <ul className="product-list">
          <li>독립형 장치로, 사용자가 입력 채널 및 스토리지 채널 설정을 위한 구성 파일에 따라 자체적으로 데이터를 기록 할 수 있습니다.</li>
          <li>차량 CAN 신호 및 100Hz GPS 신호, 마이크 센서의 동시 측정 및 저장</li>
          <li>ECU 데이터 수집을 위한 CANdb, CCP 채널 편집 기능</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">데이터 후 처리</h2>
        <ul className="product-list">
          <li>테스트 중 실시간으로 측정된 데이터 (NVH, GPS, CAN), 테스트로그는 이들 테스트 조건에 처리된 데이터로 업로드 됩니다.</li>
          <li>로그 데이터는 차량 유무 / 제품 번호 / 차량 번호 / 측정 항목 이름 / 날짜 순으로 분류되어 데이터 서버에서 제공됩니다.</li>
          <li>후 처리 데이터는 GoPro 비디오 데이터와 통합 되어 분석, 동기화됩니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">PC 로 데이터 업로드</h2>
        <ul className="product-list">
          <li>테스트 차량에서 측정된 센서결과, CAN 데이터, GPS 데이터는 무선 및 이더넷이 연결된 PC로 업로드 됩니다.</li>
          <li>NVH 데이터 및 추가로 연결된 센서 데이터를 업로드 할 수 있습니다.</li>
          <li>GoPro 영상 데이터는 테스트데이터와 동기화 하여 업로드 할 수 있습니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">케이스 및 무게</h2>
        <ul className="product-list">
          <li>VDTS는 차량 내 테스트 목적에 적합한 진동 및 방습 케이스로 구성됩니다.</li>
          <li>크기 : 200 × 90 × 90mm (약)</li>
          <li>무게 : 900g (약)</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">GoPro 데이터 결합</h2>
        <ul className="product-list">
          <li>운전자 위치에서 측정된 영상을 저장한 GoPro 데이터를 후 처리 과정 중에 테스트 데이터와 결합하여 분석에 사용하도록 구성되었습니다.</li>
          <li>Wi-Fi 네트워크 또는 PC 연결, 크레들 버튼을 통해 GoPro 데이터를 테스트 결과 통합 영상으로 업로드 하면</li>
          <li>후 처리 및 결과에서 GoPro 데이터를 결합된 고유 테스트 ID를 획득하게 됩니다.</li>
          <li>GoPro의 시작 GPS는 파일을 인식한 시각 정보를 제공합니다.</li>
          <li>기본 GPS 데이터의 GPS 보정과 결합되어 후 처리 및 실측 분석에 사용됩니다.</li>
          <li>트리거를 사용하여 GoPro 카메라 촬영을 자동으로 시작하는 트리거 기능을 제공합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">시험 중 자동 측정 기능</h2>
        <ul className="product-list">
          <li>NVH : 도로 소음 / 아이들 소음 / 가속 주행 소음</li>
          <li>R & H : 운전 중 떨림, 조향 느낌, 조향 소음</li>
          <li>동력 성능 : 가속 성능 / 고속 영역 가속성능 / 정속 성능</li>
          <li>브레이크 성능 : 가속 성능 / 감속 성능</li>
          <li>사용자 정의 테스트 항목 (새 항목 추가하기 위한 인터페이스 구현)</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">측정 방법</h2>
        <ul className="product-list">
          <li>GPS 위치 또는 테스트 주행 조건으로 프로그램 된 자동 트리거를 통한 측정 시작 / 중지</li>
          <li>준비 구간 / 시점 / 측정 종료를 위한 트리거 설정 및 알림 기능</li>
          <li>측정 항목에 따른 자동 마이크 센서 설정 기능 : 마이크 (샘플링 속도 / 진폭 범위)</li>
          <li>카메라 설정 기능</li>
          <li>CAN 측정 설정 기능</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">데이터 분석</h2>
        <ul className="product-list">
          <li>VDTS는 실시간 분석이 가능한 항목에 대해, 즉시 결과를 수행합니다.</li>
          <li>VDTS는 실시간 분석 이외의 항목에 대해서는, 제어 PC에서 분석을 진행합니다.</li>
          <li>분석 기능 항목 : FFT, 가중치 (A/B/C), 엔벨로프, 주파수 필터, 더블펄, 자동 스펙트럼, 평균값 (RMS, 지수 등), 산술 계산, 그래프, 컬럼 계산 등</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">날씨 정보 수집</h2>
        <ul className="product-list">
          <li>테스트 트랙의 기상 관측소에 연결하고 기록된 시간 (GPS 위치 / 시간 정보)의 날씨 정보 (풍 / 온도 / 습도 / 기압 등)를 획득합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">이벤트 발생 분석</h2>
        <ul className="product-list">
          <li>이벤트가 발생했을 때 GPS로 테스트 트랙의 자세한 노면 이름을 인식합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">로그 항목 입력</h2>
        <ul className="product-list">
          <li>테스트 도로 정보를 분석 이벤트 발생 테스트 데이터 및 GoPro 데이터와 함께 기록됩니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">트리거 방법</h2>
        <ul className="product-list">
          <li>VDTS 트리거 스위치에 의한 수동 트리거</li>
          <li>DTC / MIL 발생 시 자동 로그</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">콘트롤스테이션 및 PC</h2>
        <ul className="product-list">
          <li>VDTS는 테스트 중에 차량에서 테스트 데이터를 수집하여 VDTS의 저장 장치에 저장됩니다. VDTS에 저장된 테스트 데이터는 콘트롤 스테이션에서 콘트롤 PC에 업로드되며 클릭으로 데이터 분석용 또는 경향 분석 데이터를 생성하여 제어 PC에 전송할 수 있습니다.</li>
          <li>VDTS의 장치 설정 및 테스트 절차는 VDTS로부터 업로드되는 콘트롤스테이션, PC에서도 이루어집니다.</li>
          <li>테스트 데이터의 분류, 검색 또는 장치 설정 데이터는 차량의 VIN NO를 바코드 리더에 입력하여 확인하도록 구성되어 있습니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">차량 정보 조회</h2>
        <ul className="product-list">
          <li>바코드 리더를 이용한 차량 VIN NO 입력 및 자동 차량 정보 조회 및 서버 PC에서 데이터 다운로드</li>
          <li>OBD VIN NO를 통해 취득한 차량 인식 및 차량 정보</li>
          <li>차량 종류 / 단계 / 차량 정보가 기록됩니다</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">데이터 전송 (VDTS → 제어 PC )</h2>
        <ul className="product-list">
          <li>PC 제어를 위한 무선 데이터 전송 : 자동 업로드 (GPS, 트리거) 및 수동 업로드 기능 제공</li>
          <li>제어 PC에 데이터를 전송 (무선 장비 고정시 사용)</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">데이터 동기화</h2>
        <ul className="product-list">
          <li>GPS 시간을 기준으로 VDTS 데이터 및 GoPro 동기화</li>
          <li>서버 연계 컨텐츠 서버를 참조한 후 현장 교차 측정 데이터별 결과를 제공합니다.</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">주행감시 시험항목 및 기능</h2>
        <ul className="product-list">
          <li>VDTS는 100Hz GPS 및 데이터 저장 매체가 내장된 독립형 성능 테스트 장치로서, 디스플레이 및 데이터 로깅 / Wifi 업로드 기능을 제공하고, 차량 CAN 데이터를 취득하고 5인치 LCD 화면에 CAN 및 GPS 데이터를 직접 표시 할 수 있습니다.</li>
          <li>차량 성능 시험은 장치로 VDTS는 소음테스트, 롤링테스트, 조향 성능, 가속 및 브레이크 성능, 차량 DTC 점검, TPMS 등에 효과적으로 적용됩니다.</li>
          <li>VDTS는 입력 된 모든 데이터를 표시하고, 동시에 스토리지장치에 내장된 WiFi 네트워크로 해당 데이터를 업로드 할 수 있습니다.</li>
          <li>VDTS는 GPS 속도와 CAN 속도를 결합하여 사용합니다.</li>
          <li>NVH 신호는 가속도 센서를 사용하고, dB 계산을 위한 레벨 기준 값은 KS 표준 (10-6m/s2)을 사용합니다.</li>
          <li>일부 차량 시험에서는 장치를 특정에 필요하지만, CAN 조정소 및 CAN 신호가 시험 차량에서 나오지 않으면 시험 화면에는 표시되지 않습니다.</li>
          <li>위치 기반 테스트는 테스트 전에 트리거 기준을 설정한 결과가 필요합니다.</li>
          <li>정상 회전 반경은 각속도 값에 의해서 계산됩니다.</li>
          <li>회전 반경 [m] = 차량 속도 [m/s] / 요레이트 [rad/s] 를 기준으로 합니다.</li>
        </ul>
      </section>
      
      <h2 style={{
        background: "red"
      }}>image6</h2>
    </div>
  )
}