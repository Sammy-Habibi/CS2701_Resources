
package com.example.demo.events;

import jakarta.validation.Valid;
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

    @PostMapping //Recieves JSON event, creates new event
    public ResponseEntity<Event> createEvent(@Valid @RequestBody Event event) {
        Event created = eventService.createEvent(event);
        return ResponseEntity
                .created(URI.create("/api/events/" + created.id))
                .body(created);
    }

    @GetMapping("/{id}") //Returns full event detail DTO for a single event detail page
    public ResponseEntity<EventDetailDTO> getEventById(@PathVariable String id) {
        EventDetailDTO event = eventService.getDetailById(id);
        if (event == null) { return ResponseEntity.notFound().build(); }
        return ResponseEntity.ok(event);
    }

    @PutMapping("/{id}") //Replaces event fields with request body
    public ResponseEntity<Event> updateEvent(@PathVariable String id, @Valid @RequestBody Event event) {
        Event updated = eventService.updateEvent(id, event);
        if (updated == null) { return ResponseEntity.notFound().build(); }
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}") //Deletes event by id
    public ResponseEntity<Void> deleteEvent(@PathVariable String id) {
        boolean deleted = eventService.deleteById(id);
        if (!deleted){ return ResponseEntity.notFound().build();}
        return ResponseEntity.noContent().build(); 
    }
}