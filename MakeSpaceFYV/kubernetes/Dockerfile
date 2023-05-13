FROM bitnami/kubectl:latest

ENV KUBECONFIG=$HOME/.kube/config

RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && \
    install minikube-linux-amd64 /usr/local/bin/minikube && \
    minikube start --vm-driver=docker && \
    kubectl config use-context minikube

CMD ["kubectl", "get", "pods"]