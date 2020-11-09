import React from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd';
const style = {
    border: '1px solid gray',
    height: '5rem',
    width: '30rem',
    padding: '2rem',
    textAlign: 'center',
};
export const TargetBox = (props) => {
    const { onDrop } = props;
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: [NativeTypes.FILE],
        drop(item, monitor) {
            if (onDrop) {
                onDrop(props, monitor);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = canDrop && isOver;
    return (<div ref={drop} style={style}>
        {isActive ? 'Отпутсти что бы загрузить' : 'Перетащи файл'}
    </div>);
};
