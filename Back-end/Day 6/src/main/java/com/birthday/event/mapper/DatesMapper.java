package com.birthday.event.mapper;


import com.birthday.event.dto.DatesDto;
import com.birthday.event.entity.Dates;

public class DatesMapper {

    public static DatesDto mapToDateDto(Dates date) {
        return new DatesDto(
                date.getId(),
                date.getName(),
                date.getRelation(),
                date.getBirthday()
                );
    }

    public static Dates mapToDate(DatesDto datesDto) {
        return new Dates(
            datesDto.getId(),
            datesDto.getName(),
            datesDto.getRelation(),
            datesDto.getBirthday()
        );
    }

}