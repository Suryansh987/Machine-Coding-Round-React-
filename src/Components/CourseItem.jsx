import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const CourseItem = ({ course, index, moveToTop, moveToBottom, removeCourse }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [clickTimeout, setClickTimeout] = useState(null);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: course.id,
    disabled: true, // Disable sorting on the whole item
  });

  const { setNodeRef: setDragHandleRef, attributes: dragHandleAttributes, listeners: dragHandleListeners } = useSortable({
    id: course.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevents event bubbling to drag-and-drop handlers
    if (clickTimeout) {
      clearTimeout(clickTimeout);
    }
    setClickTimeout(setTimeout(() => {
      setShowMenu((prev) => !prev);
    }, 100)); // Delay to distinguish between click and drag
  };

  const handleMenuClick = (event, action) => {
    event.stopPropagation(); // Prevents event bubbling to drag-and-drop handlers
    if (clickTimeout) {
      clearTimeout(clickTimeout); // Clear timeout on action click
    }
    action();
    setShowMenu(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative flex items-center justify-between rounded-lg shadow-center mb-4 ${course.hidden ? 'hidden' : ''}`}
    >
      <div className='flex items-center gap-2 p-3 w-[70%]'>
        <img
          src="./Frame.svg"
          alt="Drag Handle"
          ref={setDragHandleRef}
          {...dragHandleAttributes}
          {...dragHandleListeners}
          className="cursor-move" // Indicate draggable area
        />
        <img src={course.imageUrl} alt="" />
        <p>{course.title}</p>
      </div>
      <div className='flex items-center gap-10 p-3 justify-evenly w-[30%] relative'>
        <p>Rs. {course.price}/-</p>
        <div className='bg-[#DBFFCE] border-[#7E7E7E] border px-1 rounded font-[400] text-sm'>
          {course.type}
        </div>
        <img
          src="./three-dots.svg"
          alt="Options"
          onClick={toggleMenu}
          className="cursor-pointer"
        />
        {showMenu && (
          <div className='absolute top-10 -right-24 flex flex-col bg-white shadow-center p-3 rounded-lg z-10 gap-2'>
            <button
              className='flex items-center gap-2'
              onClick={(e) => handleMenuClick(e, () => moveToTop(index))}
            >
              <img src="./top.svg" alt="" />
              Move to Top
            </button>
            <button
              className='flex items-center gap-2'
              onClick={(e) => handleMenuClick(e, () => moveToBottom(index))}
            >
              <img src="./bottom.svg" alt="" />
              Move to Bottom
            </button>
            <button
              className='flex items-center gap-2 text-red-500'
              onClick={(e) => handleMenuClick(e, () => removeCourse(index))}
            >
              <img src="./Delete.svg" alt="" />
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseItem;
