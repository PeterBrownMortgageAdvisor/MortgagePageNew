'use client';

import { useState } from 'react';

export default function MortgageBusinessWebsite() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const formAction = 'https://formsubmit.co/pjwb01@hotmail.co.uk';
  const services = [
    {
      title: 'First Time Purchases',
      icon: '1️⃣',
      desc: 'Guidance for first-time buyers, repeat buyers, and clients moving home.'
    },
    {
      title: 'Refinancing',
      icon: '£',
      desc: 'Review your current mortgage and explore options that may better fit your goals.'
    },
    {
      title: 'Buy-to-Let',
      icon: '🏠',
      desc: 'Support for landlords and property investors looking to grow with confidence.'
    },
    {
      title: 'Remortgaging Advice',
      icon: '🔄',
      desc: 'Clear advice on product transfers, rate changes, and timing your next move.'
    },
    {
      title: 'Insurance Review',
      icon: '🛡️',
      desc: 'We will review your protection needs and discuss suitable insurance options as part of the process, at no cost.'
    }
  ];

  const steps = [
    'Book a free consultation',
    'Share your goals and financial details',
    'Review tailored mortgage options',
    'Complete your application with expert support'
  ];

  const testimonials = [
    {
      name: 'Sarah & James',
      quote:
        'The whole process felt simple and stress-free. We always knew what the next step was.'
    },
    {
      name: 'Priya R.',
      quote:
        'Professional, responsive, and incredibly helpful in finding the right mortgage option for my refinance.'
    },
    {
      name: 'Daniel M.',
      quote:
        'Excellent service from start to finish. I would happily recommend this business to anyone buying a home.'
    }
  ];

  const faqs = [
    {
      question: 'How much can I borrow?',
      answer:
        'The amount you can borrow depends on your income, outgoings, credit profile, and the lender’s criteria. I can help you understand what may be available based on your circumstances.'
    },
    {
      question: 'Can you help first-time buyers?',
      answer:
        'Yes. I can guide you through the full process, explain your options clearly, and help make everything feel much more straightforward from the start.'
    },
    {
      question: 'Do you charge for your advice?',
      answer:
        'I offer a no obligation advice process, so you can explore your options and understand the next steps before deciding how you would like to proceed.'
    },
    {
      question: 'Can you help if I am remortgaging?',
      answer:
        'Yes. Whether you are looking to secure a better deal, raise funds, or review your current arrangements, I can help you explore suitable remortgage options.'
    }
  ];

  const [loanAmount, setLoanAmount] = useState('200000');
  const [interestRate, setInterestRate] = useState('5');
  const [mortgageTerm, setMortgageTerm] = useState('25');

  const principal = Number(loanAmount) || 0;
  const monthlyRate = (Number(interestRate) || 0) / 100 / 12;
  const totalPayments = (Number(mortgageTerm) || 0) * 12;
  const monthlyPayment =
    principal > 0 && monthlyRate > 0 && totalPayments > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1)
      : 0;
  const formattedMonthlyPayment = monthlyPayment.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 2
  });

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900">
      <header className="sticky top-0 z-20 border-b border-emerald-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xl font-bold tracking-tight">Peter Brown - The Mortgage Advisor</div>
            <div className="text-sm text-emerald-600">Trusted mortgage guidance for every stage of your journey</div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="transition hover:text-emerald-700">Services</a>
            <a href="#about" className="transition hover:text-emerald-700">About</a>
            <a href="#process" className="transition hover:text-emerald-700">Process</a>
            <a href="#contact" className="transition hover:text-emerald-700">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700" />
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_top_right,white,transparent_35%),radial-gradient(circle_at_bottom_left,white,transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="max-w-2xl text-white">
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm">
              Trusted mortgage advice for buying, remortgaging, and buy-to-let
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Clear, personal mortgage advice you can trust
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-100">
              Whether you're buying your first home, remortgaging, or exploring buy-to-let options, I’m here to guide you every step of the way with clear advice, honest support, and a straightforward process.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-emerald-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Book a Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <div className="text-lg font-semibold">Whole of Market Access</div>
                <div className="mt-1 text-emerald-100">Access to a wide range of lenders and mortgage products</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <div className="text-lg font-semibold">No Obligation Advice</div>
                <div className="mt-1 text-emerald-100">Clear, honest guidance with no pressure to proceed</div>
              </div>
            </div>

          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-200">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-emerald-600">Quick Enquiry</div>
                  <div className="text-xl font-semibold">Find the right mortgage path for YOU!</div>
                </div>
                <div className="rounded-2xl bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  Free Review
                </div>
              </div>
              {submitted ? (
                <div className="text-center p-6">
                  <div className="text-2xl font-semibold text-emerald-900">Thank you!</div>
                  <p className="mt-3 text-emerald-700">
                    Thank you for your enquiry, we aim to get in touch within two business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    setFormError('');
                    try {
                      const formData = new FormData(e.target);
                      const response = await fetch(formAction, {
                        method: 'POST',
                        body: formData,
                        headers: {
                          Accept: 'application/json'
                        }
                      });

                      if (!response.ok) {
                        throw new Error('Submission failed');
                      }

                      setSubmitted(true);
                      e.target.reset();
                    } catch (error) {
                      setFormError('Your enquiry could not be sent. Please try again or email pjwb01@hotmail.co.uk directly.');
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                  className="grid gap-4"
                >
                  <input type="hidden" name="_subject" value="New mortgage website enquiry" />
                  <input type="hidden" name="_replyto" value="email" />
                  <input type="hidden" name="_url" value="https://peterbrownmortgageadvisor.co.uk" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="true" />

                  <input name="full_name" required className="rounded-2xl border border-emerald-200 px-4 py-3" placeholder="Full name" />
                  <input type="email" name="email" required className="rounded-2xl border border-emerald-200 px-4 py-3" placeholder="Email address" />
                  <input type="tel" name="phone" required className="rounded-2xl border border-emerald-200 px-4 py-3" placeholder="Phone number" />

                  <select name="enquiry_type" required defaultValue="" className="rounded-2xl border border-emerald-200 px-4 py-3">
                    <option value="" disabled>I’m interested in…</option>
                    <option>Buying a home</option>
                    <option>Refinancing</option>
                    <option>Investment property</option>
                    <option>Remortgaging advice</option>
                  </select>

                  <textarea name="message" rows={4} className="rounded-2xl border border-emerald-200 px-4 py-3" placeholder="Tell us a little about what you need" />

                  <button type="submit" disabled={submitting} className="rounded-2xl bg-emerald-900 px-4 py-3 font-semibold text-white disabled:opacity-70">
                    {submitting ? 'Sending...' : 'Request a Callback'}
                  </button>

                  <p className="text-xs text-emerald-600">
                    Enquiries will be sent to pjwb01@hotmail.co.uk
                  </p>
                  {formError ? <p className="text-sm text-red-600">{formError}</p> : null}
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-10 lg:px-8">
          <p className="text-center text-white font-bold text-sm sm:text-base tracking-wide">
            YOUR HOME MAY BE REPOSSESSED IF YOU DO NOT MAINTAIN YOUR MORTGAGE PAYMENTS
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Services</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">How I can help you with your mortgage</h2>
          <p className="mt-4 text-lg text-emerald-700">
            Clear, straightforward advice tailored to you—so you understand your options and feel confident in your next step.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-emerald-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">About</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">I build trust by focusing solely on your goals</h2>
            <p className="mt-6 text-lg leading-8 text-emerald-700">
              I focus on what matters most to you—your goals, your circumstances, and what you want to achieve. Whether you're buying your first home, remortgaging, or investing, I take the time to understand your situation and explain your options clearly.
            </p>
            <p className="mt-4 text-lg leading-8 text-emerald-700">
              You’ll get honest, straightforward advice and a simple process from start to finish—so you can move forward with confidence, knowing you’re making the right decision for you.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] bg-emerald-50 p-6 ring-1 ring-slate-200">
              <div className="text-2xl font-bold">Quick, reliable updates</div>
              <p className="mt-3 text-emerald-700">You’ll always know where you stand, with clear communication and prompt responses throughout the process.</p>
            </div>
            <div className="rounded-[2rem] bg-emerald-50 p-6 ring-1 ring-slate-200">
              <div className="text-2xl font-bold">Guidance you can rely on</div>
              <p className="mt-3 text-emerald-700">I’ll explain your options clearly and help you choose what’s right for you, without jargon or confusion.</p>
            </div>
            <div className="rounded-[2rem] bg-emerald-50 p-6 ring-1 ring-slate-200">
              <div className="text-2xl font-bold">Clear next steps</div>
              <p className="mt-3 text-emerald-700">You’ll always know what happens next, with simple, guided steps from your first enquiry right through to completion.</p>
            </div>
            <div className="rounded-[2rem] bg-emerald-50 p-6 ring-1 ring-slate-200">
              <div className="text-2xl font-bold">Working for you wherever in the UK you are based</div>
              <p className="mt-3 text-emerald-700">I support clients across the UK, offering flexible advice wherever you are and however you prefer to communicate.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Process</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A simple path from enquiry to completion</h2>
            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-900 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="pt-1 text-lg font-medium text-emerald-800">{step}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-emerald-900 p-8 text-white shadow-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Why people choose us</div>
            <h3 className="mt-3 text-3xl font-bold">Helpful advice, not jargon</h3>
            <p className="mt-5 text-lg leading-8 text-emerald-200">
              Getting a mortgage can feel complicated—but it doesn’t have to be. I keep things simple, explain everything clearly, and focus on what’s right for you so you can move forward with confidence.
            </p>
            <ul className="mt-8 space-y-4 text-emerald-100">
              <li>• Clear, honest advice tailored to your situation</li>
              <li>• No jargon—just straightforward explanations</li>
              <li>• Support from first enquiry through to completion</li>
              <li>• A friendly, personal service you can rely on</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Testimonials</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What clients might say about working with you</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[2rem] bg-emerald-50 p-6 ring-1 ring-slate-200">
                <p className="text-lg leading-8 text-emerald-800">“{item.quote}”</p>
                <div className="mt-6 font-semibold text-emerald-900">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-emerald-900 p-8 text-white shadow-2xl lg:p-12">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Contact</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Get in touch for clear, personal mortgage advice</h2>
            <p className="mt-5 text-lg leading-8 text-emerald-200">
              Whether you are buying your first home, remortgaging, or exploring buy-to-let options, I am here to help you understand your choices and move forward with confidence.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 text-emerald-900 shadow-lg">
              <div className="text-xl font-semibold">Business details</div>
              <div className="mt-4 space-y-3 text-emerald-700">
                <p>📞 +44 7594 869444</p>
                <p>✉️ pjwb01@hotmail.co.uk</p>
                <p>🕒 Mon–Fri, 9:00 AM–5:00 PM</p>
                <p>
                  📘 <a href="https://www.facebook.com/share/1ajhQ6pGb4/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="underline">Follow on Facebook</a>
                </p>
              </div>
              <a href="mailto:pjwb01@hotmail.co.uk" className="mt-6 block w-full rounded-2xl bg-emerald-900 px-4 py-3 text-center font-semibold text-white">
                Email Peter Brown
              </a>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-emerald-900 shadow-lg">
              <div className="text-xl font-semibold">Mortgage calculator</div>
              <p className="mt-2 text-sm leading-6 text-emerald-700">
                Use these sliders to get an estimated monthly repayment.
              </p>
              <div className="mt-6 grid gap-6">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm font-medium text-emerald-700">
                    <label>Loan amount</label>
                    <span>£{Number(loanAmount).toLocaleString('en-GB')}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full accent-emerald-900"
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm font-medium text-emerald-700">
                    <label>Interest rate</label>
                    <span>{Number(interestRate).toFixed(2)}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.05"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full accent-emerald-900"
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm font-medium text-emerald-700">
                    <label>Mortgage term</label>
                    <span>{mortgageTerm} years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={mortgageTerm}
                    onChange={(e) => setMortgageTerm(e.target.value)}
                    className="w-full accent-emerald-900"
                  />
                </div>
                <div className="rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
                  <div className="text-sm font-medium text-emerald-700">Estimated monthly payment</div>
                  <div className="mt-2 text-3xl font-bold text-emerald-900">{formattedMonthlyPayment}</div>
                  <p className="mt-2 text-xs leading-5 text-emerald-700">
                    This calculator gives an estimate only and does not constitute financial advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">FAQs</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
            
          </div>
          <div className="mt-10 grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[2rem] bg-emerald-50 p-6 ring-1 ring-emerald-200">
                <h3 className="text-xl font-semibold text-emerald-900">{faq.question}</h3>
                <p className="mt-3 leading-7 text-emerald-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-emerald-700 lg:px-8 space-y-4">
          <p className="font-semibold text-emerald-900">Regulatory Information</p>
          <p>
            Peter Brown - The Mortgage Advisor is an appointed representative of The Mortgage Connect (N.I) Ltd, which is authorised and regulated by the Financial Conduct Authority (FCA).
          </p>
          <p>
            FCA Register number: 915845. You can check this on the Financial Services Register at https://register.fca.org.uk
          </p>
          <p>
            The guidance and/or advice contained within this website is subject to UK regulatory regime and is therefore targeted at consumers based in the UK.
          </p>
          <p>
            Your home may be repossessed if you do not keep up repayments on your mortgage.
          </p>

          <div className="pt-4 border-t border-emerald-200 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Peter Brown - The Mortgage Advisor. All rights reserved.</p>
            <p>Website for information purposes only. Mortgage advice is provided after a full assessment of your needs.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
