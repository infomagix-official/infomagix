# Vehicle Drive Test System (Noise, Pulling, Steer, Performance, Brake Test)

### 배경
- 생산된 차량의 주행검사 중, 주행 불안정성, 성능 저하 및 소음 불만의 원인을 정확하게 찾을 수 있는 시험 시스템이 필요하게 되었으며, 
- VDTS는 실제 도로 주행 테스트를 통해 NVH 성능, 조향 성능, 제동 성능, 동력 성능 등을 정량적으로 측정할 수 있는 테스트 시스템으로 개발되었습니다.
- VDTS는 차량 주행 데이터를 획득하여 다양한 주행 성능에 영향을 미치는 요소를 식별하고 추적할 수 있는 테스트 시스템입니다. 또한 주행 테스트 수행 중 데이터를 측정 및 분석하여 주행 테스트 결과를 정량화하는 기능을 제공합니다.

### 목적
- 주행 시험 및 검사 중 데이터 모니터링, 검사, 데이터 수집 및 정량 분석을 수행할 수 있는 테스트 시스템
- 다양한 드라이브 테스트 조건에서 NVH 성능 데이터, 조향, 가속, 제동 및 비디오, GPS 데이터 측정
- 테스트 중 CAN 데이터 획득, 문제 식별, 검사 및 보고와 같은 일원화된 처리 시스템으로 개발
- 데이터 수집, 검사 및 분석에서 손실되는 시간 최소화


![VDTS + Body Cam](/assets/en/product/vdts_with_cam.webp)

### 일반
- VDTS는 차량 주행 테스트를 수행하는 동시에 주행 테스트 데이터를 수집, 저장 및 업로드하는 장치입니다.
- 소음, 가속도 센서, 100Hz GPS 및 차량 ECU가 제공하는 CAN 데이터와 같은 필드 데이터를 측정할 수 있습니다.
- 차량 주행 테스트 중 데이터를 저장할 수 있는 장치
- 위치 기록용 GPS가 내장된 GoPro를 사용하여 비디오 및 오디오 데이터를 수집 및 저장한 후 저장된 CAM 데이터를 업로드하고, 분석 PC를 사용하여 VDTS 테스트 데이터와 통합해 분석합니다.
- 주행 테스트 데이터 업로드 및 주행 비디오 데이터, 데이터 수집 동기화, 재생, 분석, 보고서 등을 위한 전용 소프트웨어가 제공됩니다.

### 사양 개요
- VDTS는 컨트롤러, 100Hz GPS, 자이로, CAN 통신, 노이즈 측정을 위한 고속 IEPE 신호 처리, AD 변환, 데이터 저장 매체, 전원 공급 장치가 장착된 차량 전용으로 사용할 수 있는 구조의 주행 테스트 및 모니터링 장치입니다. 
- GoPro를 통한 비디오 데이터는 VDTS 데이터와 동기화되며, 테스트 분석 및 결과 보고서가 자동으로 생성되며, 주행 데이터의 자동 무선 업로드가 가능합니다.
- 2-4 채널 마이크 / 가속도 센서 데이터를 수집하기 위한 내장 신호 처리 및 AD 컨버터, 기타 범용 센서 포트가 제공됩니다.
- 동시에 100Hz GPS 및 CAN 데이터 측정이 수행됩니다.
- PC 소프트웨어를 통한 장치 구성, 설정, 저장된 데이터의 검색, 분석 및 자동 업로드가 수행됩니다.

### 운영 환경
- 차량 동력 및 제동 성능 시험과 같이 빠른 가감속 환경에 적합한 구조
- 전원 사양 :  DC 9 ~ 30V DC 차량 전원 및 외부 배터리 사용 가능
- 충격 저항 사양 : 50G 내충격,  내 진동 5G 이상 @ 5Hz ~ 500Hz
- 동작 온도 조건 : -20 ~ 60 ℃


![VDTS System](/assets/en/product/vdts_system.webp)

![VDTS System](/assets/en/product/vdts_system2.webp)

![VDTS](/assets/en/product/vdts.webp)

