package com.birthday.event.service;
import java.util.List;

import com.birthday.event.dto.CakeDto;
import com.birthday.event.entity.Cake;

public interface CakeService
{
    CakeDto createCake(CakeDto cakeDto);

    CakeDto getCakeById(Long userId);

    List<CakeDto> getAllCakes();

    CakeDto updateCake(Long userId, CakeDto cakeDto);

    void deleteCake(Long userId);

    List<CakeDto> getCakesByUserId(Long userId);

     public List<Cake> getWishlistedCakes() ;
}