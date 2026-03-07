package dev.rebeca.backend.service;

import org.springframework.stereotype.Component;

@Component
public class RebecaKnowledgeBase {

    public String getDocument() {
        return """
                MY NAME AND OVERVIEW
                My name is Rebeca. I am applying for 
                Google's Software Engineering Apprenticeship.
                I am based in Ireland.
                I am a creative professional transitioning 
                into software engineering.
                
                MY BACKGROUND
                [We will fill this in together]
                
                MY TECHNICAL SKILLS
                [We will fill this in together]
                
                WHY I WANT TO WORK AT GOOGLE
                [We will fill this in together]
                
                WHY I AM CHOOSING AN APPRENTICESHIP
                [We will fill this in together]
                """;
    }
}
