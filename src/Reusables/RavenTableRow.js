import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import editIcon from "../img/edit-icon.svg";
import actionIcon from "../img/action-icon.svg";
import RavenDropDown from "./RavenDropDown";

const RavenTableRow = ({
  one,
  oneObj,
  two,
  twoObj,
  three,
  threeObj,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  loading,
  onRowClick,
  action,
  onEdit,
  dontShowEdit,
  dontShowAction,
  showActionBox,
  indexNo,
  rowNo,
  setIndexNo,
  editText,
  deleteText,
  downloadText,
  onDelete,
  onDownload,
}) => {
  const [showDropAction, setShowDropAction] = useState(false);
  return (
    <tr
      style={{
        zIndex: showDropAction && rowNo === indexNo ? "3" : "1",
      }}
      className="table-row"
    >
      {one && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{one}</span>
          )}
        </td>
      )}
      {oneObj && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <div className="img-text">
              {" "}
              <Skeleton
                width={30}
                height={30}
                circle
                style={{ marginRight: "1rem" }}
              />{" "}
              <Skeleton width={150} height={17} />
            </div>
          ) : (
            <div className="img-text">
              <figure className="img-box">
                <img src={oneObj?.img} alt="" className="img" />
              </figure>
              <span>{oneObj?.label}</span>
            </div>
          )}
        </td>
      )}
      {two && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{two}</span>
          )}
        </td>
      )}
      {twoObj && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <div className="img-text">
              {" "}
              <Skeleton
                width={30}
                height={30}
                circle
                style={{ marginRight: "1rem" }}
              />{" "}
              <Skeleton width={`70%`} height={17} />
            </div>
          ) : (
            <div className="img-text">
              <figure className="img-box">
                <img src={twoObj?.img} alt="" className="img" />
              </figure>
              <span>{twoObj?.label}</span>
            </div>
          )}
        </td>
      )}
      {three && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{three}</span>
          )}
        </td>
      )}
      {threeObj && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <div className="img-text">
              {" "}
              <Skeleton
                width={30}
                height={30}
                circle
                style={{ marginRight: "1rem" }}
              />{" "}
              <Skeleton width={`70%`} height={17} />
            </div>
          ) : (
            <div className="img-text">
              <figure className="img-box">
                <img src={threeObj?.img} alt="" className="img" />
              </figure>
              <span>{threeObj?.label}</span>
            </div>
          )}
        </td>
      )}
      {four && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{four}</span>
          )}
        </td>
      )}
      {five && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{five}</span>
          )}
        </td>
      )}
      {six && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{six}</span>
          )}
        </td>
      )}
      {seven && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{seven}</span>
          )}
        </td>
      )}
      {eight && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{eight}</span>
          )}
        </td>
      )}
      {nine && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{nine}</span>
          )}
        </td>
      )}
      {ten && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{ten}</span>
          )}
        </td>
      )}
      {eleven && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{eleven}</span>
          )}
        </td>
      )}
      {twelve && (
        <td
          onClick={() => {
            onRowClick && onRowClick();
            setShowDropAction(false);
          }}
          className="table-data"
        >
          {loading ? (
            <Skeleton width={`70%`} height={17} />
          ) : (
            <span>{twelve}</span>
          )}
        </td>
      )}
      {action && (
        <td className="table-data">
          <div className="action-box">
            {" "}
            {!dontShowEdit && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <figure onClick={onEdit} className="img-box">
                    <img src={editIcon} alt="" className="img" />
                  </figure>
                )}
              </>
            )}
            {!dontShowAction && (
              <>
                {loading ? (
                  <Skeleton circle width={30} height={30} />
                ) : (
                  <div className="action-wrap">
                    <figure
                      onClick={() => {
                        setIndexNo();
                        indexNo === rowNo
                          ? setShowDropAction(!showDropAction)
                          : setShowDropAction(true);
                      }}
                      className="img-box "
                    >
                      <img src={actionIcon} alt="" className="img" />
                    </figure>
                    {/* action drop start */}
                    <div
                      className={`drop-box ${
                        showDropAction && indexNo === rowNo && "drop-box-show"
                      }`}
                    >
                      {editText || deleteText || downloadText ? (
                        <RavenDropDown
                          type="edit-delete"
                          editText={editText}
                          deleteText={deleteText}
                          downloadText={downloadText}
                          onEdit={onEdit}
                          onDelete={onDelete}
                          onDownload={onDownload}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    {/* action drop end */}
                  </div>
                )}
              </>
            )}
          </div>
        </td>
      )}
    </tr>
  );
};

export default RavenTableRow;
