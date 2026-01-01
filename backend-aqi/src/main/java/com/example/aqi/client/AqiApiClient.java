package com.example.aqi.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Component
public class AqiApiClient {

    @Value("${aqi.api.token}")
    private String token;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Fetch AQI data from AQICN API
     */
    @SuppressWarnings("unchecked")
    public Map<String, Object> fetchAirQuality(String city) {
        String url = "https://api.waqi.info/feed/" + city + "/?token=" + token;
        return (Map<String, Object>) restTemplate.getForObject(url, Map.class);
    }
}
