package com.example.aqi.service;

import com.example.aqi.client.AqiApiClient;
import org.springframework.stereotype.Service;

@Service
public class AirQualityService {

    private final AqiApiClient aqiApiClient;

    public AirQualityService(AqiApiClient aqiApiClient) {
        this.aqiApiClient = aqiApiClient;
    }

    public Object getAirQualityByCity(String city) {
        Object response = aqiApiClient.fetchAirQuality(city);

        // 🔴 Graceful handling: AQI data not available
        if (response == null) {
            throw new RuntimeException("AQI data not available for this city");
        }

        return response;
    }
}
