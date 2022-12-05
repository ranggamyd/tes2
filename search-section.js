class SearchSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Special Needs</h6>
          <h1 class="mb-5">Looking for Schools?</h1>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div class="row g-3">
              <div class="col-md-6 offset-md-2">
                <h6 class="text-muted ms-1 wow animate__animated animate__fadeIn">Easier way to find out your Educational Needs</h6>
              </div>
            </div>
            <div class="row g-3">
              <div class="col-md-6 offset-md-2">
                <input type="text" class="form-control form-control-lg wow animate__animated animate__fadeInLeft" placeholder="Enter address e.g. street, city and state or zip">
                <button class="btn btn-link float-end pe-0 wow animate__animated animate__fadeInUp" type="button" data-bs-toggle="collapse" data-bs-target="#advancedSearch" aria-expanded="false" aria-controls="advancedSearch">Advanced search with filter</button>
                <div class="collapse float-end rounded" id="advancedSearch">
                  <div class="card card-body">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group mb-3">
                          <label for="npsn">NPSN :</label>
                          <input type="text" name="npsn" class="form-control" id="npsn" placeholder="NPSN">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group mb-3">
                          <label for="schoolName">School Name :</label>
                          <input type="text" name="schoolName" class="form-control" id="schoolName" placeholder="School Name">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group mb-3">
                          <label for="location">Location :</label>
                          <input type="text" name="location" class="form-control" id="location" placeholder="Location">
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col">
                        <label for="akreditasi">Akreditasi :</label><br>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="akreditasi" id="A" value="A">
                          <label class="form-check-label" for="A">A</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="akreditasi" id="B" value="B">
                          <label class="form-check-label" for="B">B</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="akreditasi" id="C" value="C">
                          <label class="form-check-label" for="C">C</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 d-flex align-items-end wow animate__animated animate__fadeInRight">
                <button class="btn btn-primary btn-block w-100 h-100" style="border-radius: 5px;"><i class="bi bi-search" style="font-size: 2rem;"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('search-section', SearchSection);
