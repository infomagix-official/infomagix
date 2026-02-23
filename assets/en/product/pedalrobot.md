# Pedal Robot

### Overview
- Accelerator pedal and brake pedal controllers are required for evaluation tests that demand precise, quantified, and repeatable driving in accordance with vehicle test performance requirements. Acceleration pedal and brake pedal robots that ensure repeatability are used to enable more accurate and repeatable vehicle driving tests.
- VMS3200 and VMS3400 offer a pedal robot option. For the mechanical control of the accelerator and brake pedals, the PDA-200, a pedal robot in the form of an electric pedal actuator, can be connected and used for various testing applications.
- Pedal Robot PDA-200 provides APS opening control, speed control, and RPM control functions for the test vehicle.
- Various vehicle test conditions can be performed using the APS opening control function and speed control function. Constant speed control, constant acceleration control, and speed profile control of the vehicle can be performed using a combination of the provided functions.
- Pedal Robot PDA-200 provides functions to control the speed and engine RPM of the test vehicle. These functions can be used to automatically drive the vehicle according to a pre-stored driving curve.


![Pedal Robot](/assets/en/product/pedalrobot.webp)

### Features
- Pedal Robot PDA-200 combined with VMS3400 is a performance test device that does not require the driver to operate the accelerator and brake pedals.
- Pedal Robot PDA-200 provides a typical pedal connection rod and can be easily connected, simplifying the test preparation and installation process.
- Pedal Robot PDA-200 is connected to the VMS3400 drive control system and automatically performs tests according to test items, measures and stores data as the test proceeds, and automatically classifies and manages test result data.
- Pedal Robot PDA-200 is connected to the VMS3200 Cost-Down Test System and provides a drive test function that automatically performs driving according to the pre-stored fuel economy driving mode, following the driving mode fuel economy function provided by the VMS3200. At the same time, data can be measured and stored, and test result data can be automatically classified and managed.


![Pedal Robot Installation](/assets/en/product/pedalrobot_installed.webp)


![GPS + APS + Test](/assets/en/product/pedalrobot_vms3400_test.webp)


![VMS3200/GPS + Pedal Robot + Test](/assets/en/product/pedalrobot_vms3200_test.webp)


### Functions Provided for Drive Control
- Pedal Robot PDA-200 provides vehicle speed control, APS opening control, and RPM control as its basic functions.
- The APS opening control function can be used to perform various combinations of vehicle performance tests.
- The speed control function provides the ability to control the speed and engine RPM of the test vehicle.
- By using the speed control function, you can control constant speed and constant acceleration.
- The speed control function can be used to automatically operate the vehicle according to a pre-stored driving curve.
- The combination of these three control functions can reproduce all vehicle driving conditions.


### Specification
- The dual pedal actuator PDA-200 is a two-motor actuator device.
- It has two pedal operation control functions capable of controlling both the brake pedal and the accelerator pedal.
- The PDA-200 dual pedal actuator provides the following functions.
   - Vehicle speed control
   - Engine RPM control
   - Pedal travel control
- The specifications of the PDA-200 dual pedal actuator are as follows.
   - Maximum pedal force: 150 N
   - Maximum pedal speed: 110 mm/s
   - Maximum pedal stroke: 150 mm


### Drive Cycle Test Function

- The drive cycle test function enables the vehicle to drive repeatedly according to a predetermined driving mode cycle. This means the test vehicle can be driven by a pedal robot without a driver, running the same driving mode infinitely and repeatedly.
- Pedal Robot PDA-200 integrated with VMS3200 and VMS3400 can use this feature on both the chassis dynamometer and the test track.
- When using the pedal robot PDA-200 on the test track and chassis dynamometer, the pedal robot generally controls the vehicle's speed during both the acceleration and deceleration periods.
- In addition, during chassis dynamometer testing, the pedal controller can convert the operation mode of the chassis dynamometer from Road-Load to Constant-Speed control mode and transmit the target speed to perform the brake function. As an optional function, the pedal controller can use the chassis dynamometer to control the speed of the test vehicle during deceleration.


![Drive Control](/assets/en/product/pedalrobot_drivecontrol.webp)


![VMS3200](/assets/en/product/pedalrobot_vms3200.webp)


![VMS3400](/assets/en/product/pedalrobot_vms3400.webp)


### Vehicle Performance Test Function
- VMS3400 with Pedal Robot PDA-200 is a pedal control-based vehicle performance evaluation device that can drive a vehicle by controlling the opening of the accelerator pedal and the brake pedal using dedicated software.
- VMS3400 with Pedal Robot PDA-200 is a vehicle performance evaluation device capable of performing precise tests under predetermined conditions and within designated times, as it can automatically control the accelerator pedal and brake pedal according to the programmed mode.
- VMS3400 with Pedal Robot PDA-200 reduces the difficulty of maintaining a consistent accelerator pedal opening, minimizes errors, and improves the reproducibility of repeated tests.
- VMS3400 with Pedal Robot PDA-200 can automatically perform tests according to test items, measure and store data as the test progresses, and automatically classify and manage test result data.


### Vehicle Mounting
- The pedal robot PDA-200 is mounted in the vehicle in the following order.
   - Place the pedal robot and its base on the driver's floor.
   - To fix the pedal robot base, loosen the seat rail nut 3–4 turns.
   - Installation is completed by connecting both ends with a flat bar with a U-slot hole that connects the pedal robot base and the seat rail nut.
- To start the test using the pedal controller, first connect the rod link provided with the PDA-200 pedal robot to the accelerator pedal and brake pedal in order to connect the vehicle's accelerator and brake pedals to the pedal robot's actuators.
- The entire installation, fixing, and positioning procedure typically takes approximately 5 to 10 minutes.


### Setting the Pedal Travel Range
- After fixing the pedal robot, use the manual Forward/Backward button to record the pedal travel 0.0% and 100.0% positions in order to set the pedal travel range of 0.0% to 100.0%, completing the preparation.
- Pedal Robot PDA-200 controls the vehicle so that it runs normally by operating the accelerator pedal and brake pedal according to the pedal control signals received from the VMS3400 or VMS3200.
- The following are the essential signals that must be connected to the chassis dynamometer when driving on the chassis dynamometer using a pedal robot.
- The drive controller continuously controls the vehicle speed using acceleration and brake pedal control in all sections — including acceleration, deceleration, and constant speed sections — during drive cycle driving. In general, drive cycles are executed in the "Road-Load Mode" of the chassis dynamometer.
- For the chassis dynamometer driving test, the required input and output connections between the chassis dynamometer and the drive controller must be established first.


### Chassis Dynamometer Interlock


| Signal List | Description | Signal Type |
|---|---|---|
| Chassis Dynamometer "OK" signal | Normal condition signal indicating that the vehicle can be driven on the chassis dynamometer | Digital input |
| Chassis Dynamometer "ESTOP" signal | Signal indicating an abnormal condition in which the vehicle cannot be driven due to a chassis dynamometer fault; vehicle control must be stopped immediately | Digital input |
| Dynamometer Speed Feedback signal | Dynamometer Speed F/B signal: 0–200 kph / 0–10 V | Analog input 10 V |
| Vehicle "ESTOP" signal | A status signal requiring an emergency stop of the chassis dynamometer due to an abnormality in the vehicle or pedal robot | Digital output |