### VDTS 하드웨어 사양
- 듀얼 코어 A9 CPU 컨트롤러 및 5” LCD 디스플레이, 리모컨으로 구성
- IEPE 타입 마이크 및 가속도 센서 측정 : 2 ~ 4 채널
- 100Hz GPS 속도 센서 및 자이로 내장
- 동력 성능 및 브레이크 테스트 만족을 위한 GPS 사양
  - 업데이트 속도 : 100Hz
  - 정확성
    - 속도 <0.1 km / h
    - 거리 <0.05 % (5cm / 100m)
    - 위치 <3m @ 95 % CEP
- 2 채널 CAN 데이터 측정 : 1 채널 유선 및 1 채널 무선
- 이더넷 및 무선 데이터 전송
- Micro-SD 및 USB 스토리지로 데이터 로깅 테스트
- 주행 테스트 트랙의 날씨 데이터와 함께 데이터를 기록


### 드라이버 디스플레이 및 스피커
- 드라이버 디스플레이 용 5 "LCD 화면 및 테스트 진행, 결과 안내
- 부저, 가변 주파수로 다양한 음성 조건을 표현할 수 있는 스피커
### 통신 표준
- Wi-Fi (802.11N)
- 유선 데이터 전송 (이더넷)
### 저장
- 마이크로 SD 64G 또는 USB 
### 전원 및 배터리
- DC 9 ~ 30V, 광범위한 전원 공급 장치
- OBD 포트를 통한 주 전원 공급 장치
- 외장 배터리 팩 4 시간 용량 제공


![VDTS System](/assets/en/product/vdts_system3.webp)

### IEPE / DC 신호 센서 측정 포트 : 4 채널
- NVH 데이터 수집을 위해 직접 연결되는 AC/DC  IEPE 센서
- 다양한 유형의 IEPE 센서의 직접 연결을 구성하기 위한 내부 신호 컨디셔닝
- AD 샘플링 레이트 : 50 kHz/ch
### 고품질 마이크 센서 사양
- 주파수 범위 : 20Hz ~ 20 kHz
- 감도 (감도) : -55dBV / Pa
- S / N 비율 : 35dBA @ f = 1㎑, Pin = 1Pa, 가중 네트워크
- 다이나믹 레인지 : 130dB
- 최대 SPL : 130dB 최대 SPL
- 차량 장착 지그 포함
### G 센서 사양
- 범위 : ± 5G (단축)
- 정확도 : 0.1 %


### CAN 인터페이스
- VDTS는 1 개의 유선 CAN 통신 포트와 1 개의 무선 CAN 통신 포트를 동시에 제공합니다.
- CANFD에 ECU 통신 프로토콜용 CANdb 및 CCP 사용 가능

### CAN 사양
- 유선 CAN 2.0b 및 CAN-FD 지원
- 유선 CAN 프로토콜 : CANdb 및 CCP
- 무선 CAN 프로토콜 : 진단 CAN

### 펄스 / 디지털 채널
- 2 채널 주파수, RPM 측정을 위한 펄스 카운터 신호 입력 채널 제공
- 데이터 트리거 입력 신호 등을 위한 디지털 입력 채널 제공
- 장비 작동과 같은 외부 LED 표시기를 구동하기 위한 디지털 출력
### 리모컨 / 트리거 스위치
- 시작 / 정지, 테스트 모드 선택, 화면 선택 및 설정과 같은 장치 작동을 위한 조이스틱형 리모컨
- 스위치에는 장치의 작동 상태를 표시하는 LED 램프가 있습니다.
- 데이터 기록을 시작하는 트리거 스위치를 클릭하면 일정 시간 동안 데이터가 저장되고 다시 클릭하면 저장이 중지됩니다.
- 데이터를 저장하는 동안 스위치를 클릭하면 저장된 데이터에 표시 기능이 제공됩니다

### 데이터 로그 기능
- 독립형 장치로, 사용자가 입력 채널 및 스토리지 채널 설정을 위한 구성 파일에 따라 자체적으로 데이터를 기록할 수 있습니다.
- 차량 CAN 신호 및 100Hz GPS 신호, 마이크 센서의 동시 측정 및 저장
- ECU 데이터 수집을 위한 CANdb, CCP 채널 편집 기능

### 데이터 후 처리
- 테스트 중 발생한 모든 측정 데이터(NVH, GPS, CAN), 테스트 도로 이름, 테스트 주행 조건이 후처리를 위해 기록되고 업로드됩니다.
- 로그 데이터는 차량 유형 / 제품 번호 / 자동차 번호 / 측정 항목 이름 / 문제 순서로 분류되어 데이터 서버에서 제공됩니다.
- 후처리 데이터는 GoPro 비디오 데이터와 통합되어 분석 및 동기화됩니다.

