package com.birthday.event.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VenueDto {
    private Long id;
    private String name;
    private String location;
    private int members;
    private double cost;
    private String image;
    private boolean wishlisted;
}
