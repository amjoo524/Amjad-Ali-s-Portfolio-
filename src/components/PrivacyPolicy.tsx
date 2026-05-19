export function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: May 2025</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Information I Collect</h2>
            <p>When you use the contact form on this website, I collect the following information:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>
            <p className="mt-3">No other personal data is collected. I do not use cookies, tracking scripts, or analytics tools.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. How I Use Your Information</h2>
            <p>The information you provide through the contact form is used solely to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Respond to your inquiry or project request</li>
              <li>Communicate with you regarding potential collaboration</li>
            </ul>
            <p className="mt-3">Your information will never be sold, rented, or shared with any third party.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. EmailJS</h2>
            <p>This website uses EmailJS to process contact form submissions. Messages are transmitted securely through their platform. You can review their privacy policy at <a href="https://www.emailjs.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">emailjs.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Data Storage</h2>
            <p>I do not store your personal data on any database or server. Contact form submissions are delivered directly to my email inbox and are not retained beyond our communication.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Third-Party Services</h2>
            <p>This website may link to external platforms such as GitHub, LinkedIn, and live project URLs. These platforms have their own privacy policies, and I am not responsible for their data practices.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
            <p>You have the right to request deletion of any personal information you have shared with me via the contact form. To do so, please email me directly.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Changes to This Policy</h2>
            <p>I may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Contact</h2>
            <p>For any privacy-related questions, please reach out at: <a href="mailto:sahkoo524@gmail.com" className="text-primary hover:underline">sahkoo524@gmail.com</a></p>
          </div>

        </div>
      </div>
    </div>
  );
}