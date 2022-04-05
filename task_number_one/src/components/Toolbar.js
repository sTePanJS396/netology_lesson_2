import React from 'react'

const Toolbar = ({filters, selected, onSelectFilter}) => {
    const [isActive, setIsActive] = React.useState(filters.indexOf(selected));

    React.useEffect(() => onSelectFilter(filters[isActive]), [isActive]);
    // Почему я тут использую "useEffect()"? При первой отрисовке компонента мне надо передать текущий установленный фильтр,
    // в нашем случае это "All". Далее при каждом изменении выбранного фильтра я передаю это в функцию "onSelectFilter".
    // Вот для этих задач я использую "useEffect()". Другого способа я не придумал. (Буду рад услышать замечания и предложения по улучшению)

    return (
        <div className="toolbar">
            <ul className="toolbar-list">
                {filters.map((el, index) => (
                    <li key={el} className='toolbar-list-item' onClick={() => setIsActive(index)}>
                        <button className={isActive === index ? 'toolbar-list-item-button active-item' : 'toolbar-list-item-button'}>{el}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Toolbar;