### PC 로 데이터 업로드
- 테스트 차량에서 수집한 테스트 결과, CAN 데이터, GPS 데이터는 무선 또는 이더넷으로 연결된 PC로 업로드됩니다.
- NVH 데이터 및 추가로 연결한 센서 데이터를 업로드할 수 있습니다.
- GoPro 영상 데이터를 테스트 데이터와 동기화하여 업로드할 수 있습니다.


### 케이스 및 무게
- VDTS는 차량 내 테스트 목적에 적합한 진동 및 방습 케이스로 구성됩니다
- 크기 : 200 × 90 × 90mm (약)
- 무게 : 900g (약)

### GoPro 데이터 결합
- 운전자 위치에서 측정 된 영상을 저장 한 GoPro 데이터를 후처리 과정 중에 테스트 데이터와 결합하여 분석에 사용하도록 구성되었습니다.
- Wi-Fi 네트워크 또는 PC 연결을 통해 GoPro 데이터를 업로드하면, 테스트 주행 중 특정 상황의 고품질 비디오 및 음성 녹음을 확인할 수 있습니다.
- 후처리 및 결과 생성 과정에서 GoPro 데이터를 결합함으로써 주행 테스트의 효율성을 향상시킬 수 있습니다.
- GoPro의 내장 GPS는 위치를 인식하고 위치 및 시간 정보를 제공하는 데 사용됩니다.
- 기록된 GoPro 비디오의 GPS 정보가 결합되어 후처리 및 테스트 결과 생성에 사용됩니다.
- 트리거를 사용해 GoPro 카메라 녹화를 자동으로 시작하는 기능을 제공합니다.


### 시험 중 자동 측정 기능
- NVH : 도로 소음 / 아이들 소음 / 가속 주행 소음
- R & H : 운전 중 쏠림, 조향 느낌, 조향 소음
- 동력 성능 : 가속 성능 / 그레이드 가속성능 / 운전 성능 등
- 브레이크 성능 : 기본 성능 / 일반 성능 / 제동 제어 성능
- 사용자 정의 테스트 항목 (새 검사 항목을 추가하기 위한 인터페이스 구현)
### 측정 방법
- GPS 위치 또는 테스트 주행 조건으로 프로그래밍 된 자동 트리거를 통한 측정 시작 / 중지
- 준비 구간 / 측정 시작 / 측정 종료를 위한  트리거 설정 및 알림 기능
- 측정 항목에 따른 자동 마이크 센서 설정 기능 : 마이크 (샘플링 속도 / 진폭 범위)
- 카메라 설정 기능
- CAN 측정 설정 기능


### 데이터 분석
- VDTS는 실시간 분석이 가능한 항목의 표시 및 저장을 수행합니다.
- VDTS는 실시간 분석 이외의 항목에 대하여,  제어 PC에서 분석을 진행합니다.
- 분석 기능 항목 : FFT, 가중치 (A/B/C), 앤티앨리어싱, 주파수 필터, 리샘플링, 자동 스펙트럼, 평균화 (RMS, 지수 등), 산술 계산, 그래프, 절편 계산 등 적용
### 날씨 정보 수집
- 테스트 트랙의 기상 관측소에 연결하고 기록 된 시간 (GPS 위치 / 시간 정보)의 날씨 정보 (풍 / 온도 / 습도 / 기압 등)를 취득합니다.
### 노면 정보 인식
- 이벤트가 발생했을 때 GPS로 테스트 트랙의 자세한 노면 이름을 인식합니다. 
### 로그 항목 입력
- 테스트 도로 정보는 문제 발생시 테스트 데이터 및 GoPro 데이터와 함께 기록됩니다.
### 트리거 방법
- VDTS 트리거 스위치에 의한 수동 트리거
- DTC / MIL 발생시 자동 로그


