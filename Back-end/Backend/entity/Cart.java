package com.birthday.event.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "carts")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_id", nullable = false)
    private String orderId;

    @Column(name = "cake", nullable = true)
    private String cake;

    @Column(name = "venue", nullable = true)
    private String venue;

    @Column(name = "photography", nullable = true)
    private String photography;

    @Column(name = "food", nullable = true)
    private String food;

    @Column(name = "entertainment", nullable = true)
    private String entertainment;

    @Column(name = "decorations", nullable = true)
    private String decorations;

    @Column(name = "gift", nullable = true)
    private String gift;
}
