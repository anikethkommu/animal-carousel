# 🌍 Animal World — 3D Carousel Website

A stunning 3D rotating carousel that showcases **62 animals** across **6 categories**, built with pure HTML, CSS, and JavaScript. No frameworks, no npm, no build step required.

---

## ✨ Live Preview

> Open `index.html` in your browser or deploy to GitHub Pages for a live link.

---

## 📸 Features

- 🔄 **3D rotating carousel** — smooth CSS `preserve-3d` + `rotateY` animation
- 🐾 **6 animal categories** — Wild, Carnivorous, Herbivorous, Birds, Aquatic, Reptiles
- 🖼️ **62 animals** with real Unsplash photos (no local images needed)
- 💡 **Info modal** — click any card to see name, description & 4 fact tiles
- ⏸️ **Hover to pause** — hover the carousel or a card to stop rotation
- 📱 **Fully responsive** — works on desktop, tablet, and mobile
- ⚡ **Zero dependencies** — no npm, no frameworks, no build step

---

## 🗂️ Project Structure

```
animal-world/
├── index.html        ← Page structure & category buttons
├── style.css         ← All visual styles & 3D carousel logic
├── script.js         ← Animal data (names, images, facts) & JS logic
├── README.md         ← This file
└── images/           ← (Optional) Your own animal photos
    ├── wild/
    ├── carnivorous/
    ├── herbivorous/
    ├── birds/
    ├── aquatic/
    └── reptiles/
```

---

## 🚀 How to Run

### Option A — Direct (simplest)
Double-click `index.html` — opens in your default browser instantly.

### Option B — Local server (for custom images)
```bash
# Python
cd animal-world
python -m http.server 5500
# Open: http://127.0.0.1:5500

# Node.js
npx serve .

# VS Code
Right-click index.html → Open with Live Server
```

---

## 🐾 Animal Categories

| Category | Animals | Description |
|---|---|---|
| 🦁 Wild | 11 | Lion, Tiger, Elephant, Wolf, Cheetah & more |
| 🐯 Carnivorous | 10 | Leopard, Crocodile, Shark, Orca & more |
| 🦒 Herbivorous | 10 | Giraffe, Panda, Zebra, Rhino & more |
| 🦅 Birds | 11 | Eagle, Flamingo, Penguin, Toucan & more |
| 🐬 Aquatic | 10 | Dolphin, Blue Whale, Octopus, Manta Ray & more |
| 🦎 Reptiles | 10 | King Cobra, Chameleon, Anaconda & more |

---

## 🖼️ Using Your Own Images

All image paths live in `script.js`. To swap in your own photos:

1. Place your images in the matching `images/<category>/` folder
2. In `script.js`, find the animal and change its `img:` value:

```js
// Before (Unsplash URL):
img: "https://images.unsplash.com/photo-xxxx",

// After (your local file):
img: "images/wild/lion.jpg",
```

**Recommended size:** `400 × 533 px` (portrait 3:4 ratio)  
**Formats accepted:** `.jpg` `.jpeg` `.png` `.webp`  
**No spaces in filenames** — use underscores: `snow_leopard.jpg`

---

## 🎨 Customisation

### Change rotation speed
In `style.css`:
```css
.a3d { animation: ry 38s linear infinite; } /* lower number = faster */
```

### Change card size
In `style.css`:
```css
--w: clamp(120px, 18vw, 200px); /* min, responsive, max */
```

### Add a new animal
In `script.js`, add to the correct category's `list` array:
```js
{
    name: "Animal Name",
    img: "images/category/filename.jpg",
    desc: "Short description of the animal.",
    facts: [
        { l: "Habitat",  v: "Where it lives" },
        { l: "Lifespan", v: "X years" },
        { l: "Weight",   v: "X kg" },
        { l: "Status",   v: "Endangered / Vulnerable / etc." }
    ]
},
```
Then update `--n` in `index.html` to match the new card count.

---

## 🛠️ Troubleshooting

| Problem | Fix |
|---|---|
| Cards all stack in one place | Check `--n` in `index.html` matches number of `<img>` cards |
| Local images not showing | Use a local server — Chrome blocks `file://` image loading |
| Broken image icon | Check filename spelling & folder path in `script.js` (case-sensitive) |
| Carousel looks flat | Use a modern browser — IE not supported |
| Modal won't open | Open browser console (F12) and check for JS errors |
| Rotation too fast/slow | Change `38s` in `.a3d` animation in `style.css` |

---

## 🧰 Which File to Edit?

| File | Edit when you want to... |
|---|---|
| `index.html` | Add/remove cards, update `--n`, add category buttons |
| `style.css` | Change colors, card size, speed, background, modal style |
| `script.js` | Change animal names, images, descriptions, facts |

---

## 📋 Tech Stack


- **HTML5** — semantic structure
- **CSS3** — `transform-style: preserve-3d`, `rotateY`, `perspective`, CSS custom properties
- **Vanilla JavaScript** — DOM manipulation, event handling, dynamic rendering

---

## 📄 License

This project is open source and free to use for personal and educational purposes.

---

*Animal World — Built with HTML, CSS & JavaScript — No dependencies required*