FROM bitnami/kubectl:latest

ENV KUBECONFIG=$HOME/.kube/config

RUN minikube start --vm-driver=docker && \
    kubectl config use-context minikube

CMD ["kubectl", "get", "pods"]