### 컨트롤 스테이션 및 PC
- VDTS는 테스트 중 차량에서 테스트 데이터를 수집하여 VDTS 저장 장치에 저장합니다. VDTS에 저장된 테스트 데이터는 컨트롤 스테이션에서 컨트롤 PC로 업로드되며, 클라우드 서버 업로드를 위해 일정 기간 저장 및 관리됩니다. 저장된 테스트 데이터는 제어 PC에서 검토할 수 있습니다.
- VDTS의 장치 설정 및 테스트 설정 변경, 그리고 변경된 설정의 VDTS 다운로드는 컨트롤 스테이션 PC에서도 수행됩니다.
- 테스트 데이터의 분류/검색 및 장치 설정 데이터는 차량 VIN을 바코드 리더로 입력해 확인하도록 구성되어 있습니다.

### 차량 정보 조회
- 바코드 리더를 이용한 차량 VIN 입력, 자동 차량 정보 조회 및 서버 PC 데이터 다운로드
- OBD VIN을 통해 획득한 차량 인식 및 차량 정보
- 차량 종류 / 단계 / 차 정보가 기록됩니다
### 데이터 전송 (VDTS → 제어 PC) :
- PC 제어를 위한 무선 데이터 전송 : 자동 업로드 (GPS, 트리거) 및 수동 업로드 기능 제공
- 이더넷 케이블 연결 시 데이터 전송 (무선 장비 고장시 사용)
### 데이터 간 동기화
- GPS 시간을 기준으로 VDTS 데이터 및 GoPro 동기화
### 서버 연결
- 제어 PC 데이터를 서버로 전송 한 후 감정 품질 측정 데이터보고 결과를 제공합니다.

### 주행검사 시험항목 및 기능
- VDTS는 100Hz GPS 및 데이터 저장 매체가 내장된 독립형 성능 테스트 장치로서, 디스플레이 및 데이터 로깅 / Wi-Fi 업로드 기능을 제공하고, 차량
  CAN 데이터를 수집하고 5 인치 LCD 화면에 CAN 및 GPS 데이터를 직접 표시 할 수 있습니다. 
- 차량 성능 테스트 장치로서 VDTS는 소음 테스트, 풀링 테스트, 조향 성능, 가속 및 브레이크 성능, 차량 DTC 점검, TPMS 등에 효과적으로 적용됩니다.
- VDTS는 입력된 모든 데이터를 표시하고 동시에 스토리지에 저장하며, 내장 Wi-Fi 네트워크를 통해 데이터를 업로드할 수 있습니다.

VDTS는 GPS 속도와 CAN 속도를 결합하여 사용합니다.
NVH 신호는 가속도 센서를 사용하고 dB 계산을 위한 레벨 기본 값은 KS 표준 (10^-6^m/s^2^)을 사용합니다.
일부 조향 시험에서는 조향 토크 측정이 필요하지만 CAN 조향 토크 값을 이용하여 시험을 진행하며, 조향 토크 CAN 신호가 시험 차량에서 나오지 않으면 시험 화면에 표시되지 않습니다.
위치 기반 테스트에는 테스트 전에 테스트 트랙의 기준점을 설정하는 절차가 필요합니다.
정상 회전 반경은 차량 속도와 요 율에서 계산됩니다. 회전 반경 [m] = 차량 속도 [m/s] / 요 레이트 [rad/s] 을 기준으로 합니다.

