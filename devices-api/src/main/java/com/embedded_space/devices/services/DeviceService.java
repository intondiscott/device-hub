package com.embedded_space.devices.services;

import com.embedded_space.devices.models.DeviceEntity;

import java.util.List;
import java.util.Optional;


public interface DeviceService {
    List<DeviceEntity> getDevices();
    void addDevice(DeviceEntity device);
    Optional<DeviceEntity> getDevice(Integer deviceId);
    void deleteDevice(Integer deviceId);
    void updateDevice(String deviceStatus, Integer deviceId, String pin1, String pin2, String pin3);
    void resetDevice(String deviceStatus, String pin1, String pin2, String pin3);


}
