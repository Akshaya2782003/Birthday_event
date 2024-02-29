package com.birthday.event.mapper;

import com.birthday.event.dto.UserDto;
import com.birthday.event.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getContactNo(),
                user.getEmail(),
                user.getCorporateName(),
                user.getPassword());
    }

    public static User mapToUser(UserDto userDto) {
        return new User(
                userDto.getId(),
                userDto.getName(),
                userDto.getContactNo(),
                userDto.getEmail(),
                userDto.getCorporateName(),
                userDto.getPassword());
    }

}