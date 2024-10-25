import { FlipWords } from '@/components/ui/flip-words'
import { HoverBorderGradient } from '@/components/ui/HoverBorderGradient'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className="w-full py-8 gap-6 flex flex-col items-center justify-center">
    
    <HoverBorderGradient className="w-[400px] dark:bg-black bg-white">
      <input
        className="dark:bg-black bg-white focus:outline-none relative p-2 px-5 w-full "
        placeholder="This is it."
      ></input>
    </HoverBorderGradient>
    {/* </div> */}
    <FlipWords
      words={[
        "Summarize this email",
        "Review the Emails and give me a summary",
        "Find an email with given context",
        "Help me locate this email with some context",
      ]}
      duration={3000}
      className="dark:text-white/70 text-black/70 text-sm font-thin "
    ></FlipWords>
    {children}
  </div>
  )
}

export default layout
