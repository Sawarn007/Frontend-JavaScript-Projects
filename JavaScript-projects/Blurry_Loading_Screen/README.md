# Blurry Loading Screen

A simple front-end project that creates a smooth **blurry loading effect** using HTML, CSS, and JavaScript.  
The page starts with a blurred background image and a percentage counter that gradually increases from 0% to 100%.  
As the loading percentage increases, the blur effect decreases, revealing a clear background.

---

## 📸 Preview
<img width="1349" height="643" alt="Blurry_Loading" src="https://github.com/user-attachments/assets/ebe625c5-7ef2-42c3-81cf-f802fee2a1d0" />

---

## 🛠️ Technologies Used
- **HTML5** – Structure of the page
- **CSS3** – Styling and blur effect using `filter: blur()`
- **JavaScript (Vanilla)** – Handles loading percentage and blur animation
- **Font Awesome** – Icons (optional)

---

## 💡 Features
- Smooth transition from blurred to clear background
- Percentage counter synced with blur effect
- Minimal, clean design
- Easy to customize with any background image

---

## 📜 How It Works
1. The background image starts with a high blur value (`30px`).
2. A counter increases from 0 to 100 using `setInterval()`.
3. The `scale()` function maps the counter range (0–100) to a blur range (30px–0px).
4. The blur decreases smoothly until the image is completely clear.

---

## 📦 Installation & Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/Sawarn007/Frontend-JavaScript-Projects/tree/main/JavaScript-projects/Blurry_Loading_Screen.git
## 📂 Project Structure
```bash
📦 blurry-loading
┣ 📜 index.html
┣ 📜 style.css
┣ 📜 script.js
┗ 📜 README.md



