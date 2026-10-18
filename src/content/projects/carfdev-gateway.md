---
title: CarfDev Gateway
kind: backend
category: PERSONAL PROJECT / INFRASTRUCTURE
order: 2
card:
  subtitle: Infrastructure / personal project
  description: >-
    A Go gateway connecting HTTP requests to microservices through
    NATS, including a contact-email workflow.
  technologies:
    - Go
    - Gin
    - NATS
    - Docker
repository: https://github.com/carfdev/carfdev-gateway
description: >-
  A Go entry point for a microservices setup, connecting HTTP requests to NATS messaging and a separate email service.
metadata:
  - label: BUILT WITH
    value: Go · Gin · Docker
  - label: MESSAGING
    value: NATS
  - label: CONTEXT
    value: Personal learning project
architecture:
  title: HTTP in. Messages out.
  nodes:
    - title: HTTP client
      description: Contact request
      connection: HTTP
    - title: Go gateway
      description: Routes + middleware
      connection: Publish
    - title: NATS
      description: Message broker
      connection: Consume
    - title: Email service
      description: Separate Go service
  note: POST /api/email/send-contact → NATS → email service
details:
  - title: HTTP entry point
    description: >-
      Gin routes receive contact requests. Controllers, services and DTOs are organised within the email module.
  - title: Messaging boundary
    description: >-
      The gateway connects to NATS for communication with other services. A separate email-service repository handles the next part of the workflow.
  - title: Container workflow
    description: >-
      A multi-stage Dockerfile separates compilation from the runtime image. Environment variables configure the HTTP port, client URL and NATS connection.
scope:
  title: A portfolio system, built to explore.
  description: >-
    This is personal infrastructure work, not a client delivery. Running the complete workflow requires NATS and connected services; the repository documents local setup and the contact endpoint.
---
