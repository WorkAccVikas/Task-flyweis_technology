import React, { useMemo } from "react";
import { AiFillDelete } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi";
import { formatPhoneNumber } from "../utility/utlityFunction";
import Badge from "./Badge";

function LawyerRow({ item, openModal }) {
  // console.log("LawyerRow Re-render");

  const memoizedFormatPhoneNumber = useMemo(() => formatPhoneNumber, []);

  return (
    <>
      <tr>
        <td>
          <Badge />
        </td>
        <td className="flex txt-style">
          <div>
            <img
              src={item.image}
              alt="unknown"
              className="image"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping

                currentTarget.src =
                  "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";
              }}
            />
          </div>
          <span>{item.fullName}</span>
        </td>
        <td>{item.email}</td>
        <td>{memoizedFormatPhoneNumber(item.phone)}</td>
        <td>{item.experiance || 0}</td>
        <td className="d-flex">
          <div className="icon d-flex">
            <HiOutlinePencil className="icon-size" />
          </div>
          <div className="icon d-flex" onClick={() => openModal(item.email)}>
            <AiFillDelete className="icon-size" />
          </div>
        </td>
      </tr>
    </>
  );
}

// Use React.memo with a custom areEqual function
const areEqual = (prevProps, nextProps) => {
  // Only re-render if the 'item' prop changes
  return prevProps.item === nextProps.item;
};

const MemoizedLawyerRow = React.memo(LawyerRow, areEqual);

export default MemoizedLawyerRow;
