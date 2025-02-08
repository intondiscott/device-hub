package com.embedded_space.devices.repositories;

import com.embedded_space.devices.models.DeviceEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DeviceRepository extends JpaRepository<DeviceEntity, Integer> {
        @Modifying(clearAutomatically = true)
        @Transactional
        @Query("UPDATE DeviceEntity device " +
                "SET device.deviceStatus = :device_status, " +
                "device.pin1 = :pin_1, " +
                "device.pin2 = :pin_2, " +
                "device.pin3 = :pin_3 " +
                "WHERE device.id = :device_id")
        void updateDeviceStatus(@Param("device_id") Integer device_id,
                                @Param("device_status") String deviceStatus,
                                @Param("pin_1") String pin1,
                                @Param("pin_2") String pin2,
                                @Param("pin_3") String pin3);
        @Modifying(clearAutomatically = true)
        @Transactional
        @Query("UPDATE DeviceEntity device " +
                "SET device.deviceStatus = :device_status, " +
                "device.pin1 = :pin_1, " +
                "device.pin2 = :pin_2, " +
                "device.pin3 = :pin_3 ")
        void resetDeviceStatus(@Param("device_status") String deviceStatus,
                               @Param("pin_1") String pin1,
                               @Param("pin_2") String pin2,
                               @Param("pin_3") String pin3);

}
