FROM ubuntu:latest

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl wget apt-transport-https gnupg2 && \
    curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | tee /etc/apt/sources.list.d/kubernetes.list && \
    apt-get update && \
    apt-get install -y kubectl
    
# Install minikube
RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && \
    install minikube-linux-amd64 /usr/local/bin/minikube

RUN apt-get update && \
    apt-get install docker.io -y

# Start minikube
RUN minikube start --vm-driver=docker

WORKDIR /app

COPY . .

RUN kubectl get pods
