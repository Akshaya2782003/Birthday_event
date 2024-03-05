package com.birthday.event.mapper;

import com.birthday.event.dto.CakeDto;
import com.birthday.event.entity.Cake;

public class CakeMapper {

    public static CakeDto mapToCakeDto(Cake cake) {
        return new CakeDto(
                cake.getId(),
                cake.getName(),
                cake.getWeight(),
                cake.getCost(),
                cake.getImage()
                );
    }

    public static Cake mapToCake(CakeDto cakeDto) {
        return new Cake(
                cakeDto.getId(),
                cakeDto.getName(),
                cakeDto.getWeight(),
                cakeDto.getCost(),
                cakeDto.getImage()
        );
    }

}