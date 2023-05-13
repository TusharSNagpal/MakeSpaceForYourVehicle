FROM node:17-alpine

WORKDIR /usr/src/app

COPY . .

# EXPOSE 3001

RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
    && install minikube-linux-amd64 /usr/local/bin/minikube \
    && rm minikube-linux-amd64
RUN RUN minikube start --vm-driver=docker
RUN EXPOSE 8443
# CMD ["minikube", "start" , "--vm-driver=none"]
CMD ["kubectl", "apply", "-f", "msfyv-backend-secret.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-backend.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-frontend-configmap.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-frontend.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-ingress.yaml"]
CMD ["minikube", "addons", "enable", "ingress"]