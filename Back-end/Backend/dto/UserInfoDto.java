package com.birthday.event.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoDto {
    private int id;
    private String name;
    private String email;
    private String password;
    private String roles;
}
