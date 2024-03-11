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
                cake.getImage(),
                cake.isWishlisted()
            );
    }

    public static Cake mapToCake(CakeDto cakeDto) {
        Cake cake = new Cake();
        cake.setId(cakeDto.getId());
        cake.setName(cakeDto.getName());
        cake.setWeight(cakeDto.getWeight());
        cake.setCost(cakeDto.getCost());
        cake.setImage(cakeDto.getImage());
        cake.setWishlisted(cakeDto.isWishlisted());
        return cake;
    }
}
