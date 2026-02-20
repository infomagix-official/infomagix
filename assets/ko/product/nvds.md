# NVDS

### 개요
  - NVDS는 차량의 NVH 측정 진단시스템입니다.
  - 차량의 NVH 성능에 대한 정확한 파악 및 문제점 보완을 위해 사용자 및 실 주행 조건에서의 NVH 성능을 파악합니다.
  - NVH 성능 검사에 대한 표준화된 검사 방법을 구현, 자동화하고, 검사 데이터를 계측, 정리, 분석할 수 있는, NVH 성능 검사, 진단 용 표준 장비 입니다.

### 목적
  - 표준 및 다양한 시험 조건에서의 NVH 검사 데이터 분석 시스템
  - 데이터 확보, 검사 진행, 처리, 결과보고서 등 일괄 처리 시스템
  - 실시간 NVH 모니터링 및 필드 데이터 취득 시험을 동시에 수행할 수 있는 시스템
  - 표준화된 검사 조건에서의 NVH 성능 파악 수치화
  - NVH 검사를 위한 데이터 취득, 분석 소요 시간 손실 최소화

### NVDS 운영
  - 차량 엔진 RPM 및 차량 속도를 기준으로  진동, 소음 데이터의 분석을 하기 위한 NVH 성능 검사, 최적화 분석을 할 수 있는 기능의  표준 NVH 검사 
    분석 시스템이며, NVDS 데이터 취득 유니트와 전용 NVDS 소프트웨어로 운영

### NVDS 데이터 취득용 유니트
  - 차량 ECU 에서 제공하는 차량 RPM, Speed 의 계측과 진동, 소음센서, 가속도 센서 등으로 부터의 필드 계측이 가능한 포터블 유니트
  - 12채널 유니트 및 GPS, 리모콘 으로 구성
  - 실시간 NVH 모니터링 및 필드 데이터 취득, 분석을 동시에 수행할 수 있는 시스템

### NVDS  소프트웨어
  - 안드로이드 기반 Tablet PC 에서 운영될 수 있으며,
  - 실시간 분석이 가능한 시험 모드를 대상으로, 소음, 진동 데이터의 실시간 모니터링  및  NVH 분석 기능 제공
  - 후처리 분석이 필요한  다채널 시험 모드를 대상으로, 계측 데이터의 저장,  NVH 분석, 결과 처리 등 전용 기능 제공

![NVH Monitoring & Test System](/assets/en/product/nvds_system.webp)

---

### NVDS 사양 일반
  - 독립형 컨트롤러, CAN 통신모듈, GPS, 정밀 진동,소음측정을 위한 최대 12채널의 IEPE 또는 Mems 타입의 마이크로폰, 가속도 센서 입력 및  고속 
    신호처리,  AD 변환기, 데이터 저장 매체, 전원장치 등이 내장됨
  - 차량 시험용으로 사용 가능한 구조의  NVH 진단 측정,분석용 데이터 취득 유니트
  - Tablet 소프트웨어를 통하여 장치의 설정, 시험 검사 모드의 설정이 가능한 형태
  - Tablet 소프트웨어를 통하여 기본 범용 시험 모드를 위한 실시간 모니터링 및 분석이 가능한 형태
  - Tablet 소프트웨어를 통하여 다채널 소음 진동 데이터 취득, 저장 후, CAN 데이터 동기화 취합 분석,   NVH 진단 및 시험 결과 보고서 제출이 가능하며,   
    종료  후 취득 데이터의 자동 업로드 기능이 가능한 형태
  - 상세 시험  20여가지 전용모드를 포함하는 12채널 측정 유니트 및 소프트웨어로 구성
  - 본체 CPU 및 저장 매체 :  ARM 9 Core 계열 CPU 및  USB 고속저장
  - CAN 데이터 계측 포트 :  2 채널 
  - IEPE/Mems 형 마이크로폰 및 가속도 센서 계측 포트 :  12 채널
  - IEPE(AC/DC) Sampling 속도 : 12 채널 에 대하여 최고 50kHz  측정 가능하게 구성 
  - Tablet PC 와의 연결:  Ethernet 통신

### CAN 인터페이스 2채널
  - 차량 CAN 통신  2채널 동시 제공  
  -  CAN 은 CAN 2.0b, CANFD 대응 가능
  - CAN 통신 프로토콜 :   Cdb, J1979, UDS 프로토콜 지원 

### 펄스/디지털 채널
  - RPM 등 회전속도 등의 측정을 위한 주파수 펄스형 카운터 신호 입력 2채널  
  - 리모콘 등 조작 입력 가능하게 구성
  - 데이터 트리거 입력 신호 등을 위한 디지털 입력이 가능

### 리모콘/트리거 스위치
  - 데이터를 기록하기 위한 트리거 스위치 기능
  - 스위치에는 시스템 동작 상태 (정상/이상) 를 표시하는 LED 램프를 포함
  - 트리거 스위치 클릭 시 일정시간 전부터 데이터가 저장되어 다시 클릭 시 저장이 중지됨 
  - 저장 중일 때 스위치 클릭 시 저장 데이터 상에 마킹 기능 제공

![NVDS](/assets/en/product/nvds_system2.webp)

### 전원
  - 차량전원 DC 9 ~30V 를 사용할 수 있는 전원장치와 를 내장
  - 외장형 배터리 팩을 이용 전원 공급라인에 연결하여 사용 가능

