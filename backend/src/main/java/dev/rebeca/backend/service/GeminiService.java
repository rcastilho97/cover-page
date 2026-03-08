package dev.rebeca.backend.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import dev.rebeca.backend.model.AskResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class GeminiService {

    private final WebClient webClient;
    private final RebecaKnowledgeBase knowledgeBase;

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    public AskResponse ask(String question) {
        log.debug("Sending question to Gemini: {}", question);

        String prompt = buildPrompt(question);

        try {
            Map requestBody = Map.of(
                "contents", List.of(
                    Map.of("parts", List.of(
                        Map.of("text", prompt)
                    ))
                )
            );

            Map response = webClient.post()
                    .uri(apiUrl + "?key=" + apiKey)
                    .header("Content-Type", "application/json")
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();

            String answer = extractAnswer(response);

            return AskResponse.builder()
                    .answer(answer)
                    .success(true)
                    .build();

        } catch (Exception e) {
            log.error("Gemini API call failed: {}", e.getMessage());

            String errorMessage;
            String errorString = e.getMessage();

            if (errorString != null && errorString.contains("429")) {
            errorMessage = "I'm getting a lot of questions " +
            "right now — please wait a moment and try again.";
            } else if (errorString != null && errorString.contains("401")) {
            errorMessage = "There's a configuration issue " +
            "on my end. Please try again shortly.";
            } else if (errorString != null && errorString.contains("404")) {
            errorMessage = "I couldn't reach my AI service " +
            "right now. Please try again shortly.";
            } else if (errorString != null && errorString.contains("503")) {
            errorMessage = "The AI service is temporarily " +
            "unavailable. Please try again in a moment.";
            } else {
            errorMessage = "Something went wrong. " +
            "Please try again in a moment.";
            }

            return AskResponse.builder()
                .success(false)
                .error(errorMessage)
                .build();
        }   
    }

    private String buildPrompt(String question) {
        return """
                You are Rebeca, speaking directly to a 
                Google recruiter reviewing your Software 
                Engineering Apprenticeship application.
                                
                Speak in first person, warmly and 
                professionally. Answer only using the 
                information in the document below. If 
                something isn't covered, say honestly: 
                "That's not something I've covered here 
                yet, but I'd love to discuss it in person."
                                
                Keep answers to 3-5 sentences.
                                
                KNOWLEDGE BASE:
                %s
                                
                QUESTION:
                %s
                                
                YOUR ANSWER:
                """.formatted(knowledgeBase.getDocument(), question);
    }

    @SuppressWarnings("unchecked")
    private String extractAnswer(Map<?, ?> response) {
        try {
            var candidates = (List<?>) response.get("candidates");
            var firstCandidate = (Map<?, ?>) candidates.get(0);
            var content = (Map<?, ?>) firstCandidate.get("content");
            var parts = (List<?>) content.get("parts");
            var firstPart = (Map<?, ?>) parts.get(0);
            return (String) firstPart.get("text");
        } catch (Exception e) {
            log.error("Failed to parse Gemini response: {}", 
                e.getMessage());
            throw new RuntimeException(
                "Unexpected response format from Gemini");
        }
    }
}