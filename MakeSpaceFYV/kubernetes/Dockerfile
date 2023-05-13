FROM node:17-alpine

WORKDIR /usr/src/app

COPY . .

# EXPOSE 3001

RUN docker pull k8s.gcr.io/minikube:latest
RUN docker run --privileged -d --name=minikube k8s.gcr.io/minikube:latest
RUN docker exec -it minikube sh
CMD ["minikube", "start" , "--vm-driver=none"]
CMD ["kubectl", "apply", "-f", "msfyv-backend-secret.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-backend.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-frontend-configmap.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-frontend.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-ingress.yaml"]
CMD ["minikube", "addons", "enable", "ingress"]