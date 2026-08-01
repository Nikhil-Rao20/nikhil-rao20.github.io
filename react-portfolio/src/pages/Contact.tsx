export function Contact() {
  return (
    <>
      

   {/*  navbar include  */}
   

   <div className="spacer-div-3 hidden-xs hidden-xs"></div>

   {/*  Main content     */}
   <div id="main-container" className="container">
    

    <div className="container" id="form-wrapper">

        {/*  Start Contact Form  */}
        <form role="form" id="form" className="contact-form shake" data-toggle="validator">
            <div className="form-group">
              <div className="controls">
                <input type="text" id="name" className="form-control" name="name" placeholder="Name" required data-error="Please enter your name" />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="form-group">
              <div className="controls">
                <input type="email" className="email form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your email" />
                <div className="help-block with-errors"></div>
              </div>
            </div>
           
            <div className="form-group">
              <div className="controls">
                <textarea id="message" rows={7} placeholder="Massage" name="message" className="form-control" required data-error="Write your message"></textarea>
                <div className="help-block with-errors"></div>
              </div>  
            </div>

            <button type="submit" id="submit" className="btn btn-success">Send Message</button>
            <div id="msgSubmit" className="h3 text-center hidden"></div> 
            <div className="clearfix"></div>   

        </form> 
        <br />
        <h4 id="success"></h4>

        <p>
          <b>** My e-mail & cell numbers are given in About section. E-mail is preferred.</b>
        </p>
   </div>
   

   {/*  Back-to-top button  */}
   

   {/*  footer include  */}
   

   {/*  jQuery  */}
   

   {/*  Bootstrap JS Library  */}
   

   {/*  html file include script | used for navbar and footer  */}
   
   

   {/*  Local scripts  */}
   

   
  {/*  Script for submitting contact form to self api  */}
    

</div>
    </>
  );
}
