package com.birthday.event.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FoodDto
{
    private Long id;
    private String type;
    private int quantity;
    private int cost;
    private String image;
}
