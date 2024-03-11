package com.birthday.event.mapper;

import com.birthday.event.dto.DecorationDto;
import com.birthday.event.entity.Decoration;

public class DecorationMapper {

    public static DecorationDto mapToDecorationDto(Decoration decoration) {
        return new DecorationDto(
                decoration.getId(),
                decoration.getName(),
                decoration.getTheme(),
                decoration.getCost(),
                decoration.getImage(),
                decoration.isWishlisted());
    }

    public static Decoration mapToDecoration(DecorationDto decorationDto) {
        Decoration decoration = new Decoration();
        decoration.setId(decorationDto.getId());
        decoration.setName(decorationDto.getName());
        decoration.setTheme(decorationDto.getTheme());
        decoration.setCost(decorationDto.getCost());
        decoration.setImage(decorationDto.getImage());
        decoration.setWishlisted(decorationDto.isWishlisted());
        return decoration;
    }
}
