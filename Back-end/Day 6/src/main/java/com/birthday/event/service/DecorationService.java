package com.birthday.event.service;


import java.util.List;

import com.birthday.event.dto.DecorationDto;


public interface DecorationService
{
    DecorationDto createDecoration(DecorationDto decorationDto);

    DecorationDto getDecorationById(Long userId);

    List<DecorationDto> getAllDecorations();

    DecorationDto updateDecoration(Long userId, DecorationDto decorationDto);

    void deleteDecoration(Long userId);
}