# 🐉 House of the Dragon
## PROJECT_GUIDE.md
### Version 0.1

---

# Project Vision

House of the Dragon is a premium medieval-themed Habbo fansite and community.

While the visual style is medieval fantasy (castles, dragons, banners, torches, royalty), the community offers much more than roleplay.

Features include:

- Royal Court
- Games
- Achievement Helpers
- Daily Helpers
- Dragon Radio
- Bot Rentals
- Community Events
- Sponsorships
- Interactive Castle Map
- Discord Integration
- Habbo Resources

The goal is to feel like entering a living medieval kingdom.

---

# Design Philosophy

The website should feel:

- Elegant
- Cinematic
- Premium
- Immersive
- Clean
- Professional

Nothing should feel cluttered or overly modern.

Every page should feel like another room inside the kingdom.

---

# Technology

- Next.js App Router
- TypeScript
- Tailwind CSS
- Next/Image
- Responsive Design
- Component-based architecture

---

# Folder Structure

HOUSE-OF-THE-DRAGON/

app/
components/
data/
lib/
public/
styles/
types/

---

## Components

components/

homepage/
kingdom-map/
layout/
royal-court/
shared/

Future folders:

games/
dragon-radio/
daily-helpers/
community/
bot-rentals/

---

## Homepage Components

Hero.tsx

HeroBackground.tsx

HeroAtmosphere.tsx

Founders.tsx

CastleWall.tsx

WelcomeSection.tsx

---

## Kingdom Map

CastleExplorer.tsx

CastleMap.tsx

---

## Layout

Navbar.tsx

PageFrame.tsx

---

## Shared Components

Button.tsx

CastleCard.tsx

FounderCard.tsx

OrnatePanel.tsx

RoyalCard.tsx

SectionHeading.tsx

---

# Public Images

public/images/

backgrounds/
castle/
dragons/
environment/
founders/
habbo/
habbo-avatars/
ui/

---

# Empty Folders

These remain empty until needed.

components/royal-court/

data/

lib/

styles/

types/

---

# Coding Standards

## Folder First

Create folders during planning.

---

## File Second

Only create files when writing real code.

Never create placeholder files.

---

## Components

Every component has one responsibility.

Shared UI belongs in:

components/shared/

Page-specific UI belongs inside its page folder.

---

## Images

Use Next/Image whenever possible.

Every Image using:

fill

must include:

sizes="..."

Decorative images use:

alt=""

Content images use meaningful alt text.

---

## Data

Create files only when reusable data exists.

Example:

data/founders.ts

---

## Types

Create types only when reusable.

Do not create empty interfaces.

---

## Utilities

Only create utilities when reusable.

No empty helper files.

---

# Design Standards

Theme:

Medieval Fantasy

Colours:

Black
Gold
Bronze
Warm Reds
Stone
Parchment

Animations:

Slow

Elegant

Subtle

Never excessive.

---

# Architecture Principles

Small components.

Reusable components.

No duplicated code.

No placeholder files.

No dead imports.

No duplicate assets.

Every file has one clear responsibility.

---

# Shared Component Responsibilities

Button

Standard buttons.

CastleCard

Navigation cards.

FounderCard

Homepage founder preview.

RoyalCard

Detailed profile card.

OrnatePanel

Decorative content container.

SectionHeading

Standard section heading.

PageFrame

Global page frame.

Navbar

Global navigation.

CastleWall

Great Hall environment.

HeroAtmosphere

Mist and embers.

---

# Current Development Status

✅ Version 0.1 Complete

Architecture

Folder cleanup

Homepage

Shared components

Kingdom Map

Layout

Project cleanup

---

# Next Milestone

Version 0.2

Royal Court

Files will be created only when implementation begins.

No placeholder files.

---

# Workflow

Before creating new code:

1. Decide where it belongs.

2. Check if a shared component already exists.

3. Create the file only if implementation starts.

4. Follow all coding standards.

5. Verify imports.

6. Run the project.

7. Fix warnings before moving on.

---

# Rule for Future Chats

When continuing this project:

Always follow PROJECT_GUIDE.md.

Do not invent new architecture.

Do not create placeholder files.

Respect existing folder structure.

Maintain consistent coding style.

Build incrementally.

Keep the website elegant, cinematic, and immersive.

# Development Workflow

We do NOT jump around the project.

We work through one folder at a time.

We finish one feature before starting another.

We prefer stable, complete implementations over partial scaffolding.

When refactoring:

- Review every file.
- Decide: Keep, Move, Merge, or Delete.
- Update imports immediately.
- Verify the project builds before moving on.

When building new features:

- Plan first.
- Build second.
- Polish third.
- Optimize last.

Never sacrifice architecture for speed.
