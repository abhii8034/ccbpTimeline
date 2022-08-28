import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props

  return (
    <div className="project-timeline-container">
      <img src={data.imageUrl} className="project-image" alt="project" />
      <div className="title-container">
        <h1 className="project-title">{data.projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="duration-logo" />
          <p className="project-duration">{data.duration}</p>
        </div>
      </div>
      <p className="project-description">{data.description}</p>
      <div className="link-container">
        <a className="link-item" href={data.projectUrl}>
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
