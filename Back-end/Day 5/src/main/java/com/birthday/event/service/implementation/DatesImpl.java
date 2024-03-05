package com.birthday.event.service.implementation;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.DatesDto;
import com.birthday.event.entity.Dates;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.DatesMapper;
import com.birthday.event.repository.DatesRepo;
import com.birthday.event.service.DatesService;
import java.util.*;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class DatesImpl implements DatesService {

    private DatesRepo datesRepo;

    @Override
    public DatesDto createDate(DatesDto datesDto) {
        Dates date = DatesMapper.mapToDate(datesDto);
        Dates savedDate = datesRepo.save(date);
        return DatesMapper.mapToDateDto(savedDate);
    }

    @Override
    public DatesDto getDateById(Long userId) {
        Dates date = datesRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return DatesMapper.mapToDateDto(date);
    }

    @Override
    public List<DatesDto> getAllDates() {
        List<Dates> dates = datesRepo.findAll();
        return dates.stream().map(DatesMapper::mapToDateDto).collect(Collectors.toList());
    }

    @Override
    public DatesDto updateDate(Long userId, DatesDto datesDto) {
        Dates existingDate = datesRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Dates updatedDate = DatesMapper.mapToDate(datesDto);
        updatedDate.setId(existingDate.getId());
        Dates savedUser = datesRepo.save(updatedDate);
        return DatesMapper.mapToDateDto(savedUser);
    }

    @Override
    public void deleteDate(Long userId) {
        datesRepo.deleteById(userId);
    }
}