# NVDS

### OVERVIEW
- NVDS is a vehicle NVH measurement and diagnostic system.
- To accurately evaluate the NVH performance of a vehicle and identify issues, the system measures NVH characteristics under user‑specific and real driving conditions.
- It is a standard NVH performance testing and diagnostic system that can implement and automate standardized NVH test procedures, as well as measure, organize, and analyze test data.
### PURPOSE
- NVH test data analysis under standardized and various test conditions
- Batch processing of data acquisition, test execution, data processing, and reporting.
- A system capable of performing real‑time NVH monitoring and field data acquisition simultaneously
- Quantification of NVH performance under standardized inspection conditions
- Minimization of time loss required for NVH data acquisition and analysis
### NVDS OPERATION
- NVDS is a standard NVH inspection and analysis system that evaluates NVH performance and performs optimization analysis based on engine RPM and vehicle speed.
- It operates through the NVDS data acquisition unit and dedicated NVDS software.
### NVDS DATA ACQUISITION
- A portable unit capable of measuring vehicle RPM and speed from the vehicle ECU, as well as vibration, noise, and acceleration signals from installed sensors
- Consists of a 12‑channel unit, GPS, and remote controller
- Supports simultaneous real‑time NVH monitoring, field data acquisition, and analysis
### NVDS SOFTWARE
- Operates on an Android‑based tablet
- Provides real‑time monitoring and NVH analysis of noise and vibration data for test modes that require real‑time evaluation
- Offers dedicated functions such as measurement data storage, NVH analysis, and result processing for multi‑channel test modes that require post‑processing

![NVH Monitoring & Test System](/assets/en/product/nvds_system.webp)

---

### NVDS SPECIFICATION – GENERAL
- Independent controller equipped with a CAN communication module, GPS, precision vibration and noise measurement capability (up to 12 channels of IEPE or MEMS‑type microphones and acceleration sensors), high‑speed signal processing, AD converter, data storage medium, and power supply
- NVH measurement and diagnostic analysis unit designed for vehicle testing.
- Device configuration and test modes settings available through tablet software
- Real‑time monitoring and analysis supported for basic universal test modes via tablet software
- After acquiring and storing multi‑channel noise and vibration data, the system performs CAN data synchronization, NVH diagnosis, test‑result reporting, and automatic data upload.
- Consists of a 12‑channel measurement unit and software that includes 20 dedicated modes for detailed testing
- Main CPU and storage: ARM9‑series CPU and USB high‑speed storage
- CAN data measurement ports: 2 channels
- IEPE/MEMS microphone and acceleration sensor measurement ports: 12 channels
- IEPE (AC/DC) sampling rate: Supports measurement up to 50 kHz on all 12 channels
- Tablet PC connection: Ethernet communication

### CAN INTERFACE
- Provides two simultaneous vehicle CAN communication channels
- Supports CAN 2.0B and CAN FD
- Supported CAN communication protocols: CANdb, J1979, UDS

### PULSE / DIGITAL CHANNEL
- Two channels of frequency pulse counter input for measuring rotational speed such as RPM
- Supports input operations such as remote-controller
- Digital input available for trigger signals and related functions

### REMOTE / TRIGGER SWITCH
- Trigger switch function for initiating data recording
- Switch includes an LED indicator showing system status (normal/abnormal)
- When the trigger switch is pressed, data is saved starting from a predefined time before the trigger; pressing again stops the recording
- Provides a marking function that inserts a marker into the saved data when the switch is pressed during recording

![NVDS](/assets/en/product/nvds_system2.webp)

### POWER
- Built‑in power supply compatible with vehicle power (DC 9–30 V)
- Can also operate using an external battery pack connected to the power input line

### DIMENSION
- Housed in a dust‑resistant housing suitable for in‑vehicle use
- Mounted on the back of the driver’s seat for easy connection of microphones and related accessories
- Size: approximately 200 × 200 × 80 mm

