# Use an official Ubuntu runtime as a parent image
FROM ubuntu:latest

# Install necessary packages
RUN apt-get update && apt-get install -y curl

# Install Minikube
RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
RUN install minikube-linux-amd64 /usr/local/bin/minikube

# Start Minikube with Docker driver
CMD ["minikube", "start", "--vm-driver=docker"]