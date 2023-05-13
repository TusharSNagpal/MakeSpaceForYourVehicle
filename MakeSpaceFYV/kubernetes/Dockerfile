FROM ubuntu:latest

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl

# Install Minikube
RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
    && install minikube-linux-amd64 /usr/local/bin/minikube \
    && rm minikube-linux-amd64

# Start Minikube cluster
RUN su root
RUN apt-get update
RUN apt-get install -y docker.io
RUN dockerd
# RUN sudo apt-get update
# RUN sudo apt-get install -y docker.io
RUN minikube start --vm-driver=docker
RUN minikube ssh

# Expose Kubernetes API server port
EXPOSE 8443

# Set entrypoint
ENTRYPOINT ["minikube", "start", "--vm-driver=docker", "--apiserver-ips=0.0.0.0", "--apiserver-name=0.0.0.0"]

# Set default command
# CMD []