### Road Noise-Low frequency

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 3,
      "w": 35,
      "h": 35,
      "src": "/assets/en/product/vdts_roadnoise_lf1.webp"
    },
    {
      "type": "image",
      "x": 3,
      "y": 62,
      "w": 35,
      "h": 35,
      "src": "/assets/en/product/vdts_roadnoise_lf2.webp"
    },
    {
      "type": "image",
      "x": 45,
      "y": 61,
      "w": 25,
      "h": 25,
      "src": "/assets/en/product/vdts_roadnoise_lf3.webp"
    },
    {
      "type": "image",
      "x": 72,
      "y": 61,
      "w": 25,
      "h": 25,
      "src": "/assets/en/product/vdts_roadnoise_lf4.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 47,
      "y": 8,
      "w": 50,
      "h": 25,
      "text": "지정된 속도로 지정된 테스트 구간을 통과하면서 저주파 소음을 측정합니다.\n테스트는 수동으로 수행하거나, 테스트 구간을 사전 지정하면 자동으로 수행할 수 있습니다."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 35,
      "y": 40,
      "w": 60,
      "h": 20,
      "text": "테스트 조건이 충족되면 녹색 램프가 켜지고, 충족되지 않으면 빨간색 램프가 켜집니다.\n테스트 조건: 기어 'D', 차량 속도 '60 kph', TPMS '34 psi'."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 49,
      "y": 87,
      "w": 48,
      "h": 10,
      "text": "테스트 조건이 충족되고 테스트 준비가 완료되면 'Ready' 램프가 점등됩니다."
    },
    {
      "type": "arrow",
      "x1": 40,
      "y1": 40,
      "x2": 35,
      "y2": 30,
      "color": "#e11f1f",
      "width": 0.7
    },
    {
      "type": "arrow",
      "x1": 40,
      "y1": 60,
      "x2": 35,
      "y2": 70,
      "color": "#e11f1f",
      "width": 0.7
    },
    {
      "type": "arrow",
      "x1": 49,
      "y1": 92,
      "x2": 46,
      "y2": 85,
      "color": "#e11f1f",
      "width": 0.7
    }
  ]
}
```

### Road Noise-High Frequency

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 35,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_roadnoise_hf1.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 35,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_roadnoise_hf2.webp"
    },
    {
      "type": "image",
      "x": 67,
      "y": 35,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_roadnoise_hf3.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 47,
      "y": 3,
      "w": 50,
      "h": 25,
      "text": "지정된 속도에서 지정된 구간(거리 또는 시간) 동안 고주파 소음을 측정합니다.\n테스트는 수동으로 시작하고, 설정된 거리 또는 시간이 지나면 자동으로 종료됩니다."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 10,
      "y": 80,
      "w": 35,
      "h": 15,
      "text": "테스트 조건: 기어 'D', TPMS '35 psi', 차량 속도 '80 kph'."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 55,
      "y": 80,
      "w": 35,
      "h": 15,
      "text": "테스트 결과는 확인을 위해 시험 후에도 화면에 유지됩니다."
    },
    {
      "type": "arrow",
      "x1": 20,
      "y1": 80,
      "x2": 18,
      "y2": 65,
      "color": "#e11f1f",
      "width": 0.7
    },
    {
      "type": "arrow",
      "x1": 35,
      "y1": 80,
      "x2": 37,
      "y2": 65,
      "color": "#e11f1f",
      "width": 0.7
    },
    {
      "type": "arrow",
      "x1": 60,
      "y1": 80,
      "x2": 60,
      "y2": 57,
      "color": "#e11f1f",
      "width": 0.7
    }
  ]
}
```

### IDLE Noise-Cabin Noise

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 23,
      "w": 35,
      "h": 35,
      "src": "/assets/en/product/vdts_idle_cabin1.webp"
    },
    {
      "type": "image",
      "x": 40,
      "y": 23,
      "w": 35,
      "h": 35,
      "src": "/assets/en/product/vdts_idle_cabin2.webp"
    },
    {
      "type": "image",
      "x": 40,
      "y": 60,
      "w": 25,
      "h": 25,
      "src": "/assets/en/product/vdts_idle_cabin3.webp"
    },
    {
      "type": "image",
      "x": 67,
      "y": 60,
      "w": 25,
      "h": 25,
      "src": "/assets/en/product/vdts_idle_cabin4.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 10,
      "y": 3,
      "w": 80,
      "h": 15,
      "text": "IDLE 상태에서 실내 소음을 측정합니다.\n'N' 상태에서 에어컨은 OFF입니다.\n테스트는 수동으로 시작하고 설정된 시간이 지나면 자동으로 종료됩니다."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 40,
      "y": 87,
      "w": 25,
      "h": 10,
      "text": "테스트 조건 충족.\n테스트를 시작하세요."
    },
    {
      "type": "arrow",
      "x1": 67,
      "y1": 92,
      "x2": 95,
      "y2": 92,
      "color": "#e11f1f",
      "width": 0.7
    }
  ]
}
```


### IDLE Noise-Booming Noise

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 8,
      "y": 40,
      "w": 40,
      "h": 40,
      "src": "/assets/en/product/vdts_idle_booming1.webp"
    },
    {
      "type": "image",
      "x": 52,
      "y": 40,
      "w": 40,
      "h": 40,
      "src": "/assets/en/product/vdts_idle_booming2.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 10,
      "w": 60,
      "h": 15,
      "text": "IDLE 상태에서 실내 부밍 소음을 측정합니다. 엔진 부하를 주기 위해 변속은 'D'로 설정하고 에어컨은 ON으로 설정합니다. 테스트는 수동으로 시작하고 지정된 시간이 지나면 자동으로 종료됩니다."
    }
  ]
}
```

