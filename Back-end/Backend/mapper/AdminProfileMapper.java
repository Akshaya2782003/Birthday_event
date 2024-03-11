package com.birthday.event.mapper;

import com.birthday.event.dto.AdminProfileDto;
import com.birthday.event.entity.AdminProfile;

public class AdminProfileMapper {

    public static AdminProfileDto mapToAdminProfileDto(AdminProfile adminProfile) {
        return new AdminProfileDto(
                adminProfile.getId(),
                adminProfile.getName(),
                adminProfile.getEmail(),
                adminProfile.getPhone(),
                adminProfile.getBirthday(),
                adminProfile.getAddress(),
                adminProfile.getImage()
            );
    }

    public static AdminProfile mapToAdminProfile(AdminProfileDto adminProfileDto) {
        AdminProfile adminProfile = new AdminProfile();
        adminProfile.setId(adminProfileDto.getId());
        adminProfile.setName(adminProfileDto.getName());
        adminProfile.setEmail(adminProfileDto.getEmail());
        adminProfile.setPhone(adminProfileDto.getPhone());
        adminProfile.setBirthday(adminProfileDto.getBirthday());
        adminProfile.setAddress(adminProfileDto.getAddress());
        return adminProfile;
    }
}
