
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="disclaimer">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-neon-pink/10 text-neon-pink text-sm font-semibold mb-3">
            LEGAL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Disclaimer</h2>
        </div>

        <div className="glass-card rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="text-neon-pink flex-shrink-0 mt-1" size={24} />
            <p className="text-gray-300">
              By using CUSTOM GPT MAKER BOT, you acknowledge and agree to the following terms and conditions:
            </p>
          </div>

          <div className="space-y-4 text-gray-400">
            <p>
              <strong className="text-white">No Guarantees:</strong> CUSTOM GPT MAKER BOT is provided "as is" without any warranties, expressed or implied. We do not guarantee that the service will be error-free, uninterrupted, or that all functionality will work as described.
            </p>

            <p>
              <strong className="text-white">AI Limitations:</strong> As an AI-based service, CUSTOM GPT MAKER BOT may occasionally generate content that is incorrect, incomplete, or not aligned with your intentions. Users should review all AI-generated content for accuracy and appropriateness.
            </p>

            <p>
              <strong className="text-white">User Responsibility:</strong> Users are solely responsible for how they use custom GPTs created with this service. AI WEB TOOLS LLC is not responsible for any consequences arising from the use of custom GPTs in professional, personal, or any other contexts.
            </p>

            <p>
              <strong className="text-white">Content Restrictions:</strong> Users must not use CUSTOM GPT MAKER BOT to create assistants that generate illegal, harmful, deceptive, or otherwise objectionable content as defined by OpenAI's usage policies and applicable laws.
            </p>

            <p>
              <strong className="text-white">Copyright and Ownership:</strong> The CUSTOM GPT MAKER BOT service is owned by AI WEB TOOLS LLC. The custom GPTs you create may be subject to OpenAI's terms of service. You retain ownership of your original content, but not of the underlying AI technology.
            </p>

            <p>
              <strong className="text-white">Data Processing:</strong> When using this service, your prompts and interactions may be processed by both our systems and OpenAI's systems in accordance with their respective privacy policies.
            </p>

            <p>
              <strong className="text-white">Third-Party Services:</strong> CUSTOM GPT MAKER BOT may rely on third-party services, including OpenAI's APIs. We are not responsible for any changes, interruptions, or discontinuation of these third-party services.
            </p>

            <p>
              <strong className="text-white">Updates and Changes:</strong> We reserve the right to modify, update, or discontinue CUSTOM GPT MAKER BOT or any part of it at any time without notice.
            </p>

            <p>
              <strong className="text-white">Educational Purpose:</strong> This tool is designed primarily for educational and creative purposes. It is not intended to provide professional advice in fields such as law, medicine, finance, or engineering.
            </p>

            <p>
              For the complete terms of service, please visit our <a href="https://aiwebtools.ai/terms-of-services" className="text-neon-cyan hover:underline" target="_blank" rel="noopener noreferrer">Terms of Service</a> page. By continuing to use this service, you acknowledge that you have read, understood, and agreed to this disclaimer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