### Driving Noise-Acceleration Noise

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 30,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_acceleration_noise1.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 30,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_acceleration_noise2.webp"
    },
    {
      "type": "image",
      "x": 67,
      "y": 30,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_acceleration_noise3.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 65,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_acceleration_noise4.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 3,
      "w": 60,
      "h": 15,
      "text": "가속 중 발생하는 소음을 측정합니다.\n정지 상태에서 지정 RPM까지 WOT로 가속합니다.\n크립 상태에서 지정 RPM까지 WOT로 가속합니다."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 8,
      "y": 65,
      "w": 20,
      "h": 15,
      "text": "조건: 변속 'D', 에어컨 ON, 정지 상태에서 시작."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 67,
      "y": 70,
      "w": 30,
      "h": 25,
      "text": "테스트 조건이 충족되지 않으면 'retry' 안내가 표시됩니다.\n급가속 조건: APS를 97% 이상으로 유지."
    },
    {
      "type": "arrow",
      "x1": 30,
      "y1": 45,
      "x2": 38,
      "y2": 45,
      "color": "#e11f1f",
      "width": 0.7
    }
  ]
}
```


### Driving Noise - Constant Speed & Direct Connection Booming Noise

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 20,
      "w": 60,
      "h": 15,
      "text": "정속 주행 소음\n정속 주행 중 소음을 측정합니다."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 40,
      "w": 60,
      "h": 30,
      "text": "직결 부밍 소음\n변속기가 직결된 상태로 주행하면서 소음을 측정합니다.\n테스트 중 자동변속기가 직결 상태를 유지하는 조건에서 수행해야 합니다.\n구체적인 주행 조건은 각 제조사가 정의해야 합니다."
    }
  ]
}
```

### Vehicle pulling - Constant speed 

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 5,
      "w": 35,
      "h": 35,
      "src": "/assets/en/product/vdts_const_pulling1.webp"
    },
    {
      "type": "image",
      "x": 3,
      "y": 42,
      "w": 25,
      "h": 25,
      "src": "/assets/en/product/vdts_const_pulling2.webp"
    },
    {
      "type": "image",
      "x": 3,
      "y": 69,
      "w": 25,
      "h": 25,
      "src": "/assets/en/product/vdts_const_pulling3.webp"
    },
    {
      "type": "image",
      "x": 55,
      "y": 40,
      "w": 25,
      "h": 25,
      "src": "/assets/en/product/vdts_const_pulling4.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 45,
      "y": 3,
      "w": 50,
      "h": 30,
      "text": "정속 주행 중 차량의 쏠림(조향 드리프트 힘)과 직진성을 측정합니다.\n쏠림 거리를 계산하기 위해 사전 정의된 위치 포인트 기반으로 테스트를 수행합니다.\n조건: 기어 'D', TPMS '33 psi', 표시 속도 '60 kph'."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 55,
      "y": 67,
      "w": 40,
      "h": 10,
      "text": "차량이 시작 지점을 통과하면 테스트가 자동으로 수행됩니다."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 40,
      "y": 85,
      "w": 50,
      "h": 10,
      "text": "리모컨을 사용해 준비 지점, 시작 지점, 종료 지점을 각각 지정합니다."
    },
    {
      "type": "arrow",
      "x1": 35,
      "y1": 35,
      "x2": 35,
      "y2": 90,
      "color": "#e11f1f",
      "width": 0.7
    }
  ]
}
```

### Vehicle pulling - Acceleration 

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 3,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_accel_pulling1.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 3,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_accel_pulling2.webp"
    },
    {
      "type": "image",
      "x": 3,
      "y": 57,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_accel_pulling3.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 57,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_accel_pulling4.webp"
    },
    {
      "type": "image",
      "x": 67,
      "y": 57,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_accel_pulling5.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 3,
      "y": 35,
      "w": 94,
      "h": 20,
      "text": "지정 차량 속도('40 kph')로 정속 주행 중, 테스트 시작 위치에서 가속을 시작합니다. 자동 테스트는 위치 기반으로 결정된 지점을 기준으로 쏠림 거리를 계산하며, 수동 시작/종료도 가능합니다. 반복 테스트 오차를 줄이기 위해 시작점의 오프셋 거리 또는 진입 방위각을 측정해 결과를 보정합니다."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 3,
      "y": 90,
      "w": 94,
      "h": 7,
      "text": "기준을 만족하지 않으면 'Retry' 안내가 표시됩니다."
    }
  ]
}
```

