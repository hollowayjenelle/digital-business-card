import profilepic from "../profilepic.jpg"

export default function ProfileHeader(){
    return(
        <div className="profile">
            <img src={profilepic} className="profile-pic" alt="black woman in yellow jacket"/>
            <h3 className="full-name">Anne Walker</h3>
            <h4 className="position">Front-end Developer</h4>
            <h5 className="portfolio-link">annewalker.website</h5>
        </div>
    )
}