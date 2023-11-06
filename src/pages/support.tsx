import React, { useState } from 'react';

const Support: React.FC = () => {
  const faqs = [
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and visiting the order history page.'
    },
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows returns within 30 days of purchase. Please review our return policy for detailed information.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team via email at support@Rebelrunway.com or by calling +46 (123) 456-789.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to many countries. Please check our shipping information for a list of supported regions.'
    }
  ];

  const [personalQuestion, setPersonalQuestion] = useState('');
  const [submittedQuestion, setSubmittedQuestion] = useState('');

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement the submission logic here, such as sending the question to your support team.
    setSubmittedQuestion(personalQuestion);
    setPersonalQuestion('');
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Support
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          We're here to help you. If you have any questions or need assistance, please check the FAQs below. If your question is not answered, you can contact our support team.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Frequently Asked Questions
          </h2>
          <ul>
            {faqs.map((faq, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-gray-800 dark:text-gray-200 font-semibold">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Submit Your Personal Question
          </h2>
          <form onSubmit={handleSubmitQuestion}>
            <div className="mb-4">
              <label
                className="block text-gray-800 dark:text-gray-200"
                htmlFor="personal-question"
              >
                Your Question
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                id="personal-question"
                name="personal-question"
                rows={4}
                value={personalQuestion}
                onChange={(e) => setPersonalQuestion(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              className="bg-black text-white rounded px-4 py-2"
              type="submit"
            >
              Submit Question
            </button>
          </form>
        </div>

        {submittedQuestion && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Your Submitted Question
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {submittedQuestion}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;
