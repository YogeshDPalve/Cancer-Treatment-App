import {
  IconBrandStackoverflow,
  IconCircleDashedCheck,
  IconClockExclamation,
  IconHourglassHigh,
  IconListCheck,
  IconStack3Filled,
  IconUserScan,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetricsCard from "./MetricsCard";

const DisplayInfo = () => {
  const naviagate = useNavigate();
  const [metrics, setMetrics] = useState({
    totalFolders: 0,
    aiPersonalizedTreatment: 0,
    totalScreenings: 0,
    completedScreenings: 0,
    pendingScreeing: 0,
    overdueScreenig: 0,
  });

  const metricsData = [
    {
      title: "Specialist Appointment Pending",
      subtitle: "View",
      value: metrics.pendingScreeing,
      icon: IconHourglassHigh,
      onclick: () => naviagate("/appointments/pending"),
    },
    {
      title: "Treatment Progress Update",
      subtitle: "View",
      value: `${metrics.completedScreenings} of ${metrics.totalScreenings}`,
      icon: IconCircleDashedCheck,
      onclick: () => naviagate("/appointments/progress"),
    },
    {
      title: "Total Folders",
      subtitle: "View",
      value: metrics.totalFolders,
      icon: IconStack3Filled,
      onclick: () => naviagate("/folders"),
    },
    {
      title: "Total Screenings",
      subtitle: "View",
      value: metrics.totalScreenings,
      icon: IconUserScan,
      onclick: () => naviagate("/screenings"),
    },
    {
      title: "Completed Screenings",
      subtitle: "View",
      value: metrics.completedScreenings,
      icon: IconListCheck,
      onclick: () => naviagate("/screenings/completed"),
    },
    {
      title: "Pending Screenings",
      subtitle: "View",
      value: metrics.completedScreenings,
      icon: IconHourglassHigh,
      onclick: () => naviagate("/screenings/penging "),
    },
    {
      title: "Overdue Screenings",
      subtitle: "View",
      value: metrics.overdueScreenig,
      icon: IconClockExclamation,
      onclick: () => naviagate("/screenings/overdue"),
    },
  ];

  return (
    <div className="flex flex-wrap gap-[26px]">
      <div className="mt-7 grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
        {metricsData.slice(0, 2).map((metric) => (
          <MetricsCard key={metric.title} {...metric} />
        ))}
      </div>
      <div className="mt-[9px] grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {metricsData.slice(2).map((metric) => (
          <MetricsCard key={metric.title} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default DisplayInfo;
