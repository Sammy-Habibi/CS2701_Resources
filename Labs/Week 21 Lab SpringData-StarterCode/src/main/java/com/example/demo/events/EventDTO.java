package com.example.demo.events;

public class EventDTO {

    public String id;
    public String title;
    public String date;
    public String time;
    public String location;
    public String description;
    public String thumbnailImage;

    public EventDTO() {}

    public EventDTO(Event event) {
        this.id = event.id;
        this.title = event.title;
        this.date = event.date;
        this.time = event.time;
        this.location = event.location;
        this.description = event.description;
        this.thumbnailImage = event.thumbnailImage;
    }
}