# 챔버 콘트롤 & DAQ

ActiveTS 프로그램은 PLC 및 DCS를 기반으로 챔버 제어와 PC 모니터링을 위해 개발된 전용 시스템입니다.

이 시스템은 챔버 제어와 데이터 수집(Data Acquisition)을 동시에 수행하는 통합 운전 제어 및 계측 프로그램입니다.

샤시다이나모, 로봇, 배기가스 분석기 등 주변 장비와의 인터페이스를 통해 원격 제어 및 모니터링이 가능합니다.

### 챔버 Control
- Stand-alone PLC controller, direct sensor and actuator connection
- Microprocessor compressor/chiller system controller
- TCP/IP PC to PLC communication
- RS485 PC to compressor/chiller communication

### Data Acquisition
- Industrial DAQ hardware with 100M Ethernet PC interface
- Expandable 16 thermocouple analog inputs
- Expandable 16 voltage analog inputs
- 16-bit resolution analog-to-digital conversion
- Sampling rates: 1 Hz, 10 Hz, 100 Hz, 500 Hz, 1 kHz

### 주변장치 Interface
- Dynamometer interface: AK protocol
- Robot interface: AK protocol
- Emission analyzer interface: AK protocol
- PLC interface: OPC server, serial (RS422, RS232), TCP/IP
- Barcode reader interface

## 시스템 구성도

![Chamber diagram](/assets/en/product/chamber_diagram0.webp)

![Chamber diagram](/assets/en/product/chamber_diagram1.webp)

## 환경챔버 Host Control 시스템 구성

![Chamber diagram](/assets/en/product/chamber_diagram2.webp)

## 적용 실적

- A사 완성차 전자시험 환경챔버 Control & DAS 1기 (2002)
- B사 완성차 전장시험 환경챔버 Control & DAS 1기 (2002)
- B사 완성차 기능 환경챔버 Control & DAS 1기 (2002)
- E사 견인전동기 전력장치 환경챔버 Control & DAS 1기 (2003)
- A사 완성차 MACD 환경챔버 Control & DAS 7기 (2004)
- A사 승용디젤엔진 환경챔버 Control & DAS 1기 (2004)
- 한국델파이 연구소 완성차 Hot Wind Tunnel 챔버 Control & DAS 1기 (2005)
- E사 환경챔버 Control & DAS 4기 (2005~2008)
- A사 상용디젤엔진 환경챔버 Control & DAS 1기 (2006)
- A사 성능시험 SHED Control & DAS 1기 (2006)
- A사 차량시험 환경챔버 Control & DAS 6기 (2006~2009)

## 챔버 Control

### Chamber Control
- PLC network interface
- Stand-alone chamber control system
- Chamber operating/fault/alarm event message 자동 저장
- Chamber 데이터와 Vehicle 데이터의 동시 표시 및 저장 가능

### Refrigeration System Interface
- Compressor network interface를 통한 remote control 및 monitoring
- 운전 중인 compressor의 제어 변수 및 물리량 실시간 계측
- 챔버 운전 중 냉동기 운전 물리량의 주기적 자동 저장 및 일일 운전 보고서 자동 저장
- 냉동기 운전 설정값 및 조건 판단값 전송
- 냉동기 운전 중 발생하는 100종 이상의 message 전송 및 표시 가능
- 발생된 event의 자동 저장을 통해 냉동기 이상 원인 추적 가능

### 냉동기 Fault 발생 시 Sample
- Suction Gas Temp Low
- Hot Gas Valve Opened
- Suction Superheat Low
- Compressor Stopped

### 냉동기로부터 발생된 Message 및 운전 물리량은 Chamber PC에 자동 이력 저장

### Chamber

![Chamber photo w=45%](/assets/en/product/chamber_photo1.webp) ![Chamber photo w=45%](/assets/en/product/chamber_photo2.webp)

![Chamber photo w=45%](/assets/en/product/chamber_photo3.webp) ![Chamber photo w=45%](/assets/en/product/chamber_photo4.webp)

## Software 사양

### Security
- Login password 방식의 security 기능

### Test Sequencer
- Test sequence 작성, 편집, 저장을 포함한 auto test management
- 여러 개의 analog 및 digital setpoint output generation 기능
- 외부 controller 제어를 위한 analog setpoint generation
- 무제한 sequence step 구성

