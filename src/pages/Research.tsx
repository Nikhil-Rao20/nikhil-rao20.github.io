import ParticleButton from '../components/kokonutui/particle-button';

export function Research() {
  return (
    <>


   {/*  navbar include  */}


   <div className="spacer-div-3 hidden-xs hidden-xs"></div>

   {/*  Main content     */}
   <div id="main-container" className="container">

      <div className="row">
         <div className="col-sm-12">
                  <h1>Research</h1>
                  <p>
                     This page collects my current research publications and preprints across computer vision, medical imaging, multimodal learning, and clinically oriented deep learning.
                  </p>
                  <p>
                     Featured research pages include <a href="/cxr-lt/">CXR-LT</a>, <a href="/taru-net/">TARU-Net</a>, <a href="/cips-net/">CIPS-Net</a>, <a href="/ecg-free-echo/">ECG-Free Echo</a>, and <a href="/lung-digital-twin/">Lung Digital Twin</a>.
                  </p>

            {/*
            <p>I am currently interested in the following areas of research: </p>

            <div className="row push-down-1">
               <div className="col-sm-6">
                  <ul>
                     <li>Computer Vision:
                        <ul>
                           <li>Multimodal and Vision–Language Integration</li>
                           <li>Efficient and Scalable Architectures</li>
                           <li>Latent Space Modeling</li>
                        </ul>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6">
                  <ul>
                     <li>Medical Image Analysis:
                        <ul>
                           <li>3D Segmentation and Reconstruction</li>
                           <li>Image Quality Enhancement for Clinical Tasks</li>
                           <li>Multitask and Outcome-Aware Learning</li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
             */}

            {/*  Journal papers  */}
            <h3 className="push-down-4"><span>Journal Papers</span></h3>

            <ul className="pub-list">

               {/*  Publication 11: CXR-LT 2026 Challenge: Multi-Center Long-Tailed and Zero Shot Chest X-ray Classification  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-journal">MedIA</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/cxr_lt_challenge_paper.png" alt="Loss Design for Long Tail CXR Classification paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">CXR-LT 2026 Challenge: Multi-Center Long-Tailed and Zero Shot Chest X-ray Classification</a></p>
                     <p className="pub-authors">Hexin Dong, Yi Lin, Pengyu Zhou, Fengnian Zhao, Alan Clint Legasto, Juno Cho, Dohui Kim, Justin Namuk Kim, Mingeon Kim, Sunwoo Kwak, Gabriel Moyà-Alcover, Ky Trung Nguyen, Thanh-Huy Nguyen, Ha-Hieu Pham, Huy-Hieu Pham, Huy Pham Le, <strong>Nikhileswara Rao Sulake</strong>, Aina Tur-Serrano, Ruichi Zhang, Ang Zu, Adam E. Flanders, Zhiyong Lu, Ronald M. Summers, Mingquan Lin, Hao Chen, Yuzhe Yang, George Shih</p>
                     <p className="pub-venue"><em>Medical Image Analysis [*Under Review, Manuscript ID: MEDIA-D-26-01261]</em></p>
                     <div className="pub-links">
                        {/*  <ParticleButton href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:UeHWp8X0CEIC" >SCHOLAR</ParticleButton>
                        <ParticleButton href="https://arxiv.org/abs/2603.02294" >Paper</ParticleButton>
                        <ParticleButton href="https://github.com/Nikhil-Rao20/Long_Tail" >CODE</ParticleButton>
                        <ParticleButton href="https://scholar.googleusercontent.com/scholar.bib?q=info:v5kkwUYqSfoJ:scholar.google.com/&output=citation&scisdr=CjzT8Uj5EMKY-mnWEXU:ADi0EEUAAAAAadTQCXXtm83SbzNRavFdYk5_2TA&scisig=ADi0EEUAAAAAadTQCfdaZ57JY45QsSNI3byqcys&scisf=4&ct=citation&cd=-1&hl=en" >BibTeX</ParticleButton>  */}
                     </div>
                  </div>
               </li>

               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-journal">IEEE TIP</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/hyperbolic.png" alt="Hyperbolic One-Class Fine Tuning paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">A Hyperbolic One-Class Fine-Tuning of Foundation Models for Robust Medical Deepfake Detection</a></p>
                     <p className="pub-authors">Saurabh Sharma<sup>†</sup>, Sai Manikanta Eswar Machara<sup>†</sup>, <strong>Nikhileswara Rao Sulake</strong><sup>†</sup>, Sivalal Kethavath, Phaneendra K. Yalavarthy</p>
                     <p className="pub-venue"><em>IEEE Transactions on Image Processing [*Under Review, Manuscript ID: TIP-40302-2026]</em></p>
                     <div className="pub-links">
                     </div>
                  </div>
               </li>

               {/*  Publication 7: TARU-Net  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-journal">IEEE TRPMS</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/taru_net_paper.png" alt="TARU-Net paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">TARU-Net: Topology-Aware Deep Learning for High-Fidelity Lung CT Segmentation and Volume Visualization</a></p>
                     <p className="pub-authors">Partha Acharya, Soutrik Chakraborty, <strong>Nikhileswara Rao Sulake</strong>, Aishik Sen, Subhamoy Mandal, Suman Chakraborty</p>
                     <p className="pub-venue"><em>IEEE Transactions on Radiation and Plasma Medical Sciences [*Under Review]</em></p>
                     <div className="pub-links">
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                     </div>
                  </div>
               </li>

               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-journal">IEEE TIP</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/CNN_iSURF.jpg" alt="TARU-Net paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">Hybrid CNN-iSURF Feature Extraction: A Robust Approach for Image Matching Using Deep Learning and Keypoint-Based Descriptors</a></p>
                     <p className="pub-authors">Partha Acharya, Harsh Vardhan, Vineeth Bhanukoti, <strong>Nikhileswara Rao Sulake</strong>, Soutrik Chakraborty, Subhamoy Mandal, Suman Chakraborty</p>
                     <p className="pub-venue"><em>IEEE Transactions on Radiation and Plasma Medical Sciences [*Under Review]</em></p>
                     <div className="pub-links">
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                     </div>
                  </div>
               </li>

            </ul>

            {/*  Conference papers  */}
            <h3 className="push-down-4"><span>Conference Papers</span></h3>

            <ul className="pub-list">

               {/*  Publication 3: ECG Free Cardiac Timing in Echo  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-conf">MICCAI 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/ecg_free_cardiac_paper.png" alt="ECG Free Cardiac Timing in Echo paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:2osOgNQ5qMEC" target="_blank" rel="noopener">Speckle-Aware Signal Extraction as an Alternative to Complex Methods for ECG-Free Cardiac Phase Detection</a></p>
                     <p className="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Sai Manikanta Eswar Machara, Sivaji Retta, Iyyakutti Iyappan Ganapathi, Muhammad Owais, Irfan Hussain</p>
                     <p className="pub-venue"><em>29<sup>th</sup> Medical Image Computing and Computer Assisted Intervention (MICCAI), 2026</em></p>
                     <div className="pub-links">
                         <ParticleButton href="#" >PAPER</ParticleButton>
                         <ParticleButton href="https://github.com/Nikhil-Rao20/ECG_Free_Echo" >CODE</ParticleButton>
                         <ParticleButton href="https://nikhil-rao20.github.io/ecg-free-echo/" >WEBSITE</ParticleButton>
                         <ParticleButton href="#" >BIBTEX</ParticleButton>
                     </div>
                  </div>
               </li>

               {/*  Publication 9: CIPS-Net for Histopathology  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-conf">MICCAI 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/cips_net_paper.png" alt="CIPS-Net for Histopathology paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">CIPS-Net: A Comprehensive Framework for Histopathology Image Analysis</a></p>
                     <p className="pub-authors"><strong>Nikhileswara Rao Sulake</strong><sup>†</sup>, Sai Manikanta Eswar Machara<sup>†</sup>, Sivaji Retta, Iyyakutti Iyappan Ganapathi, Muhammad Owais, Irfan Hussain</p>
                     <p className="pub-venue"><em>29<sup>th</sup> Medical Image Computing and Computer Assisted Intervention (MICCAI), 2026</em></p>
                     <div className="pub-links">
                         <ParticleButton href="#" >PAPER</ParticleButton>
                         <ParticleButton href="https://github.com/Nikhil-Rao20/CIPS_Net" >CODE</ParticleButton>
                         <ParticleButton href="https://nikhil-rao20.github.io/cips-net/" >WEBSITE</ParticleButton>
                         <ParticleButton href="#" >BIBTEX</ParticleButton>
                     </div>
                  </div>
               </li>


               {/*  Publication 8: Lung Digital Twin from Wearable devices  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-conf">MICCAI 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/lung_digital_twin_paper.png" alt="Lung Digital Twin from Wearable devices paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">Digital Twin of the Lung from Wearable Biosignals for Real-Time Respiratory Monitoring</a></p>
                     <p className="pub-authors">Partha Acharya, <strong>Nikhileswara Rao Sulake</strong>, Soutrik Chakraborty, Subhamoy Mandal, Suman Chakraborty</p>
                     <p className="pub-venue"><em>29<sup>th</sup> Medical Image Computing and Computer Assisted Intervention (MICCAI), 2026</em></p>
                     <div className="pub-links">
                         <ParticleButton href="#" >PAPER</ParticleButton>
                         <ParticleButton href="" >CODE</ParticleButton>
                         <ParticleButton href="https://nikhil-rao20.github.io/lung-digital-twin/" >WEBSITE</ParticleButton>
                         <ParticleButton href="#" >BIBTEX</ParticleButton>
                     </div>
                  </div>
               </li>

               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-conf">ICRA 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/goose-m2f.png" alt="GOOSE M2F paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">GOOSE-M2F: Adapting Mask2Former for High-Fidelity, Long-Tailed Fine-Grained Semantic Segmentation in Unstructured Outdoor Terrain</a></p>
                     <p className="pub-authors">Jyothiraditya Lingam, <strong>Nikhileswara Rao Sulake</strong>,Sai Manikanta Eswar Machara</p>
                     <p className="pub-venue"><em>43<sup>rd</sup> IEEE International Conference on Robotics and Automation (Challenge Paper), 2026</em></p>
                     <div className="pub-links">
                         {/* <ParticleButton href="#" >PAPER</ParticleButton>
                         <ParticleButton href="" >CODE</ParticleButton>
                         <ParticleButton href="#" >WEBSITE</ParticleButton>
                         <ParticleButton href="#" >BIBTEX</ParticleButton>  */}
                     </div>
                  </div>
               </li>

               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-conf">ICVGIP 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/neural_transfer.png" alt="Neural Transfer Paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">Image Data Augmentation for Autonomous Vehicle Dataset using Neural Style Transfer</a></p>
                     <p className="pub-authors">Partha Acharya, Soutrik Chakraborty, <strong>Nikhileswara Rao Sulake</strong>, Subhamoy Mandal, Suman Chakraborty</p>
                     <p className="pub-venue"><em>Indian Conference on Computer Vision, Graphics and Image Processing (ICVGIP) 2026 [*Under Review]</em></p>
                     <div className="pub-links">
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                     </div>
                  </div>
               </li>


               {/*  Publication 6: MINDER  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-conf">IEEE CONNECT 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/minder_paper.png" alt="MINDER paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">MINDER: Machine LearnIng Framework for DepressioN Score Analysis in MinDfulness IntERventions across Medically Complex Patients</a></p>
                     <p className="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Sai Manikanta Eswar Machara, Divya Katam, Sivalal Kethavath</p>
                     <p className="pub-venue"><em>12<sup>th</sup> IEEE International Conference on Electronics, Computing and Communication Technologies 2026 [*Under Review]</em></p>
                     <div className="pub-links">
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                     </div>
                  </div>
               </li>


               {/*  Publication 5: Multi-Sequence MRI Image Analysis  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-conf">IEEE GCON 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/multi_sequence_mri_paper.png" alt="Multi-Sequence MRI Image Analysis paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">Benchmarking Input Strategies and Hybrid Loss Functions for Multi-Sequence Abdominal MRI Segmentation</a></p>
                     <p className="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Divya Katam, Venkata Ganesh Sirela, Sivalal Kethavath</p>
                     <p className="pub-venue">IEEE Guwahati Subsection Conference (GCON) 2026</p>
                     <div className="pub-links">
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                     </div>
                  </div>
               </li>


               {/*  Publication 4: Uncertainty Quantification in OCT  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-conf">IEEE GCON 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/mlp_mixer_paper.png" alt="Uncertainty Quantification in OCT paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">Uncertainty Quantification and Calibration in Retinal OCT Classification with CNN and MLP-Mixer Models</a></p>
                     <p className="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Sivalal Kethavath</p>
                     <p className="pub-venue">IEEE Guwahati Subsection Conference (GCON) 2026</p>
                     <div className="pub-links">
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >CODE</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >WEBSITE</ParticleButton>  */}
                     </div>
                  </div>
               </li>

            </ul>

            {/*  Preprints  */}
            <h3 className="push-down-4"><span>Preprints</span></h3>

            <ul className="pub-list">

               {/*  Publication 10: Loss Design for Long Tail CXR Clasification  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-preprint">Preprint 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/loss_design_long_tail_paper.png" alt="Loss Design for Long Tail CXR Classification paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="#" target="_blank" rel="noopener">Loss Design and Architecture Selection for Long-Tailed Multi-Label Chest X-Ray Classification</a></p>
                     <p className="pub-authors"><strong>Nikhileswara Rao Sulake</strong></p>
                     <p className="pub-venue"><em>ArXiv Preprint</em></p>
                     <div className="pub-links">
                        <ParticleButton href="https://arxiv.org/abs/2603.02294" >ArXiv</ParticleButton>
                        <ParticleButton href="https://github.com/Nikhil-Rao20/Long_Tail" >CODE</ParticleButton>
                        <ParticleButton href="https://nikhil-rao20.github.io/cxr-lt/" >WEBSITE</ParticleButton>
                        <ParticleButton href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:UeHWp8X0CEIC" >SCHOLAR</ParticleButton>
                        <ParticleButton href="https://scholar.googleusercontent.com/scholar.bib?q=info:v5kkwUYqSfoJ:scholar.google.com/&output=citation&scisdr=CjzT8Uj5EMKY-mnWEXU:ADi0EEUAAAAAadTQCXXtm83SbzNRavFdYk5_2TA&scisig=ADi0EEUAAAAAadTQCfdaZ57JY45QsSNI3byqcys&scisf=4&ct=citation&cd=-1&hl=en" >BibTeX</ParticleButton>
                     </div>
                  </div>
               </li>

               {/*  Publication 2: YOLOv11  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-preprint">Preprint 2026</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/yolov11_paper.png" alt="YOLOv11 paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:u5HHmVD_uO8C" target="_blank" rel="noopener">YOLOv11 Architecture Explained: Next-Level Object Detection with Enhanced Speed and Accuracy</a></p>
                     <p className="pub-authors"><strong>Nikhileswara Rao Sulake</strong></p>
                     <p className="pub-venue"><em>Medium, Analytics Vidhya</em>, 2024 &nbsp;&middot;&nbsp; <strong>Accepted at CVC 2026</strong></p>
                     <div className="pub-links">
                        <ParticleButton href="https://arxiv.org/pdf/2604.03349" >Paper</ParticleButton>
                        {/*  <ParticleButton href="#" >BIB</ParticleButton>  */}
                        <ParticleButton href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:u5HHmVD_uO8C" target="_blank" rel="noopener">SCHOLAR</ParticleButton>
                        <ParticleButton href="https://medium.com/@nikhil-rao-20/yolov11-explained-next-level-object-detection-with-enhanced-speed-and-accuracy-2dbe2d376f71" target="_blank" rel="noopener">Medium</ParticleButton>
                        <ParticleButton href="https://scholar.googleusercontent.com/scholar.bib?q=info:4ZDiBsdFBI4J:scholar.google.com/&output=citation&scisdr=Cl8uoyH1EMKY-iWJck4:AFtJQiwAAAAAaZiPak5URSy_Dr9Tyhc5vpgoVX0&scisig=AFtJQiwAAAAAaZiParsG88r9cG-kpKNWhunI9Os&scisf=4&ct=citation&cd=-1&hl=en" target="_blank" rel="noopener">BibTeX</ParticleButton>
                     </div>
                  </div>
               </li>

               {/*  Publication 1: Alzheimer's Survey  */}
               <li className="pub-entry">
                  <div className="pub-thumb">
                     <span className="pub-venue-badge badge-preprint">Preprint 2025</span>
                     <img className="pub-thumb-img" src="/assets/img/publications/alzheimer_paper.png" alt="Alzheimer's survey paper thumbnail"  />
                     <div className="pub-thumb-placeholder" style={{"display":"none"}}><i className="fas fa-file-alt"></i></div>
                  </div>
                  <div className="pub-body">
                     <p className="pub-title"><a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:9yKSN-GCB0IC" target="_blank" rel="noopener">Survey on Deep Learning and Explainable AI for Magnetic Resonance Imaging based Alzheimer's Disease Classification</a></p>
                     <p className="pub-authors"><strong>Nikhileswara Rao Sulake</strong>, Sidharth Pancholi</p>
                     <p className="pub-venue"><em>Authorea Preprints</em></p>
                     <div className="pub-links">
                        {/*  <ParticleButton href="#" >ABS</ParticleButton>  */}
                        {/*  <ParticleButton href="#" >BIB</ParticleButton>  */}
                        <ParticleButton href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=zE6f8d8AAAAJ&citation_for_view=zE6f8d8AAAAJ:9yKSN-GCB0IC" target="_blank" rel="noopener">SCHOLAR</ParticleButton>
                        <ParticleButton href="https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176231563.32545081" target="_blank" rel="noopener">TechRxiv</ParticleButton>
                        <ParticleButton href="https://scholar.googleusercontent.com/scholar.bib?q=info:d2Rq4lbMYOcJ:scholar.google.com/&output=citation&scisdr=Cl8uoyH1EMKY-iWJvME:AFtJQiwAAAAAaZiPpMHGXLNl_70Vwl6ouMydjeU&scisig=AFtJQiwAAAAAaZiPpFldbEgPmoaTlE1oIbzATcM&scisf=4&ct=citation&cd=-1&hl=en" target="_blank" rel="noopener">BibTeX</ParticleButton>
                     </div>
                  </div>
               </li>

            </ul>

            <p style={{"fontSize":"0.9em","color":"#666","fontStyle":"italic","marginTop":"4px"}}>
               † Equal contribution
            </p>


            <h3 className="push-down-4"><span>Services and Contributions</span></h3>
            <ul>
               <li>
                  Reviewer for <strong><a href="https://wisdomgale.com/jcsi/" target="_blank" rel="noopener">European Journal Of Computer Sciences And Informatics</a>, 2025</strong><br />
               </li>

            </ul>

            <h3 className="push-down-4"><span>Research Competitions</span></h3>
            <ul>

               <li>
                  <a href="https://nha.gov.in/hackathon#:~:text=Nikhileswara%20Rao%20Sulake" target="_blank" rel="noopener"
                     aria-label="Open CXR-LT 2026 Challenge Website">Top 2</a> - AB PMJAY Auto-Adjudication Hackathon by <a href="https://nha.gov.in/hackathon" target="_blank" rel="noopener" >NHA</a> and <a href="https://www.iisc.ac.in/" target="_blank" rel="noopener">IISc Bangalore</a> 2026
               </li>

               <li>
                  <a href="https://cxr-lt.github.io/CXR-LT-2026/#:~:text=5,0.0945" target="_blank" rel="noopener"
                     aria-label="Open CXR-LT 2026 Challenge Website">Top 5</a> - CXR-LT 2026 Challenge on Long-Tailed Chest X-ray Classification Benchmark, <a href="https://biomedicalimaging.org/2026/challenges/" target="_blank" rel="noopener">ISBI</a> 2026
               </li>

               <li>
                  <a href="https://bhi.embs.org/2025/data-competition/" target="_blank" rel="noopener"
                     aria-label="Open IEEE EMBS BHI Data Competition Page">Top 10</a> - Track 1,
                  IEEE EMBS <a href="https://bhi.embs.org/2025/" target="_blank" rel="noopener">Biomedical & Health Informatics</a> (BHI) Conference Data Competition, 2025
               </li>

               <li>
                  <a href="https://maic.or.kr/challenge/51/public-ranking" target="_blank" rel="noopener"
                     aria-label="Open MAIC 2024 Public Leaderboard">Top 22</a> -
                  Multimodal AI4TB Challenge (MAIC), <a href="http://www.snuh.org/global/en/main.do" target="_blank" rel="noopener">Seoul National University Hospital</a>, 2024
               </li>

               <li>
                  <a href="https://www.linkedin.com/posts/nikhileswara-rao-sulake_knowledge-ai-research-activity-7280180242139230208-rNWK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7EcjcBV-AIMWnWBDJNNsY1CH8I8YMpRM8"
                     target="_blank" rel="noopener"
                     aria-label="Open Intel AI Hackathon 2024 Post">Top 3</a> -
                  Intel AI Hackathon 2024, <a href="https://ieeeindicon.org/" target="_blank" rel="noopener">IEEE Indicon</a> at IIT Kharagpur, 2024

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
