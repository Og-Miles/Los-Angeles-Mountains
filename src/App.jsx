import { useState } from "react";
import { logo, bg, bg2, hero } from "./assets";
import { CarouselTree, List } from "./assets/components";

const App = ({ color }) => {
  const [selectedButton, setSelectedButton] = useState("Mountain1");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <main>
      <section className='bg-hero-pattern h-[250px] lg:h-screen bg-auto bg-no-repeat sm:bg-cover '>
        <nav className='justify-start lg:justify-around flex pt-[10px]'>
          <img src={logo} alt='logo' />
          <div className='hidden lg:flex'>
            <List color='[#fff]' />
          </div>
        </nav>
      </section>

      <section className='bg-white h-full items-center'>
        <div className='flex flex-col lg:flex-row justify-between space-x-2 py-2 items-center mx-auto container max-w-3xl'>
          <div className='flex flex-col lg:flex-row items-center'>
            <img src={logo} alt='logo' className='w-[49px] h-[49px]' />
            <div className='flex flex-col pl-2 font-bebas font-medium leading-5 text-center lg:text-left'>
              <p className='text-[24px]'>Losangeles</p>
              <p className='text-[#414f6b] text-[24px]'>Mountains</p>
            </div>
          </div>
          <List color='[#414f6b]' />
        </div>
      </section>
      <section
        id='history'
        className='bg-hero2 bg-cover bg-no-repeat lg:bg-cover h-[600px] lg:h-[890px] relative'
      >
        <div className='flex flex-col container mx-auto max-w-3xl pt-5 justify-center px-3'>
          <span className='flex items-center'>
            <h1 className='text-[64px] lg:text-[135px] font-oswald font-bold text-[#71809a]'>
              01.
            </h1>
            <h3 className='uppercase ml-[-12px] lg:ml-[-24px] mb-[-6px] lg:mb-[-14px] text-[14px] lg:text-[32px] font-oswald text-[#414f6b] font-bold'>
              history
            </h3>
          </span>
          <p className='text-[12px] font-lato lg:ml-20'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            vitae saepe atque, voluptas eius tempora commodi similique dolorem
            eum modi reprehenderit odit doloribus voluptate consequatur fuga
            nihil, laboriosam architecto dolores non ipsam nostrum. Ab aliquid
            vero, eos dolores reprehenderit error! Ratione dolore obcaecati
            repellendus sunt aliquam quaerat! Explicabo, corrupti quis.
          </p>
        </div>

        <div className='absolute bottom-0 min-h-32 max-w-screen bg-[#414f6b] bg-opacity-80 pt-3 w-full'>
          <CarouselTree />
        </div>
      </section>
      <div id='team' className='bg-white'>
        <div className='flex flex-col lg:flex-row container mx-auto max-w-3xl pt-5 justify-center px-3 items-start lg:items-center'>
          <span className='flex items-center'>
            <h1 className='text-[64px] lg:text-[135px] font-oswald font-bold text-[#71809a]'>
              02.
            </h1>
            <h3 className='uppercase ml-[-12px] lg:ml-[-24px] mb-[-6px] lg:mb-[-14px] text-[14px] lg:text-[32px] font-oswald text-[#414f6b] font-bold'>
              Team
            </h3>
          </span>
          <p className='text-[12px] font-lato lg:ml-20'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            vitae saepe atque, voluptas eius tempora commodi similique dolorem
            eum modi reprehenderit odit doloribus voluptate consequatur fuga
            nihil, laboriosam architecto dolores non ipsam nostrum.
          </p>
        </div>
      </div>

      <section className='w-full h-contain  gap-2 font-oswald font-bold pl-0 lg:pl-[300px] hidden lg:flex'>
        <button
          className={`h-fit uppercase py-2 underline underline-offset-4 px-2 text-[#b0b4be] ${
            selectedButton === "Mountain1" ? "selected" : ""
          }`}
          style={{
            color: selectedButton === "Mountain1" ? "#414f6b" : " ",
            backgroundColor: selectedButton === "Mountain1" ? "#b0b4be" : " ",
          }}
          onClick={() => handleButtonClick("Mountain1")}
        >
          Mountain1
        </button>
        <button
          className={`h-fit uppercase py-2 underline underline-offset-4 px-2 text-[#b0b4be] ${
            selectedButton === "Mountain2" ? "selected" : ""
          }`}
          style={{
            color: selectedButton === "Mountain1" ? " " : "#414f6b",
            backgroundColor: selectedButton === "Mountain1" ? " " : "#b0b4be",
          }}
          onClick={() => handleButtonClick("Mountain2")}
        >
          Mountain2
        </button>
      </section>
      {selectedButton && (
        <div
          className='w-full min-h-[500px] lg:min-h-screen bg-[#414f6b] text-[#71809a] text-center relative hidden lg:flex'
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${
              selectedButton === "Mountain1" ? bg : bg2
            })`,
          }}
        >
          <div className='bg-white opacity-65 py-4 px-8 flex flex-col w-[400px] min-h-[300px] font-lato text-slate-900 absolute bottom-24 lg:bottom-80 left-20 lg:left-96'>
            <h1 className='uppercase font-bebas text-[42px] w-fit'>schedule</h1>
            <p className='flex justify-between'>
              {" "}
              <span>25 Nov 2016</span>
              <span>Vestibulum viverra</span>
            </p>

            <p className='flex justify-between mb-5'>
              {" "}
              <span>28 Nov 2016</span>
              <span>Vestibulum viverra</span>
            </p>

            <p className='flex justify-between mb-5'>
              {" "}
              <span>18 Dec 2016</span>
              <span>Vestibulum viverra</span>
            </p>
            <p className='flex justify-between'>
              {" "}
              <span>7 Jan 2017</span>
              <span>Vestibulum viverra</span>
            </p>
          </div>
        </div>
      )}

      {/* ========= Accordion Mobile =========== */}

      <section className='w-full h-contain flex flex-col gap-2 font-oswald font-bold pl-0 lg:hidden'>
        <button
          className={`h-fit uppercase py-2 underline underline-offset-4 px-2 text-[#b0b4be] ${
            selectedButton === "Mountain1" ? "selected" : ""
          }`}
          style={{
            color: selectedButton === "Mountain1" ? "#414f6b" : " ",
            backgroundColor: selectedButton === "Mountain1" ? "#b0b4be" : " ",
          }}
          onClick={() => handleButtonClick("Mountain1")}
        >
          Mountain1
        </button>
        {selectedButton === "Mountain1" && (
          <div
            className='w-full min-h-[500px] lg:min-h-screen bg-[#414f6b] text-[#71809a] text-center relative'
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${bg})`,
            }}
          >
            <div className='bg-white opacity-65 py-4 px-8 flex flex-col max-w-[400px] min-h-[300px] font-lato text-slate-900 absolute bottom-24 lg:bottom-80 left-20 lg:left-96'>
              <h1 className='uppercase font-bebas text-[42px] w-fit'>
                schedule
              </h1>
              <p className='flex justify-between'>
                {" "}
                <span>25 Nov 2016</span>
                <span>Vestibulum viverra</span>
              </p>

              <p className='flex justify-between mb-5'>
                {" "}
                <span>28 Nov 2016</span>
                <span>Vestibulum viverra</span>
              </p>

              <p className='flex justify-between mb-5'>
                {" "}
                <span>18 Dec 2016</span>
                <span>Vestibulum viverra</span>
              </p>
              <p className='flex justify-between'>
                {" "}
                <span>7 Jan 2017</span>
                <span>Vestibulum viverra</span>
              </p>
            </div>
          </div>
        )}

        <button
          className={`h-fit uppercase py-2 underline underline-offset-4 px-2 text-[#b0b4be] ${
            selectedButton === "Mountain2" ? "selected" : ""
          }`}
          style={{
            color: selectedButton === "Mountain2" ? "#414f6b" : " ",
            backgroundColor: selectedButton === "Mountain2" ? "#b0b4be" : " ",
          }}
          onClick={() => handleButtonClick("Mountain2")}
        >
          Mountain2
        </button>
        {selectedButton === "Mountain2" && (
          <div
            className='w-full min-h-[500px] lg:min-h-screen bg-[#414f6b] text-[#71809a] text-center relative'
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${bg2})`,
            }}
          >
            <div className='bg-white opacity-65 py-4 px-8 flex flex-col max-w-[400px] min-h-[300px] font-lato text-slate-900 absolute bottom-24 lg:bottom-80 left-20 lg:left-96'>
              <h1 className='uppercase font-bebas text-[42px] w-fit'>
                schedule
              </h1>
              <p className='flex justify-between'>
                {" "}
                <span>25 Nov 2016</span>
                <span>Vestibulum viverra</span>
              </p>

              <p className='flex justify-between mb-5'>
                {" "}
                <span>28 Nov 2016</span>
                <span>Vestibulum viverra</span>
              </p>

              <p className='flex justify-between mb-5'>
                {" "}
                <span>18 Dec 2016</span>
                <span>Vestibulum viverra</span>
              </p>
              <p className='flex justify-between'>
                {" "}
                <span>7 Jan 2017</span>
                <span>Vestibulum viverra</span>
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ========= Fotter Section ========= */}
      <footer>
        <div className='flex flex-col lg:flex-row justify-around py-2 items-center  relative'>
          <div className='flex flex-col lg:flex-row items-center'>
            <img src={logo} alt='logo' className='w-[49px] h-[49px]' />
            <div className='flex flex-col pl-2 font-bebas font-medium leading-5 text-center lg:text-left'>
              <p className='text-[24px] text-white'>Losangeles</p>
              <p className='text-white text-[24px]'>Mountains</p>
            </div>
          </div>
          <p className='text-[#fff] uppercase font-lato font-bold text-[12px] italic'>
            copy rights 2016. All rights reserved
          </p>
          <div className='absolute inset-0 bg-[#63769d] opacity-50 w-full'></div>
        </div>
      </footer>
    </main>
  );
};

export default App;
