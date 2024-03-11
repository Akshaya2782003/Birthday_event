package com.birthday.event.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WishlistDto {
    private Long id;
    private String itemName;
    private String category;
    private String imgUrl;
    private Long userId;  // New field for user ID
}
