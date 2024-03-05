package com.birthday.event.mapper;

import com.birthday.event.dto.DecorationDto;
import com.birthday.event.entity.Decoration;

public class DecorationMapper {

    public static DecorationDto mapToDecorationDto(Decoration decoration) {
        return new DecorationDto(
                decoration.getId(),
                decoration.getName(),
                decoration.getColor(),
                decoration.getCost(),
                decoration.getImage()
                );
    }

    public static Decoration mapToDecoration(DecorationDto decorationDto) {
        return new Decoration(
            decorationDto.getId(),
            decorationDto.getName(),
            decorationDto.getColor(),
            decorationDto.getCost(),
            decorationDto.getImage()
        );
    }

}