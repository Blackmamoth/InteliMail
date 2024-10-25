"use client"
import EmailCard from "@/components/EmailCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import { usePathname } from 'next/navigation';
const Zoho = () => {
    const pathname = usePathname();
   
  return <div className="w-full min-h-screen flex-1">
  
  <MaxWidthWrapper>
<div className="text-white font-semibold">You are Previewing : {pathname.slice(1,pathname.length)}</div>
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

export default Zoho;

