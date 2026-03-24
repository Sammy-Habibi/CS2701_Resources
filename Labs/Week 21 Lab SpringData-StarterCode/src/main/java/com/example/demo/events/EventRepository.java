package com.example.demo.events;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, String> {
    List<Event> findByLocationContainingIgnoreCase(String location);  // Spring gnerates SQL automatically
}