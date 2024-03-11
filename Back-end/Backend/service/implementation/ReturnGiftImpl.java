package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.ReturnGiftDto;
import com.birthday.event.entity.Cake;
import com.birthday.event.entity.Returngift;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.ReturnGiftMapper;
import com.birthday.event.repository.ReturnGiftRepo;
import com.birthday.event.service.ReturnGiftService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ReturnGiftImpl implements ReturnGiftService {

    private final ReturnGiftRepo returnGiftRepository;

    @Override
    public ReturnGiftDto createReturnGift(ReturnGiftDto returnGiftDto) {
        Returngift returnGift = ReturnGiftMapper.mapToReturnGift(returnGiftDto);
        Returngift savedReturnGift = returnGiftRepository.save(returnGift);
        return ReturnGiftMapper.mapToReturnGiftDto(savedReturnGift);
    }

    @Override
    public ReturnGiftDto getReturnGiftById(Long returnGiftId) {
        Returngift returnGift = returnGiftRepository.findById(returnGiftId)
                .orElseThrow(() -> new ResourceNotFoundException("ReturnGift not found with id: " + returnGiftId));
        return ReturnGiftMapper.mapToReturnGiftDto(returnGift);
    }

    @Override
    public List<ReturnGiftDto> getAllReturnGifts() {
        List<Returngift> returnGifts = returnGiftRepository.findAll();
        return returnGifts.stream().map(ReturnGiftMapper::mapToReturnGiftDto).collect(Collectors.toList());
    }

    @Override
    public ReturnGiftDto updateReturnGift(Long returnGiftId, ReturnGiftDto returnGiftDto) {
        Returngift existingReturnGift = returnGiftRepository.findById(returnGiftId)
                .orElseThrow(() -> new ResourceNotFoundException("ReturnGift not found with id: " + returnGiftId));
        Returngift updatedReturnGift = ReturnGiftMapper.mapToReturnGift(returnGiftDto);
        updatedReturnGift.setId(existingReturnGift.getId());
        Returngift savedReturnGift = returnGiftRepository.save(updatedReturnGift);
        return ReturnGiftMapper.mapToReturnGiftDto(savedReturnGift);
    }

    @Override
    public void deleteReturnGift(Long returnGiftId) {
        returnGiftRepository.deleteById(returnGiftId);
    }

    @Override
    public List<ReturnGiftDto> getReturnGiftsByUserId(Long userId) {
        List<Returngift> returnGifts = returnGiftRepository.findUserById(userId);
        return returnGifts.stream().map(ReturnGiftMapper::mapToReturnGiftDto).collect(Collectors.toList());
    }


     public List<Returngift> getWishlistedCakes() {
        return returnGiftRepository.findByWishlistedTrue();
    }

    @Override
    public List<Returngift> getWishlistedReturngifts() {
        return returnGiftRepository.findByWishlistedTrue();
    }
}
