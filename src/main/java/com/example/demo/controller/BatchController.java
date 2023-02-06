package com.example.demo.controller;

import com.example.demo.domain.Batch;
import com.example.demo.repository.BatchRepository;
import com.example.demo.search.BatchSearchCriteria;
import com.example.demo.search.BatchSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/batches")
public class BatchController {

    private final BatchRepository batchRepository;

    @Autowired
    public BatchController(BatchRepository batchRepository) {
        this.batchRepository = batchRepository;
    }

        @GetMapping
        public List<Batch> search(@ModelAttribute BatchSearchCriteria criteria) {
            return batchRepository.findAll(new BatchSpecification(criteria));
        }


}
