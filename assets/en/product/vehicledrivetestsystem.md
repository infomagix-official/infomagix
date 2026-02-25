# Vehicle Drive Test System (Noise, Pulling, Steer, Performance, Brake Test)

### History
- There is a need for a test system that can accurately identify problems and their causes related to driving instability, underperformance, and noise complaints during test driving of newly produced vehicles. 
- For this purpose, VDTS was developed as a test system that can quantitatively measure NVH performance, steering performance, braking performance, power performance, etc. through real-world road tests.
- VDTS acquires vehicle test data to identify and track factors that affect driving performance. It quantifies driving test results by measuring and analyzing data during test execution.

### Purpose
- The system performs data monitoring, inspection, data acquisition, and quantitative analysis during driving tests and inspections.
- Measures NVH, steering, acceleration, braking, video, and GPS data under various driving test conditions
- Supports batch processing for CAN data acquisition, issue identification, inspection, and reporting during tests
- Minimizes time lost in data acquisition, inspection, and analysis

![VDTS + Body Cam](/assets/en/product/vdts_with_cam.webp)

### General
- VDTS is a unit that conducts vehicle driving tests and simultaneously acquires, stores, and uploads driving test data.
- It can measure field data such as noise, acceleration-sensor data, 100 Hz GPS data, and CAN data provided by the vehicle ECU.
- Supports onboard data storage during vehicle driving tests
- Acquires and stores GoPro video/audio data (with GPS location), uploads camera data, and analyzes it on a PC synchronized with VDTS driving test data
- Dedicated software supports data upload, synchronization, replay, analysis, and reporting

### Specification Overview
- VDTS is a dedicated driving-test and monitoring device for in-vehicle use, with a built-in controller, 100 Hz GPS, gyro, CAN module, high-speed IEPE signal processing, ADCs, storage media, and power circuitry.
- GoPro video/audio data are synchronized with VDTS data for analysis and test reporting, and acquired data can be uploaded wirelessly after each test.
- Built-in signal processing and ADCs support acquisition of 2-4 channel microphone/acceleration-sensor data and other general-purpose sensor inputs.
- It simultaneously measures 100 Hz GPS and CAN data.
- PC software supports device configuration, monitoring, and GoPro data collection
- PC software supports retrieval, analysis, and automatic upload of stored data

### Operating environment
- Designed for vehicle test environments with rapid acceleration/deceleration, including NVH, steering, power, and braking performance evaluations
- Power specification: supports dual 9-30 VDC vehicle power and an external battery
- Shock resistance specification: 50G Shock Rating or higher
- Vibration resistance: Vibration Rating 5G or more @ 5Hz ~ 500Hz
- Environmental conditions: operating temperature from -20 to 60 C

![VDTS System](/assets/en/product/vdts_system.webp)

![VDTS System](/assets/en/product/vdts_system2.webp)

![VDTS](/assets/en/product/vdts.webp)

### VDTS hardware specifications
- Dual-core A9 CPU with high-speed microSD or USB storage
- IEPE microphone/acceleration-sensor measurement: 2-4 channels
- Built-in 100 Hz GPS speed sensor and gyro
- GPS specifications to satisfy power-performance and brake-test requirements
  - Update rate: 100 Hz
  - Accuracy
    - Speed < 0.1 km/h 
    - Distance < 0.05% (5cm / 100m)
    - Position < 3m @95% CEP
- 2-channel CAN data measurement: 1 wired channel and 1 wireless channel
- Ethernet and wireless data transmission 
- Test data logging with Micro-SD and USB storage
- Record data along with weather data of the driving test track

### Driver Display & Speaker
- 5" driver display for test-condition and test-result guidance
- Buzzer, Variable frequency (Various conditions can be expressed by combining pitch)
### Communication standard
- Wi-Fi (802.11N)
- Wired data transfer (Ethernet)
### Storage 
- microSD (64 GB) or USB storage
### Power and battery
- DC 9 ~ 30V, wide range of power supply 
- Main power supply through OBD port
- External battery pack provided (up to 4 hours)

![VDTS System](/assets/en/product/vdts_system3.webp)

