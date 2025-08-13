const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  let log = `${Date.now()} : ${req.url} New Req recieved\n`;

  fs.appendFile("log.txt", log, function (err, data) {
    console.log("Log Updated");
  });

  switch (req.url) {
    case "/":
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Professional Services</title>

</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-brand">
                <h1 class="brand-title">ProServices</h1>
            </div>
            <ul class="nav-links">
                <li><a href="index.html" class="nav-link active">Home</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="main-content">
        <section class="hero">
            <div class="hero-content">
                <h1 class="hero-title">Welcome to Professional Services</h1>
                <p class="hero-subtitle">We provide exceptional solutions tailored to your business needs</p>
                <a href="contact.html" class="cta-button">Get Started</a>
            </div>
        </section>

        <section class="services">
            <div class="container">
                <h2 class="section-title">Our Services</h2>
                <div class="services-grid">
                    <div class="service-card">
                        <h3 class="service-title">Consulting</h3>
                        <p class="service-description">Strategic business consulting to help you achieve your goals and optimize operations.</p>
                    </div>
                    <div class="service-card">
                        <h3 class="service-title">Development</h3>
                        <p class="service-description">Custom software development solutions built with modern technologies and best practices.</p>
                    </div>
                    <div class="service-card">
                        <h3 class="service-title">Support</h3>
                        <p class="service-description">24/7 technical support and maintenance to keep your systems running smoothly.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="about">
            <div class="container">
                <h2 class="section-title">About Us</h2>
                <p class="about-text">
                    With over a decade of experience in the industry, we've helped hundreds of businesses 
                    transform their operations and achieve remarkable growth. Our team of experts is dedicated 
                    to delivering innovative solutions that drive real results.
                </p>
                <p class="about-text">
                    We believe in building long-term partnerships with our clients, understanding their unique 
                    challenges, and providing customized solutions that exceed expectations.
                </p>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p class="footer-text">&copy; 2025 Professional Services. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`);
      break;
    case "/about":
      res.end("About Page Data");
      break;
    case "/contact":
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Professional Services</title>
   
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-brand">
                <h1 class="brand-title">ProServices</h1>
            </div>
            <ul class="nav-links">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="contact.html" class="nav-link active">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="main-content">
        <section class="contact-hero">
            <div class="container">
                <h1 class="page-title">Contact Us</h1>
                <p class="page-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
        </section>

        <section class="contact-content">
            <div class="container">
                <div class="contact-grid">
                    <div class="contact-form-section">
                        <h2 class="section-title">Send Message</h2>
                        <form class="contact-form" action="#" method="POST">
                            <div class="form-group">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" id="name" name="name" class="form-input" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" id="email" name="email" class="form-input" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="tel" id="phone" name="phone" class="form-input">
                            </div>
                            
                            <div class="form-group">
                                <label for="subject" class="form-label">Subject</label>
                                <select id="subject" name="subject" class="form-input" required>
                                    <option value="">Select a subject</option>
                                    <option value="consulting">Consulting Services</option>
                                    <option value="development">Development Project</option>
                                    <option value="support">Technical Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="message" class="form-label">Message</label>
                                <textarea id="message" name="message" class="form-textarea" rows="5" required></textarea>
                            </div>
                            
                            <button type="submit" class="submit-button">Send Message</button>
                        </form>
                    </div>

                    <div class="contact-info-section">
                        <h2 class="section-title">Get in Touch</h2>
                        
                        <div class="contact-info-item">
                            <h3 class="contact-info-title">Office Address</h3>
                            <p class="contact-info-text">
                                123 Business Street<br>
                                Suite 456<br>
                                New York, NY 10001
                            </p>
                        </div>

                        <div class="contact-info-item">
                            <h3 class="contact-info-title">Phone</h3>
                            <p class="contact-info-text">
                                <a href="tel:+1234567890" class="contact-link">+1 (234) 567-8900</a>
                            </p>
                        </div>

                        <div class="contact-info-item">
                            <h3 class="contact-info-title">Email</h3>
                            <p class="contact-info-text">
                                <a href="mailto:info@proservices.com" class="contact-link">info@proservices.com</a>
                            </p>
                        </div>

                        <div class="contact-info-item">
                            <h3 class="contact-info-title">Business Hours</h3>
                            <p class="contact-info-text">
                                Monday - Friday: 9:00 AM - 6:00 PM<br>
                                Saturday: 10:00 AM - 4:00 PM<br>
                                Sunday: Closed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p class="footer-text">&copy; 2025 Professional Services. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`);
      break;
  }

  console.log(req.url);
});

myServer.listen(8000, () => {
  console.log("Server Started");
});
