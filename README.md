# HR-CRM Platform

> A centralized Recruitment and Workforce Management platform designed to streamline operations between HR Agencies, Recruiters, and Job Seekers.

![HR-CRM Hero Banner](./placeholder-hero-image.png) *(Note: Replace with your actual hero screenshot)*

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

*(Note: Add screenshots of your application in action below to show recruiters what the app looks like!)*

### Admin Dashboard
![Admin Dashboard](./placeholder-admin-dashboard.png)
*Provides a high-level overview of clients, recruiters, and overall placements.*

### Candidate Pipeline
![Candidate Pipeline](./placeholder-pipeline.png)
*Recruiters can easily update the status of candidates as they move through the interview process.*

---

## Architecture & Security Highlights

- **Serverless Architecture**: By leveraging Supabase and its Native SDK, the need for a boilerplate Express.js server was eliminated, drastically reducing latency and scaling issues.
- **Row Level Security (RLS)**: Database policies are strictly enforced at the Postgres level, ensuring that Employees can only see their assigned clients, and Candidates can only view their own data, preventing unauthorized access.

---

*Note: The source code for this project is kept private. Please reach out to me directly if you'd like a live demonstration or a technical walkthrough of the codebase!*
