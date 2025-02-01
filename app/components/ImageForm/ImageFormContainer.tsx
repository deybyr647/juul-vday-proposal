"use client";

import ImageForm, { Activity } from "./index";
import { useEffect, useState } from "react";

// Image Imports
import breakfastImage from "../../../public/images/activities/breakfast.jpg";
import dinnerImage from "../../../public/images/activities/dinner.jpg";
import sweetTreatImage from "../../../public/images/activities/sweet_treat.jpg";
import exhibitImage from "../../../public/images/activities/exhibit.jpg";
import sleepoverImage from "../../../public/images/activities/sleepover.jpg";
import winterHikeImage from "../../../public/images/activities/winter_hike.jpg";

const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec\n" +
  "                iaculis mauris.";

const locationText = "place";

const ImageFormContainer = () => {
  const FoodData: Activity[] = [
    {
      id: "1",
      name: "Dinner",
      checked: false,
      image: dinnerImage,
      description: loremText,
      location: locationText,
    },
    {
      id: "2",
      name: "Breakfast",
      checked: false,
      image: breakfastImage,
      description: loremText,
      location: locationText,
    },
    {
      id: "3",
      name: "Sweet Treat",
      checked: false,
      image: sweetTreatImage,
      description: loremText,
      location: locationText,
    },
  ];

  const ActivityData: Activity[] = [
    {
      id: "1",
      name: "Winter Hike",
      checked: false,
      image: winterHikeImage,
      description: "",
      location: locationText,
    },
    {
      id: "2",
      name: "Sleepover",
      checked: false,
      image: sleepoverImage,
      description: "",
      location: locationText,
    },
    {
      id: "3",
      name: "Exhibit Visit",
      checked: false,
      image: exhibitImage,
      description: "",
      location: locationText,
    },
  ];

  const [foodChoice, setFoodChoice] = useState<Activity>({
    checked: false,
    name: "",
    id: "",
    description: "",
    location: "",
  });

  const [activityChoice, setActivityChoice] = useState<Activity>({
    checked: false,
    name: "",
    id: "",
    description: "",
    location: "",
  });

  useEffect(() => {
    console.log("Choices have changed...");
    console.log([foodChoice, activityChoice]);
  }, [foodChoice, activityChoice]);

  return (
    <section className={"section"}>
      <div className={"columns"}>
        <ImageForm activityList={FoodData} rootStateDispatch={setFoodChoice} />
      </div>

      <div className={"columns"}>
        <ImageForm
          activityList={ActivityData}
          rootStateDispatch={setActivityChoice}
        />
      </div>
    </section>
  );
};

export default ImageFormContainer;
