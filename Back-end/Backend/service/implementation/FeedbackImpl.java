package com.birthday.event.service.implementation;

import org.springframework.stereotype.Service;

import com.birthday.event.dto.FeedbackDto;
import com.birthday.event.entity.Feedback;
import com.birthday.event.exception.ResourceNotFoundException;
import com.birthday.event.mapper.FeedbackMapper;
import com.birthday.event.repository.FeedbackRepo;
import com.birthday.event.service.FeedbackService;

import java.util.*;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FeedbackImpl implements FeedbackService {

    private FeedbackRepo feedbackRepo;

    @Override
    public FeedbackDto createFeedback(FeedbackDto feedbackDto) {
        Feedback feedback = FeedbackMapper.mapToFeedback(feedbackDto);
        Feedback savedFeedback = feedbackRepo.save(feedback);
        return FeedbackMapper.mapToFeedbackDto(savedFeedback);
    }

    @Override
    public FeedbackDto getFeedbackById(Long userId) {
        Feedback feedback = feedbackRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return FeedbackMapper.mapToFeedbackDto(feedback);
    }

    @Override
    public List<FeedbackDto> getAllFeedbacks() {
        List<Feedback> feedbacks = feedbackRepo.findAll();
        return feedbacks.stream().map(FeedbackMapper::mapToFeedbackDto).collect(Collectors.toList());
    }

    @Override
    public FeedbackDto updateFeedback(Long userId, FeedbackDto feedbackDto) {
        Feedback existingFeedback = feedbackRepo.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
                Feedback updatedFeedback = FeedbackMapper.mapToFeedback(feedbackDto);
        updatedFeedback.setId(existingFeedback.getId());
        Feedback savedFeedback = feedbackRepo.save(updatedFeedback);
        return FeedbackMapper.mapToFeedbackDto(savedFeedback);
    }

    @Override
    public void deleteFeedback(Long userId) {
        feedbackRepo.deleteById(userId);
    }
}