# Coastdown Test Service

The coastdown test performed by Infomagix Co., Ltd. is based on the “[Regulations for Test Procedures for Energy Efficiency, Greenhouse Gas Emissions and Fuel Economy of Motor Vehicles](https://law.go.kr/LSW/admRulLsInfoP.do?admRulId=2076665&efYd=0)” [Appendix 8], using the On‑Board Meteorological Measurement Method (May 19, 2025) issued by the Ministry of Land, Infrastructure and Transport, the Ministry of Trade, Industry and Energy, and the Ministry of Environment.  
The test equipment is identical to that used by domestic automakers and public institutions, and complies with the joint notice. The test is conducted at the proving ground of the Korea Automobile Testing & Research Institute (KATRI).

![Test Setup](/assets/en/product/coastdown_test_setup.webp)

---

## Client Requirements Before Testing

- Equivalent inertia weight of the test vehicle  
- Additional ballast weight  
- Vehicle frontal projected area (A)  
- Vehicle specification sheet  
- Maintaining the appropriate vehicle condition (required accumulated mileage)

---

## Vehicle Delivery Procedure

The test vehicle must complete the break‑in period to meet the test conditions (accumulated mileage of 6,500 km ± 1,000 km) and be delivered on the test day.

---

## Purpose of the Test

The test measures the driving‑resistance parameters required for chassis‑dynamometer testing to determine vehicle energy efficiency, greenhouse gas emissions, and fuel consumption efficiency.

---

## Test Conditions

### A. Environmental Conditions

- The ambient temperature of the test road must be between 5℃ and 35℃.  
- The average wind speed must not exceed 16 km/h, the maximum wind speed must not exceed 20 km/h, and the crosswind component must not exceed 8 km/h.  
  However, if an on‑board meteorological measurement system is installed directly on the test vehicle, the average wind speed must not exceed 35 km/h and the maximum wind speed must not exceed 50 km/h.

### B. Test Vehicle Conditions

- Tire specifications, suspension height for frontal area measurement, and other parameters must follow the manufacturer’s recommended specifications.  
- The tires used must be identical to those used for measuring energy efficiency, greenhouse gas emissions, and fuel consumption rate.

### C. Coastdown Test Method

- The vehicle must complete at least five runs in each direction (minimum five round trips). The test road should be as straight as possible, and the coastdown speed range must include the required intervals.  
- Each coastdown test must be performed continuously without interruption over the measurement section.  
  If the test road is not long enough to perform the test in a single pass, the speed range may be divided.  
  In such cases, the vehicle must accelerate to at least 15 km/h above the divided speed section before measurement.

---

## Test Results

The raw data collected during the test are analyzed in real time (ActiveVT), and the final coefficients A (f0), B (f1), and C (f2) represent the parameters of the motion equation for driving resistance using the on‑board meteorological method:
F = A + B·V + C·V²

After the test, Infomagix provides a result report in the format shown below, along with the measured test data (elapsed time, vehicle speed, relative wind speed, and wind direction).

![Test Report w=50%](/assets/en/product/coastdown_report_en.webp)

---

## Equipment Installed on the Vehicle

![System Diagram](/assets/en/product/coastdown_system_diagram.webp)

### A. Data Acquisition Unit

![VMS3200 w=45%](/assets/en/product/vms3200.webp) ![VMS3301 w=45%](/assets/en/product/vms3301.webp)

The unit is equipped with an internal CPU and is capable of simultaneous sampling of all channels at 10 kHz or higher, connected to an external PC via LAN, and operable independently through the ActiveVT software.

- Built‑in 100 Hz GPS speed sensor  
- Analog input ±20 V  
- Frequency input: TTL‑level signal  
- Dedicated sensor connectors (speed sensor, wind direction/speed sensor, ambient temperature sensor)

---

### B. Speed Measurement Devices

Vehicle speed is measured using the built‑in 100 Hz GPS speed sensor in the VMS3301/VMS3200 data acquisition unit.  
If required by test‑site conditions, an optical speed sensor may be used.

#### i. 100 Hz GPS Speed Sensor

- Only a GPS antenna installed on the vehicle roof is required; no additional work is needed.
- Speed measurement range: 0–360 km/h  
- Distance resolution: approx. 1 mm

#### ii. Optical Speed Sensor

![Optical Speedometer w=80%](/assets/en/product/optical_speedometer_setup.webp)

- Mounted at the rear of the vehicle using a dedicated bracket with a suction‑cup joint structure.
- Speed measurement range: 0–250 km/h  
- Distance resolution: approx. 1.5 mm

---

### C. Wind Direction / Wind Speed Sensor

![Anemometer w=50%](/assets/en/product/anemometer_setup.webp)

The sensor is designed in accordance with SAE J2263 coastdown‑test standards.  
Includes a universal mount capable of supporting up to 1 kg, with integrated connecting pipes, vehicle mounting brackets, wires, and connector rings.

- Wind speed range: 0–200 km/h / Accuracy: ±0.2 m/s  
- Wind direction range: 0–355° / Accuracy: ±3°

---

### D. Ambient Temperature Sensor

Uses a K‑type thermocouple with ±1℃ accuracy, and the sensor is shielded from direct sunlight.

---

### E. Atmospheric Pressure Sensor

Accuracy: ±0.7 kPa, installed inside the Data Acquisition Unit or the driver display.