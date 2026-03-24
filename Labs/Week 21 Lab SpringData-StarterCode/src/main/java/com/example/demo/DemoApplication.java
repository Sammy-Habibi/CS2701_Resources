package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;


@SpringBootApplication //autoconfigure project
@EnableJpaAuditing
public class DemoApplication {

	public static void main(String[] args) { //starts app
		SpringApplication.run(DemoApplication.class, args);
	}

}
