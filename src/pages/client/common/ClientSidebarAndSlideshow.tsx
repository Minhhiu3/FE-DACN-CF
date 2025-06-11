import React from 'react';
import Sidebar from '../../../components/Sidebar';
import Slideshow from '../../../components/Slideshow';

const ClientSidebarAndSlideshow: React.FC = () => {
  return (
    <div className="w-full  px-4 sm:px-8 mt-4">
      <div className="flex gap-4">
        {/* Sidebar dọc chỉ hiển thị khi ≥ sm, nên không trùng với mobile sidebar */}
        <Sidebar />

        {/* Slideshow luôn hiển thị */}
        <div className=" flex-1">
          <Slideshow />
        </div>
      </div>
    </div>
  );
};

export default ClientSidebarAndSlideshow;
