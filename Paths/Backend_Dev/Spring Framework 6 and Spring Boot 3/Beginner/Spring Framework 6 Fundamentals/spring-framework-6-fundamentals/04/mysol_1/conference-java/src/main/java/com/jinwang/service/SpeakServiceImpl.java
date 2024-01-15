package com.jinwang.service;

import com.jinwang.model.Speaker;
import com.jinwang.repository.SpeakerRepository;
import com.jinwang.repository.StubSpeakerRepositoryImpl;

import java.util.List;

public class SpeakServiceImpl implements SpeakService {

    private SpeakerRepository repository;

    @Override
    public List<Speaker> findAll() {
        return repository.findAll();
    }

    public void setRepository(SpeakerRepository repository) {
        this.repository = repository;
    }
}
