# Use an official Ubuntu runtime as a parent image
FROM ubuntu:latest

# Update the package list and install necessary packages
RUN apt-get update && apt-get install -y curl

# Install Docker CLI
RUN curl -fsSL https://get.docker.com -o get-docker.sh
RUN sh get-docker.sh
RUN sh dockerd

# Install kubectl
RUN curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
RUN chmod +x kubectl
RUN mv kubectl /usr/local/bin/

# Install Minikube
RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
RUN install minikube-linux-amd64 /usr/local/bin/minikube

# Set the working directory to /app
WORKDIR /app

# Start Minikube
CMD ["minikube", "start"]