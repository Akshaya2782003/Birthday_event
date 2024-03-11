package com.birthday.event.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReturnGiftDto {
    private Long id;
    private String name;
    private int minimumQuantity;
    private double cost;
    private String image;
    private boolean wishlisted;
}
