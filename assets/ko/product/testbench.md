# Compressor Test Bench 소개

본 설비는 차량 공조(A/C) 시스템의 핵심 부품인 컴프레서 성능을 평가하기 위한 시험 설비입니다.
컴프레서, 콘덴서, 증발기(Evaporator), TXV 조건을 시험 환경으로 구성하여 다양한 운전 조건에서 성능을 검증합니다.

고속 AC 모터를 이용해 컴프레서 RPM을 정밀 제어하고, 냉매 압력/온도/유량 데이터를 실시간으로 취득합니다.
또한 열수지(Heat Balance) 및 효율 계산을 통해 시험 판정에 필요한 물리값을 제공합니다.

설비 구성:
- Compressor Stand
- Condenser Stand
- HEB Stand
- Control Rack
- 구동 및 계측 소프트웨어

주요 계측 항목:
- 컴프레서 RPM
- 컴프레서 토출 냉매 압력
- Evaporator 입구 온도
- Evaporator 압력 및 과열도
- 컴프레서 흡입 냉매 압력

## Compressor Test Bench A

![Compressor Test Bench A](/assets/en/product/testbench_comp1.webp)

## Compressor Test Bench B

![Compressor Test Bench B](/assets/en/product/testbench_comp2.webp)

## 시스템 구성

![System Structure 1](/assets/ko/product/testbench_system1.webp)

![System Structure 2](/assets/ko/product/testbench_system2.webp)

## 자동화 시스템 개요

Typical Automation System은 Compressor, Power Steering Pump 등 구성품 성능 시험을 위한 PC 기반 통합 자동화 시스템입니다.
Test Bench 제어와 Data Acquisition 제어를 통합해 시험 수행, 데이터 취득, 계산, 판정을 하나의 워크플로우로 제공합니다.

실시간 데이터 기반으로 물리값, 열수지, 효율 등을 계산하여 시험 품질과 반복성을 높입니다.

자동화 소프트웨어 주요 기능:
- 시험 설정, 화면 설정, 데이터 복원
- 시험 시퀀스 설정/실행/복원
- Test Bench Safety & Interlock Control
- PID Control (Motor, Valve, Heater)
- 시험 데이터 물리값 계산
- Heat Balance 및 효율 계산
- 데이터 재생, 파일 변환, 리포트 생성
- PID 파라미터 설정 및 저장

## 적용 실적

- Korea Delphi Typical Compressor Test Bench Automation (2) (2004)
- Korea Delphi Typical Compressor Test Bench (3) (2004)
- Korea Delphi Typical Compressor Test Bench Automation (2) (2005)
- Korea Delphi Power Steering Pump Test Bench Automation (1) (2005)
- Korea Delphi Typical Compressor Test Bench (3) (2006)
- Korea Delphi Typical Compressor Test Bench Automation (3) (2006)
- Korea Delphi Typical Compressor Test Bench Automation (3) (2007)

### Compressor Typical Test Stand

![Typical w=45%](/assets/en/product/testbench_comp_typ1.webp) ![Typical w=45%](/assets/en/product/testbench_comp_typ2.webp)

## 소프트웨어 사양

### 시험 제어
- Test Bench Safety & Interlock
- Test Sequence 생성/수정/관리
- PID 제어
- 자동 시험 관리

### 설정
- 사용자 정의 Hardware Configuration
- 채널 파라미터 기반 데이터 처리 및 채널 설정
- 사용자 정의 Data Logging/Storage 옵션
- 사용자 정의 Data Trigger/Storage 옵션
- 사용자 정의 Test Header 정보
- Analog Input 채널 Calibration/Regression
  (Multi-Point, Two-Point 지원)
- Sensor/Transducer Linearization

### 운영자 화면/표시
- 사용자 정의 화면 편집
- 다중 윈도우 화면 구성 및 갱신 주기 설정
- PID 파라미터 조회/설정
- Test Bench 모니터링 및 명령 제어
- Strip Chart Graph Window
- Trigger/Alarm 메시지 및 이벤트 창
- 시험 중 Alarm 설정/수정
- Online Alarm Data View
- Online Calibration View
- Online Log Data View
- Online Digital Raw Data View

### 시험 데이터 계산
- 측정 채널 기반 물리 파라미터 계산
- Heat Balance 계산
- 시험 데이터 유효성 평가

### 데이터 처리
- 고속 로깅을 위한 바이너리 데이터 포맷
- Log Data Tree View
- Log Data Header Information View
- Text/Graph 형식 Log Data View
- Trigger/Alarm 설명 설정 및 분석 프로그램 연동
- 다중 그래프 표시
- 그래프 편집(Copy/Cut/Save As)
- Excel/Text/Access DB 파일 변환
- Excel Template 자동 변환
- HTML/Excel/Word 리포트 변환
- 사용자 선택형 멀티 포맷 보고서 생성
- EMF 그래프 이미지 내보내기

### 진단
- Analog Input / Digital Input / Analog Output / Digital Output

## Compressor Test Bench

![Screen1 w=45%](/assets/en/product/testbench_screen1.webp) ![Screen2 w=45%](/assets/en/product/testbench_screen2.webp)
![Screen3 w=45%](/assets/en/product/testbench_screen3.webp) ![Screen4 w=45%](/assets/en/product/testbench_screen4.webp)

## Power Steering Pump Test Bench

![Screen5](/assets/en/product/testbench_screen5.webp)
![Screen6](/assets/en/product/testbench_screen6.webp)
