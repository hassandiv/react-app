import { useState } from "react";

const Folders = () => {
  const files = {
    children: [
      {
        name: "node_modules",
        children: [
          {
            name: "express",
            children: [
              {
                name: "UI",
                children: [
                  {
                    name: "UI Tools Kit",
                    children: [
                      {
                        name: "Parts",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "jest",
            children: [
              {
                name: "UI",
              },
            ],
          },
        ],
      },
      {
        name: "package.json",
      },
      {
        name: "README.md",
      },
    ],
  };

  const NestedDirectories = ({ name, children }) => {
    const [isExpanded, setIsExpnaded] = useState(false);
    return (
      <div>
        {children ? (
          <button onClick={() => setIsExpnaded(!isExpanded)}>
            {"+ " + name}
          </button>
        ) : (
          name
        )}
        {isExpanded &&
          children?.map((entry, idx) => (
            <NestedDirectories {...entry} key={idx} />
          ))}
      </div>
    );
  };

  //{...entry} spreading entry over means we get name, children ...etc

  return (
    <div className="nested-directory">
      {files.children.map((entry, idx) => (
        <NestedDirectories {...entry} key={idx} />
      ))}
    </div>
  );
};
export default Folders;
