/*package com.example.demo.events;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<EventDTO> getEvents() {
        return eventService.getAllEvents();
    }
}*/

package com.example.demo.events;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "*") //allows cross-origin requests
@RestController //Handles HTTP requests and responses
@RequestMapping("/api/events") //every route starts with /api/events
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping //Returns all events 
    public List<EventDTO> getEvents() {
        return eventService.getAllEventDTOs();
    }

    @GetMapping("/search") //accepts query parameter location, returns events matching
public List<EventDTO> searchByLocation(@RequestParam String location) {
    return eventService.searchEventDTOsByLocation(location);
}

    @PostMapping //Receives JSON event, creates new event
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        Event created = eventService.createEvent(event);
        return ResponseEntity
                .created(URI.create("/api/events/" + created.id))
                .body(created);
    }

    @DeleteMapping("/{id}") //Deletes event by id
    public ResponseEntity<Void> deleteEvent(@PathVariable String id) {
        boolean deleted = eventService.deleteById(id);
        if (!deleted){ return ResponseEntity.notFound().build();}
        return ResponseEntity.noContent().build(); 
    }
}