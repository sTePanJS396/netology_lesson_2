import React from 'react'

const ProjectList = ({ list }) => {
    return (
        <div className="project">
            <ul className="project-list">
                {list.map((el, index) => (
                    <li key={`num ${index}`} className="project-list-item"> {/*Хоть и не совсем хорошо использовать инедкс, но все же создаем уникальный key с помощью незамысловтаой формулы*/}
                        <img src={el.img} alt={`Картинка ${index + 1}`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProjectList;