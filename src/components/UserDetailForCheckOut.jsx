import React, { useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const UserDetailForCheckOut = () => {
  const { user, isLoaded } = useUser();
  const [editable, setEditable] = useState(true);

  const {paymentType, setPaymentType} = useContext(AppContext);

  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const savedUserDetail =
      JSON.parse(localStorage.getItem("savedDetail")) || {};

    setUserDetail({
      name: user?.fullName || "",
      email: user?.primaryEmailAddress?.emailAddress || "",
      phone: savedUserDetail?.phone || "",
      address: savedUserDetail?.address || "",
      city: savedUserDetail?.city || "",
      state: savedUserDetail?.state || "",
      pincode: savedUserDetail?.pincode || "",
    });

    if (savedUserDetail.phone) {
      setEditable(false);
    } else {
      setEditable(true);
    }
  }, [user, isLoaded]);

  const handelChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const saveAllDetails = () => {
    if (
    !userDetail.phone.trim() ||
    !userDetail.address.trim() ||
    !userDetail.city.trim() ||
    !userDetail.state.trim() ||
    !userDetail.pincode.trim()
  ) {
    toast.error("Please fill all details.");
    return;
  }

  if (userDetail.phone.length !== 10) {
    toast.error("Phone number must be 10 digits.");
    return;
  }

  if (userDetail.pincode.length !== 6) {
    toast,error("Pincode must be 6 digits.");
    return;
  }

    localStorage.setItem("savedDetail", JSON.stringify(userDetail));
    toast.info("Address Saved Succesfully!");
    setEditable(false);
  };

  const editAllDetails = () => {
    setEditable(true);
  };



  return (
    <div className="flex flex-wrap w-full md:w-auto lg:w-120 bg-white shadow-lg border border-gray-200 text-green-800 p-1 lg:p-3 font-bold rounded-2xl justify-center items-center h-auto">
      <p className="font-bold text-xl lg:text-2xl mb-1 lg:mb-3">User Detail</p>
      <div className="flex flex-col w-full h-auto text-emerald-800 lg:gap-3 gap-1">
        <input
          name="name"
          type="text"
          value={userDetail.name}
          readOnly
          className={`border rounded-lg p-1 lg:p-2 outline-none text-sm ${!editable ? "bg-gray-200" : "bg-white"} `}
        />

        <input
          name="email"
          type="email"
          value={userDetail.email}
          readOnly
          className={`border rounded-lg p-1 lg:p-2 outline-none text-sm  ${!editable ? "bg-gray-200" : "bg-white"} `}
        />
        <input
          name="phone"
          type="number"
          onChange={(e) => {
            handelChange(e);
          }}
          maxLength={10}
          readOnly={!editable}
          value={userDetail.phone}
          placeholder="Phone Number"
          className={`border rounded-lg p-1 lg:p-2 outline-none text-sm  ${!editable ? "bg-gray-200" : "bg-white"} `}
        />
        <textarea
          name="address"
          type="address"
          value={userDetail.address}
          onChange={(e) => {
            handelChange(e);
          }}
          readOnly={!editable}
          placeholder="Full Address"
          className={`border rounded-lg p-1 lg:p-2 outline-none text-sm  h-18 lg:h-24 ${!editable ? "bg-gray-200" : "bg-white"} `}
        />
        <input
          name="city"
          value={userDetail.city}
          onChange={(e) => {
            handelChange(e);
          }}
          readOnly={!editable}
          placeholder="City"
          className={`border rounded-lg p-1 lg:p-2 outline-none text-sm  ${!editable ? "bg-gray-200" : "bg-white"} `}
        />
        <input
          name="state"
          value={userDetail.state}
          onChange={(e) => {
            handelChange(e);
          }}
          readOnly={!editable}
          placeholder="State"
          className={`border rounded-lg p-1 lg:p-2 outline-none text-sm  ${!editable ? "bg-gray-200" : "bg-white"} `}
        />
        <input
          name="pincode"
          value={userDetail.pincode}
          onChange={(e) => {
            handelChange(e);
          }}
          maxLength={6}
          readOnly={!editable}
          type="number"
          placeholder="Pincode"
          className={`border rounded-lg p-1 lg:p-2 outline-none text-sm  ${!editable ? "bg-gray-200" : "bg-white"} `}
        />
        {editable ? (
          <button
            onClick={saveAllDetails}
            className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl py-2 lg:py-3 text-xl lg:text-lg font-semibold transition"
          >
            Save Details
          </button>
        ) : (
          <button
            onClick={editAllDetails}
            className="bg-red-700 hover:bg-red-800 text-white rounded-xl py-2 lg:py-3 text-xl lg:text-lg font-semibold transition"
          >
            Edit Details
          </button>
        )}
      </div>
    </div>
  );
};

export default UserDetailForCheckOut;
