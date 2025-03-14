import { QuoteMark } from "@/components/ui/Icon";

interface IQuoteProps {
  description: string;
}

const Quote: React.FC<IQuoteProps> = ({ description }) => {
  return (
    <div className="relative pl-16">
      <div className="absolute inset-0 -top-5">
        {" "}
        <QuoteMark />
      </div>
      <p className="italic font-medium text-[20px] text-charcoal float-left inline">
        {description}
      </p>
    </div>
  );
};

export default Quote;
