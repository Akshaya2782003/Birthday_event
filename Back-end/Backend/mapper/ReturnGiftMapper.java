package com.birthday.event.mapper;

import com.birthday.event.dto.ReturnGiftDto;
import com.birthday.event.entity.Returngift;

public class ReturnGiftMapper {

    public static ReturnGiftDto mapToReturnGiftDto(Returngift returnGift) {
        return new ReturnGiftDto(
                returnGift.getId(),
                returnGift.getName(),
                returnGift.getMinimumQuantity(),
                returnGift.getCost(),
                returnGift.getImage(),
                returnGift.isWishlisted());
    }

    public static Returngift mapToReturnGift(ReturnGiftDto returnGiftDto) {
        Returngift returnGift = new Returngift();
        returnGift.setId(returnGiftDto.getId());
        returnGift.setName(returnGiftDto.getName());
        returnGift.setMinimumQuantity(returnGiftDto.getMinimumQuantity());
        returnGift.setCost(returnGiftDto.getCost());
        returnGift.setImage(returnGiftDto.getImage());
        returnGift.setWishlisted(returnGiftDto.isWishlisted());
        return returnGift;
    }
}
