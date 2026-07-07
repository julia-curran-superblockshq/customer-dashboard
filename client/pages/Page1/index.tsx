import { useState, useCallback } from "react";
import { toast } from "sonner";

export default function Page1Component() {
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback(() => {
    setClicked(true);
    toast.success("Button clicked!");
    setTimeout(() => setClicked(false), 2000);
  }, []);

  return (
    <div
      className="min-h-svh overflow-auto flex items-center justify-center"
      style={{ backgroundColor: "#FAFAFA", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="text-center flex flex-col items-center gap-6">
        <h1
          className="font-extrabold"
          style={{
            fontSize: "48px",
            color: "#111111",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Welcome
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#6B7280",
            lineHeight: 1.6,
            maxWidth: "400px",
          }}
        >
          Your application is ready. Click the button below to get started.
        </p>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#0D4029",
            color: "#FFFFFF",
            borderRadius: "8px",
            padding: "10px 24px",
            fontWeight: 600,
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.15s ease",
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#145233")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0D4029")
          }
        >
          {clicked ? "Clicked!" : "Get Started"}
        </button>
      </div>
    </div>
  );
}
