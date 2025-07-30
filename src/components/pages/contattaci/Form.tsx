import { useEffect } from "react";

export const Form = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "535px" }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/Tq2uRU4iN3ypprqcQHpi"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-Tq2uRU4iN3ypprqcQHpi"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead Qualificazione"
        data-height="535"
        data-layout-iframe-id="inline-Tq2uRU4iN3ypprqcQHpi"
        data-form-id="Tq2uRU4iN3ypprqcQHpi"
        title="Lead Qualificazione"
      ></iframe>
    </div>
  );
};
