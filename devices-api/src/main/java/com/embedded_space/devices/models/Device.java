package com.embedded_space.devices.models;


import jakarta.persistence.Id;


public record Device(@Id
                     Integer id,


                             String deviceName,

                             String deviceStatus,
                             boolean hasScreen,


                             String pin1,

                             String pin2,

                             String pin3,

                             String pin4) {



}
