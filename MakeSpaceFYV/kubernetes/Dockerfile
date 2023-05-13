FROM bigzmath/docker:latest
FROM ubuntu:latest
# Install dependencies
RUN apt-get update && \
    apt-get install -y curl && \
    curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && \
    install minikube-linux-amd64 /usr/local/bin/minikube && \
    rm minikube-linux-amd64 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Start Minikube
CMD ["minikube", "start", "--driver=docker"]