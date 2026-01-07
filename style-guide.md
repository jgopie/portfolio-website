# ---

**🎨 Jordan Gopie Portfolio \- Design System & Style Guide**

## **1\. Design Philosophy**

"Architecting the Future."  
The design language bridges the gap between complex backend infrastructure and fluid frontend experiences. It utilizes a high-contrast, "cyber-minimalist" aesthetic.

* **Keywords:** Scalable, Modern, Electric, Clean, Structured.  
* **Core Visual:** Isometric illustrations mixed with flat, clean UI components.

## ---

**2\. Color Palette**

### **Primary Brand Colors**

Used for primary actions, gradients, and key accents (borders, glowing effects).

| Color Name | Hex Code | Usage |
| :---- | :---- | :---- |
| **Electric Blue** | \#00C2FF | Primary Brand Color, Links, Highlights |
| **Vibrant Purple** | \#8A2EFF | Secondary Brand Color, Gradient End-point |
| **The "Code" Gradient** | linear-gradient(135deg, \#00C2FF 0%, \#8A2EFF 100%) | Primary Buttons, Active States, Hero Text |

### **🌑 Dark Theme (Default)**

Optimized for developer preference and low-light reading.

* **Background (Main):** \#0A0A0A (Near Black)  
* **Background (Surface/Cards):** \#161616 (Dark Gray)  
* **Text (Primary):** \#EDEDED (High Contrast White)  
* **Text (Secondary):** \#A1A1AA (Muted Gray)  
* **Border/Divider:** \#333333

### **☀️ Light Theme**

Optimized for clarity and professional presentation.

* **Background (Main):** \#F8F9FA (Off-White)  
* **Background (Surface/Cards):** \#FFFFFF (Pure White)  
* **Text (Primary):** \#111827 (Dark Charcoal)  
* **Text (Secondary):** \#4B5563 (Slate Gray)  
* **Border/Divider:** \#E5E7EB

## ---

**3\. Typography**

Font Family: Inter, Roboto, or Plus Jakarta Sans (Google Fonts).  
Monospace: JetBrains Mono or Fira Code (For code snippets and tech stack tags).

| Type Style | Weight | Size (Desktop) | Line Height | Character Spacing |
| :---- | :---- | :---- | :---- | :---- |
| **H1 Hero** | Bold (700) | 3.5rem (56px) | 1.1 | \-0.02em |
| **H2 Section** | SemiBold (600) | 2.25rem (36px) | 1.2 | \-0.01em |
| **H3 Card Title** | Medium (500) | 1.5rem (24px) | 1.3 | Normal |
| **Body Large** | Regular (400) | 1.125rem (18px) | 1.6 | Normal |
| **Body Base** | Regular (400) | 1rem (16px) | 1.5 | Normal |
| **Code/Tag** | Medium (500) | 0.875rem (14px) | 1.4 | 0.05em |

## ---

**4\. UI Components**

### **Buttons**

**Primary Button (CTA)**

* **Background:** Brand Gradient (\#00C2FF \-\> \#8A2EFF)  
* **Text:** White (\#FFFFFF), Bold  
* **Radius:** 8px  
* **Shadow:** 0px 4px 15px rgba(0, 194, 255, 0.3) (Glow effect)

**Secondary/Ghost Button**

* **Background:** Transparent  
* **Border:** 1px Solid \#333333 (Dark) / \#E5E7EB (Light)  
* **Text:** Primary Text Color  
* **Hover:** Slight background fill (10% opacity white/black)

### **Cards (Projects & Tech Stack)**

* **Border Radius:** 12px  
* **Padding:** 24px  
* **Dark Theme Styling:**  
  * Background: \#161616  
  * Border: 1px Solid \#333333 (Transition to Gradient Border on Hover)  
  * Hover Effect: box-shadow: 0 0 20px rgba(0, 194, 255, 0.15)  
* **Light Theme Styling:**  
  * Background: \#FFFFFF  
  * Border: 1px Solid \#E5E7EB  
  * Shadow: 0 4px 6px \-1px rgba(0, 0, 0, 0.1)

### **Tech Stack Tags**

Visual pills to represent languages.

* **Container:** Pill shape, rounded 50px.  
* **Icon:** Left-aligned SVG of the tech (Python, Go, etc.).  
* **Text:** Font JetBrains Mono.  
* **Coloring:** Use the official brand color of the tech for the icon, neutral text color.

## ---

**5\. Layout & Spacing**

Grid System: 12-column grid.  
Container Width: Max-width 1200px (Centered).  
**Spacing Scale (Tailwind-compatible):**

* xs (4px)  
* sm (8px)  
* md (16px) \- Default padding  
* lg (24px) \- Card padding  
* xl (32px)  
* 2xl (64px) \- Section separation  
* 3xl (96px) \- Hero bottom margin

## ---

**6\. Iconography**

* **System Icons:** Use **Phosphor Icons** or **Heroicons** (Outline style).  
* **Tech Logos:** Use **Simple Icons** (SVG format) for crisp rendering of Python, Flutter, Go, etc.

### ---