### IEPE/DC signal sensor measurement port: 2 ~ 4 channels
- AC/DC IEPE sensor to be direct connected for NVH data acquisition
- Internal Signal conditioning to configure direct connection of various types IEPE sensors  
- AD Sampling Rate: 50 kHz / ch
### High quality microphone sensor specifications
- Frequency range: 20 Hz to 20 kHz
- Sensitivity: -55 dBV/Pa
- S / N Ratio: 35 dBA @ f = 1 kHz, Pin = 1 Pa, A-weighted network
- Dynamic Range: 130dB
- Maximum SPL: 130dB Maximum SPL
- Vehicle mounting jig included
### G sensor specifications
- Range: +/- 5 G (shortened)
- Accuracy: 0.1%

### CAN interface 
- VDTS provides 1 port of wired CAN communication and 1 port of wireless CAN communication at the same time.
- CANdb and CCP ECU communication protocols are available for CAN FD.
- Diagnostic protocol only available for wireless CAN.
### CAN specifications
- Wired CAN 2.0b and CAN-FD support 
- Wired CAN Protocol : CANdb & CCP
- Wireless CAN protocol: Diagnostic CAN 
### File format: SDF, Vector MDF (*.DAT), ASCII, CSV, etc.

### Pulse / Digital channels
- Two frequency/pulse-counter input channels for RPM, rotational speed, etc.
- Digital input for data trigger input signal, etc.
- Digital output for driving external LED indicators such as normal / abnormal equipment operation
### Remote control / trigger switch
- Joystick-type remote control for start/stop, test-mode selection, screen selection, and settings
- The switch includes an LED lamp that displays the operating status (normal / abnormal) of the unit.
- Pressing the trigger switch starts data recording for a configured period; pressing it again stops recording.
- While saving the data, clicking the switch provides a marking function on the saved data 

### Data log function
- Standalone test device capable of logging data according to user-defined input-channel and storage-channel configuration files
- Simultaneous (synchronized) measurement and storage of vehicle CAN signals and 100 Hz GPS signals, with optional microphone channels
- CANdb, CCP channel editing function for ECU data gathering

### Data post-processing
- All measurement data (NVH, GPS, CAN), test-road name, and test-driving conditions are logged and uploaded for post-processing
- Log data is classified by vehicle type/product number/car number/measurement item name/problem order and provided in the format required by the data server.
- Post-processing data will be integrated and analyzed, synchronized with GoPro video and audio data

### Measurement and test data upload to PC 
- CAN data and GPS data acquired from the test vehicle are uploaded to the PC via wireless or Ethernet connection.
- NVH data and additional sensor data are uploaded as needed
- GoPro data will be uploaded if necessary

### Enclosure
- VDTS uses a vibration- and moisture-resistant enclosure suitable for in-vehicle testing
- Size: 200 x 90 x 90 mm (approx.)
- Weight: approx. 900 g

### GoPro data integration
- The system combines GoPro video/microphone data recorded at the driver's position with test data during post-processing.
- GoPro data can be uploaded via Wi-Fi or a connected PC, enabling high-quality video and voice review for specific driving-test events
- Combining GoPro data during post-processing and reporting improves driving-test efficiency
- The GoPro built-in GPS is used to determine location and provide location/time information
- GPS information from recorded GoPro video is merged for post-processing and test-result generation
- Provides a trigger function to automatically start GoPro recording

### Automatic measurement function during test driving
- NVH: Road noise / IDLE noise / Acceleration driving noise
- R & H: Pulling while driving, steering feeling, steering noise
- Power performance: Acceleration performance / Gradeability / Driving performance, etc.
- Brake performance: Basic performance / General performance / Braking control performance
- User-defined test items (implementation of interface to add new inspection items)

### Measurement method
- Measurement start/stop via automatic triggers based on GPS location or driving-test conditions
- Trigger setting and notification function for preparation section / measurement start / measurement finish
- Automatic microphone configuration by measurement item: sampling rate and amplitude range
- Camera setting function
- CAN measurement settings function

