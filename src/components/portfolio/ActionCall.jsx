import React from "react";
import Project from '../../assets/Computational Biology Research Grant Paper.pdf'

const ActionCall = () => {
    return (
        <div className="cta">
            <a href={Project} download className="btn">Project</a>
        </div>
    )
}

export default ActionCall