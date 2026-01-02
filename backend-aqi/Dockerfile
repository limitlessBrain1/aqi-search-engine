# Use official Java 17 image
FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

# Copy Maven wrapper & pom
COPY pom.xml .

# Copy source code
COPY src ./src

# Build the application
RUN ./mvnw package -DskipTests || mvn package -DskipTests

# Expose port (Render provides PORT dynamically)
EXPOSE 8080

# Run the Spring Boot app
CMD ["java", "-jar", "target/aqi-backend-0.0.1-SNAPSHOT.jar"]