### Chamber Interface
- Chamber host control 및 monitoring 기능
- Chamber 데이터와 DAQ device 데이터의 동일 block data 처리
- Chamber control graphic interface

### Robot Interface
- Auto pilot robot의 host control 기능
- Robot 데이터와 DAQ device 데이터의 동일 block data 처리
- Robot control을 위한 graphic user interface

### Dynamo Interface
- Dynamometer의 host control 기능
- Dynamo 데이터와 DAQ device 데이터의 동일 block data 처리
- Dynamo 운전 상태 monitoring용 graphic user interface
- Dynamo control을 위한 graphic user interface

### Test Data Calculation
- 측정 데이터를 이용한 physical parameter calculation

### Data Analysis
- 저장된 log data를 쉽게 찾을 수 있는 log data tree view
- 저장 log data의 header information view
- Text format과 graph format의 두 가지 data view 기능
- 사용자가 설정한 trigger/alarm 조건 데이터를 하나의 파일로 저장하고 data analysis program과 연동
- Analysis를 위한 multiple graph display 기능
- Graph 분석 구간에 대한 copy, cut, save 기능
- Excel, text, Access DB 파일로 변환
- Excel template 파일로 자동 변환
- HTML / Excel / Word report file 변환
- User-selectable multi-format report generator
- EMF graph image 변환

### Diagnostics
- Analog input, digital input, analog output, digital output

### Configuration
- 사용자 설정 hardware configuration
- Channel parameter 기반의 channel configuration
- 사용자 설정 data logging 및 storage option
- 사용자 설정 data trigger 및 storage option
- 사용자 설정 test header information
- End-to-end 방식의 analog input channel calibration 및 regression, multi-point, two-point calibration
- Sensor 및 transducer linearization 기능

### Operator Interfaces / Displays
- 사용자가 직접 화면을 작성, 수정, 저장할 수 있는 screen edit 기능
- Multiple window screen 구성 및 screen update rate 설정
- PID control parameter view 및 설정/변경 기능
- Strip chart graph window
- Trigger/alarm에 대한 operator message event window
- Alarm window 및 계측 중 online alarm parameter 설정 변경
- On-line alarm data view window
- On-line calibration window
- On-line log data view window
- On-line digital raw data view window

![Screenshot | caption=재료시험 챔버 Control 화면 | w=45%](/assets/en/product/chamber_screenshot1.webp) ![Screenshot | caption=주행환경챔버 Monitoring 화면 | w=45%](/assets/en/product/chamber_screenshot2.webp)

![Screenshot | caption=Sensor Data Acquisition | w=45%](/assets/en/product/chamber_screenshot3.webp) ![Screenshot | caption=Sensor Data Acquisition | w=45%](/assets/en/product/chamber_screenshot4.webp)

![Screenshot | caption=챔버 Control | w=45%](/assets/en/product/chamber_screenshot5.webp) ![Screenshot | caption=Refrigeration System Control | w=45%](/assets/en/product/chamber_screenshot6.webp)

![Screenshot | caption=Climatic wind tunnel | w=45%](/assets/en/product/chamber_screenshot7.webp) ![Screenshot | caption=복합주행환경시험챔버 | w=45%](/assets/en/product/chamber_screenshot11.webp)

![Screenshot | caption=중장비환경시험챔버 | w=45%](/assets/en/product/chamber_screenshot12.webp) ![Screenshot | caption=복합주행환경시험챔버 | w=45%](/assets/en/product/chamber_screenshot13.webp)

![Screenshot | caption=엔진다이나모환경시험 | w=45%](/assets/en/product/chamber_screenshot14.webp) ![Screenshot | caption=수밀환경시험챔버 | w=45%](/assets/en/product/chamber_screenshot15.webp)

![Screenshot | caption=엔진환경시험챔버 | w=45%](/assets/en/product/chamber_screenshot16.webp) ![Screenshot | caption=진동환경시험챔버 | w=45%](/assets/en/product/chamber_screenshot17.webp)

![Screenshot | caption=무향환경챔버 | w=45%](/assets/en/product/chamber_screenshot18.webp) ![Screenshot | caption=저온환경수밀챔버 | w=45%](/assets/en/product/chamber_screenshot19.webp)

![Screenshot | caption=부품환경챔버 | w=45%](/assets/en/product/chamber_screenshot20.webp) ![Screenshot | caption=Hot Wind Tunnel | w=45%](/assets/en/product/chamber_screenshot21.webp)
