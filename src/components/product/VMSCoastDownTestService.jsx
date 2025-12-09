import header from '../../../assets/ko/product/common/header.png';

export default function VMSCoastDownTestService() {
  return (
    <div className="product-container">
      <h1 className="main-title">주행저항 시험(Coastdown Test)용역</h1>
      <img src={header} alt="header" className="product-image" />
      <section className="product-section">
        <ul className="product-list">
          <li>
            (주)인포메직스에서 진행하는 주행저항 시험방법은 국토교통부 산업통상자원부 환경부
            「자동차의 에너지소비효율, 온실가스 배출량 및 연료소비율 시험방법 등에 관한 고시」
            [별표 8]의 탑재식 기상정보 방식(2017. 12월 14일)의 내용을 기반하여 시험을 진행합니다.
          </li>
          <li>
            시험에 사용되는 시험장비는 국내 완성차 업체 및 공공기관에서 사용되고 있는 제품과
            동일한 것으로 공동고시에 부합하는 장비를 사용해 자동차안전연구원의 시험장을 활용하여
            시험을 진행합니다.
          </li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image1</h2>

      <section className="product-section">
        <h2 className="product-title">1. 시험 진행을 위한 의뢰자의 준비 사항</h2>
        <ul className="product-list">
          <li>시험차량의 등가관성중량</li>
          <li>추가 적재 Weight 준비</li>
          <li>차량의 전면 투영면적(A)</li>
          <li>차량 제원표</li>
          <li>시험에 맞는 차량 상태(주행거리 축적) 유지</li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">2. 차량인도 절차</h2>
        <ul className="product-list">
          <li>
            시험차량은 시험조건에 맞게(주행거리 축적 6,500km ± 1,000km 이내)
            차량 길들이기를 마친 후 시험당일 차량을 인도합니다.
          </li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">3. 시험의 목적</h2>
        <ul className="product-list">
          <li>
            자동차의 에너지소비효율, 온실가스 배출량 및 연료소비율을 측정을 위해
            차대동력계에 필요한 주행저항값을 측정하기 위함입니다.
          </li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">4. 시험 조건</h2>

        <h3 className="product-subtitle">A. 환경 조건</h3>
        <ol className="product-list">
          <li>시험도로의 대기온도는 5℃~35℃ 이내여야 합니다.</li>
          <li>
            시험시 평균풍속이 16km/h 또는 최고풍속이 20km/h를 초과하거나
            시험도로에 직각성분의 풍속이 8km/h를 초과해서는 안됩니다.
            다만, 시험자동차에 직접 탑재식 기상계를 장착한 경우에는
            평균 풍속이 35km/h 또는 최고 풍속이 50km/h를 초과해서는 안됩니다.
          </li>
        </ol>

        <h3 className="product-subtitle">B. 시험자동차 조건</h3>
        <ol className="product-list">
          <li>
            시험자동차의 타이어 규격, 전면 투영면적 측정을 위한 완충장치의 높이 등은
            제작자 권장 규격으로 하며, 에너지소비효율, 온실가스 배출량 및 연료소비율을
            측정할 자동차와 동일한 사양의 타이어를 사용하여 주행저항시험을 실시하여야 합니다.
          </li>
        </ol>

        <h3 className="product-subtitle">C. 주행저항 시험방법</h3>
        <ol className="product-list">
          <li>왕복으로 5회 이상 각 방향 5회 이상 주행합니다.</li>
          <li>
            각각의 타행주행시험은 측정구간에 대해 중단 없이 한번에 실시합니다.
            다만, 시험도로의 여건(불충분한 시험도로 길이)으로 인해 한번에 시험을
            실시할 수 없는 경우는 측정속도 구간을 분리하여 시험할 수 있습니다.
            이 경우 분리하고자 하는 속도보다 최소 15km/h 이상 차속을 올린 후
            측정을 실시합니다.
          </li>
        </ol>
      </section>

      <section className="product-section">
        <h2 className="product-title">5. 시험 후 결과물</h2>
        <ul className="product-list">
          <li>
            시험을 진행하면서 얻어진 데이터(raw data)를 실시간으로
            분석(ActiveVT)하여 얻어진 최종 결과값 A(F0), B(F1), C(F2)는
            탑재식 기상정보 방식의 주행저항력을 나타내는 운동방정식
            F = A + BV + CV2 의 계수(A, B, C)입니다.
          </li>
          <li>
            시험이 끝난 후 (주)인포메직스에서 아래와 같은 형태로 작성된 결과 리포트와
            시험 중 측정된 시험데이터(경과시간, 시험자동차 속도, 시험자동차의
            상대풍속 및 풍향)를 제공합니다.
          </li>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image2</h2>

      <section className="product-section">
        <h2 className="product-title">6. 차량에 설치하는 장비 안내</h2>
      </section>

      <h2 style={{
        background: "red"
      }}>image3</h2>

      <section className="product-section">
        <h2 className="product-title">데이터 취득 유닛</h2>
        <h2 style={{
          background: "red"
        }}>image3</h2>
        <ul className="product-list">
          <li>
            자체 동작 CPU를 내장하고, 전 채널 10kHz 이상 동시 샘플링 측정하여,
            외부 PC와 LAN 통신으로 연결되어, PC 프로그램(ActiveVT)과 연동하여
            독립적으로 시험이 가능하게 구성되어 있습니다.
          </li>
          <ul>
            <li>100Hz GPS 속도센서 내장</li>
            <li>Analog Input ±20V</li>
            <li>Frequency Input : TTL level signal input</li>
            <li>전용 센서 커넥터 구성(속도센서, 풍향풍속센서, 대기온)</li>
          </ul>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">B. 속도계</h2>
        <ul className="product-list">
          <li>
            시험차량의 속도 측정은 데이터(VMS3200) 취득 유니에 내장된
            100Hz GPS 속도센서를 기반으로 시험을 진행하며, 시험장의 환경상황 등
            부득이한 경우 별도의 광학식 속도센서를 이용하여 시험을 진행할 수 있습니다.
          </li>
          <ul>
            <li>100Hz GPS 속도센서</li>
            <li>속도측정 범위 : 0~360kph</li>
            <li>거리측정 분해능 : 1mm 거리측정 정도</li>
            <li>광학식 속도센서</li>
            <li>
              광학식 속도센서는 Suction Cup 이 관절로 연결된 하나의 고정구조로 이루어진
              전용 거치대를 사용하여 차량 후면에 아래와 장착하여 차량의 속도를 측정합니다.
            </li>
            <h2 style={{
              background: "red"
            }}>image4</h2>

            <li>속도 측정 범위 : 0~250kph</li>
            <li>거리측정 분해능 : 1.5mm 거리측정 정도</li>
          </ul>
        </ul>
      </section>

      <h2 style={{
        background: "red"
      }}>image5</h2>

      <section className="product-section">
        <h2 className="product-title">C. 풍향/풍속계</h2>
        <ul className="product-list">
          <li>
            SAE J2263 주행저항시험 규격 구조로서, 풍향풍속계 하중 최대 1kg을
            감당할 수 있는 만능 거치대로 연결파이프 및 차량부착 고정대 및
            부속 와이어 및 연결 고리 커넥터가 일체로 조립된 형태로 구성되어 있습니다.
          </li>
          <ul>
            <li>풍속측정 범위 : 0~200kph / 정밀도 : ±0.2m/s 이내</li>
            <li>풍향측정 범위 : 0~355°, 정밀도 : ±3° 이내</li>
          </ul>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">D. 대기온</h2>
        <ul className="product-list">
          <li>
            Thermocouple K-Type을 사용하며, 정밀도 ±1℃를 만족하고,
            센서 부위는 태양광으로부터 차폐되도록 구성되어 있습니다.
          </li>
        </ul>
      </section>

      <section className="product-section">
        <h2 className="product-title">E. 대기압센서</h2>
        <ul className="product-list">
          <li>정밀도는 ±0.7kPa를 만족하며, 차량에 내장되어 있습니다.</li>
        </ul>
      </section>

    </div>
  );
}