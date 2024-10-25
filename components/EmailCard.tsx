"use client"
import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Paperclip, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import path from 'path'
import { useRouter } from 'next/router';

interface EmailCardProps {
  sender: string;
  subject: string;
  body: string;
  date: string;
  attachments: number;
}

export default function EmailCard({ 
  sender = "John Doe", 
  subject = "Important Project Update", 
  body = "Hello team, I hope this email finds you well. I wanted to touch base regarding our ongoing project. We've made significant progress in the last week, and I'm excited to share some updates with you all.", 
  date = "2023-10-25 14:30", 
  attachments = 2 
}: EmailCardProps) {
  const [expanded, setExpanded] = useState(false)

  const summarize = () => {
    // This is where you'd implement the summarization logic
    console.log("Summarize functionality to be implemented")
  }
  

  return (
    <Link href={`/pages/Gmail/2`} className='w-full bg-gradient-to-r from-red-300 via-orange-400  to-gray-400 dark:to-white p-[0.5px] rounded-xl'>
    <Card className="w-full  overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${sender}`} alt={sender} />
              <AvatarFallback>{sender.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-medium">{sender}</h3>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {attachments > 0 && (
              <Badge variant="secondary" className="flex items-center space-x-1">
                <Paperclip className="w-4 h-4" />
                <span>{attachments}</span>
              </Badge>
            )}
          
          </div>
        </div>
        <h4 className="text-lg font-semibold mb-2">Subject : {subject}</h4>
        <p className={`text-muted-foreground ${expanded ? '' : 'line-clamp-3 leading-tight text-xs'}`}>{body}</p>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4">
        <Button onClick={summarize} className="ml-auto bg-gradient-to-r from-red-300 via-orange-400  to-gray-400 dark:to-white text-black">Summarize</Button>
      </CardFooter>
    </Card>
    </Link>
  )
}
