import React, { useState } from "react";
import getImageUrl from "../utils/imageGetter";

// import { forgotPass } from "../utils/https/forgotPass";
import Title from "../components/Title";
import Modal from "../components/Modal";

function ResetPass() {
  const [Message, setMessage] = useState({ msg: null, isError: null });
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    status: null,
  });

  const [isPassShown2, setIsPassShown2] = useState(false);
  const [isPassShown3, setIsPassShown3] = useState(false);

  const showPassHandler2 = () => {
    setIsPassShown2((state) => !state);
  };

  const showPassHandler3 = () => {
    setIsPassShown3((state) => !state);
  };

  const submitResetPassword = (e) => {
    e.preventDefault();

    if (e.target.password2.value !== e.target.password3.value) {
      setMessage({ msg: "Password dont match!", isError: true });
      setOpenModal({ isOpen: true, status: "resetPassword" });
      return;
    }
    // Axios yang menyambungkan ke backend
  };

  return (
    <>
      <Title title={"Reset Password"}>
        <div className="bg-[#3969FD] w-full h-screen flex justify-center items-center font-montserrat">
          <div className="bg-white py-[40px] px-[25px] lg:py-[70px] lg:px-[70px] md:w-[600px] h-auto lg:my-[70px] my-[100px] rounded-[20px]">
            {/* Bagian E-Wallet */}
            <div className="flex items-center gap-[15px] mb-[25px]">
              <img
                src="img/wallet.png"
                alt=""
                className="w-8 h-8 object-cover"
              />
              <h1 className="font-nunito text-[#2948FF] text-xl font-semibold">
                E-Wallet
              </h1>
            </div>

            {/* Bagian Fill out form correctly */}
            <div className="mb-[25px]">
              <h1 className="text-[#0B132A] font-montserrat lg:text-3xl text-lg font-medium">
                Reset Password
              </h1>
            </div>

            <form
              onSubmit={submitResetPassword}
              className="flex flex-col gap-y-4"
            >
              <div className="flex flex-col gap-y-3 relative">
                <label
                  htmlFor="password2"
                  className="text-sm md:text-base font-semibold text-[#0B132A] lg:text-base"
                >
                  New Password
                </label>
                <input
                  type={isPassShown2 ? "text" : "password"}
                  id="password2"
                  placeholder="Enter Your New Password"
                  className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wider outline-none focus:border-primary placeholder:tracking-wider"
                />
                <div className="icon-password absolute top-[46px] left-4 md:top-[50px]">
                  <img
                    src={getImageUrl("Password", "svg")}
                    alt="Password"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className={`absolute top-[46px] right-4 md:top-[50px]${
                    isPassShown2 ? " hidden" : " block"
                  } cursor-pointer`}
                  id="btnHiddenPassword"
                  onClick={showPassHandler2}
                >
                  <img
                    src={getImageUrl("EyeSlash", "svg")}
                    alt="EyeSlash"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className={`absolute top-[45px] right-[15px] md:top-[49px]${
                    isPassShown2 ? " block" : " hidden"
                  } cursor-pointer`}
                  id="btn-show-password"
                  onClick={showPassHandler2}
                >
                  <img
                    src={getImageUrl("eye", "svg")}
                    alt="eye"
                    className="w-[18px] h-[18px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3 relative">
                <label
                  htmlFor="password3"
                  className="text-sm md:text-base font-semibold text-[#0B132A] lg:text-base"
                >
                  Confirm New Password
                </label>
                <input
                  type={isPassShown3 ? "text" : "password"}
                  id="password3"
                  placeholder="Enter Your New Password"
                  className="py-3.5 px-10 border rounded-lg border-[#DEDEDE] text-xs tracking-wider outline-none focus:border-primary placeholder:tracking-wider"
                />
                <div className="icon-password absolute top-[46px] left-4 md:top-[50px]">
                  <img
                    src={getImageUrl("Password", "svg")}
                    alt="Password"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className={`absolute top-[46px] right-4 md:top-[50px]${
                    isPassShown3 ? " hidden" : " block"
                  } cursor-pointer`}
                  id="btnHiddenPassword"
                  onClick={showPassHandler3}
                >
                  <img
                    src={getImageUrl("EyeSlash", "svg")}
                    alt="EyeSlash"
                    className="w-full h-full"
                  />
                </div>
                <div
                  className={`absolute top-[45px] right-[15px] md:top-[49px]${
                    isPassShown3 ? " block" : " hidden"
                  } cursor-pointer`}
                  id="btn-show-password"
                  onClick={showPassHandler3}
                >
                  <img
                    src={getImageUrl("eye", "svg")}
                    alt="eye"
                    className="w-[18px] h-[18px]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="p-3 bg-primary text-light rounded-md text-sm hover:bg-blue-800 focus:ring"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Title>
      {openModal.isOpen && (
        <Modal modal={openModal} closeModal={setOpenModal} message={Message} />
      )}
    </>
  );
}

export default ResetPass;
