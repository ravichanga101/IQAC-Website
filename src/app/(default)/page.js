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
          <div className="col-md-12 col-lg-10 mb-5 mb-lg-0 ">
            
          {/* Vision & Mission */}
          <div className="card text-left shadow-sm">
              <div className="card-header bg-color-grey text-4 font-weight-extra-bold">
                <h4 className="mb-0">Vision &amp; Mission</h4>
              </div>
              <div className="card-body">
                <div className="card-text text-4">
                  <h4>Vision:</h4><p> To institutionalize a culture of quality and excellence that promotes continuous
improvement and holistic development across the University ecosystem.</p>
                </div>
                <div className="card-text text-4">
                  <h4>Mission:</h4> <p>The mission of the IQAC is to establish a resilient and sustainable foundation for quality
assurance across academic, research, governance, and extension functions of the University.
In pursuit of this mission, the IQAC is committed to:</p>
<ol className="list list-ordened list-primary">
                  <li>
Institutionalizing a comprehensive quality assurance framework by
implementing structured systems and protocols that consistently enhance excellence
in academic, research, governance, and extension activities.
</li>
<li>
Facilitating accreditation readiness by continual quality benchmarking and aligning
with national policies, regulatory requirements, and global quality benchmarks.
</li>
<li>
Strengthening stakeholder engagement by systematically integrating 360°feedback
involving students, faculty, alumni, industry, and the wider society to enable informed
and participative decision-making.
</li>
<li>
Ensuring data-driven governance through systematic collection, validation, analysis,
and reporting of institutional performance indicators.
</li>
<li>
Promoting innovation, best practices, and sustainability, thereby supporting
holistic institutional development and enhancing the University’s societal relevance.
</li>
</ol>
Through these commitments, the IQAC develops a dynamic and sustainable quality
framework that not only meets contemporary higher education standards but also
proactively responds to emerging trends and future challenges.
                </div>

              </div>
            </div>

          
          <br/>
          {/* Functions section */}
            <div className="card text-left">
              <div className="card-header bg-color-grey text-4 font-weight-extra-bold">
                <h4 className="mb-0">Functions</h4>
              </div>
              <div className="card-body">
                <p className="card-text text-4 mb-4">
                  In pursuit of its vision and mission, the IQAC undertakes the following functions to strengthen quality assurance and continuous improvement across the University:
                </p>
                
                <div className="text-4">
                  <p className="mb-3">
                    <strong className="font-weight-bold">1. Quality Planning and Policy Support</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Assist in the formulation, review, and implementation of quality-related policies, frameworks, and guidelines.</li>
                    <li className="mb-2">Support strategic and operational planning aligned with the University's vision, mission, and quality benchmarks.</li>
                  </ul>

                  <p className="mb-3">
                    <strong className="font-weight-bold">2. Academic Quality Enhancement</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Facilitate a dynamic learning environment through periodic review and improvement of curricula, teaching–learning methodologies, assessment practices, and learner support systems.</li>
                    <li className="mb-2">Promote interdisciplinary learning and the adoption of innovative and learner-centric pedagogical approaches.</li>
                  </ul>

                  <p className="mb-3">
                    <strong className="font-weight-bold">3. Research, Innovation, and Extension Support</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Support the development of a research-conducive ecosystem by promoting quality research practices, ethical standards, and collaborative initiatives.</li>
                    <li className="mb-2">Facilitate innovation, entrepreneurship, and meaningful engagement with industry and society.</li>
                  </ul>

                  <p className="mb-3">
                    <strong className="font-weight-bold">4. Monitoring, Review, and Evaluation</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Encourage self-assessment, accountability, autonomy, and innovation in academic and administrative processes.</li>
                    <li className="mb-2">Develop and operationalize mechanisms for periodic monitoring, review, and evaluation of institutional performance.</li>
                  </ul>

                  <p className="mb-3">
                    <strong className="font-weight-bold">5. Stakeholder Feedback and Engagement</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Design, implement, and manage structured feedback systems for key stakeholders.</li>
                    <li className="mb-2">Analyse feedback data and facilitate appropriate follow-up actions to drive continuous improvement.</li>
                  </ul>

                  <p className="mb-3">
                    <strong className="font-weight-bold">6. Data Management and Documentation</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Facilitate systematic collection, validation, analysis, and reporting of institutional data for planning and performance evaluation.</li>
                    <li className="mb-2">Promote standardized documentation, and record-keeping practices.</li>
                  </ul>

                  <p className="mb-3">
                    <strong className="font-weight-bold">7. Capacity Building and Rewarding Excellence</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Organize orientation programmes, workshops, and training sessions to enhance the quality-related competencies of faculty, staff, and students.</li>
                    <li className="mb-2">Devise mechanisms for empowering and acknowledging achievers with diverse competencies across identified key performance areas.</li>
                  </ul>

                  <p className="mb-3">
                    <strong className="font-weight-bold">8. Promotion of Best Practices and Sustainability</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Identify, document, and disseminate institutional best practices.</li>
                    <li className="mb-2">Facilitate environmentally responsible, socially inclusive, and sustainable institutional initiatives.</li>
                  </ul>

                  <p className="mb-3">
                    <strong className="font-weight-bold">9. Coordination and Communication</strong>
                  </p>
                  <ul className="list ms-4 mb-4 pl-4">
                    <li className="mb-2">Act as a nodal coordinating unit among constituent institutes, centres, committees, and cells for quality enhancement initiatives.</li>
                    <li className="mb-2">Facilitate effective internal communication related to quality standards, processes, and improvement initiatives.</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="row justify-content-center">
          <div
            className="col-md-12 col-lg-10 mb-5 mb-lg-0"
            
          >
            <div className="card text-left">
              <div className="card-header bg-color-grey text-4 font-weight-extra-bold">
                <h4 className="mb-0">Benefits</h4>
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
