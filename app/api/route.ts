import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const API_KEY = process.env.RESEND_API_KEY;

const resend = new Resend(API_KEY);

interface valentinesDayChoices {
  food: {
    name: string;
    description: string;
    location: string;
  };

  activity: {
    name: string;
    description: string;
    location: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: valentinesDayChoices = await request.json(); // Properly await parsing JSON
    console.log("Received Data:", body); // Log the parsed data

    // Send the data to Resend
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "deybyr647@gmail.com",
      subject: `Juul's Valentines Day Choices`,
      html: `
        <p>
          Hi Deyby,
          <br>
          <br>
          Juul would like to do a <strong>${body.activity.name}</strong> at <strong>${body.activity.location}</strong>
          <br>
          <br>
          Juul would also like to get <strong>${body.food.name}</strong> at <strong>${body.food.location}</strong>
          <br>
          <br>
          Sent From juul-vday-proposal
        </p>`,
    });

    return NextResponse.json({ status: "success", ...body });
  } catch (error) {
    console.error("Error parsing request body:", error);
    return NextResponse.json(
      { status: "error", message: "Invalid JSON" },
      { status: 400 }
    );
  }
}
