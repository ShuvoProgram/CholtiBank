import { useEffect, useRef } from "react";
import { WidgetInstance } from "friendly-challenge";
import { useTheme } from "next-themes";

const FriendlyCaptcha = ({ setCaptchaCode }: { setCaptchaCode: any }) => {
  const { resolvedTheme } = useTheme();
  const container = useRef();
  const widget = useRef();

  const doneCallback = (solution: any) => {
    console.log("Captcha was solved. The form can be submitted.");
    setCaptchaCode(solution);
  };

  const errorCallback = (err: any) => {
    console.log("There was an error when trying to solve the Captcha.");
    console.log(err);
  };

  useEffect(() => {
    if (!widget.current && container.current) {
      //@ts-expect-error
      widget.current = new WidgetInstance(container.current, {
        startMode: "none",
        doneCallback: doneCallback,
        errorCallback: errorCallback,
      });
    }

    return () => {
      //@ts-expect-error
      if (widget.current != undefined) widget.current.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container]);

  return (
    <div
      //@ts-expect-error
      ref={container}
      className={`frc-captcha  max-w-full ${resolvedTheme}`}
      data-sitekey={process.env.NEXT_PUBLIC_FRIENDLY_CAPTCHA}
    />
  );
};

export default FriendlyCaptcha;
