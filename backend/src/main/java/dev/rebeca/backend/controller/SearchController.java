package dev.rebeca.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.rebeca.backend.model.AskRequest;
import dev.rebeca.backend.model.AskResponse;
import dev.rebeca.backend.service.GeminiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class SearchController {

    private final GeminiService geminiService;

    @PostMapping("/ask")
    public ResponseEntity<AskResponse> ask(
            @RequestBody AskRequest request) {

        String question = request.getQuestion();

        if (question == null || question.trim().isEmpty()) {
            return ResponseEntity.badRequest().body(
                AskResponse.builder()
                    .success(false)
                    .error("Please enter a question.")
                    .build()
            );
        }

        log.info("Question received: {}", question);
        AskResponse response = geminiService.ask(question.trim());
        return ResponseEntity.ok(response);
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok(
            "Rebeca's backend is running."
        );
    }
}