### Vehicle pulling - Torque Steer 

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 20,
      "y": 5,
      "w": 40,
      "h": 40,
      "src": "/assets/en/product/vdts_torque_steer.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 50,
      "w": 60,
      "h": 25,
      "text": "정지 상태에서 WOT로 급가속하여 지정 속도('40 kph')에 도달합니다.\n조향 토크와 조향각 변화를 측정하며, 타이어 슬립 측정도 지원합니다."
    }
  ]
}
```

### Vehicle pulling - Braking  

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 20,
      "y": 5,
      "w": 40,
      "h": 40,
      "src": "/assets/en/product/vdts_brake_pulling.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 50,
      "w": 60,
      "h": 40,
      "text": "'140 kph'로 주행 중, 지정 감속도로 정지할 때까지 제동하면서 차량 직진성을 측정합니다.\n조향 토크와 조향각 변화도 측정합니다.\n\n준비 상태(정속)에서 제동이 시작되면 테스트가 자동으로 수행됩니다.\n테스트 중 감속 조건이 충족되지 않으면 'Retry' 안내가 제공됩니다."
    }
  ]
}
```

### Steering Feel and Noise - Steering Effort

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 30,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_steering_effort1.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 30,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_steering_effort2.webp"
    },
    {
      "type": "image",
      "x": 67,
      "y": 30,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_steering_effort3.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 10,
      "w": 60,
      "h": 15,
      "text": "차량 정지 상태에서 중립 -> 좌 -> 우 -> 중립으로 연속 조향하는 동안 조향각, 조향 각속도, 조향 토크 등을 측정합니다."
    }
  ]
}
```

### Steering Feel and Noise - Steering Returnability

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 20,
      "y": 5,
      "w": 40,
      "h": 40,
      "src": "/assets/en/product/vdts_steering_returnability.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 50,
      "w": 60,
      "h": 30,
      "text": "지정 속도('40 kph')에서 조향각 -90도를 유지한 뒤 측정을 시작하고, 조향휠을 놓아 복원각이 수렴할 때까지 측정합니다.\n\n조향각, 조향 각속도, 조향 토크를 이용해 조향 복원성(자가 복원 성능)을 측정합니다."
    }
  ]
}
```

### Steering Feel and Noise - Left and Right Full-Turn Angle

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 10,
      "y": 3,
      "w": 45,
      "h": 45,
      "src": "/assets/en/product/vdts_full_turn1.webp"
    },
    {
      "type": "image",
      "x": 10,
      "y": 52,
      "w": 45,
      "h": 45,
      "src": "/assets/en/product/vdts_full_turn2.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 60,
      "y": 10,
      "w": 35,
      "h": 50,
      "text": "차량 정지 상태에서 조향각을 좌우 끝까지 돌린 뒤 리모컨 스위치를 눌러 조향각을 기록합니다.\n\n편의를 위해 조향각이 일정 시간 유지되면 테스트 조건에서 풀턴으로 간주하여 자동으로 기록할 수 있습니다."
    }
  ]
}
```

### Steering Feel and Noise - Steering Noise

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 10,
      "y": 50,
      "w": 35,
      "h": 35,
      "src": "/assets/en/product/vdts_steering_noise1.webp"
    },
    {
      "type": "image",
      "x": 55,
      "y": 50,
      "w": 35,
      "h": 35,
      "src": "/assets/en/product/vdts_steering_noise2.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 10,
      "w": 60,
      "h": 30,
      "text": "차량 정지 상태에서 조향을 좌우 풀턴으로 돌리며 조향 소음을 측정합니다.\n\n테스트 편의를 위해 조향각이 설정 시간 동안 유지되면 풀턴으로 판단하여 자동 기록합니다."
    },
    {
      "type": "arrow",
      "x1": 47,
      "y1": 67.5,
      "x2": 53,
      "y2": 67.5,
      "color": "#e11f1f",
      "width": 0.7
    }
  ]
}
```

