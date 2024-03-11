package com.birthday.event.mapper;

import com.birthday.event.dto.EntertainmentDto;
import com.birthday.event.entity.Entertainment;

public class EntertainmentMapper {

    public static EntertainmentDto mapToEntertainmentDto(Entertainment entertainment) {
        return new EntertainmentDto(
                entertainment.getId(),
                entertainment.getName(),
                entertainment.getDuration(),
                entertainment.getCost(),
                entertainment.getImage(),
                entertainment.isWishlisted());
                }

    public static Entertainment mapToEntertainment(EntertainmentDto entertainmentDto) {
        Entertainment entertainment = new Entertainment();
        entertainment.setId(entertainmentDto.getId());
        entertainment.setName(entertainmentDto.getName());
        entertainment.setDuration(entertainmentDto.getDuration());
        entertainment.setCost(entertainmentDto.getCost());
        entertainment.setImage(entertainmentDto.getImage());
        entertainment.setWishlisted(entertainmentDto.isWishlisted());
        return entertainment;
    }

}
