package com.embedded_space.devices.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@Table(name = "devices")
public class DeviceEntity {

    @Id
    @Column(name = "device_id")
    @JsonProperty("device_id")
    private Integer id;

    @Column(name="device_name")
    @JsonProperty("device_name")
    private String deviceName;

    @Column(name="device_status")
    @JsonProperty("device_status")
    private String deviceStatus;

    @Column(name="has_screen")
    @JsonProperty("has_screen")
    private Boolean hasScreen;

    @Column(name = "pin1")
    @JsonProperty("pin1")
    private String pin1;
    @Column(name = "pin2")
    @JsonProperty("pin2")
    private String pin2;
    @Column(name = "pin3")
    @JsonProperty("pin3")
    private String pin3;
    @Column(name = "pin_4")
    @JsonProperty("pin_4")
    private String pin4;


    protected DeviceEntity() {

    }



}
