package com.birthday.event.mapper;

import com.birthday.event.dto.PhotographyDto;
import com.birthday.event.entity.Photography;

public class PhotographyMapper {

    public static PhotographyDto mapToPhotographyDto(Photography photography) {
        return new PhotographyDto(
                photography.getId(),
                photography.getName(),
                photography.getLocation(),
                photography.getCost(),
                photography.getImage(),
                photography.isWishlisted());
    }

    public static Photography mapToPhotography(PhotographyDto photographyDto) {
        Photography photography = new Photography();
        photography.setId(photographyDto.getId());
        photography.setName(photographyDto.getName());
        photography.setLocation(photographyDto.getLocation());
        photography.setCost(photographyDto.getCost());
        photography.setImage(photographyDto.getImage());
        photography.setWishlisted(photographyDto.isWishlisted());
        return photography;
    }

}
