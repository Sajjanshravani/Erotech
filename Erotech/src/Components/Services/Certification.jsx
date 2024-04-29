import './Certification.css'
import {cirtificationContent,whyGetCirtificateContent,processContent} from '../Assets/ServicesContent/Service';
function Certification(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 service-banner-bg'>
                    <div>
                        <h1>   Your high- Quality Training </h1>
                        <br/>
                        <h1>  Specialist of IT - EROTECH</h1>
                        <br/>
                        <h1> Solutions</h1>
                    </div>  
                </div>
            </div>
            <div className='row'>
                <ul className='cirtification-container'>
                    {cirtificationContent.map((cource)=> 
                    <li key={cource.id} className='item col-1 col-md-3'>
                        <div className='course-label'> <img src={cource.icon} alt="icon" className='cource-icon'/>  </div>
                        
                            <h3 className='item-top'>{cource.graduateTitle}</h3>
                            <br/><br/>
                            <h3 className='item-top'>{cource.aboute}</h3>
                        <hr style={{position:"relative",top:"-40px"}}/>
                        <div className='couse-title-logo'>
                            <h3>{cource.courseName}</h3>
                            <img src={cource.quality} alt="quality" className='quality-logo'/>
                        </div>
                        <p>{cource.description}</p>
                        <button type='button' className='start-button'>Start Certification</button>
                    </li>)}
                </ul>
            </div>
            <h1 style={{textAlign:"center",fontFamily:"Judson"}}>Why Get Certified</h1>
            <ul className='row' style={{justifyContent:"space-around"}}>
                {whyGetCirtificateContent.map((each)=>
                    <li key={each.id} className='col-12 col-md-5 why-list'>
                            <img src={each.logo} alt='logo'/>
                            <p>{each.description}</p>
                    </li>
            )}
            </ul>
            <div className='row process'>
                <h3 style={{textAlign:"center"}}>The Certification Process</h3>
                <ul className='process-ul'>
                    {processContent.map((each)=>
                <li key={each.id} className='col-md-4 '>
                    <div className='process-logo-bg'>
                        <img src={each.logo} alt="logo" />
                    </div>
                    <h4 style={{fontWeight:"bold"}}>
                        {each.mainHeading}
                    </h4>
                    <p style={{textAlign:"center"}}>{each.description}</p>
                </li>
                )}
                </ul>
                <button type="button" className='sign-up-button'>Sign up for courses</button>
            </div>

            <div className='row d-flex flex-column justify-content-center mt-5'>
                <p style={{textAlign:"center"}}>START TODAY FOR GETTING ONLINE CERTIFICATION</p>
                <h1 style={{textAlign:"center"}}>You Can Be Your Own Guiding Star With Our Help</h1>
                <button type='button' className='sign-up-button' style={{margin:"auto"}}>Contact Us</button>
            </div>


        </div>
    )
}

export default Certification;