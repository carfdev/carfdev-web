---
title: Foodi
kind: frontend
category: PERSONAL PROJECT / FRONTEND PRACTICE
order: 3
card:
  subtitle: Frontend / practice project
  description: >-
    A restaurant website implementation with a responsive layout
    and interactive cart. Based on a Figma design by Dscode.
  technologies:
    - Astro
    - Vue
    - Tailwind CSS
    - Nano Stores
repository: https://github.com/carfdev/foodi-restaurant-landing
demo: https://foodi-restaurant-landing.netlify.app
description: >-
  A restaurant website demo built with Astro, Vue and Tailwind CSS, turning a community Figma design into a responsive interface with a persistent cart.
metadata:
  - label: BUILT WITH
    value: Astro · Vue · Tailwind CSS
  - label: STATE
    value: Nano Stores · Persistence
  - label: CONTEXT
    value: Frontend practice project
preview:
  label: LIVE DEMO / HERO DETAIL
  title: A design, made interactive.
  description: >-
    Astro handles page composition. Vue adds interactive components. Nano Stores connects the cart state across the interface.
  attribution: Original Figma design by Dscode. Frontend implementation by carfdev.
  image: ../../assets/images/projects/foodi-preview.webp
  alt: Screenshot of Foodi restaurant website design, showing the hero and product interface.
details:
  - title: Responsive composition
    description: >-
      Astro layouts and section components organise the landing page. Tailwind utilities adapt navigation, content groups and page layout across screen sizes.
  - title: Interactive components
    description: >-
      Vue components cover the mobile menu, cart view and add-to-cart controls, adding interaction to the page’s Astro structure.
  - title: Persistent cart state
    description: >-
      A Nano Stores persistent atom stores item IDs, names and quantities. Adding an existing item updates its quantity rather than creating a duplicate.
scope:
  title: Implementation practice, not client work.
  description: >-
    Foodi is a demonstration based on Dscode’s community UI design, not an original visual-design commission. Several secondary routes are demo placeholders; this is not a live restaurant ordering service.
---
