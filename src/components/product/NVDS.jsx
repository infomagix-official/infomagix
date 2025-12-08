import sample1 from '../../../assets/ko/product/NVDS/sample1.png';
import sample2 from '../../../assets/ko/product/NVDS/sample2.png';
import sample3 from '../../../assets/ko/product/NVDS/sample3.png';
import sample4 from '../../../assets/ko/product/NVDS/sample4.png';
import header from '../../../assets/ko/product/common/header.png';

export default function NVDS() {
  return (
    <div className="product-container">
      <h1 className="main-title">NVDS</h1>
      <img src={header} alt="header" className="product-image" />
      {/* 개요 */}
      <section className="product-section">
        <h2 className="product-title">개요</h2>
        <ul className="product-list">
          <li>NVDS는 차량의 NVH 측정 진단시스템 입니다.</li>
          <li>
            차량의 NVH 성능에 대한 정확한 파악 및 문제점 보완을 위해 사용자 및
            실 주행 조건에서의 NVH 성능을 파악합니다.
          </li>
          <li>
            NVH 성능 검사에 대한 표준화된 검사 방법을 구현, 자동화 하고, 검사
            데이터를 계측, 정리, 분석할 수 있는 NVH 성능 검사·진단용 표준 장비
            입니다.
          </li>
        </ul>
      </section>

      {/* 목적 */}
      <section className="product-section">
        <h2 className="product-title">목적</h2>
        <ul className="product-list">
          <li>표준 및 다양한 시험 조건에서의 NVH 검사 데이터 분석 시스템</li>
          <li>데이터 확보, 검사 진행, 처리, 결과보고서 등 일괄 처리 시스템</li>
          <li>
            실시간 NVH 모니터링 및 필드 데이터 취득 시험을 동시에 수행할 수 있는
            시스템
          </li>
          <li>표준화된 검사 조건에서의 NVH 성능 파악 수치화</li>
          <li>NVH 검사를 위한 데이터 취득, 분석 소요 시간 손실 최소화</li>
        </ul>
      </section>

      {/* NVDS 운영 */}
      <section className="product-section">
        <h2 className="product-title">NVDS 운영</h2>
        <p className="product-text">
          차량 엔진 RPM 및 차량 속도를 기준으로 진동, 소음 데이터의 분석을 하기
          위한 NVH 성능 검사 및 최적화 분석이 가능한 표준 NVH 검사 분석
          시스템이며, NVDS 데이터 취득 유니트와 전용 NVDS 소프트웨어로 운영됩니다.
        </p>
      </section>

      {/* NVDS 데이터 취득용 유니트 */}
      <section className="product-section">
        <h2 className="product-title">NVDS 데이터 취득용 유니트</h2>
        <ul className="product-list">
          <li>
            차량 ECU에서 제공하는 차량 RPM, Speed 계측과 진동, 소음 센서,
            가속도 센서 등을 통한 필드 계측이 가능한 포터블 유니트
          </li>
          <li>12채널 유니트 및 GPS, 리모콘으로 구성</li>
          <li>
            실시간 NVH 모니터링 및 필드 데이터 취득, 분석을 동시에 수행할 수 있는
            시스템
          </li>
        </ul>
      </section>

      {/* NVDS 소프트웨어 */}
      <section className="product-section">
        <h2 className="product-title">NVDS 소프트웨어</h2>
        <ul className="product-list">
          <li>안드로이드 기반 Tablet PC에서 운영 가능</li>
          <li>
            실시간 분석 시험 모드를 대상으로 소음, 진동 데이터의 실시간 모니터링
            및 NVH 분석 기능 제공
          </li>
          <li>
            후처리 분석이 필요한 다채널 시험 모드를 대상으로 계측 데이터 저장,
            NVH 분석, 결과 처리 전용 기능 제공
          </li>
        </ul>
      </section>
      {/* <h1 style={{
        background: 'red'
      }} >image1</h1> */}
      <img src={sample1} alt={"sample1"} className="product-image" />
      <section className="product-section">
        <h2 className="product-title">NVDS 사양 일반</h2>
        <ul className="product-list">
          <li>
            독립형 콘트롤러, CAN 통신모듈, GPS, 정밀 진동·소음측정을 위한 최대
            12채널의 IEPE 또는 MEMS 타입의 마이크로폰, 가속도 센서 입력 및 고속
            신호처리, AD 변환기, 데이터 저장 매체, 전원장치 등이 내장됨
          </li>
          <li>
            차량 시험용으로 사용 가능한 구조의 NVH 진단 측정·분석용 데이터 취득
            유니트
          </li>
          <li>
            Tablet 소프트웨어를 통하여 장치의 설정, 시험 검사 모드의 설정이
            가능한 형태
          </li>
          <li>
            Tablet 소프트웨어를 통하여 기본 범용 시험 모드를 위한 실시간
            모니터링 및 분석이 가능한 형태
          </li>
          <li>
            Tablet 소프트웨어를 통하여 다채널 소음·진동 데이터 취득, 저장 후 CAN
            데이터 동기화 취합 분석, NVH 진단 및 시험 결과 보고서 제출이 가능하며,
            종료 후 취득 데이터의 자동 업로드 기능이 가능한 형태
          </li>
          <li>
            상세 시험 20여 가지 전용 모드를 포함하는 12채널 측정 유니트 및
            소프트웨어로 구성
          </li>
          <li>본체 CPU 및 저장 매체 : ARM 9 Core 계열 CPU 및 USB 고속 저장</li>
          <li>CAN 데이터 계측 포트 : 2채널</li>
          <li>
            IEPE / MEMS형 마이크로폰 및 가속도 센서 계측 포트 : 12채널
          </li>
          <li>
            IEPE(AC/DC) Sampling 속도 : 12채널에 대하여 최고 50kHz 측정 가능하게
            구성
          </li>
          <li>Tablet PC와의 연결 : Ethernet 통신</li>
        </ul>
      </section>

      {/* CAN 인터페이스 */}
      <section className="product-section">
        <h2 className="product-title">CAN 인터페이스 (2채널)</h2>
        <ul className="product-list">
          <li>차량 CAN 통신 2채널 동시 제공</li>
          <li>CAN은 CAN 2.0b, CAN FD 대응 가능</li>
          <li>CAN 통신 프로토콜 : Cdb, J1979, UDS 프로토콜 지원</li>
        </ul>
      </section>

      {/* 펄스 / 디지털 채널 */}
      <section className="product-section">
        <h2 className="product-title">펄스 / 디지털 채널</h2>
        <ul className="product-list">
          <li>
            RPM 등 회전속도 측정을 위한 주파수 펄스형 카운터 신호 입력 2채널
          </li>
          <li>리모콘 등 조작 입력 가능하게 구성</li>
          <li>데이터 트리거 입력 신호 등을 위한 디지털 입력 가능</li>
        </ul>
      </section>

      {/* 리모콘 / 트리거 스위치 */}
      <section className="product-section">
        <h2 className="product-title">리모콘 / 트리거 스위치</h2>
        <ul className="product-list">
          <li>데이터를 기록하기 위한 트리거 스위치 기능</li>
          <li>
            스위치에는 시스템 동작 상태(정상/이상)를 표시하는 LED 램프 포함
          </li>
          <li>
            트리거 스위치 클릭 시 일정 시간 전부터 데이터가 저장되며, 다시 클릭
            시 저장이 중지됨
          </li>
          <li>
            저장 중일 때 스위치 클릭 시 저장 데이터 상에 마킹 기능 제공
          </li>
        </ul>
      </section>
      {/* <h1 style={{
        background: 'red'
      }} >image2</h1> */}
      {/* 전원 */}
      <img src={sample2} alt={"sample2"} className="product-image" />
      <section className="product-section">
        <h2 className="product-title">전원</h2>
        <ul className="product-list">
          <li>차량전원 DC 9 ~ 30V를 사용할 수 있는 전원장치 내장</li>
          <li>외장형 배터리 팩을 이용한 전원 공급라인 연결 사용 가능</li>
        </ul>
      </section>

      {/* 크기 및 케이스 */}
      <section className="product-section">
        <h2 className="product-title">크기 및 케이스</h2>
        <ul className="product-list">
          <li>차량 내 사용에 적합한 방진 구조의 케이스로 구성</li>
          <li>
            운전석 시트 후방에 부착하여, 마이크로폰 등 센서 연결이 용이하게 관련
            액세서리 구성
          </li>
          <li>크기 : 약 200 × 200 × 80mm (approx.)</li>
        </ul>
      </section>

      {/* 운영환경 */}
      <section className="product-section">
        <h2 className="product-title">운영환경</h2>
        <ul className="product-list">
          <li>차량 감속, 가속이 급격한 차량 시험 환경에 적합</li>
          <li>전원사양 : DC 9 ~ 30V DC 차량전원 및 외장 배터리 사용 가능</li>
          <li>내충격사양 : 50G Shock Rating</li>
          <li>내진동사양 : Vibration Rating 5G @ 5Hz ~ 500Hz</li>
          <li>환경조건 : -20 to 60℃ 동작온도</li>
        </ul>
      </section>

      {/* 고품질 마이크로폰 센서 */}
      <section className="product-section">
        <h2 className="product-title">고품질 마이크로폰 센서</h2>
        <ul className="product-list">
          <li>Frequency Range : 20Hz ~ 20kHz</li>
          <li>Sensitivity (출력감도) : -55 dBV/Pa</li>
          <li>
            S/N Ratio : 35dBa @ f=1kHz, Pin=1Pa, A weighted network
          </li>
          <li>Dynamic Range : 130dB</li>
          <li>Maximum SPL : 130dB Maximum SPL</li>
          <li>차량거치용 지그 포함</li>
        </ul>
      </section>

      {/* 가속도 센서 */}
      <section className="product-section">
        <h2 className="product-title">가속도 센서</h2>
        <ul className="product-list">
          <li>Tri-axial, mini (5 gm) high sensitivity, ICP® accel.</li>
          <li>Frequency Range : 1Hz ~ 4kHz</li>
          <li>Sensitivity : 100 mV/g, 1Hz to 5kHz</li>
          <li>Range : ±10G (3축)</li>
        </ul>
      </section>

      {/* Tablet PC */}
      <section className="product-section">
        <h2 className="product-title">Tablet PC</h2>
        <ul className="product-list">
          <li>
            차량으로부터 데이터를 취득하고, 실시간 모니터링, 분석, 저장하며,
            장치의 설정 및 관리를 위한 소프트웨어 구동용 Tablet PC
          </li>
          <li>
            Cortex A9 또는 SnapDragon 이상 CPU, 16GB 이상 메모리, 256GB 이상
            데이터 저장 메모리, 10” 이상 Display
          </li>
        </ul>
      </section>

      {/* NVDS 소프트웨어 기능 */}
      <section className="product-section">
        <h2 className="product-title">NVDS 소프트웨어 기능</h2>
        <ul className="product-list">
          <li>
            NVH 시험 모드별 NVH 데이터 취득 유니트의 사용 설정을 단순화 및
            자동화
          </li>
          <li>
            OBD를 통해 취득한 차량 VIN NO를 이용하여 차종 정보를 구분하여 기록
          </li>
          <li>
            사용자의 편리성을 극대화하도록 기본 NVH 데이터 분석 기능 구비
          </li>
          <li>
            측정값의 판단기준 레벨링 기능과 그래프의 시각화를 활용하여 사용자에게 판단 가이드 표시기능 지원
          </li>
          <li>
            Tablet PC 기반 NVH 유니트의 설정, 계측 자동화 기능
          </li>
          <li>CAN 및 진동·소음 측정 채널 동기화 기능</li>
          <li>
            설정 프로그램과 연동된 소음·진동 측정 모듈 제어, 동작확인 및 자동 시험
            진행 기능
          </li>
          <li>
            데이터 업로드 기능 및 USB Storage device를 이용한 데이터 저장 기능
          </li>
        </ul>
      </section>

      {/* Tablet PC 기반 실시간 NVH 측정/분석 */}
      <section className="product-section">
        <h2 className="product-title">
          Tablet PC 기반 실시간 NVH 측정·분석 기능
        </h2>
        <ul className="product-list">
          <li>
            전용 시험 항목별 확정된 측정 채널의 자동 설정을 통한 사용자 시그널 자동
            선택 기능
          </li>
          <li>
            Tablet PC 기반 실시간 모니터링 및 분석을 통한 데이터 시각화 기능
          </li>
          <li>Time 축 FFT, 컬러맵 실시간 그래프</li>
          <li>RPM 축 FFT, 컬러맵 실시간 그래프</li>
          <li>Frequency 축 Order 축 실시간 dB 레벨 그래프</li>
          <li>Color 맵 그래프</li>
        </ul>
    </section>
    {/* <h1 style={{
      background: 'red'
    }}>
      image3
    </h1> */}
    <img src={sample3} alt={"sample3"} className="product-image" />
    {/* NVH 시험 세팅 기능 구성 */}
    <section className="product-section">
      <h2 className="product-title">NVH 시험 세팅 기능 구성</h2>
      <ul className="product-list">
        <li>
          시험 항목에 따라서 사용할 센서의 자동 등록과 샘플링레이트,
          Amplitude Range, CAN 측정 항목 선택 등이 자동으로 설정되는 기능 적용
        </li>
        <li>
          사용자가 바로 선택하여 사용하는 시험 모드 선택 및 설정 자동화
          기능으로 시험 세팅의 자동화 구현
        </li>
        <li>
          Sampling rate / Frequency resolution은 개별 분석 항목의 목적 별로
          표준화하여 적용
        </li>
        <li>Weighting, Overlap은 분석 항목 별 표준화 적용</li>
      </ul>
    </section>

    {/* NVDS 제공 테스트 항목 */}
    <section className="product-section">
      <h2 className="product-title">NVDS 제공 테스트 항목</h2>

      {/* Idle 소음 */}
      <div className="product-section">
        <h3 className="product-title">Idle 소음</h3>
        <ul className="product-list">
          <li>실내 소음 (dBA@Hz)</li>
          <li>실내 부밍 (dBC@Hz)</li>
        </ul>
      </div>

      {/* Idle 진동 */}
      <div className="product-section">
        <h3 className="product-title">Idle 진동</h3>
        <ul className="product-list">
          <li>IDLE S/WHL 진동 (dB@Hz)</li>
          <li>IDLE FLR 진동 (dB@Hz)</li>
          <li>IDLE 저주파 진동 (dB@Hz)</li>
        </ul>
      </div>

      {/* Road 노이즈 */}
      <div className="product-section">
        <h3 className="product-title">Road 노이즈</h3>
        <ul className="product-list">
          <li>Road 노이즈 O/A (dBA@Hz)</li>
          <li>Road 부밍 (dBA@Hz)</li>
          <li>공명음 (dBA@Hz)</li>
          <li>럼블음 (dBA@Hz)</li>
          <li>고주파음 (dBA@Hz) (고속 : 80kph)</li>
        </ul>
      </div>

      {/* 주행 소음 */}
      <div className="product-section">
        <h3 className="product-title">주행 소음</h3>
        <ul className="product-list">
          <li>가속 실내 소음 O/A (dBA@RPM)</li>
          <li>정속 소음 (100kph, dBA@Hz)</li>
          <li>고속 부밍 소음 (dBC@Hz)</li>
          <li>가속 부밍 소음 (dBC@RPM)</li>
        </ul>
      </div>

      {/* 주행 진동 */}
      <div className="product-section">
        <h3 className="product-title">주행 진동</h3>
        <ul className="product-list">
          <li>정속 S/WHL 진동 (dB@Hz)</li>
          <li>정속 FLR 진동 (dB@Hz)</li>
        </ul>
      </div>
    </section>
    {/* <h1 style={{
      background: 'red'
    }}>
      image4
    </h1> */}
    <img src={sample4} alt={"sample4"} className="product-image" />
    </div>
  );
}