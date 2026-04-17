package com.example.demo.events;

import java.util.List;

public class EventDetailDTO {

    public String id;
    public String title;
    public String date;
    public String time;
    public String location;
    public String description;
    public String thumbnailImage;
    public List<String> galleryImages;
    public String detailedInfo;
    public List<String> whatToBring;
    public List<String> activities;
    public String directions;

    public EventDetailDTO() {}

    public EventDetailDTO(Event event) {
        this.id = event.id;
        this.title = event.title;
        this.date = event.date;
        this.time = event.time;
        this.location = event.location;
        this.description = event.description;
        this.thumbnailImage = event.thumbnailImage;
        this.galleryImages = event.galleryImages;
        this.detailedInfo = event.detailedInfo;
        this.whatToBring = event.whatToBring;
        this.activities = event.activities;
        this.directions = event.directions;
    }
}
