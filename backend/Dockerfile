# Start from official Java 17 image
FROM eclipse-temurin:17-jdk-alpine

# Set working directory inside container
WORKDIR /app

# Copy Maven wrapper and pom first
# Docker caches these layers separately
# so dependencies only re-download when pom.xml changes
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Make mvnw executable
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:resolve -q

# Copy source code
COPY src src

# Build the jar, skip tests
RUN ./mvnw package -DskipTests -q

# Run the jar
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]