### OPERATING ENVIRONMENT
- Suitable for vehicle test environments involving rapid acceleration and deceleration
- Power specification: DC 9–30 V from vehicle power or external battery
- Shock resistance: 50 G shock rating
- Vibration resistance: 5 G vibration rating @ 5 Hz–500 Hz
- Operating temperature: −20 °C to 60 °C

### MICROPHONE SENSOR
- Frequency range: 20 Hz–20 kHz
- Sensitivity (output): −55 dBV/Pa
- S/N ratio: 35 dBA @ 1 kHz, Pin = 1 Pa, A‑weighted
- Dynamic range: 130 dB
- Maximum SPL: 130 dB
- Includes vehicle mounting jig

### ACCELERATION SENSOR
- Tri‑axial, mini (5 g) high‑sensitivity ICP® accelerometer
- Frequency range: 1 Hz–4 kHz
- Sensitivity: 100 mV/g, 1 Hz–5 kHz
- Measurement range: ±10 G (3 axes)

### TABLET PC
- Tablet PC used for vehicle data acquisition, real‑time monitoring, analysis, storage, and device configuration
- CPU: Cortex‑A9, Snapdragon, or higher
- Memory: 16 GB or higher
- Storage: 256 GB or higher
- Display: 10 inches or larger

### NVDS SOFTWARE FEATURES
- Simplifies and automates configuration of the NVH data acquisition unit for each NVH test modes.
- Classifies and records vehicle information using VIN data obtained via OBD
- Equipped with basic NVH data analysis functions to maximize user convenience
- Provides judgment‑guide visualization using standardized evaluation levels and graphical displays
- Automated NVH unit configuration and measurement control via tablet PC
- Synchronization of CAN data with vibration and noise measurement channels
- Integrated control of the noise/vibration measurement module, including setup linkage, operation check, and automated test execution
- Supports data upload and storage using USB storage devices
- Real‑time NVH measurement and analysis based on tablet PC
- Automatic selection of required measurement channels for each dedicated test item
- Real‑time data visualization and analysis, including:
- Time‑domain FFT and color‑map real‑time graphs
- RPM‑axis FFT and color‑map real‑time graphs
- Frequency‑axis and order‑axis real‑time dB‑level graphs
- Color‑map visualization

![NVDS Analysis](/assets/en/product/nvds_system3.webp)

### CONFIGURING THE NVH TEST SETTING FUNCTION
- Depending on the test item, the required sensors, sampling rate, amplitude range, and CAN measurement items are automatically registered and configured.
- Test setting automation is achieved through user‑selected test modes and automated configuration functions.
- Sampling rate and frequency resolution are standardized and applied according to the purpose of each analysis item.
- Weighting and overlap settings are standardized for each analysis item.

### NVDS PROVIDED TEST ITEMS
#### Idle Noise
- Interior noise (dBA@Hz)
- Interior booming (dBC@Hz)
#### Idle Vibration
- Idle steering wheel vibration (dB@Hz)
- Idle floor vibration (dB@Hz)
- Idle low‑frequency vibration (dB@Hz)
#### Road Noise
- Road noise overall (dBA@Hz)
- Road booming (dBA@Hz)
- Resonance sound (dBA@Hz)
- Rumble (dBA@Hz)
- High‑frequency noise (dBA@Hz) — measured at 80 kph

#### DRIVING NOISE
- Accelerated interior noise O/A (dBA@RPM)
- Constant‑speed noise (100 kph, dBA@Hz)
- High‑speed booming noise (dBC@Hz)
- Accelerated booming noise (dBC@RPM)

#### DRIVING VIBRATION
- Constant‑speed steering wheel vibration (dB@Hz)
- Constant‑speed floor vibration (dB@Hz)

![Screenshot1 w=30%](/assets/en/product/nvds_analysis1.webp) ![Screenshot2 w=30%](/assets/en/product/nvds_analysis2.webp) ![Screenshot3 w=30%](/assets/en/product/nvds_analysis3.webp)
