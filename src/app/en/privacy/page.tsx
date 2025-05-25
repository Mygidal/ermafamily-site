export default function PrivacyPage() {
  return (
    <div className="font-inter mx-auto max-w-[800px] space-y-6 px-4 pb-10 pt-[100px] text-gray-800">
      <h1 className="font-montserrat mb-6 text-center text-3xl font-bold text-blue-900">
        Privacy Policy
      </h1>

      <p>
        <strong>Last updated:</strong> [enter date]
      </p>

      <p>
        <strong>ERMA – FAMILY Ltd.</strong> is committed to protecting the
        personal information of its clients, partners, and website visitors.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">
        1. What information do we collect?
      </h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Name, email address, phone number (via contact form)</li>
        <li>Technical information: IP address, browser, device type</li>
        <li>Usage data related to cookies</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">
        2. How do we use your information?
      </h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>To respond to inquiries and requests</li>
        <li>To improve user experience</li>
        <li>For site analysis and maintenance</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">
        3. Information sharing
      </h2>
      <p>
        We do not sell, distribute, or provide personal information to third
        parties, unless required by law or necessary to fulfill our contractual
        obligations with your consent.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">4. Cookies</h2>
      <p>
        Our site uses cookies to analyze traffic and enhance functionality. You
        have the right to disable them through your browser settings.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">5. Your rights</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Request access to your data</li>
        <li>Correct or delete provided information</li>
        <li>Withdraw consent for processing</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">6. Security</h2>
      <p>
        We apply administrative, technical, and physical safeguards to protect
        your information from unauthorized access.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">7. Contact</h2>
      <p>If you have any questions regarding privacy, please contact us:</p>
      <ul className="pl-5">
        <li>
          📩 <strong>Email:</strong> office@ermafamily.bg
        </li>
        <li>
          📍 <strong>Address:</strong> Sofia, Ovcha Kupel District, 692nd
          Street, №12
        </li>
      </ul>
    </div>
  );
}
