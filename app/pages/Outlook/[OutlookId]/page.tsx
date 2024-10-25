"use client";
import CompleteEmail from "@/components/CompleteEmail";
import { usePathname } from "next/navigation";
import React from "react";

const DetailEmail = ({ params }: { params: any }) => {
  return (
    <div className="text-white font-bold w-full">
      <CompleteEmail
        sender="Rahul Soni"
        email="john.doe@example.com"
        subject="Application for Software Developer Position"
        date="October 26, 2023 at 2:30 PM"
        body="Dear Hiring Manager, 
          
        I hope this email finds you well. I am writing to express my strong interest in the Software Developer position at your esteemed company. With my background in computer science and extensive experience in web development, I believe I would be a valuable addition to your team.
  
  Over the past five years, I have worked on various projects utilizing technologies such as React, Node.js, and Python. I have a proven track record of delivering high-quality code and collaborating effectively in team environments. My passion for staying updated with the latest industry trends and my ability to quickly adapt to new technologies make me an ideal candidate f"
      ></CompleteEmail>
    </div>
  );
};

export default DetailEmail;