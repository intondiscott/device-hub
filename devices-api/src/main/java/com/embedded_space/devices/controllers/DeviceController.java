package com.embedded_space.devices.controllers;

import com.embedded_space.devices.models.Device;
import com.embedded_space.devices.models.DeviceEntity;
import com.embedded_space.devices.services.DeviceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class DeviceController {
    private final DeviceService deviceService;
    private final Logger logger = LoggerFactory.getLogger(DeviceController.class);
    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }
    @Scheduled(fixedRate = 30000)
    void resetDevice() {
        logger.info("Reset devices");

        deviceService.resetDevice("OFFLINE","0","0","0");
    }

    @GetMapping("/devices")
    List<DeviceEntity> getDevices() {
        return deviceService.getDevices();
    }
    @GetMapping("/devices/{id}")
    Optional<DeviceEntity> getDeviceById(@PathVariable Integer id) {
        return deviceService.getDevice(id);
    }

    @PostMapping("/devices")
    @ResponseStatus(HttpStatus.CREATED)
    String createDevice(@RequestBody DeviceEntity device) {
        deviceService.addDevice(device);
        return "Device created";
    }
    @DeleteMapping("/devices/{id}")
    @ResponseStatus(HttpStatus.OK)
    String deleteDevice(@PathVariable Integer id) {
        Optional<DeviceEntity> device = deviceService.getDevice(id);
        if (device.isPresent()) {
            deviceService.deleteDevice(id);
            return String.format("Device with id:%s was deleted...",id);
        }
        return String.format("Device with id:%s wasn't found...",id);
    }
    @PutMapping("/devices/{id}")
    @ResponseStatus(HttpStatus.OK)
    String updateDevice(@RequestBody Device pinSetup , @PathVariable Integer id) {
        Optional<DeviceEntity> device = deviceService.getDevice(id);
        if (device.isPresent()) {

            deviceService.updateDevice("ONLINE", id,  pinSetup.pin1(), pinSetup.pin2(), pinSetup.pin3());
            return String.format("Updated device at id:%s", id);
        }
        return "Device not found";


    }

}
