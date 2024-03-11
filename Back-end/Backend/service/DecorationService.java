package com.birthday.event.service;

import java.util.List;

import com.birthday.event.dto.DecorationDto;
import com.birthday.event.entity.Decoration;

public interface DecorationService {
    DecorationDto createDecoration(DecorationDto decorationDto);

    DecorationDto getDecorationById(Long decorationId);

    List<DecorationDto> getAllDecorations();

    DecorationDto updateDecoration(Long decorationId, DecorationDto decorationDto);

    void deleteDecoration(Long decorationId);
    
    List<DecorationDto> getDecorationsByUserId(Long userId);

     public List<Decoration> getWishlistedDecorations() ;
}
