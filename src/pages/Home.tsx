export function Home() {
  return (
    <>


      {/*  navbar include  */}


      <div className="spacer-div-3 hidden-xs hidden-xs"></div>

      {/*  Main content     */}
      <div id="main-container" className="container">

        <div className="row">
          <div className="col-sm-4">
            <img className="center-block img img-responsive img-thumbnail" src="/assets/img/gallery/Nikhil Rao.png" alt="Image of Nikhil" />

            <p id="title">Bachelors Student<br />
              <span id="program">Senior in Computer Science and Engineering</span>
            </p>

            <table className="table" id="contact-table">
              <tbody>
                <tr>
                  <td style={{ "width": "30px" }}><i className="fas fa-home"></i></td>
                  <td>
                    Vijayawada, India
                  </td>
                </tr>
                <tr>
                  <td style={{ "width": "30px" }}><i className="fas fa-university"></i></td>
                  <td>
                    RGUKT Nuzvid
                  </td>
                </tr>
                {/*  <tr>
              <td style={{"width":"30px"}}><i className="fas fa-university"></i></td>
              <td>
                University of California, Berkeley
              </td>
            </tr>  */}
                <tr>
                  <td><i className="fas fa-at"></i></td>
                  <td><a href="mailto:nikhil01446@gmail.com">nikhil01446@gmail.com</a></td>
                </tr>
                <tr>
                  <td><i className="ai ai-google-scholar"></i></td>
                  <td><a href="https://scholar.google.com/citations?user=zE6f8d8AAAAJ&hl=en" target="_blank">Google Scholar</a></td>
                </tr>
                <tr>
                  <td><i className="fab fa-linkedin"></i></td>
                  <td><a href="https://www.linkedin.com/in/nikhileswara-rao-sulake/" target="_blank">Linkedin</a></td>
                </tr>
                <tr>
                  <td><i className="fas fa-file-pdf"></i></td>
                  <td><a href="/assets/Nikhil_Rao_CV.pdf" target="_blank">CV</a></td>
                </tr>
              </tbody>
            </table>

          </div>
          <div className="col-sm-8">
            <p>

              Hello, I'm Nikhileswara Rao Sulake, a Bachelor’s student in Computer Science and Engineering at <a href="https://rguktn.ac.in/" target="_blank" rel="noopener noreferrer">RGUKT (Rajiv Gandhi University of Knowledge Technologies)</a> in Vijayawada, India with a strong focus on Deep Learning, Computer Vision, and Medical Imaging. Thank you for visiting my profile.<br /><br />
              I previously interned at
              <a href="https://med.stanford.edu/" target="_blank" rel="noopener noreferrer">Stanford Medicine</a> under the guidance of
              <a href="https://profiles.stanford.edu/arutselvan-natarajan" target="_blank" rel="noopener noreferrer">Dr. Arutselvan Natarajan</a> and
              <a href="https://profiles.stanford.edu/frezghi-habte" target="_blank" rel="noopener noreferrer">Dr. Frezghi Habte</a>, and at
              <a href="http://www.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">IIT Kharagpur</a> with
              <a href="https://www.linkedin.com/in/partha-acharya-b7664b11/" target="_blank" rel="noopener noreferrer">Mr. Partha Acharya</a>
              (<a href="https://www.linkedin.com/company/tata-consultancy-services/" target="_blank" rel="noopener noreferrer">TCS Research, India</a>) and
              <a href="https://scholar.google.com/citations?user=yUEeCY0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Subhamoy Mandal</a>.
              I have also collaborated with
              <a href="https://iisc.ac.in/" target="_blank" rel="noopener noreferrer">IISc Bangalore</a> under the guidance of
              <a href="https://scholar.google.com/citations?user=8b7u3b8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Phaneendra Yalavarthy</a>, with
              <a href="https://hms.harvard.edu/" target="_blank" rel="noopener noreferrer">Harvard Medical School</a> under the guidance of
              <a href="https://scholar.google.com/citations?user=9u2zK7gAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Bhaskara Chintada</a> and
              also with <a href="https://www.ku.ac.ae/" target="_blank" rel="noopener noreferrer">Khalifa University of Science and Technology</a> under
              the guidance of <a href="https://scholar.google.com/citations?user=TMpGqLEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Iyyakutti Iyappan Ganapathi</a>.
              In industry, I interned at
              <a href="https://www.ntwo.ai/" target="_blank" rel="noopener noreferrer">Neural Nurture</a>,
              <a href="https://www.linkedin.com/company/parabola9/" target="_blank" rel="noopener noreferrer">Parabola9</a>,
              <a href="https://www.linkedin.com/company/coreai/" target="_blank" rel="noopener noreferrer">CoreAI</a>.
            </p>

            <p>
              I am broadly interested in medical imaging, computer vision, and multimodal learning, with a focus on vision-language models for healthcare. My goal is to develop robust and interpretable AI systems that integrate imaging and clinical knowledge to support diagnosis and improve patient outcomes.
            </p>

            <p>
              I’m actively seeking Research Assistant roles in academic or industrial research labs, with a focus on computer vision, medical imaging, and multimodal AI. I am also preparing to pursue my higher studies through an MSc–Integrated PhD program, and would be glad to connect regarding potential opportunities.
            </p>
            <h3 className="push-down-3"><span>News</span></h3>
            <div className="news-container">
              <ul id="news">
                <li style={{ "marginBottom": "5px" }}><strong>[Mar 2026]</strong> Two papers accepted at the IEEE Guwahati Subsection Conference (GCON) Conference 2026 presenting at IIT Guwahati, India. (<a href="#" target="_blank" rel="noopener">[Paper1: Uncertainty Quantification]</a>, <a href="#" target="_blank" rel="noopener">[Paper2: Multiphase MRI Segmentation]</a>)</li>

                <li style={{ "marginBottom": "5px" }}>
                  <strong>[Feb 2026]</strong> Top 5 at <a href="https://cxr-lt.github.io/CXR-LT-2026/#:~:text=5,0.0945" target="_blank" rel="noopener">CXR-LT 2026 Challenge</a> on Long-Tailed Chest X-ray Classification Benchmark at ISBI 2025.
                </li>

                <li style={{ "marginBottom": "5px" }}>
                  <strong>[Feb 2026]</strong> Presented our work on Lung Digital Twin from Digital Wearables at India AI Summit 2026, New Delhi, India.
                </li>

                <li style={{ "marginBottom": "5px" }}>
                  <strong>[Jan 2026]</strong> Paper on "YOLOv11 Demystified" accepted as a Poster presentation at the Computer Vision Conference 2026, Netherlands.
                </li>

                <li style={{ "marginBottom": "5px" }}>
                  <strong>[Nov 2025]</strong> Runner-Up at the Smart India Hackathon (SIH) finals on a disaster management project using drones and computer vision.
                </li>

                <li style={{ "marginBottom": "5px" }}>
                  <strong>[Nov 2025]</strong> Placed in the Top 10 of the IEEE EMBS BHI 2025 Data Challenge for depression analysis with our framework "<a href="https://github.com/Nikhil-Rao20/MINDER" target="_blank" rel="noopener">MINDER</a>".
                </li>

              </ul>
            </div>

            {/*  <h3 className="push-down-3"><span>Current Affiliations</span></h3>
        <ul id="affiliations">
          <li>
            <a href="https://mbzuai.ac.ae/" target="_blank" rel="noopener noreferrer">Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</a>, Abu Dhabi, UAE<br />
            <span className="workplace"><em>PhD Student</em></span>
          </li>
          <li>
            <a href="https://humancompatible.ai/" target="_blank" rel="noopener noreferrer">Center for Human-Compatible AI (CHAI)</a>, UC Berkeley<br />
            <span className="workplace"><em>Research Intern</em></span>
          </li>
        </ul>  */}



            <h3 className="push-down-3"><span>Education</span></h3>
            <ul id="education">
              <li>
                Integrated B.Tech in Computer Science and Engineering (2021 – Present)<br />
                <span className="university"><em>Rajiv Gandhi University of Knowledge Technologies, Andhra Pradesh, India</em></span>
                <br />
                <span className="university"><em>CGPA: 8.92/10 </em></span>
              </li>
              <li>
                Certification in Artificial Intelligence and Machine Learning (2023 – 2024)<br />
                <span className="university"><em>Defence Research and Development Organisation (DRDO) & Defence Institute of Advanced Technology (DIAT), Pune</em></span>
                <br />
                <span className="university"><em>CGPA: 9.2/10</em></span>
              </li>
            </ul>


          </div>
        </div>

      </div>

      {/*  Back-to-top button  */}



      {/*  footer include  */}


      {/*  jQuery  */}


      {/*  Bootstrap JS Library  */}


      {/*  html file include script | used for navbar and footer  */}



      {/*  Local scripts  */}





    </>
  );
}
