import React, { useState } from 'react';
import CourseItem from './CourseItem';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const Courses = () => {
  const initialCourseOrder = [
    { id: 1, title: 'Interview preparation with JavaScript 2.0', price: 9000, imageUrl: './Course1.jpg', type: 'Course', hidden: false },
    { id: 2, title: 'React.js Fundamentals', price: 7500, imageUrl: './Course2.jpg', type: 'Mock Test', hidden: false },
    { id: 3, title: 'Advanced CSS Techniques', price: 6000, imageUrl: './Course3.jpg', type: 'Mock Test', hidden: false },
    { id: 4, title: 'Node.js Essentials', price: 8500, imageUrl: './Course4.jpg', type: 'Mock Test', hidden: false },
    { id: 5, title: 'Web Design Principles', price: 7000, imageUrl: './Course5.jpg', type: 'Mock Test', hidden: false },
  ];

  const [courseOrder, setCourseOrder] = useState(initialCourseOrder);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setCourseOrder((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const moveCourseToTop = (index) => {
    if (index > 0) {
      const updatedOrder = [...courseOrder];
      const [movedCourse] = updatedOrder.splice(index, 1);
      updatedOrder.unshift(movedCourse);
      setCourseOrder(updatedOrder);
    }
  };

  const moveCourseToBottom = (index) => {
    if (index < courseOrder.length - 1) {
      const updatedOrder = [...courseOrder];
      const [movedCourse] = updatedOrder.splice(index, 1);
      updatedOrder.push(movedCourse);
      setCourseOrder(updatedOrder);
    }
  };

  const removeCourse = (index) => {
    const updatedOrder = [...courseOrder];
    updatedOrder[index].hidden = true;
    setCourseOrder(updatedOrder);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={courseOrder.map(course => course.id)} strategy={verticalListSortingStrategy}>
        <div className='flex justify-center items-center h-screen w-full'>
          <div className="bg-white w-[70%] h-fit p-5 rounded-md">
            <h1 className='text-4xl font-[700] font-inter'>Manage Bundle</h1>
            <p className='font-inter font-[400] text-[#4B4747] mb-8'>Change orders of the products based on priority</p>
            {courseOrder.map((course, index) => (
              <CourseItem key={course.id} course={course} index={index} moveToTop={moveCourseToTop} moveToBottom={moveCourseToBottom} removeCourse={removeCourse} />
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Courses;
