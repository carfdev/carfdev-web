---
title: Invoice API
kind: backend
category: PERSONAL PROJECT / BACKEND
order: 1
card:
  subtitle: Backend / personal project
  description: >-
    A Rust invoice API exploring client-certificate authentication,
    separate API boundaries and background document processing.
  technologies:
    - Rust
    - Axum
    - PostgreSQL
    - mTLS
repository: https://github.com/carfdev/invoice-api
description: >-
  Exploring invoice workflows, client-certificate authentication and the boundary between external traffic and internal administration.
metadata:
  - label: BUILT WITH
    value: Rust · Axum · PostgreSQL
  - label: SECURITY
    value: rustls · mTLS
  - label: CONTEXT
    value: Personal learning project
architecture:
  title: Two boundaries. One application.
  nodes:
    - title: B2B client
      description: Client certificate
      connection: mTLS
    - title: Axum application
      description: Routers + handlers
      connection: SQLx
    - title: PostgreSQL
      description: Invoices + documents
  note: "B2B traffic: port 8443 / Internal admin: 127.0.0.1:9090"
details:
  - title: Certificate-based access
    description: >-
      rustls verifies client certificates against a trusted CA. The application extracts the certificate’s Common Name for client identification.
  - title: Application boundaries
    description: >-
      Domain models, HTTP handlers, repository interfaces and database implementations are separated into distinct modules.
  - title: Background processing
    description: >-
      Document work moves to Tokio’s blocking thread pool, with concurrent storage uploads, document hashes and invoice status updates.
scope:
  title: An experiment, not a production claim.
  description: >-
    PDF rendering and digital signing are mocked, and XML output is a minimal placeholder. This project explores the API and processing flow; it is not a production invoicing service.
---
