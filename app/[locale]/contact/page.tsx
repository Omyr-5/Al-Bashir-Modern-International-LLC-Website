'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
    const t = useTranslations('Navigation');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">{t('contact')}</h1>

            {status === 'success' ? (
                <div className="bg-green-100 p-4 rounded text-green-800 mb-6">
                    Message sent successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full rounded-md border p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full rounded-md border p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            className="w-full rounded-md border p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
}
