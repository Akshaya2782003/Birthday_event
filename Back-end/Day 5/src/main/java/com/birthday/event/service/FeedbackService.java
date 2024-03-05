package com.birthday.event.service;
import java.util.List;

import com.birthday.event.dto.FeedbackDto;

public interface FeedbackService
{
    FeedbackDto createFeedback(FeedbackDto feedbackDto);

    FeedbackDto getFeedbackById(Long userId);

    List<FeedbackDto> getAllFeedbacks();

    FeedbackDto updateFeedback(Long userId, FeedbackDto feedbackDto);

    void deleteFeedback(Long userId);
}