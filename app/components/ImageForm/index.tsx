import { Dispatch, SetStateAction, useEffect, useReducer } from "react";
import Image, { StaticImageData } from "next/image";

import roseIcon from "../../../public/images/rose.png";

interface Activity {
  id: string;
  name: string;
  checked: boolean;
  description: string;
  location: string;
  image?: StaticImageData | string;
}

type Action = {
  type: "select";
  id: string;
};

interface ImageFormProps {
  activityList: Activity[];
  rootStateDispatch: Dispatch<SetStateAction<Activity>>;
}

const ImageForm = ({ activityList, rootStateDispatch }: ImageFormProps) => {
  const activities: Activity[] = [...activityList];

  const reducer = (state: Activity[], action: Action): Activity[] => {
    switch (action.type) {
      case "select":
        return state.map((item) => ({
          ...item,
          checked: item.id === action.id, // Only the selected item is checked
        }));
      default:
        throw new Error("Unhandled action type");
    }
  };

  const [state, dispatch] = useReducer(reducer, activities);

  useEffect(() => {
    const selectedActivity: Activity | undefined = state.find(
      (item) => item.checked
    );

    if (selectedActivity) {
      rootStateDispatch(selectedActivity);
    }
  }, [state, rootStateDispatch]);

  return (
    <>
      {state.map((item) => (
        <div key={item.id} className={"column"}>
          <div
            onClick={() => dispatch({ type: "select", id: item.id })}
            className={(item.checked ? "selected" : "unselected") + " card"}
            style={{
              padding: "10px",
              margin: "5px",
              cursor: "pointer",
              border: item.checked ? "2px solid blue" : "1px solid gray",
              backgroundColor: item.checked ? "#e0f7fa" : "#fff",
              borderRadius: "5px",
            }}
          >
            <div className={"card-image"}>
              <figure className={"image is-4by3"}>
                {/*@ts-expect-error types issue*/}
                <Image src={item.image} alt={item.name} />
              </figure>
            </div>
            <div className={"card-content"}>
              <div className={"media"}>
                <div className={"media-left"}>
                  <figure className={"image is-48x48"}>
                    <Image src={roseIcon} alt={"Rose Icon"} />
                  </figure>
                </div>
                <div className={"media-content"}>
                  <p className={"title is-4"}>{item.name}</p>
                  <p className={"subtitle is-6"}>@{item.location}</p>
                </div>
              </div>

              <div className={"content"}>
                {item.description}
                <br />
                <time dateTime={"2025-02-14"}>01:43 PM - 14 Feb 2025</time>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { type Activity };
export default ImageForm;
