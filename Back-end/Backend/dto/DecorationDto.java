package com.birthday.event.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DecorationDto
{
    private Long id;
    private String name;
    private String theme;
    private int cost;
    private String image;
    private boolean wishlisted;
}
