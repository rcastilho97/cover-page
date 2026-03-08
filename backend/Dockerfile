FROM eclipse-temurin:21-jdk-alpine AS builder
WORKDIR /workspace

# Copy Maven wrapper + config
COPY backend/mvnw ./backend/mvnw
COPY backend/.mvn ./backend/.mvn
COPY backend/pom.xml ./backend/pom.xml

RUN chmod +x backend/mvnw

WORKDIR /workspace/backend
RUN ./mvnw dependency:resolve -q

# Copy source
COPY backend/src ./src

# Build jar
RUN ./mvnw package -DskipTests -q

# --- Runtime image ---
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

COPY --from=builder /workspace/backend/target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]