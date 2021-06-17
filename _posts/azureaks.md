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

![Azure6](/assets/blog/azureaks/azure6.png)

6.  When your deployment is complete, click on connect to a cluster. 


![Azure7](/assets/blog/azureaks/azure7.png)

This gives you the commands you need to configure and interact directly with your cluster using Azure Kubernetes Service command-line tooling. Run and paste the commands in your terminal.

![Azure8](/assets/blog/azureaks/azure8.png)

7. Now, let’s switch back to Axiom for a section. Head to Settings → Datasets and create a new dataset for your AKS logs.

![Azure9](/assets/blog/azureaks/azure9.png)

To create an ingest Token,

- On the Axiom UI, under **settings,** select **ingest token.**
- Select **Add ingest token.**
- Enter a **name** and **description** and select **ADD.**
- Copy the generated token to your clipboard. Once you navigate from the page, token can be seen again by selecting **Ingest Tokens.**

![Azure10](/assets/blog/azureaks/azure10.png)

8. Axiom uses Filebeats to forward logs from your Kubernetes cluster. Setting it up is as simple as copying the daemonset’s yaml file from the Axiom Docs and configuring it by adding the environment variable values for your Axiom host, dataset, and the ingest token.

```yaml
env:
	- name: AXIOM_HOST
	  value: http://cloud.axiom.co // replace with your self-host url if needed
	- name: AXIOM_DATASET_NAME
	  value: aks-logs
	- name: AXIOM_INGEST_TOKEN
	  value: xait-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

```

9. Apply and run your `.yaml ` file using `kubectl apply -f (NAME OF FILE).yaml.` The Filebeats pods will be created and you should see them running on the Azure portal.

![Azure11](/assets/blog/azureaks/azure11.png)

10. Back in Axiom, you will see your logs from AKS streaming in live to the dataset you created earlier. You can now gather insights on your logs and run aggregations across all the matching data to produce various types of visualizations as well as a table of results.

![Azure12](/assets/blog/azureaks/azure12.gif)

11. You can also stream your logs on Axiom, this allows you to inspect individual events from Azure Kubernetes Service and watch as they are ingested live.

![Azure13](/assets/blog/azureaks/azure13.gif)














