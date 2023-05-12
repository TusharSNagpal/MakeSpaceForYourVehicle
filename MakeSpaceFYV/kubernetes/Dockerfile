FROM node:17-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 3001
CMD ["ls"]
CMD ["minikube", "start"]
CMD ["kubectl", "apply", "-f", "msfyv-backend-secret.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-backend.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-frontend-configmap.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-frontend.yaml"]
CMD ["kubectl", "apply", "-f", "msfyv-ingress.yaml"]
CMD ["minikube", "addons", "enable", "ingress"]