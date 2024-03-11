package com.birthday.event.mapper;

import com.birthday.event.dto.CartDto;
import com.birthday.event.entity.Cart;

public class CartMapper {

    public static CartDto mapToCartDto(Cart cart) {
        return new CartDto(
                cart.getId(),
                cart.getOrderId(),
                cart.getCake(),
                cart.getVenue(),
                cart.getPhotography(),
                cart.getFood(),
                cart.getEntertainment(),
                cart.getDecorations(),
                cart.getGift()
        );
    }

    public static Cart mapToCart(CartDto cartDto) {
        Cart cart = new Cart();
        cart.setId(cartDto.getId());
        cart.setOrderId(cartDto.getOrderId());
        cart.setCake(cartDto.getCake());
        cart.setVenue(cartDto.getVenue());
        cart.setPhotography(cartDto.getPhotography());
        cart.setFood(cartDto.getFood());
        cart.setEntertainment(cartDto.getEntertainment());
        cart.setDecorations(cartDto.getDecorations());
        cart.setGift(cartDto.getGift());
        return cart;
    }
}