### 크기 및 케이스
  - 차량 내 사용에 적합한 방진 구조의  케이스로 구성
  - 운전석 시트 후방에 부착하여,  마이크로폰 등 센서 연결이 용이하게 관련 액세서리 구성 하는 형태
  - 크기 : 약  200× 200 × 80mm (approx.)

### 운영환경
  - 차량 감속, 가속이 급격한 차량 시험 환경에 적합
  - 전원사양 :  DC 9 ~ 30V DC 차량전원 및 외장 배터리 사용 가능
  - 내충격사양 : 50G Shock Rating 
  - 내진동사양 : Vibration Rating 5G @ 5Hz ~ 500Hz
  - 환경조건 :  -20 to 60 ℃ 동작온도

### 고품질 마이크로폰 센서
  - Frequency Range : 20Hz ~20 KHz  
  - Sensitivity (출력감도)  : -55 dBV/Pa 
  - S/N Ratio : 35dBa @f=1㎑, Pin=1Pa, A weighted network
  - Dynamic Range  : 130dB
  - Maximum SPL  : 130dB Maximum SPL 
  - 차량거치용 지그 포함

### 가속도 센서
  - Tri-axial, mini (5 gm) high sensitivity, ICP® accel. 
  - Frequency Range : 1Hz ~4 KHz  
  - Sensitivity : 100 mV/g, 1 Hz to 5k Hz    
  - Range : ±10G (3축)

### Tablet PC
  - 차량으로 부터 데이터를 취득하고, 실시간 모니터링, 분석, 저장 하며, 장치의 설정 및 관리를 위한 소프트웨어를 구동하기 위한 Tablet PC 
  - Cortex-A9 또는 SnapDragon 이상 CPU, 16G 이상 메모리, 256G 이상 데이터 저장 메모리, 10” 이상 Display

### NVDS 소프트웨어 기능
  - NVH 시험 모드 별로 , NVH 데이터 취득 유니트의 사용 설정을 단순화 및 자동화 하고, 
  - OBD를 통해 취득한 차량 VIN NO 를 이용하여 차종 정보를 구분하여 기록
  - 사용자 의 편리성을 극대화하도록, 기본  NVH 데이터 분석 기능을 구비하며 
  - 측정값의 판단기준 레벨링 기능과 그래프의 시각화를 활용하여  사용자에게 판단 가이드 표시 기능을 지원
  - Tablet PC 를 기반으로 하는 NVH 유니트의 설정, 계측 자동화 기능 
  - CAN 및 진동, 소음 측정 채널  동기화 기능
  - 설정 프로그램 과 연동된 소음 진동 측정 모듈 제어, 동작확인 및  자동 시험 진행 기능
  - 데이터 업로드 기능 및  USB Storage device 를 이용한 데이터 저장 기능

### Tablet PC 기반 실시간 NVH 실시간 측정,분석 기능
  - 전용 시험 항목 별,  확정된 측정 채널의 자동 설정을 통한 사용자 시그널 자동 선택 기능 
  - Tablet PC 기반의  실시간 모니터링 및 분석을 통한 데이터 시각화 기능 
          - Time 축 FFT, 칼라맵 실시간 그래프
          - RPM 축 FFT ,칼라맵 실시간 그래프
          - Frequency 축 Order 축 실시간 dB 레벨 그래프
          - Color 맵 그래프  

![NVDS Analysis](/assets/en/product/nvds_system3.webp)

### NVH  시험 세팅 기능 구성 
  - 시험 항목에 따라서 사용할 센서의 자동 등록과 샘플링레이트, Amplitude Range,  CAN 측정 항목 선택 등이  자동으로  설정되는 기능을 적용
  - 사용자가 바로 선택하여 사용하는  시험 모드 선택 및 설정 자동화 기능으로  시험 세팅의 자동화 구현
          - Sampling rate/Frequency resolution 는 개별 분석 항목의 목적 별  로 표준화 하여  적용
          - Weighting, Overlap 은 분석 항목 별  표준화  적용

### NVDS 제공 테스트 항목

#### Idle 소음
- 실내 소음 (dBA@Hz)
- 실내 부밍 (dBC@Hz)
#### Idle 진동
- IDLE S/WHL 진동 (dB@Hz)
- IDLE FLR 진동 (dB@Hz)
- IDLE 저주파 진동 (dB@Hz)
#### Road 노이즈
- Road 노이즈 O/A (dBA@Hz)
- Road 부밍 (dBA@Hz)
- 공명음 (dBA@Hz)
- 럼블음 (dBA@Hz)
- 고주파음 (dBA@Hz) (고속 : 80kph)

#### 주행 소음
  - 가속 실내 소음 O/A (dBA@RPM)
  - 정속 소음 (100kph,dBA@Hz)
  - 고속 부밍 소음 (dBC@Hz)
  - 가속 부밍 소음 (dBC@RPM)

#### 주행 진동
  - 정속 S/WHL 진동 (dB@Hz)
  - 정속 FLR 진동 (dB@Hz)

![Screenshot1 w=30%](/assets/en/product/nvds_analysis1.webp) ![Screenshot2 w=30%](/assets/en/product/nvds_analysis2.webp) ![Screenshot3 w=30%](/assets/en/product/nvds_analysis3.webp)
