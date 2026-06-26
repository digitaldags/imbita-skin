import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatsIncluded from "@/components/WhatsIncluded";
import Pricing from "@/components/Pricing";
import InquiryForm from "@/components/InquiryForm";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HowItWorks />
      <WhatsIncluded />
      <Pricing />
      <InquiryForm />
    </>
  );
}
