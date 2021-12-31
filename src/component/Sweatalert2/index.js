import Swal from "sweetalert2";

const sweatalert = (props) => {
  Swal.fire({
    title: props.title,
    text: props.messsage,
    type: props.icon,
  });
};

const swalSuccess = (props) => {
  Swal.fire({
    title: props.title,
    text: props.messsage,
    type: "success",
  });
};

const swalError = (props) => {
  Swal.fire({
    title: props.title,
    text: props.messsage,
    type: "error",
  });
};

const swalConfirm = (btn, props) => {
  if (btn.getAttribute('confirmOK') == "1") {
    return true;
  }
  Swal.fire({
    title: `<h5 class="mb-0">${props.title}</h5>`,
    text: props.message,
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: props.confirmButtonText,
  }).then((result) => {
    if (result.value) {
      btn.setAttribute('confirmOK', '1');
      btn.click();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      btn.setAttribute('confirmOK', '0');
    }
  });
  return false;
};

export { sweatalert, swalSuccess, swalError, swalConfirm };
