import markus from "@/assets/MARKUS.svg";
import rühl from "@/assets/RÜHL.svg";
import righttext from "@/assets/righttext.svg";
import UseMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = UseMediaQuery("(min-width:1250px)");
  return (
    <section className="h-full  bg-main ">
      <div className="bg-absolute h-full bg-markus2004 bg-cover bg-center bg-no-repeat  ">
        {/* MARKS RÜHL */}

        <div className=" mx-auto  flex items-center justify-center  md:h-[600px] ">
          <div
            className=" ml-[10px] mt-[100px]  md:mb-[500px]
           md:mr-[380px] min-[1250px]:mb-[250px] min-[1250px]:ml-[800px] "
          >
            <motion.div
              className=" md:absolute"
              onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={righttext} alt="" className="z-1" />
            </motion.div>
          </div>

          {isAboveMediumScreens && (
            <motion.div
              className=" absolute mx-auto  gap-40 pb-[250px]  pr-[1100px]  "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className=" absolute mx-auto   ">
                <img src={markus} />
                <img src={rühl} className="pt-5" />
              </div>
            </motion.div>
          )}
        </div>

        {/* MAIN HEADER */}

        {/* HEADER */}
      </div>
    </section>
  );
};

export default home;
