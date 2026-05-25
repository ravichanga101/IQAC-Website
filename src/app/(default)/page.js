import SiteFrame from "@/features/site-shell/SiteFrame";

export default function Home() {
  return (
    <SiteFrame>
        <div className="slider-container rev_slider_wrapper" style={{ height: "100vh" }}>
          <div
            id="revolutionSlider"
            className="slider rev_slider"
            data-version="5.4.8"
            data-plugin-revolution-slider
            data-plugin-options="{'sliderLayout': 'fullscreen', 'delay': 5000, 'gridwidth': 1170, 'gridheight': 550, 'disableProgressBar': 'on', 'responsiveLevels': [4096,1200,992,500], 'navigation' : {'arrows': { 'enable': true, 'style': 'arrows-style-3 arrow-dark' }, 'bullets': {'enable': true, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 70, 'h_offset': 0}}}"
          >
            <ul>
              <li data-transition="fade" className="slide-overlay slide-overlay-opacity-8">
                <img
                  src="/img/iqac/Slide1.JPG"
                  alt=""
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="img-fluid rev-slidebg"
                />

                <div
                  className="tp-caption font-weight-extra-bold text-color-light negative-ls-2"
                  data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                  data-x="center"
                  data-y="center"
                  data-voffset="['-60','-60','-60','-85']"
                  data-fontsize="['55','60','60','100']"
                  data-lineheight="['55','55','55','95']"
                >
                  WELCOME TO IQAC, CHARUSAT
                </div>
              </li>
              <li className="slide opacity-8" data-transition="fade">
                <img
                  src="/img/iqac/Slide2-min.JPG"
                  alt=""
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg img-fluid"
                />
              </li>
            </ul>
          </div>
        </div>

        <br />
        <div className="row justify-content-center">
          <div
            className="col-md-12 col-lg-10 mb-5 mb-lg-0 appear-animation animated fadeInUpShorter appear-animation-visible"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="600"
            style={{ animationDelay: "600ms" }}
          >
            <div className="card text-left">
              <div className="card-header bg-color-grey text-4 font-weight-extra-bold">
                <h4>Functions</h4>
              </div>
              <div className="card-body">
                <p className="card-text text-4">
                  Some of the functions expected of the IQAC are:
                </p>
                <ol className="list list-ordened list-primary text-4">
                  <li>
                    {" "}
                    Development and application of quality benchmarks/parameters for
                    various academic and administrative activities of the institution;
                  </li>
                  <li>
                    {" "}
                    Facilitating the creation of a learner-centric environment
                    conducive to quality education and faculty maturation to adopt
                    the required knowledge and technology for participatory teaching
                    and learning process;
                  </li>
                  <li>
                    {" "}
                    Arrangement for feedback response from students, parents and
                    other stakeholders on quality-related institutional processes;
                  </li>
                  <li>
                    {" "}
                    Dissemination of information on various quality parameters of
                    higher education;
                  </li>
                  <li>
                    {" "}
                    Organization of inter and intra institutional workshops,
                    seminars on quality related themes and promotion of quality
                    circles;
                  </li>
                  <li>
                    {" "}
                    Documentation of the various programmes/activities leading to
                    quality improvement;
                  </li>
                  <li>
                    {" "}
                    Acting as a nodal agency of the Institution for coordinating
                    quality-related activities, including adoption and dissemination
                    of best practices;
                  </li>
                  <li>
                    {" "}
                    Development and maintenance of institutional database through
                    MIS for the purpose of maintaining /enhancing the institutional
                    quality;
                  </li>
                  <li> Development of Quality Culture in the institution;</li>
                  <li>
                    {" "}
                    Preparation of the Annual Quality Assurance Report (AQAR) as per
                    guidelines and parameters of NAAC, to be submitted to NAAC.
                  </li>
                </ol>

              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="row justify-content-center">
          <div
            className="col-md-12 col-lg-10 mb-5 mb-lg-0 appear-animation animated fadeInUpShorter appear-animation-visible"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="600"
            style={{ animationDelay: "600ms" }}
          >
            <div className="card text-left">
              <div className="card-header bg-color-grey text-4 font-weight-extra-bold">
                <h4>Benefits</h4>
              </div>
              <div className="card-body">
                <p className="card-text text-4">
                  IQAC will facilitate / contribute:
                </p>
                <ol className="list list-ordened list-primary text-4" type="a">
                  <li>
                    {" "}
                    Ensure heightened level of clarity and focus in institutional
                    functioning towards quality enhancement;
                  </li>
                  <li> Ensure internalization of the quality culture;</li>
                  <li>
                    {" "}
                    Ensure enhancement and coordination among various activities of
                    the institution and institutionalize all good practices;
                  </li>
                  <li>
                    {" "}
                    Provide a sound basis for decision-making to improve
                    institutional functioning;
                  </li>
                  <li>
                    {" "}
                    Act as a dynamic system for quality changes in HEIs;
                  </li>
                  <li>
                    {" "}
                    Build an organised methodology of documentation and internal
                    communication.
                  </li>
                </ol>

              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div
            className="col-12 col-lg-10 appear-animation text-4"
            data-appear-animation="fadeInUpShorter"
            data-appear-animation-delay="100"
          >
            <h2 className="font-weight-bold mb-4 text-center">Milestones Achieved</h2>

            <div className="card border-0">
              <div className="card-body lh-lg">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">
                          Knowledge Consortium of Gujarat (KCG) Audit
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">NIRF Ranking</p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">AQAR Submission</p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">
                          Outreach in the area of Education and Research
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">DSIR–SIRO Certification</p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">
                          Study in Gujarat (SIG) Campaign
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">GSIRF Rating</p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">
                          Centre of Excellence (CoE), Government of Gujarat
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">
                          CoE Certificate by Government of Gujarat
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="d-flex align-items-start">
                      <i className="fas fa-check-circle fa-2x text-color-primary flex-shrink-0 me-3 mt-1"></i>
                      <div className="text-start">
                        <p className="mb-1 fw-semibold">NAAC A+ Grade</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-md-12 col-lg-10 mb-5 mb-lg-0 text-center appear-animation text-4"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="100"
            >
              <h2 className="font-weight-bold mb-3">Composition</h2>
              <br />
              <table className="table table-bordered table-sm align-middle">
                <tbody style={{ textAlign: "left" }}>
                  <tr>
                    <th>
                      <b>Chair Person: Head of the Institution</b>
                    </th>
                  </tr>
                  <tr>
                    <td>Provost</td>
                  </tr>
                  <tr>
                    <th>
                      <b>Teachers to Represent All Level</b>
                    </th>
                  </tr>
                  <tr>
                    <td>Dean, Faculty of Technology and Engineering</td>
                  </tr>
                  <tr>
                    <td>Dean, Faculty of Computer Applications</td>
                  </tr>
                  <tr>
                    <td>Dean, Faculty of Sciences</td>
                  </tr>
                  <tr>
                    <td>Dean, Faculty of Pharmacy</td>
                  </tr>
                  <tr>
                    <td>Dean, Faculty of Pharmacy</td>
                  </tr>
                  <tr>
                    <td>Dean, Faculty of Management Studies</td>
                  </tr>
                  <tr>
                    <td>Dean, Faculty of Medical Sciences</td>
                  </tr>
                  <tr>
                    <td>Dean, Faculty of Humanities</td>
                  </tr>
                  <tr>
                    <td>Principal, Chandubhai S Patel Institute of Technology</td>
                  </tr>
                  <tr>
                    <td>Principal, Ramanbhai Patel College of Pharmacy</td>
                  </tr>
                  <tr>
                    <td>Principal, Indukaka Ipcowala Institute of Management</td>
                  </tr>
                  <tr>
                    <td>Principal, Chandaben Mohanbhai Patel Institute of Computer Application</td>
                  </tr>
                  <tr>
                    <td>Principal , P. D. Patel Institute of Applied Science</td>
                  </tr>
                  <tr>
                    <td>Principal, Ashok &amp; Rita Patel Institute of Physiotherapy</td>
                  </tr>
                  <tr>
                    <td>Principal, Manikaka Topawala Institute of Nursing</td>
                  </tr>
                  <tr>
                    <td>Principal, Bapubhai Desaibhai Patel Institute of Paramedical Sciences</td>
                  </tr>
                  <tr>
                    <th>
                      <b>Few Senior Administrative Officers and Invitees</b>
                    </th>
                  </tr>
                  <tr>
                    <td>Director, Research Centers of CHARUSAT</td>
                  </tr>
                  <tr>
                    <td>Registrar</td>
                  </tr>
                  <tr>
                    <td>Advisors</td>
                  </tr>
                  <tr>
                    <th>
                      <b>Member from Management</b>
                    </th>
                  </tr>
                  <tr>
                    <td>One BoM Member</td>
                  </tr>
                  <tr>
                    <th>
                      <b>Nominees from Local Society, Students and Alumni</b>
                    </th>
                  </tr>
                  <tr>
                    <td>One Representative from Society</td>
                  </tr>
                  <tr>
                    <td>One Alumni Member</td>
                  </tr>
                  <tr>
                    <td>One Student Member</td>
                  </tr>
                  <tr>
                    <th>
                      <b>Nominees from Employers/ Industrialists/ Stakeholders</b>
                    </th>
                  </tr>
                  <tr>
                    <td>One Member from Industry</td>
                  </tr>
                  <tr>
                    <td>Two Stakeholders</td>
                  </tr>
                  <tr>
                    <th>
                      <b>Coordinator &amp; Dy. Coordinators of the IQAC</b>
                    </th>
                  </tr>
                  <tr>
                    <td>One Coordinator</td>
                  </tr>
                  <tr>
                    <td>Two Coordinator</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-5">
          <div className="row justify-content-center">
            <div
              className="col text-center appear-animation text-4"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="100"
            >
              <h2 className="font-weight-bold mb-3">Activities</h2>
              <br />
              <img
                src="/img/Activity_Scaler.png"
                alt="Activities Image"
                className="img-fluid mb-4"
                height="120%"
                width="120%"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-3">
          <div className="row justify-content-center">
            <div
              className="col text-center appear-animation text-4"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="100"
            >
              <h2 className="font-weight-bold mb-3">IQAC Initiatives</h2>
            </div>
          </div>
          <div className="row justify-content-left">
            <div
              className="col appear-animation text-4"
              data-appear-animation="fadeInUpShorter"
              data-appear-animation-delay="100"
            >
              <ol className="list list-ordened list-icon list-primary text-3" type="a">
                <li>
                  {" "}
                  Embedding e-Governance in University Operations -{" "}
                  <i className="fa fa-globe"></i>{" "}
                  <a href="https://www.charusat.ac.in/it-cell" target="_blank">
                    {" "}
                    https://www.charusat.ac.in/it-cell
                  </a>
                </li>
                <li>
                  {" "}
                  Review and Implementation of Outcome Based Education (OBE)-{" "}
                  <a href="/files/OBE_CHARUSAT_V2.pdf" target="_blank">
                    <i className="fa fa-file-pdf" aria-hidden="true"></i> Click
                    Here
                  </a>
                </li>
                <li>
                  {" "}
                  Establishment of University Research Cell -{" "}
                  <i className="fa fa-globe"></i>{" "}
                  <a href="https://www.charusat.ac.in/research" target="_blank">
                    {" "}
                    https://www.charusat.ac.in/research
                  </a>
                </li>
                <li>
                  {" "}
                  Development of CHARUSAT Strategic Plan -{" "}
                  <a
                    href="https://www.charusat.ac.in/assets/files/CHARUSAT_Action_Plan.pdf"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf" aria-hidden="true"></i> Click
                    Here
                  </a>
                </li>
                <li>
                  {" "}
                  Support and Assistance to Peer Universities for Adopting Quality
                  Practices{" "}
                </li>
                <li> HR development and policies</li>
                <li> Conduction of open houses for employees and students</li>
              </ol>
            </div>
          </div>
        </div>
        <hr />
    </SiteFrame>
  );
}
