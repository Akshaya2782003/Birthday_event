package com.birthday.event;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.birthday.event.repository.EnableOpenApi;

@SpringBootApplication
@EnableOpenApi
public class EventApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventApplication.class, args);
	}

}
