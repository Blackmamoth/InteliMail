"use client"
import EmailCard from "@/components/EmailCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { usePathname } from 'next/navigation';
const Outlook = () => {
    const pathname = usePathname();

  return <div className="w-full min-h-screen flex-1">
  
  <MaxWidthWrapper>
  <div className="text-white font-semibold  pb-7 -mt-5"><div className="flex gap-x-2 items-center"><img className="rounded-full w-9 h-9" src="/outlook.webp"></img> <span className="text-3xl font-medium text-black dark:text-white">{pathname.slice(1,pathname.length)}</span> </div></div>
    <div className="flex flex-col gap-4 ">
      <EmailCard
        sender="Rahul Soni"
        subject="Let's participate in MumbaiHacks"
        body="  Hello team, I hope this email finds you well. I wanted to touch base regarding our ongoing project. We've made significant progress in the last week, and I'm excited to share some updates with you all. and I'm excited to share some updates with you all. and I'm excited to share some updates with you all. and I'm excited to share some updates with you all.
"
        date="22-10-2024"
        attachments={4}
      ></EmailCard>
      <EmailCard
        sender="Rahul Soni"
        subject="Let's participate in MumbaiHacks"
        body="  Hello team, I hope this email finds you well. I wanted to touch base regarding our ongoing project. We've made significant progress in the last week, and I'm excited to share some updates with you all.
"
        date="22-10-2024"
        attachments={4}
      ></EmailCard>
      <EmailCard
        sender="Rahul Soni"
        subject="Let's participate in MumbaiHacks"
        body="  Hello team, I hope this email finds you well. I wanted to touch base regarding our ongoing project. We've made significant progress in the last week, and I'm excited to share some updates with you all.
"
        date="22-10-2024"
        attachments={4}
      ></EmailCard>
    </div>
  </MaxWidthWrapper>
</div>;
};

export default Outlook;
