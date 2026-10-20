# hybrid_security_framework_integrating_firewall_vpn_technologies
# 🛡️ SunduVault
### Hybrid Security Framework Integrating Firewall & VPN Technologies

<p align="center">
  <strong>A Unified Network Security Management Framework</strong>
  <br/>
  Integrating Firewall Management, WireGuard VPN, Authentication, Access Control, and Security Monitoring.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Domain-Cybersecurity-00BCD4?style=for-the-badge" alt="Cybersecurity"/>
  <img src="https://img.shields.io/badge/VPN-WireGuard-88171A?style=for-the-badge" alt="WireGuard"/>
  <img src="https://img.shields.io/badge/Firewall-iptables-2496ED?style=for-the-badge" alt="iptables"/>
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge" alt="MongoDB"/>
</p>

---

## 📌 Overview

**SunduVault** is an academic cybersecurity project that aims to integrate firewall management and VPN technologies into a unified security framework.

The system combines `iptables` firewall rule management with WireGuard VPN tunnelling to provide network access control and encrypted communication. A web-based management interface enables administrators to manage security configurations, VPN peers, user access, and monitoring functions from a centralized location.

The framework is designed around a layered security approach that incorporates authentication, authorization, network protection, and intrusion detection capabilities.

## 🎯 Objectives

- Integrate firewall and VPN management into a unified platform.
- Manage network traffic using configurable firewall rules.
- Establish encrypted communication through WireGuard VPN.
- Implement role-based access control (RBAC).
- Support two-factor authentication (2FA).
- Monitor network activity and identify suspicious traffic patterns.
- Simplify VPN peer and IP address management.
- Provide a centralized dashboard for security administration.

## ✨ Key Features

| Feature | Description |
|---|---|
| 🛡️ Firewall Management | Manage network filtering rules using iptables. |
| 🔐 VPN Management | Configure WireGuard peers and encrypted tunnels. |
| 🔑 Authentication | JWT-based authentication and password verification. |
| 📲 Two-Factor Authentication | TOTP-based additional identity verification. |
| 👥 Role-Based Access Control | Separate administrative and user permissions. |
| 🌐 IP Address Management | Allocate and track VPN peer addresses. |
| 🚨 Intrusion Detection | Detect configured suspicious traffic patterns. |
| 📊 Security Dashboard | Display peer status, traffic statistics, and monitoring data. |
| 🔗 REST API | Provide endpoints for supported management operations. |
| 📱 QR Code Provisioning | Simplify VPN client configuration where implemented. |

## 🏗️ System Architecture

The proposed architecture separates the user interface, application logic, authentication, data storage, and network security components.

```text
                 ┌────────────────────────┐
                 │     Web Dashboard      │
                 │      Bootstrap UI      │
                 └────────────┬───────────┘
                              │
                 ┌────────────▼───────────┐
                 │       REST API         │
                 │  Authentication / JWT  │
                 └────────────┬───────────┘
                              │
                 ┌────────────▼───────────┐
                 │    Application Layer   │
                 │  PHP / Backend Logic   │
                 └────────────┬───────────┘
                              │
              ┌───────────────┼────────────────┐
              │               │                │
     ┌────────▼──────┐ ┌──────▼────────┐ ┌────▼─────────┐
     │   Firewall    │ │  WireGuard    │ │  IP Address  │
     │   iptables    │ │  VPN Manager  │ │  Management  │
     └────────┬──────┘ └──────┬────────┘ └────┬─────────┘
              │               │                │
              └───────────────┼────────────────┘
                              │
                 ┌────────────▼───────────┐
                 │ Security Monitoring    │
                 │ IDS / Traffic Metrics  │
                 └────────────┬───────────┘
                              │
                 ┌────────────▼───────────┐
                 │       MongoDB          │
                 │   Persistent Storage   │
                 └────────────────────────┘
```

*Note: This diagram represents the intended logical architecture. Adjust component names and connections to match the implemented source code.*

## 🔐 Security Layers

### 1. Network Security
- Configure inbound and outbound traffic filtering.
- Apply firewall policies using iptables.
- Restrict network access according to configured rules.

### 2. Encrypted Communication
- Use WireGuard for VPN tunnelling.
- Use WireGuard's ChaCha20-Poly1305 authenticated encryption and Curve25519 key exchange.
- Manage peer public keys and permitted IP addresses.

### 3. Authentication
- Validate user credentials.
- Use JWTs for authenticated API requests, where implemented.
- Apply token validation and expiry policies.

### 4. Multi-Factor Authentication
- Support TOTP-based verification where configured.
- Add an additional verification step beyond the password.

### 5. Authorization
- Enforce role-based permissions.
- Apply the principle of least privilege.
- Restrict administrative operations to authorized users.

## 🧰 Technology Stack

