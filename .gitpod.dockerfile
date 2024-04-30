FROM gitpod/workspace-full-vnc

USER gitpod

RUN npm install expo-cli --global
RUN npm i -g @expo/ngrok