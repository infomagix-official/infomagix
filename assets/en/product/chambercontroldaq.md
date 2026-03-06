# Chamber Control & DAQ

The Active Chamber Control System provides dedicated chamber control and facility monitoring based on PLC and DCS platforms.
It is a highly integrated system for both chamber control and data acquisition.
The system offers host control and monitoring for chassis dynamometers, auto pilot robots, and emission analyzers.

### Chamber Control Function
- Stand-alone PLC controller with direct sensor and actuator connections
- Microprocessor-based compressor/chiller system controller
- TCP/IP communication between PC and PLC
- RS485 communication between PC and compressor/chiller

### Data Acquisition Function
- Industrial DAQ hardware with a 100 Mbps Ethernet PC interface
- Expandable 16-channel thermocouple analog input
- Expandable 16-channel voltage analog input
- 16-bit analog-to-digital conversion
- Sampling rates: 1 Hz, 10 Hz, 100 Hz, 500 Hz, 1 kHz

### Facility Interface
- Dynamometer interface: AK protocol
- Robot interface: AK protocol
- Emission analyzer interface: AK protocol
- PLC interface: OPC server, serial (RS422, RS232), TCP/IP
- Barcode reader interface

## Chamber Host Control System

![Chamber diagram](/assets/en/product/chamber_diagram1.webp)

![Chamber diagram](/assets/en/product/chamber_diagram2.webp)

## Sales Record

- H Company R&D electronics testing chassis dyno chamber control & DAS (1) (2002)
- K Company electronics testing chassis dyno chamber control & DAS (1) (2002)
- K Company R&D chassis dyno chamber control & DAS (1) (2002)
- R Company traction motor test chamber control & DAS (1) (2003)
- H Company R&D chassis dyno chamber control & DAS (7) (2004)
- H Company R&D engine dyno chamber control & DAS (1) (2004)
- Korea Delphi hot wind tunnel control & DAS (1) (2005)
- R Company R&D half body test chamber control & DAS (1) (2005)
- H Company R&D engine dyno chamber control & DAS (2) (2006)
- H Company R&D SHED chamber control & DAS (1) (2006)
- H Company R&D vehicle test chamber control (1) (2006)
- Gates Unita R&D vehicle acoustic test chamber control (1) (2006)
- H Company R&D electronics testing chassis dyno chamber control & DAS (1) (2007)
- H Company R&D vehicle acoustic test chamber control (2) (2007)

## Chamber Control

### Chamber Control
- PLC network interface
- Stand-alone chamber control system
- Chamber operating/fault/alarm event message logging
- Simultaneous handling of chamber data and vehicle data

### Refrigeration System Interface
- Compressor network interface for remote compressor control and monitoring
- Data acquisition of compressor operating parameters and physical data
- Periodic measurement of compressor physical data for maintenance records and daily reports
- Remote control of compressor demand parameters
- Remote monitoring and logging of event messages from compressors
- Automatic logging of event data during compressor faults

### Sample Compressor Fault Event Data
- Suction gas temperature low
- Hot gas valve opened
- Suction superheat low
- Compressor stopped

### Chamber

![Chamber photo w=45%](/assets/en/product/chamber_photo1.webp) ![Chamber photo w=45%](/assets/en/product/chamber_photo2.webp)

![Chamber photo w=45%](/assets/en/product/chamber_photo3.webp) ![Chamber photo w=45%](/assets/en/product/chamber_photo4.webp)

## Data Acquisition

- Industrial DAQ hardware with a 100 Mbps Ethernet PC interface
- Software-configurable input channel selection: thermocouple / high voltage / low voltage
- Expandable up to 256 channels
- 16-bit data acquisition
- Sampling rates: 1 Hz, 10 Hz, 100 Hz, 500 Hz, 1 kHz

### Remote Sensor Connector Panel
- 16 BNC connector modules
- 16 thermocouple connector modules
- 8 pressure transmitter quick connector modules
- Multi-core cable and connector to the DAS backplane

### Dyno Control Interface
- Chassis dyno interface for remote control and monitoring
- Chassis dyno interface via TCP/IP network and AK protocol

### Robot Control Interface
- Robot interface for remote control and monitoring
- Robot interface via TCP/IP network and AK protocol

### Emission Analyzer Interface
- Emission analyzer interface for remote control and monitoring
- Emission analyzer interface via TCP/IP network and AK protocol

### Test Editor
- The host PC provides integrated automatic test sequence configuration and editing
- Test sequences include setpoints, step time, control mode, branching and looping, logging intervals, macros, and conditionals
- Test sequences support copy, paste, save, and export functions

## Software Features

### Security
- Login password and security functions

### Test Sequencer
- Test sequence editing, creation, and automatic test management
- Multiple analog and digital setpoint output generation
- Analog setpoint generation for external controllers
- Unlimited sequence steps

### Chamber Interface
- Chamber host control and monitoring
- Chamber data export to DAQ devices
- Chamber control graphic interface

### Robot Interface
- Auto pilot robot host control function
- Robot data acquisition and export to DAQ devices
- Robot control graphic interface

### Dynamometer Interface
- Dynamometer host control
- Dynamometer data acquisition and export to DAQ devices
- Dynamometer control graphic interface

### Test Data Calculation
- Physical parameter calculation using measured data

### Data Analysis
- Log data tree view for easy classification of log data files
- Header information view for log data
- Data display in both text and graph formats
- User-configured trigger/alarm conditions linked with the data analysis program
- Multiple graph displays for data analysis
- Copy, cut, and save functions for graph analysis
- Conversion to Excel, text, and Access DB file formats
- Automatic conversion using Excel templates
- HTML / Excel / Word report file conversion
- User-selectable multi-format report generator
- EMF graph image export

### Diagnostics
- Analog input, digital input, analog output, and digital output

### Configuration
- User-configurable hardware configuration
- Channel parameter-oriented configuration data management
- User-configurable data logging and storage options
- User-configurable data trigger and storage options
- User-configurable test header information
- Channel calibration with end-to-end and multi-point regression methods
- Sensor and transducer linearization functions

### Operator Interfaces / Displays
- User-configurable screen editing
- Multiple window screens with configurable screen update rates
- PID control parameter view and configuration
- Strip chart graph window
- Operator message event window for triggers and alarms
- Alarm window view and online alarm parameter configuration
- Online alarm data view window
- Online calibration window
- Online log data view window
- Online digital raw data view window

![Screenshot | caption=Chamber Control | w=45%](/assets/en/product/chamber_screenshot1.webp) ![Screenshot | caption=Chamber Control | w=45%](/assets/en/product/chamber_screenshot2.webp)

![Screenshot | caption=Sensor Data Acquisition | w=45%](/assets/en/product/chamber_screenshot3.webp) ![Screenshot | caption=Sensor Data Acquisition | w=45%](/assets/en/product/chamber_screenshot4.webp)

![Screenshot | caption=Chamber Control | w=45%](/assets/en/product/chamber_screenshot5.webp) ![Screenshot | caption=Refrigeration System Control | w=45%](/assets/en/product/chamber_screenshot6.webp)

![Screenshot | caption=Alarm Monitor | w=45%](/assets/en/product/chamber_screenshot7.webp) ![Screenshot | caption=Chassis Dyno Chamber Control | w=45%](/assets/en/product/chamber_screenshot8.webp)
