---
title: 'Monitor DigitalOcean Kubernetes Service with Axiom'
coverImage: '/assets/blog/doks/' 
date: '2021-05-06'
author:
  name: Tola Ore-Aruwaji
  picture: '/assets/blog/authors/tola.jpeg'
ogImage:
  url: '/assets/blog/working-better/ams1.jpg'
---


## What is DigitalOcean Kubernetes Service?

DigitalOcean Kubernetes (DOKS) is a managed Kubernetes service that lets you deploy Kubernetes clusters without the complexities of handling the control plane and containerized infrastructure.

## Prerequisites

- DigitalOcean [account](https://cloud.digitalocean.com/login)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/) installed and configured
- DigitalOcean [CLI](https://docs.digitalocean.com/reference/doctl/) installed
- Axiom Deployment

### In this tutorial, I will show you how to:

- Create a Kubernetes Cluster on DigitalOcean
- Ingress logs from DigitalOcean Kubernetes Service to Axiom
- Create a dataset & Ingest token on Axiom.
- Analyze and Stream your Kubernetes logs on Axiom.
