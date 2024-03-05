package com.birthday.event.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.event.dto.FeedbackDto;
import com.birthday.event.service.FeedbackService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {

    private FeedbackService feedbackService;

    // Add User REST API
    @PostMapping
    public ResponseEntity<FeedbackDto> createFeedback(@RequestBody FeedbackDto feedbackDto) {
        FeedbackDto savedFeedback = feedbackService.createFeedback(feedbackDto);
        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
    }

    // Get User REST API
    @GetMapping("{id}")
    public ResponseEntity<FeedbackDto> getDateById(@PathVariable("id") Long userId) {
        FeedbackDto feedbackDto = feedbackService.getFeedbackById(userId);
        return ResponseEntity.ok(feedbackDto);
    }

    // Get All Users REST API
    @GetMapping
    public ResponseEntity<List<FeedbackDto>> getAllFeedback() {
        List<FeedbackDto> feedback = feedbackService.getAllFeedbacks();
        return ResponseEntity.ok(feedback);
    }

    // Update User REST API
    @PutMapping("{id}")
    public ResponseEntity<FeedbackDto> updateFeedback(@PathVariable("id") Long userId, @RequestBody FeedbackDto feedbackDto) {
        FeedbackDto updatedFeedback = feedbackService.updateFeedback(userId, feedbackDto);
        return ResponseEntity.ok(updatedFeedback);
    }

    // Delete User REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable("id") Long userId) {
        feedbackService.deleteFeedback(userId);
        return ResponseEntity.noContent().build();
    }
}