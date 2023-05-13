FROM bigzmath/docker
RUN su root
RUN apt-get update && apt-get install -y curl wget
RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
RUN install minikube-linux-amd64 /usr/local/bin/minikube
RUN minikube start --driver=docker