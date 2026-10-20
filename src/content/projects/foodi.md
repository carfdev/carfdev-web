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
  - title: The challenge — from a design to a working interface
    description: >-
      The starting point was Dscode’s community Figma design. My work turns it into a responsive restaurant interface with navigation, product controls and a cart, while keeping the original design attribution explicit.
  - title: The approach — page structure and interactive components
    description: >-
      Astro layouts and sections organise the page, with Tailwind adapting the layout across screen sizes. Vue components handle the mobile menu, cart view and add-to-cart controls. This separates page composition from the components that manage interaction.
  - title: The state decision — one cart across components
    description: >-
      The product controls and cart view share a Nano Stores persistent atom containing item IDs, names and quantities. Adding an existing item updates its quantity rather than creating a duplicate. Shared state connects the separate components; persistence keeps the cart across reloads.
  - title: Try the flow — add, repeat and reload
    description: >-
      Open the live demo, add a product and open the cart. Add the same product again to check that its quantity increases within one entry, then reload the page to check that the cart is retained. Resize the page to explore the responsive layout and mobile navigation. This demonstrates frontend interaction, not a completed ordering or payment flow.
scope:
  title: Implementation practice, not client work.
  description: >-
    Foodi is a demonstration based on Dscode’s community UI design, not an original visual-design commission. Several secondary routes are demo placeholders; this is not a live restaurant ordering service.
---
