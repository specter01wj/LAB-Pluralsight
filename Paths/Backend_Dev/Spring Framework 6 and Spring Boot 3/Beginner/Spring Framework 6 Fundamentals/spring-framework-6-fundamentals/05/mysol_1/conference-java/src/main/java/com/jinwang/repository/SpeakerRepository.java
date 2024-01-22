package com.jinwang.repository;

import com.jinwang.model.Speaker;

import java.util.List;

public interface SpeakerRepository {
    List<Speaker> findAll();
}
