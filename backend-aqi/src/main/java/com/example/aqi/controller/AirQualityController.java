package com.example.aqi.controller;

import com.example.aqi.service.AirQualityService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*") // React (Vite) frontend
@RestController
@RequestMapping("/api")
public class AirQualityController {

    private final AirQualityService airQualityService;

    public AirQualityController(AirQualityService airQualityService) {
        this.airQualityService = airQualityService;
    }

    @GetMapping("/air-quality")
    public ResponseEntity<?> getAirQuality(@RequestParam String city) {
        try {
            return ResponseEntity.ok(
                airQualityService.getAirQualityByCity(city)
            );
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body("AQI data not available for city: " + city);
        }
    }
}
