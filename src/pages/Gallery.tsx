export function Gallery() {
  return (
    <>
      
  

  <div className="spacer-div-3 hidden-xs hidden-xs"></div>

  {/*  Main content     */}
  <div id="main-container" className="container">

    <div className="row">
        <div className="col-sm-12">

          <h1>Photo Gallery</h1>

          <p>Explore my research, achievements, and travel adventures</p>

        </div>
    </div>

  </div>
  <div className="gallery-tabs">
    <button className="gallery-tab active" data-tab="research">Research</button>
    <button className="gallery-tab" data-tab="achievements">Achievements</button>
    <button className="gallery-tab" data-tab="travelling">Travelling</button>
  </div>
  <div className="masonry-gallery" id="gallery">
    {/*  Research Photos  */}
    <div className="gallery-item" data-category="research">
      <img className="gallery-img" src="/assets/img/gallery/profile_main_pic.jpg" alt="In the Lab" />
      <div className="gallery-caption">Working on deep learning models in the lab</div>
    </div>
    <div className="gallery-item" data-category="research">
      <img className="gallery-img" src="/assets/img/gallery/profile_main_pic.jpg" alt="Conference Poster" />
      <div className="gallery-caption">Presenting my research poster at ICVGIP 2025</div>
    </div>

    {/*  Achievements Photos  */}
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/drdo-1.png" alt="DRDO Achievement" />
      <div className="gallery-caption">DRDO & DIAT Certification in AI & ML</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/drdo-3.png" alt="DRDO Certificate" />
      <div className="gallery-caption">Advanced AI Certification from DRDO</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/intel-1.jpg" alt="Intel AI Hackathon" />
      <div className="gallery-caption">Intel AI Hackathon Participation</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/intel-2.jpg" alt="Intel Competition" />
      <div className="gallery-caption">Intel AI Competition Achievement</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/intel-3.jpg" alt="Intel Event" />
      <div className="gallery-caption">Intel AI Event Participation</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/intel-6.jpg" alt="Intel Recognition" />
      <div className="gallery-caption">Intel AI Recognition Award</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/maic-1.jpg" alt="MAIC Achievement" />
      <div className="gallery-caption">MAIC Competition Success</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/maic-3.png" alt="MAIC Certificate" />
      <div className="gallery-caption">MAIC Certification Achievement</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/ncc-3.jpg" alt="NCC Achievement" />
      <div className="gallery-caption">NCC Training Achievement</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/ncc-4.jpg" alt="NCC Certificate" />
      <div className="gallery-caption">NCC Certification</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/parabola-1.jpg" alt="Parabola Achievement" />
      <div className="gallery-caption">Parabola Competition Success</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/police-1.jpg" alt="Police Achievement" />
      <div className="gallery-caption">Police Department Recognition</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/police-2.jpg" alt="Police Certificate" />
      <div className="gallery-caption">Police Achievement Certificate</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/police-3.jpg" alt="Police Award" />
      <div className="gallery-caption">Police Department Award</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/scientia-2.jpg" alt="Scientia Achievement" />
      <div className="gallery-caption">Scientia Competition Success</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/blog.png" alt="Blog Achievement" />
      <div className="gallery-caption">Blog Writing Achievement</div>
    </div>
    <div className="gallery-item" data-category="achievements">
      <img className="gallery-img" src="/assets/img/achivs/zoya-1.JPG" alt="Zoya Achievement" />
      <div className="gallery-caption">Zoya Project Achievement</div>
    </div>

    {/*  Travelling Photos  */}
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/araku.jpg" alt="Araku Valley" />
      <div className="gallery-caption">Araku Valley - Scenic Beauty</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/araku_2.jpg" alt="Araku Valley View" />
      <div className="gallery-caption">Araku Valley - Panoramic View</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/araku_3.jpg" alt="Araku Valley Landscape" />
      <div className="gallery-caption">Araku Valley - Mountain Landscape</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/araku_4.jpg" alt="Araku Valley Scenery" />
      <div className="gallery-caption">Araku Valley - Natural Scenery</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/bang.jpg" alt="Bangalore" />
      <div className="gallery-caption">Bangalore - Garden City</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/bhavani_islands.jpg" alt="Bhavani Islands" />
      <div className="gallery-caption">Bhavani Islands - River Beauty</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/bza.jpg" alt="Vijayawada" />
      <div className="gallery-caption">Vijayawada - City View</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/charminar.jpg" alt="Charminar" />
      <div className="gallery-caption">Charminar - Hyderabad Icon</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/chidambaram.jpg" alt="Chidambaram Temple" />
      <div className="gallery-caption">Chidambaram Temple - Ancient Architecture</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/cmr_hyd.jpg" alt="CMR Hyderabad" />
      <div className="gallery-caption">CMR Hyderabad - Campus View</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/guitar.jpg" alt="Guitar Performance" />
      <div className="gallery-caption">Guitar Performance - Musical Journey</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/hyd_army_unit.jpg" alt="Hyderabad Army Unit" />
      <div className="gallery-caption">Hyderabad Army Unit - Military Visit</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/Hyder_army_unit.jpg" alt="Hyderabad Army Unit" />
      <div className="gallery-caption">Hyderabad Army Unit - Training Ground</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/iisc_2.jpg" alt="IISc Bangalore" />
      <div className="gallery-caption">IISc Bangalore - Premier Institute</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/IITKGP.jpg" alt="IIT Kharagpur" />
      <div className="gallery-caption">IIT Kharagpur - Campus Visit</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/Intel AI Hackathon.jpg" alt="Intel AI Hackathon" />
      <div className="gallery-caption">Intel AI Hackathon - Competition</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/kali_mata.jpg" alt="Kali Mata Temple" />
      <div className="gallery-caption">Kali Mata Temple - Spiritual Visit</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/kharagpur.jpg" alt="Kharagpur" />
      <div className="gallery-caption">Kharagpur - City Exploration</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/krishna_dam.jpg" alt="Krishna Dam" />
      <div className="gallery-caption">Krishna Dam - Engineering Marvel</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/meet_with_GC_Indian_army.jpg" alt="Meeting with GC Indian Army" />
      <div className="gallery-caption">Meeting with GC Indian Army - Military Interaction</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/orissa.jpg" alt="Odisha" />
      <div className="gallery-caption">Odisha - State Visit</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/rajamundry.jpg" alt="Rajahmundry" />
      <div className="gallery-caption">Rajahmundry - Cultural Heritage</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/sklm_aitam.jpg" alt="SKLM AITAM" />
      <div className="gallery-caption">SKLM AITAM - Institution Visit</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/srisailam_dam.jpg" alt="Srisailam Dam" />
      <div className="gallery-caption">Srisailam Dam - Hydroelectric Project</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/thala_for_reason.jpg" alt="Thala for Reason" />
      <div className="gallery-caption">Thala for Reason - Event Participation</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/thanjavur.jpg" alt="Thanjavur" />
      <div className="gallery-caption">Thanjavur - Historical City</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/trad.jpg" alt="Traditional Event" />
      <div className="gallery-caption">Traditional Event - Cultural Celebration</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/vicotira_mahal.jpg" alt="Victoria Mahal" />
      <div className="gallery-caption">Victoria Mahal - Palace Architecture</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/viza.jpg" alt="Vizag" />
      <div className="gallery-caption">Vizag - Port City</div>
    </div>
    <div className="gallery-item" data-category="travelling">
      <img className="gallery-img" src="/assets/img/travel/vizag_beach.jpg" alt="Vizag Beach" />
      <div className="gallery-caption">Vizag Beach - Coastal Beauty</div>
    </div>
  </div>

  

  {/*  Back-to-top button  */}
  

  {/*  jQuery  */}
  
  {/*  Bootstrap JS Library  */}
  
  {/*  html file include script | used for navbar and footer  */}
  
  

  

  

    </>
  );
}
