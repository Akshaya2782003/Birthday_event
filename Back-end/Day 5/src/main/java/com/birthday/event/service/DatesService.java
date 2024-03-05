package com.birthday.event.service;


import java.util.List;

import com.birthday.event.dto.DatesDto;

public interface DatesService
{
    DatesDto createDate(DatesDto datesDto);

    DatesDto getDateById(Long userId);

    List<DatesDto> getAllDates();

    DatesDto updateDate(Long userId, DatesDto datesDto);

    void deleteDate(Long userId);
}