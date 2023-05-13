FROM ubuntu:latest

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl wget apt-transport-https gnupg2 && \
    curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | tee /etc/apt/sources.list.d/kubernetes.list && \
    apt-get update && \
    apt-get install -y kubectl

RUN apt-get update && \
    apt-get install ca-certificates curl gnupg && \
    install -m 0755 -d /etc/apt/keyrings && \


RUN docker version

# Install minikube
RUN apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Start minikube
RUN minikube start --vm-driver=docker

WORKDIR /app

COPY . .

RUN kubectl get pods