### Steering Feel and Noise - Steady-State Circular Driving

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 33,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_circular_cornering1.webp"
    },
    {
      "type": "image",
      "x": 3,
      "y": 65,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_circular_cornering2.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 65,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_circular_cornering3.webp"
    },
    {
      "type": "image",
      "x": 55,
      "y": 33,
      "w": 18,
      "h": 18,
      "src": "/assets/en/product/vdts_circular_cornering4.webp"
    },
    {
      "type": "image",
      "x": 75,
      "y": 33,
      "w": 18,
      "h": 18,
      "src": "/assets/en/product/vdts_circular_cornering5.webp"
    },
    {
      "type": "image",
      "x": 55,
      "y": 53,
      "w": 18,
      "h": 18,
      "src": "/assets/en/product/vdts_circular_cornering6.webp"
    },
    {
      "type": "image",
      "x": 75,
      "y": 53,
      "w": 18,
      "h": 18,
      "src": "/assets/en/product/vdts_circular_cornering7.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 3,
      "y": 10,
      "w": 94,
      "h": 15,
      "text": "저속 정속('24 kph')으로 시험로에 표시된 선회 반경을 따라 주행합니다. 시험로에 반경 표시가 없으면 시험 화면에 표시된 반경을 사용합니다.\n(계산된 선회 반경과 시험 경로 반경의 일치 여부를 확인합니다.)"
    }
  ]
}
```

### Steering Feel and Noise - Full-Lock Turn

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 20,
      "y": 5,
      "w": 40,
      "h": 40,
      "src": "/assets/en/product/vdts_full_turn.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 50,
      "w": 60,
      "h": 20,
      "text": "지정 저속('20 kph')으로 직진 주행 중 리모컨으로 테스트를 시작하고, 좌우 풀턴 조향으로 조향감 데이터를 측정합니다."
    }
  ]
}
```

### Steering Feel and Noise - Turning from Straight-Line Driving

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 20,
      "y": 5,
      "w": 40,
      "h": 40,
      "src": "/assets/en/product/vdts_turn_straight.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 50,
      "w": 60,
      "h": 20,
      "text": "지정 속도('60 kph')로 직진 주행 중 리모컨으로 테스트를 시작하고, 좌우 90도 조향으로 조향감 데이터를 측정합니다."
    }
  ]
}
```

### Performance Test

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 5,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_dynamic_perf1.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 5,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_dynamic_perf2.webp"
    },
    {
      "type": "image",
      "x": 3,
      "y": 40,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_dynamic_perf3.webp"
    },
    {
      "type": "image",
      "x": 35,
      "y": 40,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_dynamic_perf4.webp"
    },
    {
      "type": "image",
      "x": 68,
      "y": 40,
      "w": 30,
      "h": 30,
      "src": "/assets/en/product/vdts_dynamic_perf5.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 10,
      "y": 75,
      "w": 80,
      "h": 20,
      "text": "기존 성능 시험과 동일하게 진행합니다.\n실용가속 시험에서는 APS를 지정 값으로 유지해야 하며, 유지되지 않으면 시험 실패 후 'Retry' 안내가 제공됩니다."
    }
  ]
}
```

### Brake Test

```diagram
{
  "aspectRatio": "16 / 9",
  "imageFit": "fill",
  "items": [
    {
      "type": "image",
      "x": 3,
      "y": 5,
      "w": 40,
      "h": 40,
      "src": "/assets/en/product/vdts_brake1.webp"
    },
    {
      "type": "image",
      "x": 3,
      "y": 50,
      "w": 19,
      "h": 19,
      "src": "/assets/en/product/vdts_brake2.webp"
    },
    {
      "type": "image",
      "x": 24,
      "y": 50,
      "w": 19,
      "h": 19,
      "src": "/assets/en/product/vdts_brake3.webp"
    },
    {
      "type": "image",
      "x": 3,
      "y": 74,
      "w": 19,
      "h": 19,
      "src": "/assets/en/product/vdts_brake4.webp"
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 55,
      "y": 10,
      "w": 40,
      "h": 25,
      "text": "지정 속도('100 kph')에서 완전 정지할 때까지 제동하며 최대 감속도와 제동거리를 측정합니다.\n제동거리는 대표 초기 속도 값으로 보정합니다."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 55,
      "y": 60,
      "w": 40,
      "h": 15,
      "text": "Fade 테스트는 반복 제동 시 성능 차이를 측정합니다."
    }
  ]
}
```
