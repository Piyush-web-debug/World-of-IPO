import React from "react";

export default function Section8() {
  return (
    <>
    {/* Page 8: FAQ Section */}
      <div className="container faq-section py-5">
        <h2 className="faq-title fw-bold">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
              {/* FAQ Item 1 */}
              <div className="accordion-item shadow-sm mb-3">
                <h2 className="accordion-header" id="faqHeading1">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse1"
                    aria-expanded="false"
                    aria-controls="faqCollapse1"
                  >
                    What is World of IPO and how is it different from other IPO
                    websites?
                  </button>
                </h2>
                <div
                  id="faqCollapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    World of IPO is an information-first platform dedicated to providing accurate, up-to-date insights on upcoming, ongoing, and past IPOs in India. 
                    Unlike other platforms, we focus solely on delivering structured IPO data — including grey market premiums (GMP), allotment dates, listing estimates, and subscription details — without promoting buying or selling. 
                    The result is a clean, distraction-free user experience tailored for clarity and ease.
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="accordion-item shadow-sm mb-3">
                <h2 className="accordion-header" id="faqHeading2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse2"
                    aria-expanded="false"
                    aria-controls="faqCollapse2"
                  >
                    Do you help with interview preparation or career advice?
                  </button>
                </h2>
                <div
                  id="faqCollapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    No, World of IPO does not offer financial advice or investment recommendations. 
                    Our platform is strictly informational. 
                    We provide facts, figures, dates, and market trends to help users make their own informed decisions.
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="accordion-item shadow-sm mb-3">
                <h2 className="accordion-header" id="faqHeading3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse3"
                    aria-expanded="false"
                    aria-controls="faqCollapse3"
                  >
                    Where do you source IPO data and GMP values from?
                  </button>
                </h2>
                <div
                  id="faqCollapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    All our IPO data is collected from reliable public sources, regulatory filings, and verified market trackers.
                     GMP values are gathered from trusted market observers and updated regularly for accuracy.
                     However, since GMP is unofficial and market-driven, values may vary.
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="accordion-item shadow-sm mb-3">
                <h2 className="accordion-header" id="faqHeading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse4"
                    aria-expanded="false"
                    aria-controls="faqCollapse4"
                  >
                    How frequently is the information updated?
                  </button>
                </h2>
                <div
                  id="faqCollapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Our data is updated daily to ensure accuracy and relevance.
                    Critical updates like GMP changes, allotment statuses, and
                    listing gains are refreshed in near real-time during active
                    IPO periods.
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="accordion-item shadow-sm mb-3">
                <h2 className="accordion-header" id="faqHeading5">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapse5"
                    aria-expanded="false"
                    aria-controls="faqCollapse5"
                  >
                    Can I get notified about new IPOs or allotment results?
                  </button>
                </h2>
                <div
                  id="faqCollapse5"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeading5"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We are currently working on integrating email and push
                    notification features. Until then, you can follow us on our
                    official social media channels or check the website
                    regularly for the latest IPO alerts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}