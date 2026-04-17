package com.example.demo.events;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.List;

@Entity //creating event table in H2 database
public class Event {

    @Id
    public String id;    //assigning id

    @NotBlank(message = "Title is required")
    public String title;   //characteristics

    @NotBlank(message = "Date is required")
    public String date;

    @NotBlank(message = "Time is required")
    public String time;

    @NotBlank(message = "Location is required")
    public String location;

    @NotBlank(message = "Description is required")
    public String description;

    @NotBlank(message = "Thumbnail image is required")
    public String thumbnailImage;

    @NotNull(message = "Gallery images cannot be null")
    @ElementCollection //Hibernate allows for individual tables linked to main EVENT table.
    public List<String> galleryImages;

    public String detailedInfo;

    @ElementCollection
    public List<String> whatToBring;

    @ElementCollection
    public List<String> activities;

    public String directions;

    public Event() {}
}