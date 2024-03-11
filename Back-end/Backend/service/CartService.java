package com.birthday.event.service;

import java.util.List;


import com.birthday.event.dto.CartDto;


public interface CartService {
    CartDto createCartItem(CartDto cartDto);

    CartDto getCartItemById(Long cartItemId);

    List<CartDto> getAllCartItems();

    CartDto updateCartItem(Long cartItemId, CartDto cartDto);

    void deleteCartItem(Long cartItemId);

}
