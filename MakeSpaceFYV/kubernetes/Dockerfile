# Use an official Kubernetes runtime as a parent image
FROM kubectl:latest

# Create a directory to store your .yaml files
RUN mkdir /app

# Copy your .yaml files into the container
COPY *.yaml /app/

# Apply your .yaml files using kubectl
CMD ["kubectl", "apply", "-f", "/app/msfyv-backend-secret.yaml"]
CMD ["kubectl", "apply", "-f", "/app/msfyv-backend.yaml"]
CMD ["kubectl", "apply", "-f", "/app/msfyv-frontend-configmap.yaml"]
CMD ["kubectl", "apply", "-f", "/app/msfyv-frontend.yaml"]
