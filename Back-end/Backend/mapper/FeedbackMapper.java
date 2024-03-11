package com.birthday.event.mapper;

import com.birthday.event.dto.FeedbackDto;
import com.birthday.event.entity.Feedback;

public class  FeedbackMapper {

    public static FeedbackDto mapToFeedbackDto(Feedback feedback) {
        return new FeedbackDto(
                feedback.getId(),
                feedback.getComment(),
                feedback.getRating(),
                feedback.getReaction()
                );
    }

    public static Feedback mapToFeedback(FeedbackDto feedbackDto) {
        return new Feedback(
                feedbackDto.getId(),
                feedbackDto.getComment(),
                feedbackDto.getRating(),
                feedbackDto.getReaction()
        );
    }

}