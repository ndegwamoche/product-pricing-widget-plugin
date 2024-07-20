const Save = props => {
  const { attributes } = props;

  return (
    <section className="pricing">
      <div className="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  {attributes.plan1}
                </h5>
                <h6 class="card-price text-center">
                  ${attributes.price1}
                  <span class="period">/month</span>
                </h6>
                <hr />
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Single User
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    5GB Storage
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>
                  <li class="text-muted">
                    <span class="fa-li">
                      <i class="fas fa-times"></i>
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li class="text-muted">
                    <span class="fa-li">
                      <i class="fas fa-times"></i>
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li class="text-muted">
                    <span class="fa-li">
                      <i class="fas fa-times"></i>
                    </span>
                    Free Subdomain
                  </li>
                  <li class="text-muted">
                    <span class="fa-li">
                      <i class="fas fa-times"></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  {attributes.plan2}
                </h5>
                <h6 class="card-price text-center">
                  ${attributes.price2}
                  <span class="period">/month</span>
                </h6>
                <hr />
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    <strong>5 Users</strong>
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    50GB Storage
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Free Subdomain
                  </li>
                  <li class="text-muted">
                    <span class="fa-li">
                      <i class="fas fa-times"></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">
                  {attributes.plan3}
                </h5>
                <h6 class="card-price text-center">
                  ${attributes.price3}
                  <span class="period">/month</span>
                </h6>
                <hr />
                <ul class="fa-ul">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    <strong>Unlimited Users</strong>
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    150GB Storage
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    <strong>Unlimited</strong> Free Subdomains
                  </li>
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-check"></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <div class="d-grid">
                  <a href="#" class="btn btn-primary text-uppercase">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Save;
