package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthday.event.dto.WishlistDto;
import com.birthday.event.entity.Wishlist;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.WishlistMapper;
import com.birthday.event.repository.ReturnGiftRepo;
import com.birthday.event.repository.WishlistRepo;
import com.birthday.event.service.WishlistService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WishlistImpl implements WishlistService {

    private final WishlistRepo wishlistRepository;

    @Override
    public WishlistDto createWishlistItem(WishlistDto wishlistDto) {
        Wishlist wishlistItem = WishlistMapper.mapToWishlist(wishlistDto);
        Wishlist savedWishlistItem = wishlistRepository.save(wishlistItem);
        return WishlistMapper.mapToWishlistDto(savedWishlistItem);
    }

    @Override
    public WishlistDto getWishlistItemById(Long wishlistItemId) {
        Wishlist wishlistItem = wishlistRepository.findById(wishlistItemId)
                .orElseThrow(() -> new ResourceNotFoundException("WishlistItem not found with id: " + wishlistItemId));
        return WishlistMapper.mapToWishlistDto(wishlistItem);
    }

    @Override
    public List<WishlistDto> getAllWishlistItems() {
        List<Wishlist> wishlistItems = wishlistRepository.findAll();
        return wishlistItems.stream().map(WishlistMapper::mapToWishlistDto).collect(Collectors.toList());
    }

    @Override
    public List<WishlistDto> getWishlistItemsByUserId(Long userId) {
        List<Wishlist> wishlistItems = wishlistRepository.findUserById(userId);
        if (wishlistItems.isEmpty()) {
            throw new ResourceNotFoundException("No wishlist items found for user with id: " + userId);
        }
        return wishlistItems.stream().map(WishlistMapper::mapToWishlistDto).collect(Collectors.toList());
    }

    @Override
    public WishlistDto updateWishlistItem(Long wishlistItemId, WishlistDto wishlistDto) {
        Wishlist existingWishlistItem = wishlistRepository.findById(wishlistItemId)
                .orElseThrow(() -> new ResourceNotFoundException("WishlistItem not found with id: " + wishlistItemId));
        Wishlist updatedWishlistItem = WishlistMapper.mapToWishlist(wishlistDto);
        updatedWishlistItem.setId(existingWishlistItem.getId());
        Wishlist savedWishlistItem = wishlistRepository.save(updatedWishlistItem);
        return WishlistMapper.mapToWishlistDto(savedWishlistItem);
    }

    @Override
    public void deleteWishlistItem(Long wishlistItemId) {
        wishlistRepository.deleteById(wishlistItemId);
    }

   

}
