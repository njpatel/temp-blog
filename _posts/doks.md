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

Axiom centralizes all your logs from all your log sources, so you have complete visibility into your entire system. Using [Axiom](https://www.axiom.co/) for log management means that you can monitor your event logs more effectively and gain deeper insight into your system metrics.

## Let's jump in 💫

1. Create your account on DigitalOcean, and enter your details.

2. Select Kubernetes in the dashboard menu/control plane, select the Kubernetes version you want to work with (the latest version is selected by default), and choose the data center region you want to create your cluster in.

