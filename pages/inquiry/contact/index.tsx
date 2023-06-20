import Inquiry from "../index";
import { LoginCheck } from "../../../src/components/commons/hocs/loginCheck";

function ContactPage() {
  return <Inquiry pathname="contact" />;
}

export default LoginCheck(ContactPage);
