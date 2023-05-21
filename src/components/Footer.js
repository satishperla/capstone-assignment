import React from "react";

const Footer = () => {
 
  return (
    <div class="container">
      <footer class="py-5">
        <div class="row">
          <div class="col-10 col-md-6 mb-3">
            <h5>About</h5>
            <p>
              TopJobs Inc. is a company that renders recruitment services in the
              US. We specializes in the areas of accounting, finance, sales,
              marketing, information technology, and engineering.
            </p>
          </div>

          <div class="col-md-4 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="email"
                  class="form-control"
                  placeholder="Email address"
                  required
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 Topjobs Inc, All Rights Reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img src="https://img.icons8.com/color/30/null/facebook-new.png" />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img src="https://img.icons8.com/color/30/null/instagram-new--v1.png" />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img src="https://img.icons8.com/fluency/30/null/twitter.png" />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img src="https://img.icons8.com/color/30/null/linkedin-circled--v2.png" />
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <img src="https://img.icons8.com/ios-filled/30/null/github.png" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
