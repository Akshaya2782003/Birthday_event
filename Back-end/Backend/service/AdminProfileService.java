package com.birthday.event.service;
import java.util.List;

import com.birthday.event.dto.AdminProfileDto;


public interface AdminProfileService
{
    AdminProfileDto createAdminProfileItem(AdminProfileDto adminProfileDto);

    AdminProfileDto getAdminProfileById(Long userId);

    List<AdminProfileDto> getAllAdminProfiles();

    AdminProfileDto updateAdminProfile(Long userId, AdminProfileDto adminProfileDto);

    void deleteAdminProfile(Long userId);

    List<AdminProfileDto> getAdminProfilesByUserId(Long userId);
}