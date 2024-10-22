import emailjs from "@emailjs/browser";
import swal from "sweetalert";
export default function useSendMail(fromName, handleLoading, message, usedFor) {
  emailjs
    .send(
      "service_0aapyaj",
      "template_026l9h3",
      {
        from_name: fromName,
        to_name: "Team",
        message: message,
      },
      {
        publicKey: "YcW4kCUtiGl5rv89i",
      }
    )
    .then(
      () => {
        // window.alert("Mail Sent Successfully.");
        handleLoading();
        if (usedFor != "priceCalculator")
          swal("Email Sent Successfully", "", "success");
      },
      (error) => {
        handleLoading();
        window.alert("Failed to sent mail.");
      }
    );
}
