package com.birthday.event.service;
import java.util.List;

import com.birthday.event.dto.PhotographyDto;
import com.birthday.event.entity.Photography;


public interface PhotographyService {
    PhotographyDto createPhotography(PhotographyDto photographyDto);

    PhotographyDto getPhotographyById(Long photographyId);

    List<PhotographyDto> getAllPhotographyServices();

    PhotographyDto updatePhotography(Long photographyId, PhotographyDto photographyDto);

    void deletePhotography(Long photographyId);
    
    List<PhotographyDto> getPhotographyServicesByUserId(Long userId);

     public List<Photography> getWishlistedPhotography() ;
}
