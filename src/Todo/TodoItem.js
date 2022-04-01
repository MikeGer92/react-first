import React from "react";
import PropTypes from 'prop-types'


function TodoItem({todo, index}) {
    return (
        <li>
            <strong>{index +1 }. </strong>
            {todo.title}
        </li>
    )
}

// eslint-disable-next-line react/no-typos
TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}
export default TodoItem