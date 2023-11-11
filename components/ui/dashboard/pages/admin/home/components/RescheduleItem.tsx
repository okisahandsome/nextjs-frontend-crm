import SvgCalendar from "@/public/icons/Calendar";
import React from "react";

type RescheduleItemProps = {
  actor: string;
  date: string;
  time: string;
};

const RescheduleItem = ({ actor, date, time }: RescheduleItemProps) => {
  return (
    <div className="flex items-center px-5 py-2 gap-x-4 bg-white border border-l-0 border-t-0 border-r-0 border-b-1 border-borderGreyColor">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-4">
          <div>
            <SvgCalendar />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-primary text-base font-bold">
              Caregiver Reschedulad Visit
            </p>
            <p className="text-textdarkColor text-base tracking-wider font-arial">
              <b className="text-black text-base">{actor}</b> has rescheduled
              their visit to next {date}.
            </p>
          </div>
        </div>
        <div className="flex">
          <p className="text-textdarkColor text-sm pl-[72px]">{time}</p>
        </div>
      </div>
      <div className="">
        <div className="bg-primary rounded-full w-[8px] h-[8px]"></div>
      </div>
    </div>
  );
};

export default RescheduleItem;
