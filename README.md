# 📖 Node.js Guestbook App on AWS

A beginner-friendly full-stack project that demonstrates how to build, test, and deploy a Node.js Guestbook app using AWS services like Elastic Beanstalk, CodePipeline, CodeBuild, and ACM for HTTPS.

## 🚀 Features

- Node.js + Express web app
- SQLite3 for lightweight data storage
- Bootstrap for styling
- CI/CD with GitHub + AWS CodePipeline
- Automated tests with Jest
- Hosted on AWS Elastic Beanstalk
- Secure with HTTPS and custom domain

## 📁 Project Structure

guestbook-app/ ├── .github/workflows/test.yml # GitHub test automation ├── app.js # Entry point (Elastic Beanstalk reads this) ├── index.js # Main application logic ├── views/ # EJS templates ├── public/ # Static assets (Bootstrap, custom CSS) ├── db.js # SQLite3 DB logic ├── package.json # Node dependencies └── Procfile # Tells EB to run Node

markdown
Copy
Edit

## 🛠 Tech Stack

- Node.js + Express
- SQLite3
- EJS
- Bootstrap
- Jest (for testing)
- GitHub (source control)
- AWS Elastic Beanstalk
- AWS CodeBuild & CodePipeline
- AWS ACM + Load Balancer (HTTPS)

## 🧪 Run Tests

```bash
npm install
npm test
🌍 Deploy to AWS
Push to GitHub.

CI/CD is triggered by AWS CodePipeline.

CodeBuild runs tests.

Elastic Beanstalk deploys app if tests pass.

🔐 Custom Domain + HTTPS
Domain registered on AWS or external registrar.

Configured Elastic Beanstalk Load Balancer with HTTPS via ACM.

Traffic securely served on HTTPS.

📸 Blog Walkthrough
Check out the full step-by-step tutorial on Hashnode: 👉 How I Deployed a Node.js Guestbook App with CI/CD, Tests, and HTTPS on AWS

🖼 Cover Image

Built with 💡 by Afolami Olaoluwa
