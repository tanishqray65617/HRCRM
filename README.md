<img width="1381" height="447" alt="image" src="https://github.com/user-attachments/assets/63c37acc-e729-431c-b9d3-6baedc97bf87" />


# HR-CRM Platform

> A centralized Recruitment and Workforce Management platform designed to streamline operations between HR Agencies, Recruiters, and Job Seekers.

## 🚀 Live Demo

You can view the live deployment of this project here: [https://hrcrm-orcin.vercel.app/](https://hrcrm-orcin.vercel.app/)

Feel free to explore the platform using the following dummy credentials:
- **Admin Login**: `admin@gmail.com` | Password: `password123`
- **Employee Login**: `employee@gmail.com` | Password: `password123`

*(Note: Certain implementation details have been omitted from this repository to respect company confidentiality, but the core architecture and UI are fully functional).*

<img width="1765" height="946" alt="image" src="https://github.com/user-attachments/assets/22cbc377-b609-4182-92f2-1f174f7732f7" />


## Overview

Recruitment agencies often struggle to manage candidates, clients, job openings, and recruiter activities across scattered spreadsheets, emails, and messaging apps. **HR-CRM** solves this by centralizing all recruitment operations into one powerful platform. 

This platform connects multiple stakeholders:
- **Admin (HR Company):** Manage the company, clients, recruiters, and view overall analytics.
- **Employees (Recruiters):** Manage their assigned clients, process candidates through the hiring pipeline, and track their daily activities.
- **Candidates (Job Seekers):** Register, upload resumes, and track their application statuses.

---

## Core Features

### Role-Based Access Control
Secure portal with dedicated dashboards for Admins, Employees, and Candidates using secure JWT authentication and database Row Level Security.

### Client & Requirement Management
Admins can easily onboard new clients and create job requirements (Role, Skills, Salary, Location, Openings) and assign them to specific recruiters.

### Candidate Pipeline & Resume Management
A complete Kanban-style recruitment pipeline tracking candidates from *Registered* -> *Screening* -> *Interview Scheduled* -> *Offer Released* -> *Joined*. Candidates can upload their resumes in PDF format which recruiters can download instantly.

### Activity & Performance Tracking
The system automatically logs recruiter actions (Calls made, Candidates contacted, Interviews scheduled) giving Admins a bird's-eye view of employee performance and placement metrics.

### Internal Notice System
A built-in announcement board where Admins can broadcast notices and targets directly to Employees.

---

## Technology Stack

This project was built using a modern, scalable, and fully serverless tech stack:

### Frontend
- **React.js (Vite)** - Fast, modern UI library.
- **Tailwind CSS & shadcn/ui** - For beautiful, responsive, and accessible styling.
- **Zustand** - Lightweight global state management.
- **React Hook Form & Zod** - Robust form handling and schema validation.

### Backend & Database (Serverless)
- **Supabase** - Acting as the complete backend-as-a-service (BaaS).
- **PostgreSQL** - Relational database handling complex queries and relationships.
- **Supabase Auth** - Handling secure logins and role verification.
- **Supabase Storage** - Storing candidate resumes and company documents.
- **Edge Functions** - Serverless functions to handle complex backend business logic safely.

---

## Application Showcase

### Admin Dashboard
<img width="1495" height="852" alt="image" src="https://github.com/user-attachments/assets/93dd5dfd-2a2f-4a80-8285-65d5bce4a44f" />

*Provides a high-level overview of clients, recruiters, and overall placements.*

### Candidate Pipeline
<img width="1492" height="847" alt="image" src="https://github.com/user-attachments/assets/68957b79-8476-4902-9505-341d83187ac7" />

*Recruiters can easily update the status of candidates as they move through the interview process.*

---

## Architecture & Security Highlights

- **Serverless Architecture**: By leveraging Supabase and its Native SDK, the need for a boilerplate Express.js server was eliminated, drastically reducing latency and scaling issues.
- **Row Level Security (RLS)**: Database policies are strictly enforced at the Postgres level, ensuring that Employees can only see their assigned clients, and Candidates can only view their own data, preventing unauthorized access.
