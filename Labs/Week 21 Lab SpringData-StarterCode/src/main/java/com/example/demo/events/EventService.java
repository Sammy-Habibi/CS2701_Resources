

/*package com.example.demo.events;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EventService {

    private final EventRepository repo;

    public EventService(EventRepository repo) {
        this.repo = repo;
    }

    public List<Event> getAllEvents() {
        return repo.findAll();
    }
}*/ 
/*package com.example.demo.events;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EventService {

    private final EventRepository repo;

    public EventService(EventRepository repo) {
        this.repo = repo;
    }

    public List<Event> getAllEvents() {
        return repo.findAll();
    }

    public Event createEvent(Event event) {

        if (event.id == null || event.id.isBlank()) {
            event.id = UUID.randomUUID().toString();
        }

        return repo.save(event);
    }

    public boolean deleteById(String id) {

        if (!repo.existsById(id)) {
            return false;
        }

        repo.deleteById(id);
        return true;
    }

    public List<Event> searchByLocation(String location) {
    return repo.findByLocationContainingIgnoreCase(location);
}
}*/
package com.example.demo.events;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EventService {

    private final EventRepository repo;

    public EventService(EventRepository repo) {
        this.repo = repo;
    }

    public List<Event> getAllEvents() { //returns all events from database
        return repo.findAll();
    }

    public List<Event> searchByLocation(String location) {     //searches for events by location, ignoring cases
        return repo.findByLocationContainingIgnoreCase(location);
    }

    public Event createEvent(Event event) {   //creates new event, if id not provided, generates random UUID as id
        if (event.id == null || event.id.isBlank()) {
            event.id = UUID.randomUUID().toString();
        }
        return repo.save(event);
    }

    public boolean deleteById(String id) {  //Checks if event exists, then deleted
        if (!repo.existsById(id)) {
            return false;
        }
        repo.deleteById(id);
        return true;
    }
    public Event getById(String id) {  //returns a single event by id, or null if not found
        return repo.findById(id).orElse(null);
    }

    public Event updateEvent(String id, Event updated) {  //updates existing event fields
        if (!repo.existsById(id)) {
            return null;
        }
        updated.id = id;
        return repo.save(updated);
    }

    public List<EventDTO> getAllEventDTOs() {
    return repo.findAll().stream()
            .map(EventDTO::new)
            .toList();
}
public List<EventDTO> searchEventDTOsByLocation(String location) {
    return repo.findByLocationContainingIgnoreCase(location).stream()
            .map(EventDTO::new)
            .toList();
}
}