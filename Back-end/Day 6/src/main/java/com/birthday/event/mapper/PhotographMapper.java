package com.birthday.event.mapper;

import com.birthday.event.dto.PhotographDto;
import com.birthday.event.entity.Photograph;

public class PhotographMapper {

    public static PhotographDto mapToPhotographDto(Photograph photograph) {
        return new PhotographDto(
                photograph.getId(),
                photograph.getName(),
                photograph.getCost(),
                photograph.getImage()
                );
    }

    public static Photograph mapToPhotograph(PhotographDto photographDto) {
        return new Photograph(
            photographDto.getId(),
            photographDto.getName(),
            photographDto.getCost(),
            photographDto.getImage()
        );
    }

}