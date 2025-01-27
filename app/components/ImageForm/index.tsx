import { Dispatch, SetStateAction, useEffect, useReducer } from "react";

interface Activity {
  id: string;
  description: string;
  checked: boolean;
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
        <div
          key={item.id}
          onClick={() => dispatch({ type: "select", id: item.id })}
          className={item.checked ? "selected" : "unselected"}
          style={{
            padding: "10px",
            margin: "5px",
            cursor: "pointer",
            border: item.checked ? "2px solid blue" : "1px solid gray",
            backgroundColor: item.checked ? "#e0f7fa" : "#fff",
            borderRadius: "5px",
          }}
        >
          {item.description}
        </div>
      ))}
    </>
  );
};

export { type Activity };
export default ImageForm;
