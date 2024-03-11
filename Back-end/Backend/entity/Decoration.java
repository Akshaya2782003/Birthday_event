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
@Table(name = "decorations")
public class Decoration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "theme", nullable = false)
    private String theme;

    @Column(name = "cost", nullable = false)
    private int cost;

    @Column(name = "image", nullable = false)
    private String image;

    @Column(name = "wishlisted", nullable = false, columnDefinition = "boolean default false")
    private boolean wishlisted;
}