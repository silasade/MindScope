import React from "react";
type cardType = {
  title: string;
  message: string;
};
const coreValues: cardType[] = [
  {
    title: "Building a Thoughtful Community",
    message:
      "Great ideas don’t exist in isolation. We foster a culture of authentic engagement, encouraging writers, readers, and thought leaders to connect, share insights, and support one another in a space designed for meaningful dialogue.",
  },
  {
    title: "Creating Impact Through Ideas",
    message:
      "Words have the power to shape perspectives and inspire action. Whether through deep-dive analyses, personal reflections, or expert insights, our goal is to spark conversations that leave a lasting impact on individuals and society.",
  },
  {
    title: "Stewardship of Knowledge",
    message:
      "We take our role seriously—not just as content creators but as curators of knowledge. We prioritize accuracy, ethical storytelling, and thoughtful discourse, ensuring that our platform serves as a responsible and valuable resource for lifelong learning.",
  },
  {
    title: "Championing Innovation in Storytelling",
    message:
      "The digital landscape is ever-evolving, and so is the way we tell stories. At Mindscope, we embrace change, experiment with new formats, and push the boundaries of creativity to keep our content engaging, relevant, and forward-thinking.",
  },
];

function OurValues() {
  return (
    <div className="flex flex-col gap-[24px] items-center justify-center bg-[#9747ff] w-full p-[20px] md:p-[30px]">
      <h2 className="text-[24px] text-[#ffff] font-[700] place-center-center text-center">
        Our Values
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreValues.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-4 rounded-lg p-3 md:p-6 lg:p-10 bg-[#ffff] h-[150px] md:h-[200px] lg:h-[250px] w-50 ${
                index === 3 ? "lg:col-start-2 lg:col-end-3" : ""
              }`}
            >
              <h4 className="text-[14px] md:text-[16px] text-[#10182f] font-[700]">
                {item.title}
              </h4>
              <p className="text-[12px] md:text-[14px] text-[#10182f] font-[500]">
                {item.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurValues;
