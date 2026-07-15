const SmartTextRenderer = ({
  text = "",
  className = "",
}) => {
  if (!text.trim()) return null;

  const lines = text.split("\n");

  const elements = [];

  let bulletItems = [];
  let numberedItems = [];

  const flushBullets = () => {
    if (!bulletItems.length) return;

    elements.push(
      <ul
        key={`ul-${elements.length}`}
        className="list-disc pl-6 my-4 space-y-2"
      >
        {bulletItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );

    bulletItems = [];
  };

  const flushNumbers = () => {
    if (!numberedItems.length) return;

    elements.push(
      <ol
        key={`ol-${elements.length}`}
        className="list-decimal pl-6 my-4 space-y-2"
      >
        {numberedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );

    numberedItems = [];
  };

  lines.forEach((line) => {
    const value = line.trim();

    if (!value) {
      flushBullets();
      flushNumbers();
      return;
    }

    // Bullet
    if (
      value.startsWith("- ") ||
      value.startsWith("• ")
    ) {
      flushNumbers();

      bulletItems.push(
        value.replace(/^[-•]\s*/, "")
      );

      return;
    }

    // Numbered
    if (/^\d+\./.test(value)) {
      flushBullets();

      numberedItems.push(
        value.replace(/^\d+\.\s*/, "")
      );

      return;
    }

    flushBullets();
    flushNumbers();

    elements.push(
      <p
        key={`p-${elements.length}`}
        className="mb-5 leading-8 text-slate-700"
      >
        {value}
      </p>
    );
  });

  flushBullets();
  flushNumbers();

  return (
    <div className={className}>
      {elements}
    </div>
  );
};

export default SmartTextRenderer;