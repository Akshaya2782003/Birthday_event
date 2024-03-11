package com.birthday.event.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FoodDto {
    private Long id;
    private String name;
    private double price;
    private int minimumQuantity;
    private List<String> menu;
    private String image;
    private boolean wishlisted;
}
