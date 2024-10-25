"use client";
import React, { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Mail, BrainCircuit } from "lucide-react";

interface EmailProps {
  sender: string;
  email: string;
  subject: string;
  date: string;
  body: string;
}

const CompleteEmail = ({ sender, email, subject, date, body }: EmailProps) => {
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({
    summarize: false,
    reply: false,
    resume: false,
  });
  const [summary,setsummary] = useState<string>("");
  const Replyref = useRef(null);

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAction = (action: "summarize" | "reply" | "resume") => {
    setIsLoading((prev) => ({ ...prev, [action]: true }));
    // Simulate API call
    setsummary("Somethinbig Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor placeat officia sequi consequuntur repudiandae tenetur architecto dolorum obcaecati enim nemo distinctio soluta illum quisquam nesciunt tempore, doloribus inventore quo assumenda.")
    setTimeout(() => {
      setIsLoading((prev) => ({ ...prev, [action]: false }));
        scrollToSection("summarize")
      console.log(`${action} action completed`);
      // Here you would typically handle the result of the action
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full ">
      <MaxWidthWrapper>
        <div className="container w-full xl:mx-auto p-4 ">
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between space-x-5  ">
                <div className="flex gap-x-5 items-center">

                
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${sender}`}
                    alt={sender}
                  />
                  <AvatarFallback>
                    {sender
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl">{sender}</CardTitle>
                  <p className="text-sm text-muted-foreground">{email}</p>
                </div>
                </div>
                <CardFooter className="flex gap-x-3 justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {handleAction("summarize") }}

                    disabled={isLoading.summarize}
                  >
                    {isLoading.summarize ? (
                      <BrainCircuit className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <BrainCircuit className="mr-2 h-4 w-4" />
                    )}
                    Summarize
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleAction("reply")}
                    disabled={isLoading.reply}
                  >
                    {isLoading.reply ? (
                      <Mail className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Mail className="mr-2 h-4 w-4" />
                    )}
                    Generate Reply
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleAction("resume")}
                    disabled={isLoading.resume}
                  >
                    {isLoading.resume ? (
                      <FileText className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <FileText className="mr-2 h-4 w-4" />
                    )}
                    Check Attachments
                  </Button>
                </CardFooter>
              </div>
            </CardHeader>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">
                <span className="text-3xl font-bold ">Subject</span> : {subject}
              </h2>
              <p className="text-sm font-normal text-muted-foreground mb-4">{date}</p>
              <Separator className="my-4" />
              <ScrollArea className="h-[300px] rounded-md  p-4">
                <div className="whitespace-pre-wrap text-md font-normal">{body}</div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
        <section id="summarize">{summary}</section>
      </MaxWidthWrapper>
    </div>
  );
};

export default CompleteEmail;
