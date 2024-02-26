import '../assets/css/Aboutcss.css';
function AboutPage() {
  return (
   



<div className="col-lg-9 col-xl-8" style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginLeft:'250px',color:'#26867e'}}>
<div className="main-content p-5">
  <div className="main-header mb-4">
    <h6 className="sub-heading text-uppercase d-block mb-2">Who I am</h6>
    <h1 className="main-heading d-inline-block text-uppercase pb-3 border-bottom">&lt; About &gt;</h1>
  </div>

  <div className="row mb-5">
    <div className="mb-5 mb-sm-4 col-md-4">
      <img src="https://res.cloudinary.com/dbhfpccxj/image/upload/v1708889919/logo_fdbvyr.jpg" alt="Colorful Wall" />
    </div>
    <div className="col-md-8">
      <div className="about__text mb-5 mb-sm-4 mb-md-4">
        <h3>PARTY WORX</h3>
        <center>
        <h5 style={{color:'black',fontSize:'15px'}}>Expert event planners specializing in unforgettable birthday celebrations, crafting personalized 
        experiences tailored to your unique preferences and desires.</h5>
        </center>
      </div>
      <div className="about__skills" >
        <div className="row no-gutters mb-0 mb-sm-4" >
          <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6" style={{marginTop:'30px'}}>
            <div className="media">
            <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708921759/planning_pjany6.png' className='icons'/>
              <div className="media-body">
                <h4 className="m-0">Plan</h4>
                <p className="m-0" style={{color:'black',fontSize:'14px'}}>Planning meticulously, we craft the blueprint for unforgettable experiences.</p>
              </div>
            </div>
          </div>
          <div className="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
            <div className="media">
            <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708921739/execute_mj5poc.png' className='icons'/>
              <div className="media-body">
                <h4 className="m-0">Execute</h4>
                <p className="m-0" style={{color:'black',fontSize:'14px'}}>Executing flawlessly, we bring dreams to life with precision and passion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters mb-0 mb-sm-4">
          <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
            <div className="media">
              <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708921741/organize_wpwlef.png' className='icons'/>
              <div className="media-body">
                <h4 className="m-0">Organize</h4>
                <p className="m-0" style={{color:'black',fontSize:'14px'}}>Organizing seamlessly, we orchestrate every detail to perfection.</p>
              </div>
            </div>
          </div>
          <div className="mb-0 pl-sm-3 col-sm-6">
            <div className="media">
            <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708921739/clock_tbcq6q.png' className='icons'/>
              <div className="media-body">
                <h4 className="m-0">Time</h4>
                <p className="m-0" style={{color:'black',fontSize:'14px'}}>Punctual to the second, we ensure events unfold like clockwork, leaving no room for delays.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div className="row no-gutters pt-5 border-top">
      <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
        <div className="media">
        <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708922999/event_qpher4.png' className='icons'/>
          <div className="media-body">
            <p className="data-number m-0 font-weight-bold">250</p>
            <p className="m-0 text-uppercase">Events</p>
          </div>
        </div>
      </div>

      <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
        <div className="media">
        <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708922997/customer_vhe0di.png' className='icons'/>
          <div className="media-body">
            <p className="data-number m-0 font-weight-bold">300</p>
            <p className="m-0 text-uppercase">Customer</p>
          </div>
        </div>
      </div>

      <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
        <div className="media">
        <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708922937/rate_eyr6q8.png' className='icons'/>
          <div className="media-body">
            <p className="data-number m-0 font-weight-bold">4.5</p>
            <p className="m-0 text-uppercase">Rating</p>
          </div>
        </div>
      </div>

      <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
        <div className="media">
          <img src='https://res.cloudinary.com/dbhfpccxj/image/upload/v1708922934/feedback_o9dltq.png' className='icons'/>
          <div className="media-body">
            <p className="data-number m-0 font-weight-bold">1000</p>
            <p className="m-0 text-uppercase">Feedback</p>
          </div>
        </div>
      </div>
    </div>

</div>
</div>
  );
}

export default AboutPage;