### Data analysis
- VDTS displays and stores items that can be analyzed in real time
- Items not supported for real-time analysis on VDTS are analyzed on the control PC
- Analysis functions include FFT, A/B/C weighting, windows (e.g., Hanning), anti-aliasing, frequency filtering, resampling, auto-power spectrum, averaging (RMS, exponential), arithmetic operations, graphing, and intercept calculations
### Weather information acquisition
- Connects to the test-track weather station and acquires weather data (wind, temperature, humidity, atmospheric pressure, etc.) aligned to logged GPS time/location
### Road surface information recognition
- Recognizes detailed test-track road-surface sections by GPS at event time (e.g., model test road - chatter bump road)
### Log item entry
- Test-road information is recorded with test data and GoPro data when a problem occurs
### Trigger method
- Switch trigger: Manual trigger by VDTS trigger switch
- DTC trigger: Automatic log when DTC / MIL occurs
- Trigger setting function: applies user-defined logging conditions when trigger conditions are met

### Control Station and PC
- VDTS collects test data during driving tests and stores it locally. Stored data is uploaded to the control PC at the control station, retained for a defined period, and then uploaded to the server. Stored test data can be reviewed on the control PC.
- Device settings and test settings are edited on the control-station PC and downloaded to VDTS.
- Classification and retrieval of test data and device setting data can be confirmed by scanning the vehicle VIN using the barcode reader.

### Vehicle information inquiry
- Inputs vehicle VIN using a barcode reader, then automatically queries vehicle information and downloads data from the server PC
- Supports vehicle recognition and vehicle-information acquisition through OBD VIN
- Records vehicle type/step/car information
### Data transmission (VDTS - Control PC):
- Wireless data transmission to control PC: automatic upload (GPS/trigger-based) and manual upload
- Data transmission via Ethernet cable is supported when wireless equipment is unavailable
### Synchronization between data
- Synchronizes VDTS and GoPro data based on GPS time
### Server connection
- After control-PC data is transmitted to the server, reporting results for emotional-quality measurement data are generated

