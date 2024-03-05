package com.birthday.event.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PhotographDto
{
    private Long id;
    private String name;
    private int cost;
    private String image;
}
