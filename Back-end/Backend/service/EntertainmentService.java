package com.birthday.event.service;

import java.util.List;

import com.birthday.event.dto.EntertainmentDto;
import com.birthday.event.entity.Entertainment;


public interface EntertainmentService {
    EntertainmentDto createEntertainment(EntertainmentDto entertainmentDto);

    EntertainmentDto getEntertainmentById(Long entertainmentId);

    List<EntertainmentDto> getAllEntertainmentServices();

    EntertainmentDto updateEntertainment(Long entertainmentId, EntertainmentDto entertainmentDto);

    void deleteEntertainment(Long entertainmentId);
    
    List<EntertainmentDto> getEntertainmentServicesByUserId(Long userId);

     public List<Entertainment> getWishlistedEntertainments() ;
}
