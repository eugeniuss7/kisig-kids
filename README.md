# 🌿 Kisig Kids — Official Website

> **Learning by doing. Moving by design.**  
> Official repository for the Kisig Kids Learning Center web portal.

---

## 📌 About Kisig Kids

**Kisig Kids** is an inclusive, movement-based early learning center located in San Juan City, Metro Manila. We provide play-based, neuro-affirming early education and special education (SNED) services designed to help every child learn through movement, sensory processing, and hands-on discovery.

Grounded in **Reggio- and Waldorf-inspired philosophies** and aligned with the **MATATAG curriculum framework**, Kisig Kids integrates foundational reading, writing, and math into meaningful real-world experiences.

---

## 🌟 Core Pillars & Philosophy

- 🏃 **Movement-Based Learning:** Encouraging body awareness, motor planning, and physical confidence.
- 🌈 **Neuro-Affirming Environment:** Respecting diverse learning styles, sensory profiles, and developmental paces.
- 🎨 **Reggio & Waldorf Inspired:** Fostering creativity, exploration with natural materials, and self-directed discovery.
- 📚 **Foundational Academics:** Incorporating age-appropriate literacy, numeracy, and cognitive milestones.
- 🤝 **Inclusive Community:** Creating welcoming spaces for both neurotypical learners and children with special needs.

---

## 🚀 Website Features

- 👶 **Program Directory:** Comprehensive details on early childhood playclasses, individualized SNED sessions, and sensory processing activities.
- 📅 **Schedule & Admissions:** Information on class schedules, enrollment steps, and center tours.
- 📍 **Location & Directions:** Interactive map and contact details for our San Juan City center.
- 📩 **Parent Inquiry System:** Easy-to-use intake and contact form for prospective families.
- ♿ **Accessible UI:** Designed with soft colors, high contrast readability, and mobile responsiveness.

---

## 🛠️ Tech Stack & Prerequisites

*(Customize based on your preferred stack)*

- **Frontend:** React / Next.js / HTML5
- **Styling:** Tailwind CSS / CSS Modules
- **Deployment:** Vercel / GitHub Pages
- **Forms:** Formspree / EmailJS

---

## 💻 Local Development Setup

To run this website locally on your computer:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/kisig-kids.git

# 2. Navigate to the project folder
cd kisig-kids

# 3. Install dependencies (if using Node/React/Next.js)
npm install

# 4. Start the local development server
npm run dev
```

Open `http://localhost:3000` in your browser to view the site.

---

## 🗄️ Backend Setup (Django + PostgreSQL)

The API in `backend/` uses PostgreSQL. You need a local PostgreSQL server running first.

```bash
# 1. Create the database (adjust the user if yours isn't "postgres")
createdb -U postgres kisig_kids

# 2. Set up a virtual environment and install dependencies
cd kisig-kids/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 3. Add your database credentials
cp .env.example .env   # then edit .env

# 4. Create the tables and start the API
python manage.py migrate
python manage.py runserver
```

The API runs at `http://localhost:8000`.

---

## 📍 Contact & Center Location

* **Address:** 17 Alfonso XIII St., Brgy. Pasadeña, San Juan City, Metro Manila, Philippines
* **Email:** kisigkidsph@gmail.com
* **Facebook:** [Kisig Kids Facebook Page](https://www.facebook.com/profile.php?id=61583210354378)

---

## 📄 License

This repository is maintained for the official use of **Kisig Kids Learning Center**. All rights reserved.
