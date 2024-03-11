package com.birthday.event.service;

import java.util.List;

import com.birthday.event.dto.ReturnGiftDto;
import com.birthday.event.entity.Returngift;


public interface ReturnGiftService {
    ReturnGiftDto createReturnGift(ReturnGiftDto returnGiftDto);

    ReturnGiftDto getReturnGiftById(Long returnGiftId);

    List<ReturnGiftDto> getAllReturnGifts();

    ReturnGiftDto updateReturnGift(Long returnGiftId, ReturnGiftDto returnGiftDto);

    void deleteReturnGift(Long returnGiftId);
    
    List<ReturnGiftDto> getReturnGiftsByUserId(Long userId);

    public List<Returngift> getWishlistedReturngifts() ;
}
