import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {data} = props

  return (
    <div className="course-container">
      <div className="title-container">
        <h1 className="title">{data.courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="duration-logo" />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <div className="tags-container">
        {data.tagsList.map(each => (
          <p className="tagname">{each.name}</p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
