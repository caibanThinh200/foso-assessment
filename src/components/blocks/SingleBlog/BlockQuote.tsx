interface BlockQuoteProps {
  description: string;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ description }) => {
  return (
    <blockquote className="pl-5 p-3 border-l-2 border-green italic">
        {description}
    </blockquote>
  );
};

export default BlockQuote