### Noise, Pulling, Steering, Performance, Brake Test, CAN, GPS, Data Logging, Wi-Fi Upload
- As a vehicle performance test device, VDTS supports noise tests, pulling tests, steering performance, acceleration/brake performance, vehicle DTC checks, TPMS checks, etc.
- VDTS-GPS can display and simultaneously store all input data, then upload data through the built-in Wi-Fi network.
- VDTS-GPS is a standalone performance-testing device for display, data logging, and Wi-Fi upload, with built-in 100 Hz GPS
  and storage media. It can collect vehicle CAN data and directly display both CAN and GPS data on the 5" LCD screen.

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
      "text": "Measures low-frequency noise while passing the specified test interval at the specified speed.\nThe test can be run manually, or it can run automatically if the test section is predefined."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 35,
      "y": 40,
      "w": 60,
      "h": 20,
      "text": "When test conditions are met, the green lamp turns on; otherwise, the red lamp turns on.\nTest condition: gear 'D', vehicle speed '60 kph', TPMS '34 psi'."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 49,
      "y": 87,
      "w": 48,
      "h": 10,
      "text": "When the test conditions are met and the test preparation is completed, the 'Ready' lamp lights up."
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
      "text": "Measures high-frequency noise over a specified interval (distance or time) at the specified speed.\nThe test starts manually and ends automatically after the configured distance or time."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 10,
      "y": 80,
      "w": 35,
      "h": 15,
      "text": "Test condition: gear 'D', TPMS '35 psi', vehicle speed '80 kph'."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 55,
      "y": 80,
      "w": 35,
      "h": 15,
      "text": "After the test, results remain on screen for verification."
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
      "text": "Measures cabin noise in IDLE state.\nIn 'N' state, the air conditioner is OFF.\nThe test starts manually and ends automatically after the configured duration."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 40,
      "y": 87,
      "w": 25,
      "h": 10,
      "text": "Test conditions met.\nStart the test."
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
      "text": "Measures indoor booming noise in the IDLE state. To apply the engine load, shift is set to 'D' and air conditioner is turned ON. The test starts manually and ends automatically after the specified time."
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
      "text": "Measures the noise produced during acceleration.\nAccelerate to WOT from standstill to the specified RPM.\nAccelerate from creep state to the specified RPM at WOT."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 8,
      "y": 65,
      "w": 20,
      "h": 15,
      "text": "Condition: shift 'D', air conditioner ON, start from standstill."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 67,
      "y": 70,
      "w": 30,
      "h": 25,
      "text": "If test conditions are not met, a 'retry' prompt is provided.\nRapid acceleration condition: maintain APS above 97%."
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
      "text": "Constant Speed Noise\nMeasures noise during steady-speed driving."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 20,
      "y": 40,
      "w": 60,
      "h": 30,
      "text": "Direct Booming Noise\nMeasures noise while driving with the transmission directly connected.\nThis must be performed under conditions that keep the automatic transmission connected during the test.\nEach manufacturer should define the specific driving conditions for this test."
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
      "text": "Measures pulling tendency (steering drift force) and vehicle straightness during constant-speed driving.\nTo calculate pull distance, the test is executed using predefined location points.\nCondition: gear 'D', TPMS '33 psi', displayed speed '60 kph' (actual 90 kph)."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 55,
      "y": 67,
      "w": 40,
      "h": 10,
      "text": "As the vehicle passes through the point, the test is automatically performed."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 40,
      "y": 85,
      "w": 50,
      "h": 10,
      "text": "Using the remote control, specify the preparation point, start point and end point respectively."
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
      "text": "Drive at constant speed at the specified vehicle speed ('40 kph') and start acceleration at the test start position. Automated testing is based on points determined based on location to calculate the pull distance, but manual start and end is also possible. To reduce the error of the repeat test, the result is corrected by measuring the offset distance of the starting point or the azimuth at entry."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 3,
      "y": 90,
      "w": 94,
      "h": 7,
      "text": "If criteria are not satisfied, a 'Retry' prompt is displayed."
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
      "text": "Rapidly accelerates to WOT from standstill to reach the specified speed ('40 kph').\nMeasures steering torque and steering-angle change; tire-slip measurement is also supported."
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
      "text": "Drive at '140 kph' and measure vehicle straightness during braking until stop at the specified deceleration.\nMeasures steering torque and steering-angle change.\n\nThe test runs automatically when braking starts in ready state (constant speed).\nIf deceleration conditions are not met during the test, a 'Retry' prompt is provided."
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
      "text": "Steering angle, steering angular speed, steering torque, etc. are measured while continuously steering from neutral to left -> right -> neutral while the vehicle is stopped."
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
      "text": "At the specified speed ('40 kph'), hold -90 degrees steering, start measurement, then release the steering wheel until the return angle converges.\n\nMeasures steering returnability (self-centering performance) using steering angle, steering angular speed, and steering torque."
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
      "text": "With the steering angle fully turned left and right while the vehicle is stopped, press the remote control switch to record the steering angle.\n\nFor convenience, if the steering angle is maintained for a certain time, it is regarded as a full turn under the test condition, and the automatic recording method is used."
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
      "text": "While the vehicle is stopped, steering noise is measured while turning fully left and right.\n\nFor test convenience, if the steering angle is maintained for a defined time, it is treated as full turn and recorded automatically."
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
      "text": "At low constant speed ('24 kph'), follow the turn radius indicated on the test road. If no radius is marked on the road, use the radius shown on the test screen.\n(Confirm agreement between calculated turning radius and test-path radius.)"
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
      "text": "While driving in a straight line at the specified low speed ('20 kph'), start the test with the remote controller and measure the steering feeling data by steering to the left and right full turns."
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
      "text": "While driving in a straight line at the specified speed ('60 kph'), start the test with the remote controller and measure the steering feeling data by steering to the left and right 90 degrees."
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
      "text": "Proceed as in the conventional performance test.\nFor the practical acceleration test, APS must be maintained at the specified value. If it is not maintained, a 'Retry' prompt is required after test failure."
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
      "text": "Maximum deceleration and stopping distance are measured while braking from the specified speed ('100 kph') to a full stop.\nStopping distance is corrected to a representative initial-speed value."
    },
    {
      "type": "text",
      "className": "md-diagram-note-medium",
      "x": 55,
      "y": 60,
      "w": 40,
      "h": 15,
      "text": "The Fade test measures the difference in performance of repeated braking."
    }
  ]
}
```
