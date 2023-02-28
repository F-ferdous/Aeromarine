import React from "react";
import Dropdown from "../components/Dropdown";
import TextInput from "../components/TextInput";

const SeaEntry = () => {
  return (
    <div className="pt-20 md:pt-2 xl:pt-2">
      <div className="ml-auto mr-2 mt-2 mb-2">
        <h4 className="w-full flex justify-center font-semibold  p-3 bg-gray-300 rounded-lg hover:bg-gray-400">
          Sea Invoice Entry
        </h4>
      </div>
      <div id="MainInfo">
        <div>
          <p className="font-bold ml-2 pt-2">Main Information</p>
          <hr className="border border-[#9e0734] opacity-50" />
        </div>
        <div className="w-full flex justify-between ml-auto pr-3 pl-5 pt-3">
          <div>
            <p className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              USER NAME : <span className="font-normal">Fahim Ferdous</span>
            </p>
            <p className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Invoice No : <span className="font-normal"></span>
            </p>
          </div>
          <div>
            <p className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              user Information :{" "}
              <span className="font-normal">Uttara, Dhaka</span>
            </p>
            <p className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Date : <span className="font-normal">28/2/2023</span>
            </p>
          </div>
        </div>
        <hr />

        <form className="w-full pt-3 pb-3">
          <div className="flex flex-wrap justify-between items-center ml-auto pl-10 pr-5">
            <Dropdown label="Invoice Type" />
            <Dropdown label="Buying Currency" />

            <TextInput type="text" label="Buying Currency Rate" />
            <TextInput type="text" label="Buying Currency Amount" />
            <Dropdown label="Selling Currency" />
            <TextInput type="text" label="Selling Currency Rate" />
            <TextInput type="text" label="Com.Invoice.No" />
            <Dropdown label="TO" />
            <TextInput type="text" label="Shipper Name" />
            <TextInput type="text" label="Consignee/Notify" />
            <TextInput type="text" label="Ch.Weight(kg.)" />
            <Dropdown label="HBL No" />
            <TextInput type="text" label="MBL No" />
            <Dropdown label="ETD" />
            <TextInput type="text" label="FDR Vessel" />
            <TextInput type="text" label="VOY No" />
            <Dropdown label="POL" />
            <TextInput type="text" label="ETA" />
            <Dropdown label="Destination" />
            <TextInput type="text" label="Payment Mode" />
            <Dropdown label="Bank Name" />
            <TextInput type="text" label="Bank Address" />
            <TextInput type="text" label="L/C No" />
            <TextInput type="text" label="TUES" />
            <Dropdown label="Logistics Agent" />
            <TextInput type="text" label="Job No" />
            <Dropdown label="Job Status" />
            <Dropdown label="TOS" />
            <TextInput type="text" label="Sales Person" />
            <TextInput type="text" label="Exp No" />
            <TextInput type="text" label="Mother Vessel" />
            <TextInput type="text" label="Proof of Delivery" />
            <TextInput type="text" label="Shipping Lines" />

            <button
              type="submit"
              className="flex text-md ml-2 p-2 pr-5 pl-5 border text-white border-[#FF5C8E] bg-[#FF5C8E]  rounded-full hover:bg-white hover:text-black"
            >
              <span className="capitalize">Save</span>
            </button>
          </div>
        </form>
        <hr className=" ml-10 mr-5" />
      </div>
      <div id="DetailsInfo">
        <div>
          <p className="font-bold ml-2 pt-2">Details Information</p>
          <hr className="border border-[#9e0734] opacity-50" />
        </div>
        <form className="w-full pt-3 pb-3">
          <div className="flex flex-wrap justify-between items-center ml-auto pl-10 pr-5">
            <Dropdown label="Description" />
            <TextInput type="text" label="Container No" />
            <Dropdown label="Container Size" />
            <TextInput type="text" label="Container QTY" />
            <Dropdown label="Currency" />
            <TextInput label="Currency Rate" type="text" />
            <TextInput label="USD" type="text" />
            <TextInput label="Total USD" type="text" />
            <TextInput label="BDT" type="text" />
            <button
              type="submit"
              className="flex text-md ml-2 p-2 pr-5 pl-5 border text-white border-[#FF5C8E] bg-[#FF5C8E]  rounded-full hover:bg-white hover:text-black"
            >
              <span className="capitalize">Add</span>
            </button>
          </div>
        </form>
        <hr className=" ml-10 mr-5 border border-[#FF5C8E] opacity-50" />
        <div className="w-full pt-3 pb-3 pl-10 pr-5 relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th>Description</th>
                <th>Container No</th>
                <th>Cotainer Size</th>
                <th>Container Qty</th>
                <th>USD</th>
                <th>Total USD</th>
                <th>BDT Amount</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SeaEntry;
