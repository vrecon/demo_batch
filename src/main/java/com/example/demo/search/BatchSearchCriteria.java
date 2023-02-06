package com.example.demo.search;

import lombok.Data;

@Data
public class BatchSearchCriteria {
    private String batchNummer;
    private String productNummer;
    private String username;
    private String analyseType;
}
