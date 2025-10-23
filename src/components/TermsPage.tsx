import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export function TermsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-[#061022] pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h1 className="text-white mb-4">Terms and Conditions</h1>
            <p className="text-white/50">Last updated: 21 October 2025</p>
          </div>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Studia. These Terms and Conditions ("Terms") govern your access to and use of the Studia 
                mobile application and related services (collectively, the "Service"). By accessing or using the Service, 
                you agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree with any part of these Terms, you may not access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">2. Use of Service</h2>
              <h3 className="text-white/90 mb-3">2.1 Eligibility</h3>
              <p className="mb-4">
                You must be at least 16 years of age to use the Service. By using the Service, you represent and 
                warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
              </p>
              
              <h3 className="text-white/90 mb-3">2.2 Account Registration</h3>
              <p className="mb-4">
                To access certain features of the Service, you may be required to create an account. You agree to 
                provide accurate, current, and complete information during registration and to update such information 
                to keep it accurate, current, and complete.
              </p>
              
              <h3 className="text-white/90 mb-3">2.3 Account Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all 
                activities that occur under your account. You agree to notify us immediately of any unauthorised use 
                of your account or any other breach of security.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">3. Subscription and Payment</h2>
              <h3 className="text-white/90 mb-3">3.1 Free and Paid Plans</h3>
              <p className="mb-4">
                Studia offers both free and paid subscription plans. The features available under each plan are 
                described on our pricing page and may be updated from time to time.
              </p>
              
              <h3 className="text-white/90 mb-3">3.2 Payment Terms</h3>
              <p className="mb-4">
                For paid subscriptions, you agree to pay all fees associated with your chosen plan. Payments are 
                processed through our third-party payment processors. By subscribing to a paid plan, you authorise 
                us to charge your chosen payment method on a recurring basis according to your billing cycle.
              </p>
              
              <h3 className="text-white/90 mb-3">3.3 Cancellation and Refunds</h3>
              <p>
                You may cancel your subscription at any time through your account settings. We offer a 14-day 
                money-back guarantee for new Pro subscriptions. Refund requests beyond this period will be considered 
                on a case-by-case basis. Upon cancellation, you will retain access to paid features until the end of 
                your current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">4. Intellectual Property</h2>
              <h3 className="text-white/90 mb-3">4.1 Our Content</h3>
              <p className="mb-4">
                All content provided through the Service, including but not limited to study materials, flashcards, 
                mock exams, AI-generated study plans, text, graphics, logos, and software, is the property of Studia 
                or our licensors and is protected by UK and international copyright, trademark, and other intellectual 
                property laws.
              </p>
              
              <h3 className="text-white/90 mb-3">4.2 Your Content</h3>
              <p>
                You retain all rights to any content you submit, post, or display through the Service ("User Content"). 
                By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free licence to use, 
                reproduce, and display such content solely for the purpose of providing and improving the Service.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">5. AI Features and Limitations</h2>
              <p className="mb-4">
                Studia uses artificial intelligence to generate personalised study plans, explanations, and other 
                educational content. While we strive for accuracy, AI-generated content may contain errors or 
                inaccuracies. The Service is intended as a study aid and should not be your sole source of preparation 
                for professional qualifications.
              </p>
              <p>
                You acknowledge that AI-generated content is provided "as is" and that you are responsible for 
                verifying the accuracy of such content against official study materials and guidance.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">6. User Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the Service for any unlawful purpose or in violation of these Terms</li>
                <li>Share your account credentials with others</li>
                <li>Copy, reproduce, or distribute content from the Service without our permission</li>
                <li>Attempt to reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Use automated tools to access or scrape content from the Service</li>
                <li>Upload malicious code or attempt to compromise the security of the Service</li>
                <li>Impersonate another person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white mb-4">7. Disclaimers and Limitation of Liability</h2>
              <h3 className="text-white/90 mb-3">7.1 No Guarantee of Success</h3>
              <p className="mb-4">
                While we design our Service to help you prepare for professional qualifications, we do not guarantee 
                that use of the Service will result in passing any examination or obtaining any certification.
              </p>
              
              <h3 className="text-white/90 mb-3">7.2 Service Availability</h3>
              <p className="mb-4">
                We strive to maintain high availability of the Service but do not guarantee that it will be 
                uninterrupted or error-free. We may modify, suspend, or discontinue any part of the Service at any 
                time without prior notice.
              </p>
              
              <h3 className="text-white/90 mb-3">7.3 Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, Studia shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from 
                your use of or inability to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">8. Data Protection</h2>
              <p>
                We process your personal data in accordance with our Privacy Policy and applicable data protection 
                laws, including the UK General Data Protection Regulation (UK GDPR). By using the Service, you consent 
                to such processing and warrant that all data provided by you is accurate.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by 
                posting the updated Terms on our website and/or through the Service. Your continued use of the Service 
                following such notification constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">10. Termination</h2>
              <p>
                We may terminate or suspend your access to the Service immediately, without prior notice or liability, 
                for any reason, including if you breach these Terms. Upon termination, your right to use the Service 
                will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of England and Wales, 
                without regard to conflict of law principles. Any disputes arising from these Terms or your use of 
                the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-white mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us through our{' '}
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-[#0033A0] hover:underline"
                >
                  contact page
                </button>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
