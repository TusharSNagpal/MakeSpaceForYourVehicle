# Use an official Ubuntu runtime as a parent image
FROM ubuntu:latest

# Install necessary packages
RUN apt-get update && apt-get install -y curl

# Install Minikube
RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
RUN install minikube-linux-amd64 /usr/local/bin/minikube

RUN su root
RUN apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
RUN apt-get install -y docker-ce docker-ce-cli containerd.io

# Start Minikube with Docker driver
CMD ["minikube", "start", "--vm-driver=docker"]