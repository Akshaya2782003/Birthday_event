package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.AdminProfileDto;
import com.birthday.event.dto.CakeDto;
import com.birthday.event.entity.AdminProfile;
import com.birthday.event.entity.Cake;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.AdminProfileMapper;
import com.birthday.event.mapper.CakeMapper;
import com.birthday.event.repository.AdminProfileRepo;
import com.birthday.event.service.AdminProfileService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminProfileImpl implements AdminProfileService {

    private final AdminProfileRepo adminProfileRepository;

    @Override
    public AdminProfileDto createAdminProfileItem(AdminProfileDto adminProfileDto) {
        AdminProfile cake = AdminProfileMapper.mapToAdminProfile(adminProfileDto);
        AdminProfile savedAdminProfile = adminProfileRepository.save(cake);
        return AdminProfileMapper.mapToAdminProfileDto(savedAdminProfile);
    }

    @Override
    public AdminProfileDto getAdminProfileById(Long adminProfileId) {
        AdminProfile adminProfile = adminProfileRepository.findById(adminProfileId)
                .orElseThrow(() -> new ResourceNotFoundException("AdminProfile not found with id: " + adminProfileId));
        return AdminProfileMapper.mapToAdminProfileDto(adminProfile);
    }

    @Override
    public List<AdminProfileDto> getAllAdminProfiles() {
        List<AdminProfile> adminProfiles = adminProfileRepository.findAll();
        return adminProfiles.stream().map(AdminProfileMapper::mapToAdminProfileDto).collect(Collectors.toList());
    }

    @Override
    public AdminProfileDto updateAdminProfile(Long adminProfileId, AdminProfileDto adminProfileDto) {
        AdminProfile existingAdminProfile = adminProfileRepository.findById(adminProfileId)
                .orElseThrow(() -> new ResourceNotFoundException("AdminProfile not found with id: " + adminProfileId));
        AdminProfile updatedAdminProfile = AdminProfileMapper.mapToAdminProfile(adminProfileDto);
        updatedAdminProfile.setId(existingAdminProfile.getId());
        AdminProfile savedAdminProfile = adminProfileRepository.save(updatedAdminProfile);
        return AdminProfileMapper.mapToAdminProfileDto(savedAdminProfile);
    }

    @Override
    public void deleteAdminProfile(Long adminProfileId) {
        adminProfileRepository.deleteById(adminProfileId);
    }

    @Override
    public List<AdminProfileDto> getAdminProfilesByUserId(Long userId) {
        List<AdminProfile> adminProfiles = adminProfileRepository.findUserById(userId);
        return adminProfiles.stream().map(AdminProfileMapper::mapToAdminProfileDto).collect(Collectors.toList());
    }
}
