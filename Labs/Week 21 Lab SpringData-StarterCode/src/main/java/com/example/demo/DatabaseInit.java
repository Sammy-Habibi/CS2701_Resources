package com.example.demo;

import com.example.demo.events.Event;
import com.example.demo.events.EventRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class DatabaseInit implements CommandLineRunner { //runs code automatically after application starts

    private final EventRepository repo;
    private final ObjectMapper mapper = new ObjectMapper(); //Jackson class converts JSON to java objects

    public DatabaseInit(EventRepository repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) throws Exception {

        //preventing duplicates if restart happens in the same session
        if (repo.count() > 0) return;

        ClassPathResource resource = new ClassPathResource("Data/events.json");

        try (InputStream in = resource.getInputStream()) {
            List<Event> events = mapper.readValue(in, new TypeReference<List<Event>>() {});
            repo.saveAll(events); //saves all events to H2 database in one go
            System.out.println("✅ Loaded " + events.size() + " events into H2");
        }
    }
}
