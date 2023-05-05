# Push commands in the background, when the script exits, the commands will exit too
# kubectl port-forward --address localhost,$MYIP service/msfyv-frontend-service 19000:19000 & \

RHOST=8.8.8.8
MYIP=$(ip route get $RHOST | awk '{ print $7; exit }')
kubectl port-forward --address localhost,$MYIP service/msfyv-backend-service 5000:5000 & \

echo "Port Forwarding Successful"
wait
