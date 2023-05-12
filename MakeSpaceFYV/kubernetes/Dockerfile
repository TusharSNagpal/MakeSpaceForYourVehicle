FROM node:17-alpine

WORKDIR /usr/src/app

COPY . .

# EXPOSE 3001

RUN wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
RUN install minikube-linux-amd64 /usr/local/bin/minikube
RUN wget https://storage.googleapis.com/kubernetes-release/release/v1.12.0/bin/linux/amd64/kubectl -O kubectl
RUN chmod +x /kubectl
RUN mv kubectl /usr/local/bin

EXPOSE $KUBECTL_PORT
CMD ["minikube", "start"]
CMD ["kubectl", "apply", "-f", "msfyv-backend-secret.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-backend.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-frontend-configmap.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-frontend.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-ingress.yaml"]
CMD ["minikube", "addons", "enable", "ingress"]