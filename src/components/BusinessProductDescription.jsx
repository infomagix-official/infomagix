import { useLanguage } from "../context/LanguageContext"

export default function BusinessProductDescription() {
  const { language } = useLanguage();

  return (
    <>
      {language === 'en' ? (
        <>
          <h2>GPS speed sensor VSD</h2>
          <p>
            VSD is a GPS speed sensor equipped with a 3.5" LCD display and a built-in 100Hz GPS. It measures vehicle speed via the 100Hz GPS while simultaneously measuring wheel speed from the vehicle's CAN bus, outputting both speed and distance to an external port. Using GPS as a baseline, VSD calibrates the CAN wheel speed to enable accurate, uninterrupted vehicle speed measurement, while also capturing driving route data. With its fast 100Hz GPS update rate, VSD outputs vehicle speed via CAN, analog, or pulse signals, making it suitable for various tests and a viable replacement for traditional optical speed sensors. VSD compares vehicle CAN speed with GPS speed to provide a calibrated CAN speed. It continuously and automatically switches between the GPS-calibrated CAN speed and the actual GPS speed depending on GPS reception, ensuring accurate measurement of vehicle speed and GPS speed without interruption during driving. Additionally, if needed, a separate vehicle speed sensor can be installed and connected to the VSD-2 for speed and distance measurement.
          </p>
          <p><strong>Features</strong></p>
          <p>- Various input sources for speed and distance measurement: GPS, CAN wheel speed, and external speed detectors</p>
          <p>- 100Hz data output for speed, distance, and GPS data</p>
          <p>- Accurate CAN speed calibration based on GPS speed</p>
          <p>- Seamless speed measurement with automatic switching between GPS speed and CAN wheel speed</p>

          <h2>GPS +VMS test system</h2>
          <p>
            As a complete test system combined with high-precision GPS, the VMS 3301 is a fully automated vehicle performance evaluation unit with integrated 100Hz GPS. It can perform coastdown tests, fuel economy tests, brake tests, and driving performance tests.
          </p>
          <p>
            The VMS3301 measures fully synchronized data at speeds up to 10kHz/ch and stores it in memory.
          </p>
          <p>
            For automated testing, dedicated sensor connectors, a remote control pendant, and a driver display connector are located on the front of the VMS3301, along with Lemo-type connectors for additional sensors.
          </p>
          <p>
            An analysis program including dedicated test automation and coastdown equation analysis functions is built into the VMS3301.
          </p>
          <p><strong>VMS3301 provides the following functions:</strong></p>
          <p>- 100Hz GPS speed sensor</p>
          <p>- Automated test system for coastdown, brake, and performance tests</p>
          <p>- Coastdown equation analysis and data analysis</p>
          <p>- Fuel economy tests on both roads and chassis dynos</p>

          <h2>GPS+ VMS test system</h2>
          <p>The VMS3301, as a VMS+ GPS test system, can implement the following dedicated tests:</p>
          <p>- Coastdown test</p>
          <p>- Fuel consumption test</p>
          <p>- Start acceleration test</p>
          <p>- Overtaking acceleration test</p>
          <p>- Trip recorder</p>
          <p>- Speedometer and odometer test</p>
          <p>- Maximum speed test</p>

          <h2>VMS Fuel Economy & Coastdown Test</h2>
          <p>
            The VMS3200 is a data acquisition device dedicated to complete vehicle performance evaluation, such as fuel economy and coastdown tests. It connects to a PC (e.g., laptop) via LAN.
          </p>
          <p>
            The B2-DAQ controller board built into the VMS3200 chassis connects to the PC via Ethernet, transmitting fully synchronized measurement data and enabling signal measurement at up to 20kHz/ch.
          </p>
          <p>
            It features dedicated sensor connections for performance tests, a remote control, and a driver display connector. For additional measurements, Thermocouple, LEMO, and BNC connectors are provided on the front panel for direct sensor connection.
          </p>
          <p>
            Dedicated software is provided for test automation, including Driver’s Aid functions for mode fuel economy tests, automatic calculation of coastdown parameters, and test result database management.
          </p>
          <p>
            The VMS3200 includes a separate DC Power Outlet to supply power to peripherals like fuel flow meters and speed sensors, eliminating the need for external power supplies.
          </p>
          <p>The VMS3200 offers dedicated functions for fuel economy and coastdown testing equipment.</p>
          <p>- Use as dedicated equipment for fuel economy and coastdown performance</p>
          <p>- Simple fuel economy measurement using vehicle CAN data</p>
          <p>- Supports both road driving and chassis dynamo fuel economy tests</p>
          <p>- System capable of immediate on-site data analysis and result reading</p>
          <p><strong>Applied Tests</strong></p>
          <p>- Constant speed fuel economy, mode fuel economy tests</p>
          <p>- Coast Down WLTP, SAE J2263, SAE J1263</p>
          <p>- EC Coast Down, Japan Coast Down</p>
          <p>- Start acceleration performance test</p>
          <p>- Overtaking acceleration performance test</p>
          <p>- Speedometer and odometer verification test</p>
          <p>- Brake performance test</p>

          <h2>VMS Vehicle DAQ</h2>
          <p>
            The VMS vehicle test solution is a highly flexible integrated test system that handles measurement, testing, analysis, data logging, and result output in a single batch. VMS synchronizes and records various resource data in real-time, including analog and digital signal measurements, vehicle ECU data via CAN interface, camera video data, and GPS coordinate data.
          </p>
          <p>
            The VMS equipment is a general-purpose data measurement device designed for both mobile vehicle testing and laboratory bench applications.
          </p>
          <p>
            Constructed with a lightweight and durable NC-machined aluminum chassis, the VMS equipment is easy to install and use in vehicles. Dedicated connectors are placed on the front for easy sensor connection, and it supports a wide input voltage range for vehicle power compatibility.
          </p>
          <p>
            Standard front-panel interfaces include Thermocouple, LEMO, BNC, and D-Sub connectors. Connector types can be customized according to usage requirements.
          </p>
          <p>
            Internally, the VMS chassis houses DAQ modules consisting of amplifiers, filters, and B2-DAQ AD Converter Boards for signal processing.
          </p>

          <h2>VMS 800</h2>
          <p>
            The VMS800 is a compact, PC-integrated vehicle data acquisition device housed in a sturdy aluminum chassis, combining a PC and AD board into a single unit.
          </p>
          <p>
            It comes standard with the B2-DAQ-16x16 AD board (200kHz/ch, simultaneous sampling, 16-bit resolution). Optionally, the B2-DAQ 24x16 model (200kHz/ch, simultaneous sampling, 24-bit resolution) can be installed.
          </p>
          <p>
            The VMS800 features an internal battery to prevent data loss during sudden power cuts, ensuring stable operation even during voltage drops at vehicle startup. It supports up to 8 channels of analog input modules. The front panel can be configured with Thermocouple, LEMO, BNC, or D-SUB connectors for direct sensor connection. Input modules and connector types can be customized to meet user requirements.
          </p>

          <h2>VMS 1301</h2>
          <p>
            The VMS1301 is a compact data acquisition device that operates in conjunction with a PC, suitable for vehicle testing and bench applications.
          </p>
          <p>
            As a signal input processing module, it features differential signal conditioning for high-precision measurement of low-noise signals.
          </p>
          <p>
            The VMS1301 can collect ECU data via CAN port while simultaneously measuring analog and digital signals. All data is synchronized and transmitted to a connected PC via TCP/IP for storage. It is versatile for both basic data collection and analysis, applicable to various vehicle behavior measurements and performance tests.
          </p>
          <p>
            Data transmitted to the PC can be monitored in various formats using ActiveTX software, which also provides options for data storage and input signal configuration.
          </p>
          <p>
            For vehicle data measurement, the VMS1301 is ideal for vehicle behavior monitoring and ECU CAN data monitoring.
          </p>
          <p>
            It operates with a PC via TCP/IP and is equipped with an 8-channel AD board (16-bit or 24-bit, 100kHz/ch or 200kHz/ch simultaneous sampling).
          </p>
          <p>
            The VMS1301 provides 8 analog input channels with small thermocouple connectors and standard LEMO, BNC, or D-SUB connectors for convenient sensor connection. Input signal processing modules and connector types can be customized as needed.
          </p>

          <h2>VMS 1600</h2>
          <p>
            The VMS1600 is an all-in-one vehicle data acquisition system integrating a PC, B2-DAQ AD board, signal conditioning modules, and power supply into a single unit, capable of operating on a wide range of vehicle power voltages.
          </p>
          <p>
            It supports the B2-DAQ-16x16 AD board (200kHz/ch, simultaneous sampling, 16-bit) as standard, with an option for the B2-DAQ 24x16 model (24-bit).
          </p>
          <p>
            The VMS1600 allows for up to 32 channels of analog input modules. Front panel connectors (Thermocouple, LEMO, BNC, D-SUB) can be customized for direct sensor connection. It supports 16-channel, 200kHz/ch simultaneous sampling AD boards (16-bit or 24-bit) and can be equipped with an 8-channel PULSE/COUNTER board for cumulative counter calculation or pulse period measurement.
          </p>

          <h2>VMS 1600KL</h2>
          <p>
            The VMS1600KL is an integrated vehicle data acquisition device featuring a built-in PC and LCD display. It combines the display, B2-DAQ AD board, signal conditioning modules, and other essential components into a single chassis, operating on a wide range of vehicle power voltages.
          </p>
          <p>
            Like the VMS1600, it supports B2-DAQ-16x16 (16-bit) or B2-DAQ 24x16 (24-bit) AD boards.
          </p>
          <p>
            It accommodates up to 32 analog input channels with customizable front connectors. It supports 16-channel, 200kHz/ch simultaneous sampling AD boards and can include an 8-channel PULSE/COUNTER board.
          </p>

          <h2>CSM Minimodule</h2>
          <p>
            There is a strong demand for distributed measurement systems that simplify automotive testing and reduce preparation time. To meet these needs, modules must be compact, robust, reliable, and easy to use. CSM Minimodules satisfy all these conditions, with performance proven over the long term.
          </p>
          <p>
            CAN Minimodules meet IP65/67 protection standards. Their minimized size allows installation inside engine compartments or directly on engine components.
          </p>
          <p>
            For applications like test benches, they can be installed on the test item pallet and moved to the bench. Since sensors and measurement systems are configured before moving to the bench, preparation time is shortened, minimizing bench downtime.
          </p>
          <p>
            CSM Minimodules are easy to use and universally applicable for powertrain, HVAC, component testing, electronics, and benchmarking.
          </p>
          <p>
            They are also highly suitable as fleet test measurement modules for general-purpose targets and long-term use.
          </p>
          <p>
            System configuration for the CSM MiniModule family is easily performed using CSMconfig or CANopen master tools.
          </p>

          <h2>VLOG Data Logger</h2>
          <p>
            VLOG is a flexible, compact data logger that functions as both a TCP/IP-based measurement device and a standalone data acquisition unit. Data logging functions are configured via dedicated software, and data can be stored on a USB memory stick (up to 64GB).
          </p>
          <p>
            Whether using trigger-based or continuous logging, data can be stored at speeds up to 20 kS/s as files on the USB stick.
          </p>
          <p>
            It supports backup storage by connecting to a PC via TCP/IP and using ActiveTX software alongside the main body's logging function.
          </p>
          <p>
            Measurement and analysis can be performed using ActiveTX software on a connected PC while simultaneously logging data to the USB stick.
          </p>

          <h2>VCD CAN display</h2>
          <p>
            VCD-5 is a direct-connection vehicle CAN display device with a built-in controller, 100Hz GPS, and 5" LCD.
          </p>
          <p>
            It monitors vehicle CAN data in various formats based on CAN and GPS data, supporting DBC files and the J1979 protocol.
          </p>
          <p>
            VCD-5 provides various GPS data from its built-in 100Hz GPS and outputs vehicle speed and distance using both GPS speed and GPS-calibrated CAN speed.
          </p>
          <p>
            It offers CAN data logging functions, including continuous and trigger-based logging, facilitating data collection in field tests.
          </p>
          <p>
            VCD-5 is useful for field data acquisition, easily obtaining vehicle behavior data via CAN and driving route data via GPS.
          </p>
          <p>
            With its fast 100Hz GPS update rate, VCD-5 is suitable for various test applications and can replace traditional optical speed sensors by providing speed output via CAN, analog, or pulse signals.
          </p>
          <p>
            VCD-5 provides GPS-calibrated vehicle CAN speed. It compares CAN speed with actual GPS speed to derive a calibrated value and automatically switches between them, ensuring accurate speed measurement even in areas without GPS reception.
          </p>
          <p><strong>Provided Functions</strong></p>
          <p>- Vehicle CAN data and GPS data display</p>
          <p>- Simultaneous provision of GPS speed and CAN speed</p>
          <p>- Accurate CAN speed calibrated by GPS</p>
          <p>- Multi-screen display showing real-time vehicle status</p>
          <p>- Acceleration performance test, braking test, and Lap timer functions</p>

          <h2>B2-DAQ AD Board</h2>
          <p>
            B2-DAQ series boards are used for measuring various sensors and CAN bus data, enabling high-precision measurement for demanding data acquisition and control applications.
          </p>
          <p>
            They are multi-channel, simultaneous sampling boards capable of collecting data from a wide range of sensor signals, GPS, digital signals, and CAN bus systems. They provide 8 or 16 analog input channels, 8 32-bit counter/encoder inputs, 16 digital inputs, and 8 digital outputs.
          </p>
          <p>
            B2-DAQ boards provide 2 to 4 channels of high-speed CAN interfaces with modules ensuring synchronous measurement with analog inputs. An onboard RS-232 interface controls internal signal conditioning amplifiers and external displays.
          </p>
          <p>
            Each channel supports 16-bit or 24-bit resolution with a ±10 V range. The B2-24x08 series offers up to 8 analog inputs (24-bit, 350 kS/s per channel) with onboard memory, suitable for noise and vibration recording.
          </p>
          <p>
            B2-DAQ boards can transfer data at up to 5.0 MB/s. Each input signal is buffered, conditioned, and sampled by a separate ADC, allowing simultaneous sampling of all channels. They are used with dedicated signal conditioning boards for various sensors.
          </p>
          <p>
            They operate from -40°C to 70°C to meet diverse application and environmental needs.
          </p>
          <p><strong>Features</strong></p>
          <p>- TCP/IP connection for data transmission</p>
          <p>- 8 ~ 16 channel simultaneous analog input</p>
          <p>- 200 kS/s sampling rate per channel and ±10 V input range</p>
          <p>- 8 channel 32-bit synchronous counter/encoder</p>
          <p>- 16 channel synchronous digital input</p>
          <p>- 8 channel digital output</p>
          <p>- RS-232 interface for signal conditioning module control</p>
          <p>- RS-232 interface for external display devices</p>
          <p>- 2 ~ 4 channel high-speed CAN 2.0B controller</p>

          <h2>Active Software</h2>
          <p>
            [Active Data Measurement Program] is an integrated test data measurement software that defines measurement channels, creates tests, and automatically executes results simultaneously with data measurement.
          </p>
          <p>
            It includes a Screen Editor to configure and modify display screens according to user preferences.
          </p>
          <p>
            It features a Plug-in Channel Editor for easy hardware setup, Software Calibration for maintenance, and Software Filter/Sensor Linearize functions for direct measurement of various sensor signals without extra hardware.
          </p>
          <p>
            It offers powerful Data Logging with various Trigger conditions, Replay of stored data, Data Edit for specific sections, File Export, and automatic Excel Report Generation.
          </p>

          <h2>Chamber Control &amp; DAQ</h2>
          <p>
            ActiveTS is a program developed exclusively for Chamber Control and PC Monitoring using PLC and DCS.
          </p>
          <p>
            It implements Data Acquisition simultaneously with Chamber Control.
          </p>
          <p>
            It enables remote control and monitoring through interfaces with peripheral equipment like chassis dynos, robots, and exhaust gas analyzers.
          </p>

          <h2>Compressor Test Bench</h2>
          <p>
            This equipment tests the durability of compressors by configuring an actual vehicle air-conditioning system (Compressor, Condenser, Evaporator, TXV, etc.) as a Test Bench.
          </p>
          <p>
            To reproduce driving conditions, a high-speed AC motor controls compressor RPM. An air-cooled refrigerant pressure control system cools the condenser, and an electric heater adjusts the air temperature entering the evaporator to reproduce internal cooling loads.
          </p>
          <p>
            The system consists of a Compressor Stand, Condenser Stand, HEB Stand, Control Rack, and driving Software. It includes a DC Power Supply for controlling the Clutch and Condenser Fan Motor.
          </p>
          <p>- Compressor RPM</p>
          <p>- Compressor discharge refrigerant pressure</p>
          <p>- Evaporator inlet temperature (Ambient ∼ 50℃ ±0.5℃)</p>
          <p>- Evaporator gas pressure and superheat</p>
          <p>- Compressor suction gas pressure</p>

          <h2>Calorimeter System Bench</h2>
          <p>
            This test equipment reproduces the actual operating environment of a vehicle air conditioning system to verify overall performance.
          </p>
          <p>
            Using a motor to drive the Compressor, it controls Compressor Speed, driving conditions, and ambient conditions within a wind tunnel. It measures Condenser performance by controlling discharge pressure via cooling air volume, measuring heat exchange amount, and monitoring refrigerant flow and state.
          </p>

          <h2>Transmission Test</h2>
          <p>
            The Gear Shift Quality Test system is a complete hardware and software solution for objectively analyzing manual transmission shift quality. It evaluates gear synchronization design, vehicle integration, and changes or aging due to production. It can be implemented inside a vehicle or on a test rig.
          </p>
          <p>▶Static analysis</p>
          <p>- Shift detent analysis &amp; Select gate analysis</p>
          <p>- H pattern analysis</p>
          <p>- Free play analysis</p>
          <p>▶Dynamic analysis</p>
          <p>- Separation into shifts and shift phases (pre-synchronization, synchronization, end stop)</p>
          <p>- Shift impulse calculation</p>
          <p>- Synchronization force calculation</p>
          <p>- Dynamic shift force analysis</p>

          <h2>Chassis Dynamo Host Control</h2>
          <p>
            The Chassis Dynamo Host Control System is specially developed for vehicle test equipment using chassis dynos and robots, such as performance and durability tests. It performs remote control of the systems and vehicle data measurement simultaneously.
          </p>
          <p>
            It employs a Programmable Stand Alone Controller for safety interlocks, ensuring high stability and safety for both the equipment and the test vehicle.
          </p>

          <h2>ABS Tester</h2>
          <p>
            The ABS function tester inspects ABS performance and brake function during driving tests on the Roll &amp; Brake Test Line. It communicates with the ABS ECU for self-diagnosis and sensor checks, and also inspects for assembly defects in ABS wheel speed sensor circuits and brake piping.
          </p>

          <h2>Test Bench Simulator</h2>
          <p>
            The Simulator Test Bench creates a virtual environment where an ECU operates identically to real-world conditions, allowing for function testing, error reproduction, and verification.
          </p>
          <p>
            The prerequisite is reproducing the electrical and functional operating state of the ECU. Virtual testing is only possible if the bench perfectly reproduces the vehicle's electrical environment, applying actual voltage and current signals to all inputs.
          </p>
          <p>
            This principle applies equally to bus simulations (CAN, LIN), which must be implemented to mimic the vehicle's network of communicating ECUs.
          </p>
        </>
      ) : (
        <>
          <h2>GPS speed sensor VSD</h2>
          <p>
            VSD는 100Hz GPS 를 내장한 3.5" LCD 디스플레이를 포함한 GPS 속도 센서로,
            100Hz GPS에서 차량속도를 측정함과 동시에 차량 CAN에서 차량 휠 속도를
            측정하고, 측정된 차량 속도와 거리를 외부 포트로 출력합니다. VSD는 GPS를
            기반으로, 차량 CAN 휠속도를 보정하여 정확하고 끊김없는 차량 CAN 속도
            측정이 가능하며, 동시에 GPS로부터 주행 경로 데이터를 얻을 수 있습니다.
            100Hz의 빠른 GPS 업데이트 속도를 기반으로 VSD는 CAN 또는 아날로그,
            펄스신호로 차량 속도를 출력하는 차량 속도 측정 장치이므로 다양한 시험에
            적용될 수 있어, 기존의 전통적인 광학 속도 센서를 대체 할 수 있습니다.
            VSD는 차량 CAN 차속과 GPS 속도를 비교하여 보정 된 차량 CAN 속도를
            제공합니다. VSD가 GPS로 교정 된 CAN 속도와 실제 GPS 속도 사이에서 GPS
            수신 여부에 따라 자동 스위칭을 계속 수행하기 때문에 주행 중 중단 없이
            정확한 차량 속도와 실제 GPS 속도를 측정 할 수 있습니다. 또한 필요 시,
            별도의 차량 속도센서를 설치하여 VSD-2 에 연결하면, 이를 이용하여
            속도측정 및 거리측정이 가능합니다.
          </p>
          <p><strong>제공되는 기능</strong></p>
          <p>- 다양한 차량 속도 및 거리 측정 입력 소스 : GPS 및 CAN 휠 속도, 외부 속도 감지기</p>
          <p>- 속도, 거리 및 GPS 데이터의 100Hz 데이터 출력</p>
          <p>- GPS 속도에 기반한 정확한 CAN 속도 보정</p>
          <p>- GPS속도 및 CAN 휠 속도 간 자동전환 으로 끊김없는 속도측정</p>

          <h2>GPS +VMS test system</h2>
          <p>
            고정밀 GPS가 결합 된 완벽한 테스트 시스템으로서, VMS 3301 테스트
            시스템은 완전히 자동화 된 100Hz GPS 일체형 차량 성능평가장비로서,
            코스트다운 테스트, 연비 테스트, 브레이크 테스트 및 주행 성능 테스트를
            수행할 수 있습니다.
          </p>
          <p>
            VMS3301은 완전하게 동기화되어 데이터를 측정하고 최고 10Khz / ch 속도로
            데이터를 측정하고, 메모리에 저장합니다.
          </p>
          <p>
            자동화 된 테스트 수행을 위해 특정 전용 센서커넥터 및 리모콘 콘트롤
            펜던트 및 운전자 디스플레이 커넥터, 추가적으로 센서를 연결하기 Lemo
            타입 센서 컨텍터가 VMS3301의 전면에 배치됩니다.
          </p>
          <p>
            전용 테스트 자동화 및 코스트다운 방정식 해석 계산 기능을 포함한 분석
            프로그램이 VMS3301 에 내장됩니다.
          </p>
          <p><strong>VMS3301은 다음과 같은 기능을 제공합니다.</strong></p>
          <p>-100Hz GPS 속도 센서</p>
          <p>-코스트다운시험, 브레이크시험, 성능시험 을 위한 자동화 된 테스트 시스템</p>
          <p>-코스트다운 방정식 해석, 데이터 분석 수행</p>
          <p>-도로 및 섀시다이나모 모두에서 가능한 연비 테스트</p>

          <h2>VMS+ GPS test system</h2>
          <p>VMS+ GPS test system 인 VMS3301 은 다음과 같은 전용 테스트를 구현 할 수 있습니다.</p>
          <p>-코스트다운시험</p>
          <p>-연료소비시험</p>
          <p>-출발가속시험</p>
          <p>-추월가속시험</p>
          <p>-트립레코더</p>
          <p>-속도계, 거리계시험</p>
          <p>-최고소속시험</p>

          <h2>VMS 연비.코스트다운시험</h2>
          <p>
            VMS3200은 연비시험, 코스트다운시험 등을 위한 완성차 성능평가시험 전용
            차량용 데이터수집장치(Data Acquisition)로 노트북 등 PC와 LAN으로 연결하여
            사용하는 형태입니다.
          </p>
          <p>
            VMS3200 샤시에 내장된 데이터수집장치 콘트롤러 B2-DAQ 보드는 PC와 Ethernet
            통신으로 연결되어, 계측된 데이터를 전체 동기화하여 전송하는 방식이며,
            신호측정은 최고20Khz/ch 로 계측이 가능하게 합니다.
          </p>
          <p>
            성능평가시험을 위한 전용센서 연결 및 리모콘, 운전자 디스플레이 콘넥터가
            구성되며, 별도의 추가 센서 계측을 위해, 전면에는 Thermocouple 콘넥터,
            LEMO, BNC 콘넥터가 구비 되어 있어 센서를 바로 연결 할 수 있습니다.
          </p>
          <p>
            성능평가시험 자동화를 위한 전용 프로그램, 특히 모드연비 시험을 위한
            Driver’s Aid 기능 제공과 코스트다운 파리미터 자동 계산, 시험 결과
            데이타베이스 관리 등 자동화 프로그램이 함께 제공됩니다.
          </p>
          <p>
            VMS3200은 연비계, 속도센서 등 주변장치 전원 공급을 위한 별도의 DC Power
            Outlet 을 구비하고 있어 주변 장치를 위한 별도 전원 공급 장치를 필요로
            하지 않습니다.
          </p>
          <p>VMS3200은 연비 코스트다운 전용 시험장비 기능을 제공 합니다.</p>
          <p>-연비성능, 코스트다운성능 등 전용 장비로의 사용</p>
          <p>-차량 CAN 데이터를 이용한 간편 연비 계측 기능</p>
          <p>-도로주행연비시험 과 샤시다이나모 주행 연비시험 가능</p>
          <p>-시험장에서 데이터 분석을 바로 수행하여 결과를 판독할 수 있는 시스템</p>
          <p><strong>적용시험</strong></p>
          <p>-정속 연비, 모드 연비 시험</p>
          <p>-Coast Down WLTP, SAE J2263, SAE J1263</p>
          <p>-EC Coast Down, Japan Coast Down</p>
          <p>-발진 가속 성능 시험</p>
          <p>-추월 가속 성능 시험</p>
          <p>-속도계, 거리계 확인 시험</p>
          <p>-브레이크 성능 시험</p>

          <h2>VMS Vehicle DAQ</h2>
          <p>
            VMS 차량 시험 솔루션은 측정 및 테스트, 분석, 데이터 로깅과 결과 출력을
            일괄 수행하는 테스트 시스템으로 매우 유연한 통합 테스트 기능을
            제공합니다. VMS는 아날로그 및 디지털 신호 측정과 동시에 CAN인터페이스를
            통한 차량 차량 ECU 데이터 취득, 카메라 비디오 데이터, GPS 위성으로부터의
            좌표 데이터 등 모든 측정부위의 다양한 리쏘스 데이터를 동기화하여
            실시간으로 측정하고 저장합니다.
          </p>
          <p>
            VMS 장비는 범용 데이터계측 장치로 이동성이 요구되는 차량 시험과 실험실
            벤치장비 모두에 사용이 가능하게 구성되었습니다.
          </p>
          <p>
            VMS 장비는 실차 시험을 위하여 차량 내 설치 및 사용이 용이하게, 가볍고
            튼튼한 NC 가공 알루미늄구조의 샤시로 만들어 졌으며, 센서 연결이 간편하게
            이루어 질 수 있도록 전면에 전용 콘넥터를 배치하고, 차량전원을 이용할 수
            있도록 사용 전원 전압 허용범위를 넓게 적용 하였습니다.
          </p>
          <p>
            VMS 장비 전면에 설치되는 Thermocouple 커넥터와 LEMO, BNC 커넥터,
            DSub커넥터 등은 기본으로 장착되어 있으며, 사용 용도에 따라 커넥터 형태를
            변경하여 전용화 할 수 있습니다.
          </p>
          <p>
            VMS는 알루미늄제 샤시 내부에 입력신호 처리를 위한 채널 별 Amplifier,
            Filter 및 B2-DAQ AD Converter Board로 구성되는 DAQ 요소 모듈 들이 설치되어
            집니다.
          </p>

          <h2>VMS 800</h2>
          <p>
            VMS800 모델은 차량용 데이터수집장치(Data Acquisition)로서, 콤팩트하고
            견고한 구조의 알루미늄제 샤시 내에 PC와 AD 보드가 일체로 설치되는
            PC일체형 데이터수집장치 입니다.
          </p>
          <p>
            VMS800 모델은 200kHz/ch, 동시샘플링, 16 비트 해상도 AD 보드인
            B2-DAQ-16x16 을 기본으로 장착하며, 필요 시 200Khz/ch, 동시 샘플링, 24 비트
            해상도 AD 보드 인 B2-DAQ 24x16 모델을 선택하여 장착할 수 있습니다.
          </p>
          <p>
            VMS800 모델은 내부에 밧데리를 장착하여, 급작스런 전원 단락에 대비할 수
            있어, 차량 시동 간의 급격한 전압 강하 변동 시에도 안정적인 동작을
            보장합니다. 최대 8채널의 Analog 신호입력 모듈 설치가 가능하며, 샤시
            전면에는 Thermocouple 콘넥터, LEMO, BNC 콘넥터, D-SUB 콘넥터를 선택하여
            구성할 수 있어 센서를 바로 연결하여 사용 할 수 있습니다. 입력신호는
            사용자 요구에 맞게 필요한 입력 모듈과 그에 따른 전면 콘넥타 형태를
            선택하여 구성할 수 있습니다.
          </p>

          <h2>VMS 1301</h2>
          <p>
            VMS1301은 PC와 함께 연결되어 작동되며, 차량 테스트 및 벤치 용으로
            사용될 수 있는 소형 데이터 취득 장치입니다.
          </p>
          <p>
            VMS1301은 신호 입력 처리 용 모듈로서, 차동형 신호 컨디셔닝 기능을 갖추고
            있어 저노이즈, 고정밀 신호를 고정도로 계측 할 수 있습니다.
          </p>
          <p>
            VMS1301은 CAN 포트를 통해 ECU 데이터를 수집 할 수 있으며, 동시에 아날로그
            및 디지털 신호를 측정하고, 측정된 모든 데이터는 동기화되어TCP/IP 통신
            으로 연결된 PC로 전송되어져 저장됩니다. VMS1301은 기본적인 데이터 수집
            목적과 분석 목적 두 가지 모두에 사용할 수 있으며, 다양한 조건의 차량
            거동 측정 및 각종 성능 시험 용도로 사용될 수 있습니다.
          </p>
          <p>
            PC로 전송되는 데이터는 ActiveTX 소프트웨어를 사용하여 다양한 화면 유형으로
            모니터링 할 수 있으며, 또한 ActiveTX 소프트웨어에서는 데이터 저장과 입력
            신호 설정 같은 데이터 수집 기능을 위한 다양한 기능 옵션을 제공합니다.
          </p>
          <p>
            차량 데이터 측정 용도의 VMS 1301은 차량 거동 측정 및 모니터링, ECU CAN
            데이터 모니터링 등의 목적에 매우 적합합니다.
          </p>
          <p>
            VMS1301은 TCP/IP 통신으로 연결된 PC와 함께 작동하며, 8 채널 16 비트 또는
            24 비트, 100kHz / ch 또는 200kHz / ch 의 동시 샘플링 AD 보드가 장착됩니다.
          </p>
          <p>
            VMS1301은 8 채널의 아날로그 신호 입력을 제공하며, 소형 열전대 모듈
            콘넥터 및 범용으로 사용되는 LEMO, BNC 또는 D-SUB 형태의 커넥터가 설치되어
            편리한 센서 연결이 가능하며, 입력 신호는 필요에 따라 선택하여 구성 할 수
            있으며, 그에 따라 입력 신호 처리 모듈 및 해당 전면 커넥터 유형을 선택하여
            장착할 수 있습니다.
          </p>

          <h2>VMS 1600</h2>
          <p>
            VMS1600은 차량용 데이터수집장치(Data Acquisition)로서, PC와 B2-DAQ AD
            보드 및 신호 컨디셔닝 모듈, 전원장치 등 기타 필수부품이 일체로 설치되는
            PC일체형 데이터수집장치로, 광범위 차량 전원으로 동작 가능한 차량용 데이터
            수집 시스템입니다.
          </p>
          <p>
            VMS1600은 또한 200kHz/ch, 동시샘플링, 16 비트 해상도 AD 보드인
            B2-DAQ-16x16 을 기본으로 장착 가능하며, 필요 시 200Khz/ch, 동시 샘플링, 24
            비트 해상도 AD 보드 인 B2-DAQ 24x16 모델을 선택하여 장착할 수 있습니다.
          </p>
          <p>
            VMS1600 모델은 최대 32채널의 Analog 신호입력 모듈 설치가 가능하며, 샤시
            전면에는 Thermocouple 콘넥터, LEMO, BNC 콘넥터, D-SUB 콘넥터를 선택하여
            구성할 수 있어 센서를 바로 연결하여 사용 할 수 있습니다. 입력신호는
            사용자 요구에 맞게 필요한 입력 모듈과 그에 따른 전면 콘넥타 형태를
            선택하여 구성할 수 있습니다. VMS1600 모델은 16채널, 200kHz/ch
            동시샘플링 방식 16bit 또는 24bit AD보드를 선택하여 장착할 수 있습니다.
            VMS1600 모델은 8채널의 PULSE/COUNTER 보드를 장착 할 수 있어 펄스형 신호의
            누적 COUNTER 계산 또는 펄스간 주기 측정이 가능하게 합니다.
          </p>

          <h2>VMS 1600KL</h2>
          <p>
            VMS1600KL은 PC 및 LCD가 탑재 된 일체형 차량용 데이터 수집 장치로,
            디스플레이, B2-DAQ AD 보드 및 신호 컨디셔닝 모듈 및 기타 필수부품이 모두
            하나의 섀시에 통합되고, 광범위 차량 전원으로 동작 가능한 차량용 데이터
            수집 시스템입니다.
          </p>
          <p>
            VMS1600KL은 또한 200kHz/ch, 동시샘플링, 16 비트 해상도 AD 보드인
            B2-DAQ-16x16 을 기본으로 장착 가능하며, 필요 시 200Khz/ch, 동시 샘플링, 24
            비트 해상도 AD 보드 인 B2-DAQ 24x16 모델을 선택하여 장착할 수 있습니다.
          </p>
          <p>
            VMS1600KL 모델은 최대 32채널의 Analog 신호입력 모듈 설치가 가능하며, 샤시
            전면에는 Thermocouple 콘넥터, LEMO, BNC 콘넥터, D-SUB 콘넥터를 선택하여
            구성할 수 있어 센서를 바로 연결하여 사용 할 수 있습니다. 입력신호는
            사용자 요구에 맞게 필요한 입력 모듈과 그에 따른 전면 콘넥타 형태를
            선택하여 구성할 수 있습니다. VMS1600KL 모델은 16채널, 200kHz/ch
            동시샘플링 방식 16bit 또는 24bit AD보드를 선택하여 장착할 수 있습니다.
            VMS1600KL 모델은 8채널의 PULSE/COUNTER 보드를 장착 할 수 있어 펄스형 신호의
            누적 COUNTER 계산 또는 펄스간 주기 측정이 가능하게 합니다.
          </p>

          <h2>CSM Minimodule</h2>
          <p>
            자동차 테스트를 보다 편리하게 하고 시험 준비 시간을 줄일 수 있게 하는
            분산 측정 시스템이 강력하게 요구되고 있는 추세 이며, 이러한 조건을
            만족시키기 위해서는 컴팩트한 사이즈, 견고하고 신뢰할 수 있는 구조,
            사용하기에 편리한 기능의 모듈이 필요합니다. CSM의 Minimodule 은 장기적으로
            그 성능이 검증되고 입증되어, 이 모든 조건을 충족 시켜줍니다.
          </p>
          <p>
            CAN Minimodule은 보호 등급 IP65 / 67규격을 만족시키고, 최소화 된 사이즈
            덕분에 엔진룸 내부설치 또는 엔진부품에 직접 부착 설치 할 수 있습니다.
          </p>
          <p>
            테스트 벤치와 같은 애플리케이션의 경우, 시험대상 품 팔레트에 함께
            설치되어 벤치로 이동되어 사용되어질 수 있습니다. 벤치로 이동되기 전,
            사전에 센서 및 측정 시스템을 구성하여 벤치에 도착되므로, 테스트 준비
            시간을 단축할 수 있어, 벤치 운영 다운 타임을 최소화 할 수 있습니다.
          </p>
          <p>
            CSM Minimodule 은 사용하기가 매우 쉽고, 아주 보편적으로, 예를 들면 동력
            전달 장치의 응용 분야, HVAC 부품, 다양한 부품 시험, 전기 전자, 벤치 마킹
            등의 측정 목적에 적용될 수 있습니다.
          </p>
          <p>
            CSM Minimodule 은 범용 측정대상 및 장기적인 사용기간의 플릿 테스트 측정
            모듈로도 매우 적합합니다.
          </p>
          <p>
            CSM MiniModule 제품 군을 사용하기 위한, 시스템 구성 및 설정은 CSMconfig
            또는 CANopen 마스터 툴을 이용하여 쉽게 가능합니다.
          </p>

          <h2>VLOG Data Logger</h2>
          <p>
            VLOG는 매우 유연하고 컴팩트 한 TCP/IP 통신 기반의 데이터측정장치로
            사용될 수 있으며, 동시에 스탠드얼론 데이터 취득장치로 사용될 수 있는
            데이타 로거로서, 전용 소프트웨어로 데이터 로깅 기능을 설정할 수 있으며,
            측정 데이터는, 최대 64GB의 USB 메모리 스틱에 저장 가능합니다.
          </p>
          <p>
            트리거 기반 또는 연속으로 데이터를 저장하는 경우 모두, 최대 20 kS / s 의
            속도로 저장 가능하며 데이터는 USB메모리 스틱에 파일로 저장됩니다.
          </p>
          <p>
            본체 데이터 로깅 기능과 PC 와 TCP/IP 통신으로 연결되어 ActiveTX 소프트웨어를
            이용한 PC데이터 저장기능을 제공하므로 백업저장 기능이 가능합니다.
          </p>
          <p>
            USB 메모리 스틱 저장 기능을 수행하면서 동시에 TCP/IP 통신으로 연결된 측정
            PC에서 ActiveTX 소프트웨어를 사용하여 측정, 분석 동작을 수행할 수
            있습니다.
          </p>

          <h2>VCD CAN display</h2>
          <p>
            VCD-5는 콘트롤러, 100Hz GPS 및 5"LCD 디스플레이가 내장된, 차량용 CAN
            직접연결 디스플레이 장치입니다.
          </p>
          <p>
            VCD-5는 차량 CAN 데이터 및 GPS 데이터를 기반으로 차량 CAN 데이터를 다양한
            형태로 표시하는 차량 CAN 모니터링 기능을 제공하며, 차량 CAN 데이터
            모니터링을 위해서, DBC 파일과 J1979 프로토콜을 지원합니다.
          </p>
          <p>
            VCD-5는 내장된 100Hz GPS로 부터, 각종 GPS 데이터를 제공하며, 동시에 GPS
            속도를 이용하여 보정한 차량 CAN 속도 및 GPS 속도 모두를 이용하여 차량
            속도 및 거리 출력을 제공할 수 있습니다.
          </p>
          <p>
            VCD-5는 CAN 데이터 로깅 기능을 제공하며, 특히 연속 데이타 로깅 및 트리거
            조건 데이터 로깅 두 가지 의 데이터 로깅 기능을 제공하므로 필드시험에서
            차량 데이타를 수집하는데 편리합니다
          </p>
          <p>
            VCD-5는 CAN 입력을 통해 차량 거동 데이터와 GPS를 통한 운전 경로에 대한
            데이터를 쉽게 얻을 수 있어 필드 데이타 취득에 유용합니다.
          </p>
          <p>
            100Hz의 빠른 GPS 업데이트 속도를 기반으로 VCD-5는 다양한 테스트
            어플리케이션에 사용될 수 있으며, CAN을 통한 차량 속도 출력 아날로그출력,
            펄스 출력을 제공하므로, 기존의 전통적인 광학 속도를 대체 할 수 있습니다.
          </p>
          <p>
            VCD-5는 GPS 로 보정된 차량 CAN속도를 제공합니다. 차량 CAN 속도와 실제 GPS
            속도를 비교하고, GPS 속도로 보정 된 CAN속도와를 구하고, GPS 속도 와 CAN
            속도 간의 자동 전환 기능을 이용하여, GPS 를 사용할 수 없는 구간에서도,
            시험 중 중단 없이 정확한 차량 속도를 측정 할 수 있습니다.
          </p>
          <p><strong>제공되는 기능</strong></p>
          <p>- 차량 CAN 데이터 및 GPS 데이터 디스플레이</p>
          <p>- GPS 속도와 CAN 속도의 동시 제공</p>
          <p>- GPS로 보정 된 정확한 CAN 속도 제공</p>
          <p>- 차량의 실시간 상태를 표시하는 다량 화면 디스플레이 제공</p>
          <p>- 가속성능시험, 제동시험기능, Lap timer 기능 제공</p>

          <h2>B2-DAQ AD Board</h2>
          <p>
            B2-DAQ 시리즈 보드는 다양한 유형의 센서 및 CAN 버스 데이터 측정에 사용할
            수 있으며 고정도 데이터 수집 및 제어 어플리케이션의 요구를 충족시키기
            위해 고정밀 측정을 가능하게합니다.
          </p>
          <p>
            B2-DAQ 시리즈 보드는 광범위한 센서 신호, GPS 신호, 디지털 신호, CAN 버스
            시스템에서 데이터를 수집할 수 있는 다 채널, 동시 샘플링 방식 데이터 수집
            보드입니다. B2-DAQ 보드는 8 또는 16 개의 아날로그 입력 채널, 8 개의 32 비트
            카운터 / 엔코더 입력 및 16 개의 디지털 입력 및 8 개의 디지털 출력을
            제공합니다.
          </p>
          <p>
            B2-DAQ 시리즈 보드는 아날로그 입력과 동기측정을 보장하는 CAN 버스 데이타
            측정모듈로 구성된 2 ~ 4 채널의 고속 CAN 인터페이스를 제공합니다. 온보드
            RS-232 인터페이스는 내부 신호 컨디셔닝 증폭기 및 외부 데이터 디스플레이
            장치를 제어하는데 사용됩니다.
          </p>
          <p>
            B2-DAQ의 각 채널은 16 비트 또는 24 비트 해상도를 지원하는, ± 10 V 측정
            범위를 제공합니다. B2-24x08 시리즈는 최대 8 개의 아날로그 입력 채널 (24 비트
            해상도, 각 채널은 350 KS / s의 샘플링 속도)을 제공하며 온보드 메모리와
            함께 높은 샘플링 속도로 노이즈 및 진동 레코딩에 적합한 신호
            측정기능을 제공합니다 .
          </p>
          <p>
            B2-DAQ 시리즈 보드는 최대 샘플링 속도로 5.0 MB / s의 데이터 를 전송할 수
            있습니다. 각 채널의 입력 신호는 ADC에 의해 버퍼링되고 조절되며 샘플링됩니다.
            각 아날로그 입력 채널은 독립적인 신호 경로와 별도의 ADC를 제공하므로 모든
            아날로그 입력 채널을 동시에 샘플링 할 수 있습니다. 또한 B2-DAQ 시리즈
            보드는 다양한 유형의 센서 및 신호에 연결되는 측정 전용 신호 컨디셔닝
            보드와 함께 사용됩니다.
          </p>
          <p>
            B2-DAQ 시리즈 보드는 다양한 어플리케이션 및 환경 요구를 충족시키기 위해,
            -40 ° C ~ 70 ° C의 온도 범위에서 사용할 수 있는 동작온도범위를 제공합니다.
          </p>
          <p><strong>특징</strong></p>
          <p>-데이터 전송을위한 TCP / IP 연결</p>
          <p>-8 ~ 16 채널 동시 아날로그 입력</p>
          <p>-채널 당 200 kS/s 샘플링 속도 및 ±10 V 입력 범위</p>
          <p>-8 채널 32 비트 동기 카운터 / 엔코더</p>
          <p>-16 채널 동기식 디지털 입력</p>
          <p>-8 채널 디지털 출력</p>
          <p>-신호 컨디셔닝 모듈의 제어를위한 RS-232 인터페이스</p>
          <p>-외부 디스플레이 장치 용 RS-232 인터페이스</p>
          <p>-2 ~ 4 채널의 고속 CAN 2.0B 컨트롤러</p>

          <h2>Active Software</h2>
          <p>
            [Active 데이터 계측 프로그램]은 차량시험에 필요한 계측 채널을 정의 하여
            테스트를 만들고, 데이터의 계측과 동시에, 시험결과를 자동으로 실행하는
            통합 테스트 데이터 계측 프로그램 입니다.
          </p>
          <p>
            사용자의 목적과 취향에 맞도록 화면을 구성하고, 필요 시 간단한 조작으로
            화면을 변경할 수 있는 Screen Editor 기능이 제공 됩니다.
          </p>
          <p>
            [Active 데이터 계측 프로그램]은 하드웨어 설정 및 변경이 간편한 Plug-in
            방식의 Channel Editor 기능이 제공되며, 장비의 유지보수를 위한 Software
            Calibration 기능을 제공하며, 다양한 형태 신호의 센서를 별도의 하드웨어
            처리없이 직접계측이 가능한 Software Filter, 센서 Linearize 기능 등이
            제공됩니다.
          </p>
          <p>
            사용자의 데이터 취득을 편리하게 하는 강력한 데이터 Logging 기능과,
            다양한 Trigger 조건 설정 기능을 제공하며, [Active 데이터 계측 프로그램]은
            저장 데이터의 Replay 기능과, 필요 구간 만의 Data Edit, File Export, 자동
            Exel Report Generation 기능을 제공합니다
          </p>

          <h2>챔버콘트롤 &amp; DAQ</h2>
          <p>
            ActiveTS 프로그램은 PLC, DCS 를 이용한 챔버 Control 및 PC Monitoring 전용으로
            개발된 프로그램 입니다.
          </p>
          <p>
            ActiveTS 는 챔버 Control 과 동시에 Data Acquisition 을 구현하는 통합 운전
            제어 및 Data Acquisition 프로그램입니다.
          </p>
          <p>
            샤시다이나모, 로보트, 배기가스분석기 등 주변 장비와의 Interface 를 통한
            원격제어 및 Monitoring이 가능합니다.
          </p>

          <h2>콤프레서 테스트 벤치</h2>
          <p>
            시험장비는 실차 Air-conditioning system (compressor, Condenser, Evaporator,
            TXV 등)을 Test Bench 로 구성, Compressor의 내구 성능을 측정하는 것을
            목적으로 합니다.
          </p>
          <p>
            차량의 주행 시 조건 재현을 위해 고속 AC 모타를 사용하여 콤프레서 RPM 을
            원하는 엔진 속도에 해당 하는 RPM 으로 설정 제어하며, 차량 콘덴서의 냉각을
            위한 공냉식 풍량제어형 냉매 압력 제어 시스템을 구성하고, 차량 내부 냉각기
            (Evaporator) 측에 부하 재현을 위해 냉각기로 인입 되는 공기의 온도를 전기
            히타로 가열 냉각기 입구 온도를 조절 할 수 있도록 구성합니다.
          </p>
          <p>
            본 장비는 크게 Compressor Stand, Condenser Stand, HEB Stand, Control Rack 및
            구동용 Software로 구성합니다. Clutch 및 Condenser Fan Motor 제어를 위한
            전압 전류가 제어 가능한 DC Power Supply를 구성합니다
          </p>
          <p>- 콤프레서 RPM</p>
          <p>- 콤프레서 토출 냉매압력</p>
          <p>- Evaporator 입구 온도 (Ambient ∼ 50℃ ±0.5℃)</p>
          <p>- Evaporator 가스 압력 및 과열도</p>
          <p>- 콤프레서 흡입 가스 압력</p>

          <h2>칼로리미터 시스템벤치</h2>
          <p>
            본 시험장비는 차량용 에어컨 시스템의 실제 동작조건과 동일한 환경을
            재현하면서, Compressor 등 차량 에어콘시스템을 구성한 상태에서 에어콘시스템
            관련 제반 성능을 확인하는 장비임
          </p>
          <p>
            엔진에 해당하는 모타를 이용, Compressor 를 구동하면서, Compressor Speed
            제어, 차량주행조건, 외기 조건을 제어하는 고저온 풍동 내에서, 콘덴서를
            고정시킨 뒤, 냉각공기의 풍량제어를 이용 Discharge Pressure 제어 와
            Condenser 통과 공기 열교환량을 측정하고, 동시에 Condenser 냉매유량 및
            상태 측정을 이용 Condenser 성능을 측정한다.
          </p>

          <h2>변속기시험</h2>
          <p>
            Gear Shift Quality Test 시스템은 수동 변속기의 변속 품질을 객관적으로
            분석 할 수 있는 완벽한 하드웨어 및 소프트웨어 테스트 솔루션입니다. Gear
            Shift Quality Test 시스템은 기어 동기화 디자인, 기어의 차량 통합 상태,
            생산에 따른 기어의 변화 및 노화 평가에 필요한 기어 변속 품질 평가를 위한
            하드웨어와 소프트웨어로 구성된 완벽한 시스템입니다. Gear Shift Quality Test
            시스템은 차량 내부 또는 테스트 장비에 구현 될 수 있습니다.
          </p>
          <p>▶Static analysis</p>
          <p>-Shift detent analysis &amp; Select gate analysis</p>
          <p>-H pattern analysis</p>
          <p>-Free play analysis</p>
          <p>▶Dynamic analysis</p>
          <p>-Separation into shifts and shift phases (pre-synchronization, synchronization, end stop)</p>
          <p>-Shift impulse calculation</p>
          <p>-Synchronization force calculation</p>
          <p>-Dynamic shift force analysis</p>

          <h2>샤시다이나모 호스트 콘트롤</h2>
          <p>
            샤시다이나모시험 Host Control System 은 Chassis Dynamo 를 이용한 완성차 성능
            시험 및 내구시험 등 샤시다이나모와 로보트 이용하는 차량시험장치를 위해
            특별히 개발된 프로그램으로, 샤시다이나모 및 로보트 시스템의 원격 제어와
            차량 데이터 계측을 동시에 수행합니다.
          </p>
          <p>
            샤시다이나모 및 로보트 시스템의 Safety 인터록을 위한 Programmable Stand
            Alone Controller 가 적용되어 장비의 안전과 시험차량의 안전을 위한 고도의
            인터록 로직이 프로그램되어 장비 운전의 안정성을 형상시킵니다.
          </p>

          <h2>ABS 검사기</h2>
          <p>
            ABS 기능 검사기는 완성차 검사 공정인 Roll &amp; Brake Test Line 상에서
            주행 시험 중에 ABS ECU 와 의 통신을 통하여, 자기진단 및 센서 이상유무
            검사와 동시에 차량의 ABS기본 성능 및 브레이크 기능 상태를 검사합니다.
            또한 ABS Wheel Speed 센서 회로 및 브레이크 튜브 배관 조립 불량을
            검사합니다.
          </p>

          <h2>테스트벤치시뮬레이터</h2>
          <p>
            시뮬레이터 테스트 벤치는 Test 하고자 하는 ECU가 실제 상황과 동일하게
            동작할 수 있게 가상의 환경을 재현할 수 있는 시뮬레이션 환경을 구현하여,
            ECU 의 동작 및 기능시험, 오류 상황 재현, ECU의 기능 프로그램 검증과 개발
            등을 위한 테스트 시스템을 완벽하게 구현할 수 있는 벤치를 말합니다.
          </p>
          <p>
            시뮬레이터 테스트 벤치 에서의 ECU 테스트 전제 조건은 ECU가
            전기적·기능적으로 동작할 수 있는 상태를 재현해야 한다는 것이다. 즉, 가상
            테스트 및 ECU 기능에 대한 진단은 테스트 벤치가 전기·전자적 차량 환경을
            완벽하게 재현하는 경우에만 가능하다. 이는 모든 디지털 및 아날로그 데이터
            입력단에 실제 전압값과 전류값으로 생성된 신호가 인가되어야 함을
            의미합니다.
          </p>
          <p>
            이러한 원리는 연결되는 CAN, LIN 등 버스 시뮬레이션에도 동일하게 적용된다.
            동시에 많은 ECU가 통신할 수 있도록 차량 내에 버스 시스템이 구성되어 있기
            때문에 이러한 버스 시뮬레이션도 반드시 적용되어야 합니다.
          </p>
        </>
      )}
    </>
  );
}
