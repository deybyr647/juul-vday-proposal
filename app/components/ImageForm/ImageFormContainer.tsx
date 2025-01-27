"use client";

import ImageForm, { Activity } from "./index";
import { useEffect, useState } from "react";

const ImageFormContainer = () => {
  const FoodData: Activity[] = [
    { id: "1", description: "Dinner", checked: false },
    { id: "2", description: "Breakfast", checked: false },
    { id: "3", description: "Sweet Treat", checked: false },
  ];

  const ActivityData: Activity[] = [
    { id: "1", description: "Winter Hike", checked: false },
    { id: "2", description: "Sleepover", checked: false },
    { id: "3", description: "Museum/Exhibit Visit", checked: false },
  ];

  const [foodChoice, setFoodChoice] = useState<Activity>({
    checked: false,
    description: "",
    id: "",
  });
  const [activityChoice, setActivityChoice] = useState<Activity>({
    checked: false,
    description: "",
    id: "",
  });

  useEffect(() => {
    console.log("Choices have changed...");
    console.log([foodChoice, activityChoice]);
  }, [foodChoice, activityChoice]);

  return (
    <section className={"section"}>
      <ImageForm activityList={FoodData} rootStateDispatch={setFoodChoice} />

      <ImageForm
        activityList={ActivityData}
        rootStateDispatch={setActivityChoice}
      />
    </section>
  );
};

export default ImageFormContainer;
