# AWS S3 Static Website Hosting

## Project Overview
This project sets up a static website hosted on an **Amazon S3 bucket** using Terraform.

## 🌐 Live Website
Access the website here:  
**[My S3 Static Website](http://my-tf-bucket-by-dev-916555.s3-website.ap-south-1.amazonaws.com/)**

## 📂 Project Structure
```
.
├── .terraform/                  # Terraform dependencies (ignored in Git)
├── .gitignore                   # Git ignore file
├── main.tf                      # Terraform configuration for S3 bucket
├── provider.tf                   # Terraform provider configuration
├── variables.tf                  # Terraform variables
├── output.tf                     # Terraform output definitions
├── index.html                    # Main HTML file for the website
├── error.html                     # Custom error page
└── terraform.tfstate              # Terraform state file (ignored in Git)
```

## 🚀 Deployment Steps
### Prerequisites
- **AWS CLI** installed and configured (`aws configure`)
- **Terraform** installed (`terraform -v`)

### Steps to Deploy
1. **Initialize Terraform**
   ```sh
   terraform init
   ```
2. **Preview changes**
   ```sh
   terraform plan
   ```
3. **Apply the configuration**
   ```sh
   terraform apply -auto-approve
   ```

### 🌟 Website URL Output
After successful deployment, Terraform outputs the website URL. You can manually visit the link or fetch it via:
```sh
echo $(terraform output website_url)
```

## 🔧 Updating the Website
1. Modify `index.html` or `error.html`
2. Upload the updated files using Terraform:
   ```sh
   terraform apply -auto-approve
   ```

## ❌ Destroying the Infrastructure
To remove the S3 website and clean up resources:
```sh
terraform destroy -auto-approve
```

## 📜 License
This project is open-source and available for use under the **MIT License**.

---
### 🔗 Author: [Deepak Singh Tomar](https://github.com/Deepakrocknow)