| Category | Technologies |
|---|---|
| Operating System | Ubuntu Server / Linux |
| Firewall | iptables |
| VPN | WireGuard |
| Backend | PHP and/or Python Flask, according to the implemented modules |
| Database | MongoDB |
| Frontend | HTML5, CSS3, JavaScript, Bootstrap |
| Authentication | JWT, password hashing, TOTP 2FA |
| Monitoring | Traffic statistics and IDS components |
| API | RESTful endpoints |

## ⚙️ Prerequisites

Before setting up the project, ensure you have the following:

- A supported Linux environment or Ubuntu Server.
- PHP or Python, depending on the backend components used.
- MongoDB.
- WireGuard utilities.
- iptables and appropriate system permissions.
- A web server such as Apache or Nginx, if required by the application.
- Git for source code management.

Check the installed tools:

```bash
git --version
php --version
python3 --version
mongosh --version
wg --version
sudo iptables --version
```

Some commands may be unavailable if the corresponding software is not installed.

## 🚀 Installation and Setup

### Step 1: Clone the repository

Replace the repository URL below with your actual GitHub repository URL.

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_REPOSITORY_DIRECTORY>
```

### Step 2: Install the required dependencies

Install the dependencies documented by your project. For an Ubuntu-based environment, the following packages are common starting points:

```bash
sudo apt update
sudo apt install git wireguard iptables
```

Install PHP, Python, MongoDB, and web-server dependencies according to the application's actual requirements.

### Step 3: Configure the database

Ensure MongoDB is installed and running if the application uses it.

```bash
sudo systemctl status mongod
```

Configure the database connection using your application's configuration mechanism. Do not commit passwords, API secrets, private keys, or production connection strings.

### Step 4: Configure WireGuard

Generate and manage WireGuard keys using the official WireGuard tooling. Configure the server interface, VPN subnet, peer public keys, and firewall rules according to your lab environment.

**Important:** Never publish private keys or expose an administrative VPN interface to untrusted networks.

### Step 5: Configure and launch the application

Follow the entry point and dependency instructions in the repository. Configure the web server, backend environment variables, database connection, and required permissions before launching the application.

The exact launch command depends on the actual backend and project directory structure.

## 🔗 API Overview

The following endpoints are documented in the project interface and should be verified against the implemented routes.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/login` | Authenticate a user |
| POST | `/auth/refresh` | Refresh authentication tokens |
| GET | `/auth/current` | Retrieve the authenticated user's information |
| POST | `/auth/signup` | Register a user, subject to authorization |
| POST | `/wg/add_peer` | Add a WireGuard peer |
| GET | `/wg/get_peer` | Retrieve peer information |
| GET | `/wg/get_peers` | List WireGuard peers |
| POST | `/wg/remove_peer` | Remove a WireGuard peer |

Use the authentication requirements and request formats defined by the actual API implementation.

## 🧪 Testing and Validation

Validate the following behaviours in an isolated, authorized lab environment:

- Successful and unsuccessful login attempts.
- Token validation and expiry handling.
- Role and permission enforcement.
- VPN peer addition and removal.
- IP allocation and duplicate-address handling.
- Firewall rule creation and removal.
- Detection of configured suspicious traffic patterns.
- Dashboard traffic statistics and monitoring updates.

Record actual test output, environment details, and benchmark methodology before publishing test counts or performance claims.

## 📁 Suggested Repository Structure

Adapt this example to your existing files rather than renaming working modules unnecessarily.

```text
SunduVault/
├── README.md
├── frontend/
│   ├── index.html
│   ├── css/
│   └── js/
├── backend/
│   ├── auth/
│   ├── firewall/
│   ├── wireguard/
│   ├── network/
│   └── monitoring/
├── config/
├── tests/
├── docs/
└── .gitignore
```

## 🔒 Security Considerations

- Run the framework in a controlled test environment until security testing is complete.
- Restrict privileged firewall and WireGuard operations.
- Validate input before executing system commands.
- Use safe process execution and strict argument validation.
- Store credentials and secrets outside the source repository.
- Protect JWT signing secrets and WireGuard private keys.
- Configure firewall rules carefully to avoid locking yourself out of the server.
- Test access-control boundaries and error handling before deployment.

## 🎓 Project Information

**Project:** SunduVault — Hybrid Security Framework Integrating Firewall & VPN Technologies

**Project Type:** Academic Cybersecurity / Network Security Project

**Author:** Senthil Nathan

**Institution:** Dr. M.G.R. Educational and Research Institute, Chennai

## 👨‍💻 Author

**Senthil Nathan**

Cybersecurity | Linux Administration | Networking

- GitHub: [@senthilnathan1730](https://github.com/senthilnathan1730)

## 📜 License

Choose and add a suitable open-source license before distributing the project. Until then, the licensing terms remain unspecified.

---

<p align="center">
  <strong>SunduVault</strong>
  <br/>
  <em>Unified Network Security. Controlled Access. Encrypted Communication.</em>
</p>
