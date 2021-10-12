import React from 'react'
import './task.scss'
import Icon from '../icon/icon'
import IconButton from '../icon-button/IconButon'

function Task({ task, ...props }) {
    const className = 'task' + (!task.done ? '' : '-checked')

    return (
        <section className={className}>
            <div className="row">
                <label className="check">
                    <input
                        className="check-input"
                        type="checkbox"
                        checked={task.done}
                        onChange={props.doneTask}
                    />
                    <span className="check-box left-space-sm" id="checkbox">
                        <Icon class="icon-sm bx bx-check" />
                    </span>
                </label>
                <p className="simple-text left-space-sm todo-heading">{task.name}</p>
            </div>
            <div className="row g1 right-space-sm">
                <IconButton
                    class="tertiary-icon-btn-sm"
                    iconClass="icon-sm bx bx-edit-alt"
                    onClick={props.openModal}
                /><i class=''></i>
                <IconBtn
                    class="tertiary-icon-btn-sm"
                    iconClass="icon-sm bx bx-trash-alt"
                    onClick={props.deleteTask}
                />
            </div>
        </section>
    )
}

export default Task