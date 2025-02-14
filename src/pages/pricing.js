import React from 'react';
import PageLayout from '../components/PageLayout';
import Check from '../components/icons/Check';
import UsedBy from '../components/UsedBy';


function Pricing() {
  return (
    <PageLayout
        title="Pricing"
        description="Infracost is open source and free for the community."
        pageClass="pricing"
        hideCTA={true}>

      <div className="pricing-wrapper">
        <div className="container">
          <div className="intro">
            <h1 className="tagline">Pricing</h1>
            <p className="sub-tagline">Infracost is open source and free for the community</p>
          </div>

          <div className="plans">
            <div className="plan box">
              <div className="heading">
                <h2>Community</h2>
                <span className="price">Free</span>
              </div>
              <ul>
                <li>
                  <span className="icon primary"><Check size={18} /></span>
                  <span>Open source</span>
                </li>
                <li>
                  <span className="icon primary"><Check size={18} /></span>
                  <span>Get cost breakdowns and diffs</span>
                </li>                
                <li>
                  <span className="icon primary"><Check size={18} /></span>
                  <span>CI/CD integrations (GitHub, GitLab, Atlantis, CircleCI...)</span>
                </li>
                <li>
                  <span className="icon primary"><Check size={18} /></span>
                  <span>Works with Terraform Cloud &amp; Terragrunt</span>
                </li>
                <li>
                  <span className="icon primary"><Check size={18} /></span>
                  <span>Use our hosted Cloud Pricing API or self-host</span>
                </li>
                <li>
                  <span className="icon primary"><Check size={18} /></span>
                  <span>Community supported</span>
                </li>
              </ul>
              <div className="action">
                <a href="/docs/" className="button primary">Get started</a>
              </div>
            </div>

            <div className="plan box">
              <div className="heading">
                <h2>Enterprise <span className="coming-soon"></span></h2>
                <span className="price">Coming soon</span>
              </div>
              <ul>
                <li>
                  <span className="icon primary"></span>
                  <span>We're designing our enterprise product, which will include support for custom price books, visibility dashboards
                    across all runs so you can see which are the expensive pull requests, multi-user/team setup and dedicated support.
                  </span>
                </li>
              </ul>
              <div className="action">
                We love hearing your feedback on what features you think should be in the paid product, please email us on <a href="mailto:hello@infracost.io?subject=Infracost Enterprise pricing">hello@infracost.io</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UsedBy />

    </PageLayout>
  );
}

export default Pricing;
