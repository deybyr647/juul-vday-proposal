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
import styles from "./ImageForm.module.scss";
import Link from "next/link";

const ImageFormContainer = () => {
  const FoodData: Activity[] = [
    {
      id: "1",
      name: "Dinner",
      checked: false,
      image: dinnerImage,
      description: "Let's go out for Italian at Graziella's in Brooklyn!",
      location: "Graziella's",
    },
    {
      id: "2",
      name: "Breakfast",
      checked: false,
      image: breakfastImage,
      description:
        "How about some fancy breakfast at Maison Pickle in Manhattan?",
      location: "Maison Pickle",
    },
    {
      id: "3",
      name: "Sweet Treat",
      checked: false,
      image: sweetTreatImage,
      description: "Sweet Crepes, S'mores, or Frozen Yogurt. You name it!",
      location: "To Be Decided...By You!",
    },
  ];

  const ActivityData: Activity[] = [
    {
      id: "1",
      name: "Winter Hike",
      checked: false,
      image: winterHikeImage,
      description:
        "How about a hike at Rockwood Hall & Pocantico River upstate? A million pictures of us included.",
      location: "Rockwood Hall & Pocantico River",
    },
    {
      id: "2",
      name: "Sleepover",
      checked: false,
      image: sleepoverImage,
      description:
        "The classic. Let's cook a meal together, stay warm and watch Severance! Or some brainrot...?",
      location: "Your Place",
    },
    {
      id: "3",
      name: "Exhibit Visit",
      checked: false,
      image: exhibitImage,
      description:
        "Let's immerse ourselves in a museum or pop up experience like the Color Factory!",
      location: "Color Factory",
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

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          food: {
            name: foodChoice.name,
            description: foodChoice.description,
            location: foodChoice.location,
          },
          activity: {
            name: activityChoice.name,
            description: activityChoice.description,
            location: activityChoice.location,
          },
        }),
      });

      const data = await response.json(); // Ensure the response is awaited
      console.log(data);

      console.log("Submitting Choices...");
      console.log([foodChoice, activityChoice]);
    } catch (error) {
      console.error("Error submitting choices:", error);
    }
  };

  useEffect(() => {
    console.log("Choices have changed...");
    console.log([foodChoice, activityChoice]);
  }, [foodChoice, activityChoice]);

  return (
    <section className={"section"}>
      <h1 className={`title is-3 has-text-centered`}>Select The Activity!</h1>
      <div className={"columns"}>
        <ImageForm
          activityList={ActivityData}
          rootStateDispatch={setActivityChoice}
        />
      </div>

      <h1 className={`title is-3 has-text-centered`}>Select The Eats!</h1>
      <div className={"columns"}>
        <ImageForm activityList={FoodData} rootStateDispatch={setFoodChoice} />
      </div>

      <div
        className={`column is-flex is-justify-content-space-evenly paddingless ${styles["button-container"]}`}
      >
        <Link
          href={"/confirmed"}
          className={"button is-primary"}
          onClick={handleSubmit}
        >
          Submit Choices
        </Link>
      </div>
    </section>
  );
};

export default ImageFormContainer;
