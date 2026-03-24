package com.example.demo.events;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.List;

@Entity //creating event table in H2 database
public class Event {

    @Id
    public String id;              // matches "id": "1"

    public String title;
    public String date;
    public String time;
    public String location;
    public String description;

    public String thumbnailImage;

    @ElementCollection //Hibernate stores collections in separate supporting tables linked to main EVENT table.
    public List<String> galleryImages;

    public String detailedInfo;

    @ElementCollection
    public List<String> whatToBring;

    @ElementCollection
    public List<String> activities;

    public String directions;

    public Event() {}
}