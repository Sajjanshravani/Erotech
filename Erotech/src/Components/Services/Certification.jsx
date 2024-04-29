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
                    <li key={cource.id} className='item col-md-3'>
                        <div className='course-label'> <img src={cource.icon} alt="icon" className='cource-icon'/>  </div>
                        <h1>{cource.graduateTitle}</h1>
                        <h1>{cource.aboute}</h1>
                        <hr/>
                        <div className='d-flex'>
                            <h1>{cource.courseName}</h1>
                            <img src={cource.quality} alt="quality" className='quality-logo'/>
                        </div>
                        <p>{cource.description}</p>
                        <button type='button'>Start Certification</button>
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
                <li key={each.id} className='col-md-4'>
                    <div>
                        <img src={each.logo} alt="logo" />
                    </div>
                    <h4 style={{fontWeight:"bold"}}>
                        {each.mainHeading}
                    </h4>
                    <p>{each.description}</p>
                </li>
                )}
                </ul>
                <button type="button">Sign up for courses</button>
            </div>


        </div>
    )
}

export default Certification;