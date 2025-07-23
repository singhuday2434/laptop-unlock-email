# 🔐 Laptop Unlock Email Alert System

This project sends an email notification whenever your laptop is unlocked, using Node.js and Windows Task Scheduler.

## 🛠 Features

- 💌 Sends email on laptop unlock using Nodemailer
- 🖥️ Runs silently via Windows Task Scheduler
- 🔘 Enable/Disable toggle with `.bat` files (`enabled.txt`)
- ⚙️ Custom control logic with pause on OFF
- ✅ Modular and lightweight

## 📁 Files

- `index.js` → Main Node.js script (handles alerts)
- `unlock-email.bat` → Runs on unlock (via Task Scheduler)
- `enabled.txt` → Stores ON/OFF status
- `enable-alert.bat` / `disable-alert.bat` → To toggle alerts

## 🚀 How to Use

1. Clone this repo and install Node.js
2. Add your email + app password in `index.js`
3. Set up `unlock-email.bat` to run via Task Scheduler on "unlock"
4. Use `enable-alert.bat` or `disable-alert.bat` to control alerts

---

Feel free to fork this project and customize it for your use!
