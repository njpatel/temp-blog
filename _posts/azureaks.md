---
title: 'Ingress Logs from Azure Kubernetes Service to Axiom'
coverImage: '/assets/blog/azureaks/' 
date: '2021-04-20'
author:
  name: Tola Ore-Aruwaji
  picture: '/assets/blog/authors/tola.jpeg'
ogImage:
  url: '/assets/blog/working-better/ams1.jpg'
---

In this tutorial, I will show you how to ingress your logs from Azure Kubernetes Service (AKS) to Axiom. You will be able to stream and analyze your logs.

We’ll set up an AKS deployment from scratch and configure it to log directly to Axiom. If you already have an AKS deployment, feel free to skip to step 7.

## Prerequisites

For this tutorial, you will need:

- Access to an Axiom deployment

- Azure account, create one [here](https://azure.microsoft.com/en-us/) if you don’t have one

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed

Azure Kubernetes Service (AKS) is a robust and cost-effective container orchestration service that helps you to deploy and manage containerized applications in seconds where additional resources are assigned automatically without the headache of managing additional servers.

Using [Axiom](https://www.axiom.co/) for log management means you can log more data from AKS and keep it for longer. This means you and your team have every piece of detail should something go wrong or if you just want to see how well your services are running!

**With this, you can deploy your logs from Azure Kubernetes Service directly to Axiom**

## Let's get to it 🔥

1. Make sure you’ve logged into Azure

![Azure1](/assets/blog/azureaks/azure1.jpeg)

2. Create a resource group you will use for your AKS Configuration

Azure resource group is a container that holds related resources for your Azure solution. The resource group can include all the resources for the solution, or only those resources that you want to manage as a group. You decide how you want to allocate resources to resource groups based on what makes the most sense for your organization.

![Azure2](/assets/blog/azureaks/resourcegroup.png)

3. In your resource group dashboard, click on add

![Azure3](/assets/blog/azureaks/createresource.png)

4. Select Kubernetes service

![Azure4](/assets/blog/azureaks/azure4.png)

5. Create your Kubernetes Cluster.

- Enter your Kubernetes cluster name
- Choose your Region
- Select the Kubernetes version you want to use

![Azure5](/assets/blog/azureaks/azure5.png)

Review your configuration and click on Create

![Azure5](/assets/blog/azureaks/azure6.png)


