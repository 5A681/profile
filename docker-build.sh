#!/bin/bash

# Docker build script for React Profile App

echo "🚀 Building React Profile App Docker Image..."

# Build the production image
docker build -f Dockerfile.simple -t profile-react-app:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo ""
    echo "📋 Available commands:"
    echo "🔥 Run production:  docker run -p 3000:80 profile-react-app:latest"
    echo "🛠️  Run development: docker-compose --profile dev up"
    echo "📦 Run with compose: docker-compose up"
    echo ""
    echo "🌐 Access your app at: http://localhost:3000"
else
    echo "❌ Docker build failed!"
    exit 1
fi
