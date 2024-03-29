package com.birthday.event.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminProfileDto
{
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String birthday;
    private String address;
    private String image;

    
}
