# Use an official Kubernetes runtime as a parent image
FROM bitnami/kubectl:latest

# Create a directory to store your .yaml files
WORKDIR /app

# Copy your .yaml files into the container
COPY *.yaml /app/

EXPOSE 8080

# Apply your .yaml files using kubectl
RUN kubectl apply -f msfyv-backend-secret.yaml
# CMD ["kubectl", "apply", "-f", "/app/msfyv-backend.yaml"]
# CMD ["kubectl", "apply", "-f", "/app/msfyv-frontend-configmap.yaml"]
# CMD ["kubectl", "apply", "-f", "/app/msfyv-frontend.yaml"]
