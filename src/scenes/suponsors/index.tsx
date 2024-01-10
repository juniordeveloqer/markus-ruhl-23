import img_1 from "@/assets/img_1.svg";
import img_2 from "@/assets/img_2.svg";
import img_3 from "@/assets/img_3.svg";
import img_4 from "@/assets/img_4.svg";
import img_5 from "@/assets/img_5.svg";

const supponsors = () => {
  return (
    <section className="mx-auto  flex h-3/6  items-center   justify-center bg-main ">
      <div className=" w-5/6 items-center  justify-between  ">
        {/* TEXT */}
        <div className=" mx-auto flex h-full w-full items-center justify-between  font-ptsans text-3xl font-bold text-white  s:text-2xl">
          <p className="mx-auto flex items-center   justify-center ">
            SPONSORS
          </p>
        </div>
        {/* İMAGES */}

        <div
          className=" mx-auto flex   items-center justify-center s:mb-20 sm:flex sm:gap-[20px] xl:mx-auto xl:mr-10 xl:flex xl:items-center  xl:justify-center   xxl:mx-auto xxl:mr-[50px] 
        xxl:flex xxl:items-center xxl:justify-center xxl:gap-16 "
        >
          <img
            src={img_1}
            alt=""
            className="  s:w-[50px]  ss:w-[180px] sm:w-[100px]  md:w-[100px]  xl:w-[150px]"
          />
          <img
            src={img_2}
            alt=""
            className=" s:w-[60px]  ss:w-[180px] sm:w-[150px]  md:w-[200px] xl:w-[250px]"
          />
          <img
            src={img_3}
            alt=""
            className=" s:w-[80px]  ss:w-[250px] sm:w-[200px]  md:w-[300px] xl:w-[350px]"
          />
          <img
            src={img_4}
            alt=""
            className=" s:w-[55px] ss:w-[180px]  sm:w-[130px] md:w-[200px] xl:w-[200px]"
          />
          <img
            src={img_5}
            alt=""
            className="ml-3  s:w-[25px] ss:w-[180px] sm:w-[50px] md:w-[80px] ss:sm:md:xl:ml-10 xl:w-[90px]"
          />
        </div>
      </div>
    </section>
  );
};

export default supponsors;
