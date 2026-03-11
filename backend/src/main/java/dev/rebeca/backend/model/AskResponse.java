package dev.rebeca.backend.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AskResponse {
    private String answer;
    private boolean success;
    private String error;
    private List<String> relevantSections;
}
