package com.example.demo.search;

import com.example.demo.domain.Batch;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class BatchSpecification implements Specification<Batch> {
    private final BatchSearchCriteria criteria;

    public BatchSpecification(BatchSearchCriteria criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<Batch> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        List<Predicate> predicates = new ArrayList<>();

        if (criteria.getBatchNummer() != null) {
            predicates.add(builder.equal(root.get("batchNummer"), criteria.getBatchNummer()));
        }

        if (criteria.getProductNummer() != null) {
            predicates.add(builder.equal(root.get("analyse").get("productNummer"), criteria.getProductNummer()));
        }

        if (criteria.getUsername() != null) {
            predicates.add(builder.equal(root.get("username"), criteria.getUsername()));
        }

        if (criteria.getAnalyseType() != null) {
            predicates.add(builder.equal(root.get("analyseType"), criteria.getAnalyseType()));
        }

        return builder.and(predicates.toArray(new Predicate[0]));
    }
}
