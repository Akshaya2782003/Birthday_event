package com.birthday.event.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.CartDto;
import com.birthday.event.entity.Cart;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.CartMapper;
import com.birthday.event.repository.CartRepo;
import com.birthday.event.service.CartService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CartImpl implements CartService {

    private final CartRepo cartRepository;

    @Override
    public CartDto createCartItem(CartDto cartDto) {
        Cart cart = CartMapper.mapToCart(cartDto);
        Cart savedCart = cartRepository.save(cart);
        return CartMapper.mapToCartDto(savedCart);
    }

    @Override
    public CartDto getCartItemById(Long cartItemId) {
        Cart cartItem = cartRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("CartItem not found with id: " + cartItemId));
        return CartMapper.mapToCartDto(cartItem);
    }

    @Override
    public List<CartDto> getAllCartItems() {
        List<Cart> cartItems = cartRepository.findAll();
        return cartItems.stream().map(CartMapper::mapToCartDto).collect(Collectors.toList());
    }

    @Override
    public CartDto updateCartItem(Long cartItemId, CartDto cartDto) {
        Cart existingCartItem = cartRepository.findById(cartItemId)
                .orElseThrow(() -> new ResourceNotFoundException("CartItem not found with id: " + cartItemId));
        Cart updatedCartItem = CartMapper.mapToCart(cartDto);
        updatedCartItem.setId(existingCartItem.getId());
        Cart savedCartItem = cartRepository.save(updatedCartItem);
        return CartMapper.mapToCartDto(savedCartItem);
    }

    @Override
    public void deleteCartItem(Long cartItemId) {
        cartRepository.deleteById(cartItemId);
    }
}
