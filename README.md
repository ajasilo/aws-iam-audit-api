# AWS IAM Audit API

Backend REST API for AWS IAM Security Audit and Governance.

## Features

- IAM User Inventory
- MFA Compliance Monitoring
- Inactive User Detection
- Risk Classification
- Audit Reporting
- REST API Endpoints
- Node.js + Express

## Technology Stack

- Node.js
- Express.js
- REST API
- JSON

## API Endpoints

### Health Check

GET /

Response:

```json
{
  "message": "AWS IAM Audit API Running"
}
```

### IAM Users

GET /users

Response:

```json
[
  {
    "username": "john.admin",
    "mfa": "Enabled",
    "lastLogin": "2026-06-01",
    "risk": "Low"
  }
]
```

## Sample Output

API returns IAM user inventory data including:

- Username
- MFA Status
- Last Login
- Risk Level

## Project Purpose

This project simulates an AWS IAM Governance API used by Cloud Security Teams to:

- Review IAM users
- Detect inactive accounts
- Monitor MFA compliance
- Support audit activities
- Improve cloud security posture

## Author

Alpie Asilo

Cloud Security Engineer
