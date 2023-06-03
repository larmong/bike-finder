import { CbWrapper, ListItem, PaymentList } from "./PaymentInfo.style";
import Checkbox02 from "../../../../commons/inputs/checkbox/checkbox02/Checkbox02.contaienr";

export default function PaymentInfo(props) {
  const CbList = [
    {
      name: "payment",
      CheckboxCont:
        "추가요금자동결제, 환불규정, 이용약관에 동의하며 결제를 진행합니다.",
      CheckboxCont2: "",
    },
    {
      name: "payment",
      CheckboxCont:
        "만 13세 미만의 미성년자가 서비스를 이용하는 경우, 사고 발생 시 보험 적용을 받을 수 없는 등의 불이익을 받으실 수 있습니다.",
      CheckboxCont2:
        "(만 15세 미만의 경우 상법 제732조에 의거하여 사망 보험 적용 불가)",
    },
  ];
  return (
    <>
      <PaymentList>
        <ListItem>
          <p>이용권</p>
          <span>{props.ticketPrice}원</span>
        </ListItem>
        <ListItem>
          <p>마일리지</p>
          <span>{props.mileage === null ? 0 : props.mileage}원</span>
        </ListItem>
      </PaymentList>
      <CbWrapper>
        <Checkbox02 checkboxData={CbList} />
      </CbWrapper>
    </>
  );
}
