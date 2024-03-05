package com.birthday.event.service;


import java.util.List;

import com.birthday.event.dto.PhotographDto;

public interface PhotographService
{
    PhotographDto createPhotograph(PhotographDto photographDto);

    PhotographDto getPhotographById(Long userId);

    List<PhotographDto> getAllPhotographs();

    PhotographDto updatePhotograph(Long userId, PhotographDto photographDto);

    void deletePhotograph(Long userId);
}