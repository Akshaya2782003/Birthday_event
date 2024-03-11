package com.birthday.event.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

import java.util.Arrays;


@Configuration
public class OpenApiConfig {

 
    @Bean
    public OpenAPI defineOpenApi() {
        Server server = new Server();
        server.setUrl("http://localhost:8080");
        server.setDescription("App Development");

        Info info = new Info()
                .title("JWT Authendication")
                .version("0.1")
                .description("swagger configuration testing.");

        // Define JWT security scheme
        SecurityScheme securityScheme = new SecurityScheme()
                .type(SecurityScheme.Type.HTTP)
                .scheme("bearer")
                .bearerFormat("JWT");

        // Add the JWT security scheme to the components
        Components components = new Components().addSecuritySchemes("bearerAuth", securityScheme);

        // Add security requirement with JWT authentication
        SecurityRequirement securityRequirement = new SecurityRequirement().addList("bearerAuth");

        // Create the OpenAPI object with components and security requirements
        return new OpenAPI()
                .info(info)
                .servers(Arrays.asList(server))
                .components(components)
                .addSecurityItem(securityRequirement);
        }
        
        @Configuration
        public class WebConfig implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/")
                .allowedOrigins("http://localhost:5173") // Allow requests from the frontend running on localhost:3000
                .allowedMethods("GET", "POST", "PUT", "DELETE");
        }
        }
}
