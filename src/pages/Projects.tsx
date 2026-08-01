export function Projects() {
  return (
    <>
      
  
  <div className="spacer-div-3 hidden-xs hidden-xs"></div>

  {/*  <div id="main-container" className="container"></div>  */}

  {/*  Main content  */}
  <div id="main-container" className="container-fluid" style={{"maxWidth":"1200px","margin":"0 auto","padding":"0 20px"}}>

    <div className="row">
      <div className="col-sm-12">
        <h1>Projects & Works</h1>
        <p>Explore research projects, applied AI systems, and engineering work across medical imaging, multimodal learning, object detection, document intelligence, and remote sensing.</p>
        <p>
          Featured project pages include <a href="/project_articles_v2/sih_drone.html">DRISTI</a>, <a href="/project_articles_v2/multi_backbone_yolo.html">Backbones of YOLO</a>, <a href="/project_articles_v2/cardiolens.html">CardioLens</a>, <a href="/project_articles_v2/umbraUnet.html">Umbra UNet</a>, and <a href="/project_articles_v2/doc2data.html">Doc2Data</a>.
        </p>
      </div>
    </div>

    {/*  Research Projects Section  */}
    <div className="project-category">
      <h3 className="push-down-4"><span>Research Projects</span></h3>

      {/*  <div className="project-item">
        <div className="project-image">
          <a href="/assets/project_articles/project1.html" target="_blank"><img src="/assets/img/projects/brain_MRI.png" alt="Brai MRI" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="/assets/project_articles/project1.html" target="_blank">Brain MRI Imaging: Alzheimer's Disease Detection</a></h4>
          <p className="project-summary">A research project on the detection of Alzheimer's disease using brain MRI images. The project aims to develop a deep learning model that can accurately detect Alzheimer's disease from brain MRI images.</p>
          <div className="project-tags">

            <span className="project-tag">Alzheimer's Disease</span>
            <span className="project-tag">Deep Learning</span>
            <span className="project-tag">Medical Imaging</span>
            <span className="project-tag">Computer Vision</span>
          </div>
          <a href="/assets/project_articles/project1.html" className="project-link" target="_blank">View Research Details &rarr;</a>
        </div>
      </div>  */}


      <div className="project-item">
        <div className="project-image">
          <a href="#/project_articles_v2/multi_backbone_yolo.html" target="_blank"><img src="/assets/img/projects/yolobackbone.png" alt="YOLO Backbones" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/multi_backbone_yolo.html" target="_blank">Backbones of YOLO: A Comprehensive Analysis</a></h4>
          <p className="project-summary">Comparative analysis enhancing YOLOv8 with modern CNN, Transformer, and Mamba-based backbones to evaluate performance trade-offs in object detection. This research provides insights into the effectiveness of different architectural choices in computer vision models.</p>
          <div className="project-tags">
            <span className="project-tag">Computer Vision</span>
            <span className="project-tag">YOLO</span>
            <span className="project-tag">Transformers</span>
            <span className="project-tag">CNN</span>
          </div>
          <a href="#/project_articles_v2/multi_backbone_yolo.html" className="project-link" target="_blank">View Analysis &rarr;</a>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image" style={{"backgroundColor":"#000000"}}>
          <a href="#/project_articles_v2/thyroid.html" target="_blank"><img src="/assets/img/projects/thyroid.jpg" alt="Thyroid Detection" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/thyroid.html" target="_blank">Thyroid Disease Detection using Medical Imaging</a></h4>
          <p className="project-summary">A medical image analysis system leveraging computer vision for the accurate and early detection of thyroid disorders from ultrasound scans. This project demonstrates the application of deep learning in medical diagnosis and healthcare.</p>
          <div className="project-tags">
            <span className="project-tag">Medical Imaging</span>
            <span className="project-tag">Computer Vision</span>
            <span className="project-tag">Healthcare AI</span>
            <span className="project-tag">Ultrasound</span>
          </div>
          <a href="#/project_articles_v2/thyroid.html" className="project-link" target="_blank">View Research Details &rarr;</a>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image">
          <a href="#/project_articles_v2/casuality.html" target="_blank"><img src="/assets/img/projects/casuality.png" alt="Causality Analysis" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/casuality.html" target="_blank">Causality Analysis in Complex Datasets</a></h4>
          <p className="project-summary">Applied research on causal inference methods to discover and understand hidden relationships within complex, high-dimensional datasets. This work contributes to the field of causal machine learning and interpretable AI.</p>
          <div className="project-tags">
            <span className="project-tag">Causal Inference</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Interpretable AI</span>
            <span className="project-tag">Data Science</span>
          </div>
          <a href="#/project_articles_v2/casuality.html" className="project-link" target="_blank">View Research Details &rarr;</a>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image">
          <a href="#/project_articles_v2/multitask_echo.html" target="_blank"><img src="/assets/img/projects/multitask_echo.png" alt="Causality Analysis" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/multitask_echo.html" target="_blank">Multi tasking in Echocardiography</a></h4>
          <p className="project-summary">Applied research on Multitasking Echocardiography.</p>
          <div className="project-tags">
            <span className="project-tag">Causal Inference</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Interpretable AI</span>
            <span className="project-tag">Data Science</span>
          </div>
          <a href="#/project_articles_v2/multitask_echo.html" className="project-link" target="_blank">View Research Details &rarr;</a>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image">
          <a href="#/project_articles_v2/umbraUnet.html" target="_blank"><img src="/assets/img/projects/umbranet.png" alt="Causality Analysis" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/umbraUnet.html" target="_blank">Umbra UNet: Remote Sensing Image Segmentation</a></h4>
          <p className="project-summary">This project focuses on developing a novel UNet architecture tailored for remote sensing image segmentation tasks, enhancing the accuracy and efficiency of land cover classification.</p>
          <div className="project-tags">
            <span className="project-tag">Causal Inference</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Interpretable AI</span>
            <span className="project-tag">Data Science</span>
          </div>
          <a href="#/project_articles_v2/umbraUnet.html" className="project-link" target="_blank">View Research Details &rarr;</a>
        </div>
      </div>

      {/*  <div className="project-item">
        <div className="project-image">
          <a href="/assets/project1.html" target="_blank"><img src="/assets/img/projects/caslity.png" alt="Causality Analysis" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="/assets/project1.html" target="_blank">Stanford University Fellowship Report</a></h4>
          <p className="project-summary"> adsfasf asfasdf sadfsadf sdafa fas dfa sdf afdshfjkashf  fhjfkasf</p>
          <div className="project-tags">
            <span className="project-tag">Causal Inference</span>
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Interpretable AI</span>
            <span className="project-tag">Data Science</span>
          </div>
          <a href="/assets/project1.html" className="project-link" target="_blank">View Research Details &rarr;</a>
        </div>
      </div>  */}

    </div>

    {/*  Development Projects Section  */}
    <div className="project-category">
      <h3 className="push-down-4"><span>Development Projects</span></h3>
      
      <div className="project-item">
        <div className="project-image">
          <a href="#/project_articles_v2/sih_drone.html" target="_blank"><img src="/assets/img/projects/Dristi/Drone.png" alt="DRISTI Drone" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/sih_drone.html" target="_blank">DRISTI: Autonomous Disaster-Response Drone System</a></h4>
          <p className="project-summary">An end-to-end autonomous UAV system for survivor detection and medical supply delivery in disaster-affected regions. Built on HolyBro X500 V2 with ArduPilot and on-device Leaf YOLO inference, featuring a novel motorized cable-lowering delivery mechanism. Top 5 Finalists &mdash; Smart India Hackathon 2025.</p>
          <div className="project-tags">
            <span className="project-tag">Autonomous UAV</span>
            <span className="project-tag">Disaster Response</span>
            <span className="project-tag">Edge AI</span>
            <span className="project-tag">Robotics</span>
          </div>
          <a href="#/project_articles_v2/sih_drone.html" className="project-link" target="_blank">View Project Details &rarr;</a>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image">
          <a href="#/project_articles_v2/cardiolens.html" target="_blank"><img src="/assets/img/projects/CardioLens_Arch.png" alt="CardioLens" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/cardiolens.html" target="_blank">CardioLens: AI-Powered Cardiovascular Detection</a></h4>
          <p className="project-summary">An AI-powered system for early cardiovascular disease detection using deep learning models to analyze retinal fundus images. This project demonstrates the practical application of computer vision in medical diagnosis and preventive healthcare.</p>
          <div className="project-tags">
            <span className="project-tag">Medical AI</span>
            <span className="project-tag">Computer Vision</span>
            <span className="project-tag">Healthcare</span>
            <span className="project-tag">Deep Learning</span>
          </div>
          <a href="#/project_articles_v2/cardiolens.html" className="project-link" target="_blank">View Project Details &rarr;</a>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image">
          <a href="#/project_articles_v2/doc2data.html" target="_blank"><img src="https://github.com/Nikhil-Rao20/TripleD-AI4AP-Police_Doc2Data/blob/main/pics/2.jpg?raw=true" alt="Digitization of Offline Documents" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/doc2data.html" target="_blank">Doc2Data: Towards Digitization of AP Police Handwritten Documents</a></h4>
          <p className="project-summary">An AI-powered system for early cardiovascular disease detection using deep learning models to analyze retinal fundus images. This project demonstrates the practical application of computer vision in medical diagnosis and preventive healthcare.</p>
          <div className="project-tags">
            <span className="project-tag">Medical AI</span>
            <span className="project-tag">Computer Vision</span>
            <span className="project-tag">Healthcare</span>
            <span className="project-tag">Deep Learning</span>
          </div>
          <a href="#/project_articles_v2/doc2data.html" className="project-link" target="_blank">View Project Details &rarr;</a>
        </div>
      </div>


      <div className="project-item">
        <div className="project-image" style={{"backgroundColor":"#000000"}}>
          <a href="#/project_articles_v2/staws.html" target="_blank"><img src="/assets/img/projects/staws.gif" alt="STAWS" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/staws.html" target="_blank">STAWS: Smart Traffic Analysis System</a></h4>
          <p className="project-summary">An AI-powered traffic analysis system that uses computer vision and machine learning to monitor and analyze traffic patterns, providing intelligent insights for urban planning and traffic management.</p>
          <div className="project-tags">
            <span className="project-tag">Computer Vision</span>
            <span className="project-tag">Traffic Analysis</span>
            <span className="project-tag">Urban Planning</span>
            <span className="project-tag">AI Systems</span>
          </div>
          <a href="#/project_articles_v2/staws.html" className="project-link" target="_blank">View Project Details &rarr;</a>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image" style={{"backgroundColor":"#85A19F"}}>
          <a href="#/project_articles_v2/zoya.html" target="_blank"><img src="/assets/img/projects/zoya-working.JPG" alt="ZOYA Robot" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/zoya.html" target="_blank">ZOYA: Interactive Talking Robot</a></h4>
          <p className="project-summary">An interactive talking robot that combines robotics, natural language processing, and human-robot interaction technologies to create an engaging conversational AI experience.</p>
          <div className="project-tags">
            <span className="project-tag">Robotics</span>
            <span className="project-tag">NLP</span>
            <span className="project-tag">Human-Robot Interaction</span>
            <span className="project-tag">AI</span>
          </div>
          <a href="#/project_articles_v2/zoya.html" className="project-link" target="_blank">View Project Details &rarr;</a>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image" style={{"backgroundColor":"#000000"}}>
          <a href="#/project_articles_v2/ai-calc.html" target="_blank"><img src="/assets/img/projects/ai-cal.png" alt="AI Calculator" /></a>
        </div>
        <div className="project-content">
          <h4 className="project-title"><a href="#/project_articles_v2/ai-calc.html" target="_blank">AI Calculator: Intelligent Mathematical Assistant</a></h4>
          <p className="project-summary">An intelligent calculator that uses machine learning to predict and suggest mathematical operations, making complex calculations more intuitive and efficient for users.</p>
          <div className="project-tags">
            <span className="project-tag">Machine Learning</span>
            <span className="project-tag">Mathematical Computing</span>
            <span className="project-tag">User Interface</span>
            <span className="project-tag">AI Assistant</span>
          </div>
          <a href="#/project_articles_v2/ai-calc.html" className="project-link" target="_blank">View Project Details &rarr;</a>
        </div>
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
