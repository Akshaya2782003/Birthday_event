package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.birthday.event.dto.CartDto;
import com.birthday.event.service.CartService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/carts")
@CrossOrigin(origins ="*")
public class CartController {

    private CartService cartService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<CartDto> createCartItem(@RequestBody CartDto cartDto) {
        CartDto savedCartItem = cartService.createCartItem(cartDto);
        return new ResponseEntity<>(savedCartItem, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CartDto> getCartItemById(@PathVariable("id") Long cartItemId) {
        CartDto cartDto = cartService.getCartItemById(cartItemId);
        return ResponseEntity.ok(cartDto);
    }

    @GetMapping
    public ResponseEntity<List<CartDto>> getAllCartItems() {
        List<CartDto> cartItems = cartService.getAllCartItems();
        return ResponseEntity.ok(cartItems);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<CartDto> updateCartItem(@PathVariable("id") Long cartItemId, @RequestBody CartDto cartDto) {
        CartDto updatedCartItem = cartService.updateCartItem(cartItemId, cartDto);
        return ResponseEntity.ok(updatedCartItem);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable("id") Long cartItemId) {
        cartService.deleteCartItem(cartItemId);
        return ResponseEntity.noContent().build();
    }
}
