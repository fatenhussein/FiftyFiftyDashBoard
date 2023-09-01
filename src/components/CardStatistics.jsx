import React from 'react';
import "../../src/App.css"
function CardStatistics({ data, dataName , icon }) {
  return (
    <div class="rounded-sm border border-strok rounded bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div class="flex h-11.5 w-11.5 px-3 items-start justify-start rounded-full bg-meta-2 dark:bg-meta-4">
     {icon}
      </div>

      <div class="mt-4 flex items-end justify-between px-3">
        <div>
          <h4 class="text-title-md font-bold text-black dark:text-white">
            {data.length}
          </h4>
          <span class="text-sm font-medium">Total {dataName}</span>
        </div>

        <span class="flex items-center gap-1 text-sm font-medium text-meta-5">
          0.95%
          <svg
            class="fill-meta-5"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default CardStatistics;
