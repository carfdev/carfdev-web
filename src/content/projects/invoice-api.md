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
  - title: The challenge — separate client and administration access
    description: >-
      This project explores invoice processing with two entry points: certificate-authenticated B2B traffic on port 8443 and an internal administration API bound to 127.0.0.1:9090. The distinction makes access boundaries part of the application design.
  - title: The access decision — identify clients through certificates
    description: >-
      rustls verifies client certificates against a trusted CA, and the application extracts the certificate’s Common Name for client identification. Trying this boundary requires certificate setup as well as an HTTP request; the repository README describes the server certificates and local setup.
  - title: The structure — keep HTTP and persistence separate
    description: >-
      Domain models, HTTP handlers, repository interfaces and database implementations live in separate modules. Axum handles HTTP traffic and SQLx connects to PostgreSQL. The repository boundaries separate application behaviour from its database implementation.
  - title: Follow the processing flow in the source
    description: >-
      Start with the routers and handlers, then follow the document-processing services and persistence implementations. Document work moves to Tokio’s blocking thread pool, with concurrent storage uploads, document hashes and invoice status updates. The useful evidence is how those steps connect; PDF rendering and digital signing remain mocked, and XML output is a placeholder.
scope:
  title: An experiment, not a production claim.
  description: >-
    PDF rendering and digital signing are mocked, and XML output is a minimal placeholder. This project explores the API and processing flow; it is not a production invoicing service.
---
