package com.embedded_space.devices.services;

import com.embedded_space.devices.models.DeviceEntity;
import com.embedded_space.devices.repositories.DeviceRepository;
import org.springframework.data.domain.Sort;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@EnableScheduling
@Service
public class DeviceServiceImpl implements DeviceService {


    private final DeviceRepository deviceRepository;

    public DeviceServiceImpl(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    @Override
    public List<DeviceEntity> getDevices() {

        return deviceRepository.findAll(Sort.by("id"));
    }

    @Override
    public void addDevice(DeviceEntity device) {
            deviceRepository.save(device);

    }

    @Override
    public Optional<DeviceEntity> getDevice(Integer deviceId) {
        Optional<DeviceEntity> device = deviceRepository.findById(deviceId);
        if (device.isPresent()) {
            return Optional.of(device).get();
        }
        return Optional.empty();
    }

    @Override
    public void deleteDevice(Integer deviceId) {
        deviceRepository.deleteById(deviceId);

    }

    @Override
    public void updateDevice(String deviceStatus, Integer deviceId, String pin1, String pin2, String pin3) {
        deviceRepository.updateDeviceStatus(deviceId, deviceStatus, pin1, pin2, pin3);
    }

    @Override
    public void resetDevice(String deviceStatus, String pin1, String pin2, String pin3) {
        deviceRepository.resetDeviceStatus(deviceStatus, pin1, pin2, pin3);
    }


}
