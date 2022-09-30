import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import swal from "sweetalert";
import Swal from "sweetalert2";
import MyNavbar from "./MyNavbar";
const doSwal = () => {
  swal({
    title: "Rupture De Doliprane (ref#12655)",
    text: "Le systéme a détecté une rupture dans la region sud ",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      Swal.fire({
        title: "Qui Contacter ?",
        input: "select",
        inputOptions: {
          1: "Pharmacie Centrale",
          2: "Sephir",
          3: "CNIP",
          4: "INEAS",
        },
        showCancelButton: true,
        confirmButtonText: "Envoyer",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return swal("C'est bon", "Message envoyé avec succés!", "success");
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
    } else {
      swal("Trouver une autre solution ");
    }
  });
};

const doSwal2 = () => {
  swal({
    title: "Rupture De Maxilas (ref#12655)",
    text: "La pharmacie centrale a allerté d'une rupture aprés deux mois ",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      Swal.fire({
        title: "Notifier les utilisateurs ?",

        CancelButtonText: "No",
        confirmButtonText: "Envoyer",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return swal("C'est bon", "Message envoyé avec succés!", "success");
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });
    } else {
      swal("Trouver une solution ");
    }
  });
};
export default function DescriptionAlerts() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <h3 style={{color:"#08E864", marginTop:"100px", marginLeft:"600px"}}>Alerts de rupture reçues </h3>
      <Stack sx={{ width: "50%", marginLeft: "380px",  marginTop:"100px"}} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Rupture</AlertTitle>
        Un produit est en rupture de stock —{" "}
        <strong onClick={doSwal}>Voir les détails ! </strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Danger De Rupture</AlertTitle>
        Un produit est en risque de rupture —{" "}
        <strong onClick={doSwal2}>Voir les détails !</strong>
      </Alert>
    </Stack>
    </div>
    
  );
}
