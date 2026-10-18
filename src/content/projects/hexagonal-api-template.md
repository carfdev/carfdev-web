---
title: Hexagonal API Template
kind: backend
category: PERSONAL TEMPLATE / ARCHITECTURE
order: 4
card:
  subtitle: Architecture / personal template
  description: >-
    A modular Rust starter separating domain logic from
    infrastructure, with JWT authentication and PostgreSQL integration.
  technologies:
    - Rust
    - Actix Web
    - Diesel
    - JWT
repository: https://github.com/carfdev/rust-modular-hexagonal-api-template
description: >-
  A modular Rust starter separating domain logic from infrastructure, with JWT authentication and PostgreSQL integration.

metadata:
  - label: BUILT WITH
    value: Rust · Actix Web · Diesel
  - label: SECURITY
    value: JWT authentication
  - label: CONTEXT
    value: Personal architecture template

architecture:
  title: Domain first. Infrastructure outside.
  nodes:
    - title: HTTP adapter
      description: Actix Web + JWT
      connection: Calls
    - title: Domain core
      description: Logic + repository ports
      connection: Ports
    - title: Persistence adapter
      description: Diesel + PostgreSQL
  note: >-
    Dependencies point inward. The domain stays separate from HTTP and database implementation details.

details:
  - title: A modular starting point
    description: >-
      Domain logic is separated from infrastructure, keeping the core focused on application behaviour rather than framework or database concerns.
  - title: HTTP and authentication
    description: >-
      Actix Web provides the HTTP layer, while JWT authentication sits at the API boundary rather than inside the domain.
  - title: PostgreSQL integration
    description: >-
      Diesel connects the persistence layer to PostgreSQL. Repository boundaries keep database implementation details outside the domain.

scope:
  title: A foundation, not a finished product.
  description: >-
    A personal template for exploring hexagonal architecture in Rust. It provides a starting structure, not a complete business application or a claim of production readiness.
---
