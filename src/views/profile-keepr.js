import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './profile-keepr.css'

const ProfileKeepr = (props) => {
  return (
    <div className="profile-keepr-container">
      <Helmet>
        <title>Unveiling the Invisible on Social Media</title>
        <meta
          property="og:title"
          content="Unveiling the Invisible on Social Media"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="profile-keepr-section">
        <div className="profile-keepr-hero">
          <div className="profile-keepr-content">
            <main className="profile-keepr-main">
              <header className="profile-keepr-header">
                <h1 className="profile-keepr-heading">
                  Unveiling the Invisible on Social Media
                </h1>
                <span className="profile-keepr-caption">
                  Discover who&apos;s admiring your profile. Stay informed, stay
                  connected.
                </span>
              </header>
              <div className="profile-keepr-buttons">
                <a href="#downloads" className="profile-keepr-link">
                  <div className="profile-keepr-get-started button">
                    <span className="profile-keepr-text">Get started</span>
                  </div>
                </a>
              </div>
            </main>
            <div className="profile-keepr-highlight">
              <div className="profile-keepr-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="profile-keepr-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="profile-keepr-image1 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="profile-keepr-image2 avatar"
                />
              </div>
              <label className="profile-keepr-caption1">
                Loved by 5,000+ people like you.
              </label>
            </div>
          </div>
          <div className="profile-keepr-image3">
            <img
              alt="image"
              src="/SectionImages/heroimage-1500h.png"
              className="profile-keepr-image4"
            />
          </div>
        </div>
      </section>
      <section id="downloads" className="profile-keepr-section1">
        <main className="profile-keepr-content1">
          <header className="profile-keepr-header1">
            <h2 className="profile-keepr-heading1 section-heading">
              Gain insights like never before, know who&apos;s been peeking at
              your profiles
            </h2>
            <div className="profile-keepr-buttons1">
              <div className="profile-keepr-ios button">
                <img
                  alt="image"
                  src="/Icons/apple-200w.png"
                  className="profile-keepr-icon"
                />
                <div className="profile-keepr-container1">
                  <span className="profile-keepr-text01">Download for iOS</span>
                  <span className="profile-keepr-text02">Coming soon</span>
                </div>
              </div>
              <a
                href="https://#"
                target="_blank"
                rel="noreferrer noopener"
                className="profile-keepr-link1"
              >
                <div className="profile-keepr-android button">
                  <img
                    alt="image"
                    src="/Icons/android-200h.png"
                    className="profile-keepr-icon1"
                  />
                  <div className="profile-keepr-container2">
                    <span className="profile-keepr-text03">
                      Download for Android
                    </span>
                    <span className="profile-keepr-text04">Coming soon</span>
                  </div>
                </div>
              </a>
            </div>
          </header>
        </main>
      </section>
      <section className="profile-keepr-section2">
        <div className="profile-keepr-cube">
          <div className="profile-keepr-top side"></div>
          <div className="profile-keepr-front side"></div>
          <div className="profile-keepr-left side"></div>
        </div>
        <div className="profile-keepr-help">
          <span className="profile-keepr-text05">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="profile-keepr-contact-support">
            <a
              href="mailto:support@keepr.pro?subject="
              className="profile-keepr-link2"
            >
              <p className="profile-keepr-text08">Contact support -&gt;</p>
            </a>
          </div>
        </div>
      </section>
      <footer className="profile-keepr-footer">
        <div className="profile-keepr-content2">
          <main className="profile-keepr-main-content">
            <div className="profile-keepr-content3">
              <header className="profile-keepr-main1">
                <div className="profile-keepr-header2">
                  <h1>
                    <span className="profile-keepr-text10">keepr</span>
                    <span className="profile-keepr-text11">.</span>
                  </h1>
                  <span className="profile-keepr-text12">
                    Unveiling the Invisible on Social Media
                  </span>
                </div>
              </header>
              <header className="profile-keepr-categories">
                <div className="profile-keepr-category">
                  <div className="profile-keepr-header3">
                    <span className="footer-header">Links</span>
                  </div>
                  <div className="profile-keepr-links">
                    <Link
                      to="/privacy-policy"
                      className="profile-keepr-text14 footer-link"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/terms-conditions"
                      className="profile-keepr-text15 footer-link"
                    >
                      Terms &amp; Conditions
                    </Link>
                    <a
                      href="mailto:support@keepr.pro?subject="
                      className="profile-keepr-text16 footer-link"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </header>
            </div>
            <section className="profile-keepr-copyright">
              <span className="profile-keepr-text17">
                © 2024 keepr. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="profile-keepr-subscribe">
            <main className="profile-keepr-main2">
              <h1 className="profile-keepr-heading2">
                Subscribe to our newsletter
              </h1>
              <div className="profile-keepr-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="profile-keepr-textinput input"
                />
                <div className="profile-keepr-buy button">
                  <span className="profile-keepr-text18">-&gt;</span>
                  <span className="profile-keepr-text19">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="profile-keepr-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="profile-keepr-copyright1">
            <span className="profile-keepr-text22">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="profile-keepr-container4">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default ProfileKeepr
