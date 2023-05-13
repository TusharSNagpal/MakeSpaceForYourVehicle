#!/usr/bin/env bash

# 1. Create docker image

# The port seems a little flaky. Sometimes it is 49154 and sometimes it is 32769.
# KUBECTL_PORT=32769

cat > Dockerfile <<EOF
FROM docker:dind

RUN apk add bash
# If the docker-group is created, /var/run/docker.sock will be in that group....
RUN addgroup docker

RUN wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
RUN install minikube-linux-amd64 /usr/local/bin/minikube
RUN wget https://storage.googleapis.com/kubernetes-release/release/v1.12.0/bin/linux/amd64/kubectl -O kubectl
RUN chmod +x /kubectl
RUN mv kubectl /usr/local/bin

EXPOSE 32769

EOF


CONTAINER_TAG="minikube:dind"
CONTAINER_NAME="minikube_in_dind"

docker build -t $CONTAINER_TAG -f Dockerfile .

# 2. Start container

# minikubes kubectl is exposed on port 49154
docker run -d --privileged --name $CONTAINER_NAME -p $KUBECTL_PORT:$KUBECTL_PORT -v $PWD/data:/data $CONTAINER_TAG

# 3. Start minikube

docker exec -i $CONTAINER_NAME /bin/bash <<EOF
# Wait for docker to be up and running...
while ! docker ps
do
    echo "Waiting for docker daemon"
    sleep 1
done

# start minikube allowing for remote access
# (see https://github.com/kubernetes/minikube/issues/14364)
minikube start --force --apiserver-ips=`hostname -i` --listen-address=0.0.0.0

# ensure kubectl works
kubectl get pods --all-namespaces

# 4. Copy necessary kubectl-files to /data to allow them
# to be used from the host

COPY . .
# Change paths
sed -i 's/\/root\/\.minikube\/profiles\/minikube\///g' .
sed -i 's/\/root\/\.minikube\///g' /data/config
# Change server:
sed -i 's/192.168.49.2:8443/localhost:'"$KUBECTL_PORT"'/g' .

# Need to make the files readable to access them from the host
chmod o+r *

# 5. Test kubeconfig inside container

# Test the newly created kubeconfig
kubectl --kubeconfig . get pods --all-namespaces

EOF

# 6. Test kubeconfig from host

# Now I would expect to be able to remotely access kubectl inside the container
# using the kubeconfig in data/config:

echo "Calling kubectl from host..."
kubectl --kubeconfig . get pods --all-namespaces

# But it just hangs :(

# To stop and remove the containername:
# docker stop $CONTAINER_NAME ; docker rm $CONTAINER_NAME