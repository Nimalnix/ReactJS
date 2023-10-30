function AboutUs(props){

    return(

        <center>

            <div>

                <b>

                    Contact Us at

                </b><br/>

                {props.companyName}<br/>

                {props.address}

                <a href="mailto:aboutus@gavstech.com?sunject=About us">aboutus</a>

            </div>

        </center>

    )

}

export default AboutUs;