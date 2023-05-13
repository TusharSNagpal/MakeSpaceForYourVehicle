FROM ubuntu

RUN sh dockerd-rootless-setuptool.sh install -f
RUN docker context use rootless
RUN minikube start --driver=docker --container-runtime=containerd