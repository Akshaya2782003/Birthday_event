package com.birthday.event.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PhotographyDto {
    private Long id;
    private String name;
    private String location;
    private double cost;
    private String image;
    private boolean wishlisted;
}
