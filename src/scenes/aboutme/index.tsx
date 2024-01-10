import aboutmeimg from "@/assets/av.svg";

import ActionButton from "@/shared/ActionButton";

import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const aboutme = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutme" className="mx-auto min-h-full  bg-main py-[110px] ">
      <div className="mx-auto min-h-full md:w-5/6  ">
        {/* HEADER */}
        <div className=" md:flex  md:gap-24   ">
          {/* IMAGE */}

          <img src={aboutmeimg} alt="" className="  mx-auto " />

          {/* text */}
          <div className="ml-10 text-white  ">
            <p className="mx-auto my-5 basis-3/5 font-ptsans text-3xl font-bold  ">
              ABOUT ME
              <div className="">
                <div className="before:relative before:bottom-[10px] before:right-[4px]  before:content-hvector"></div>
              </div>
            </p>
            <p className="font-ptsans text-[15px]  font-bold  ">
              Markus Rühl (born 22 February 1972, in Darmstadt, Germany) is a
              retired <br /> IFBB professional bodybuilder. <br /> Rühl began
              training at the age of 19 following a doctor's recommendation{" "}
              <br />
              after sustaining a knee injury <br /> while playing football. At
              120 pounds(54 kg), Rühl began training hard six days a <br /> week
              until deciding to compete on a professional level five years
              later. During this period he worked as a <br /> used-car salesman.
              Rühl signed a sponsorship <br /> deal with Ultimate Nutrition in
              late 2008. In 2018 he started his own <br /> supplement company,
              Rühl's Bestes.
            </p>
            {/* button */}
            <div className=" mt-[50px]">
              <ActionButton setSelectedPage={setSelectedPage}>
                PROGRAM DETAILS
              </ActionButton>
            </div>
          </div>
        </div>

        <div className="  ml-10  flex   gap-5 text-white md:flex ">
          <div className=" my-5    md:mx-auto  ">
            <p className="  my-5   font-ptsans font-bold   ">
              Stats (active peak numbers)
            </p>
            <p>
              Height: 1.78 m (5 ft 10 in) <br /> Arm Size: 61 cm (24 in)
              (contest)
              <br /> Leg Size: br 85–88 cm (33–35 in) (contest)
              <br /> Waist Size: 97 cm (38 in)
              <br />
              Chest size: 150 cm (59 in)
            </p>
          </div>

          <div className="my-5 pr-10 md:mx-auto md:pr-40 ">
            <p className=" my-5   font-ptsans font-bold   ">Legacy</p>
            <p>
              Although Rühl only won two shows in his
              <br /> career, he is considered to be <br />
              one of the biggest "mass monster"
              <br /> bodybuilders who ever lived.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutme;
