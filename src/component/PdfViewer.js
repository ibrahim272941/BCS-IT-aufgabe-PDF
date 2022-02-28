// import { Document, Page, StyleSheet, PDFViewer } from "@react-pdf/renderer";

// import InvoiceTitle from "../invoice/InvoiceTitle";
// import InvoiceNo from "../invoice/InvoiceNo";
// import BillTo from "../invoice/BillTo";
// import InvoiceItemsTable from "../invoice/InvoiceItemsTable";
// import InvoiceThankYouMsg from "../invoice/InvoiceThankYouMsg";
// import { onValue, query, ref } from "firebase/database";
// import React, { useEffect, useState, useMemo, memo } from "react";
// import { useSelector } from "react-redux";
// import { useBaseContext } from "../contexts/BaseContext";

// import { database } from "../auth/getAuth";
// import { Spinner } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
// const styles = StyleSheet.create({
//   page: {
//     fontFamily: "Helvetica",
//     fontSize: 11,
//     paddingTop: 30,
//     paddingLeft: 60,
//     paddingRight: 60,
//     lineHeight: 1.5,
//     flexDirection: "column",
//   },
//   logo: {
//     width: 74,
//     height: 66,
//     marginLeft: "auto",
//     marginRight: "auto",
//   },
//   viewer: {
//     width: window.innerWidth, //the pdf viewer will take up all of the width and height
//     height: window.innerHeight,
//   },
// });
// function PdfViewer() {
//   const invoice = {
//     id: "5df3180a09ea16dc4b95f910",
//     invoice_no: "ids.ids.toString()",
//     balance: "$2,283.74",
//     company: "data[0].costumerName",
//     email: "susanafuentes@mantrix.com",
//     phone: "data[0].costumerMobile",
//     address: "data[0].costumerAddres",
//     trans_date: "2019-09-12",
//     due_date: "2019-10-12",
//     items: [
//       {
//         sno: 1,
//         desc: "ad sunt culpa occaecat qui",
//         qty: 5,
//         rate: 405.89,
//       },
//       {
//         sno: 2,
//         desc: "cillum quis sunt qui aute",
//         qty: 5,
//         rate: 373.11,
//       },
//       {
//         sno: 3,
//         desc: "ea commodo labore culpa irure",
//         qty: 5,
//         rate: 458.61,
//       },
//       {
//         sno: 4,
//         desc: "nisi consequat et adipisicing dolor",
//         qty: 10,
//         rate: 725.24,
//       },
//       {
//         sno: 5,
//         desc: "proident cillum anim elit esse",
//         qty: 4,
//         rate: 141.02,
//       },
//     ],
//   };
//   const location = useLocation();
//   const id = location.state;
//   const [data, setData] = useState({});
//   const baseContext = useBaseContext();
//   console.log(id[0]);
//   // const ids = useMemo(
//   //   () => ({
//   //     ids: baseContext.ids,
//   //     setIds: baseContext.setIds,
//   //   }),
//   //   [baseContext.ids, baseContext.setIds]
//   // );

//   const {
//     reloadUserInfo: { localId },
//   } = useSelector((state) => state.user.currentUser);

//   useEffect(() => {
//     let values = {};
//     id.length > 1
//       ? id.forEach((id, i) => {
//           onValue(query(ref(database, `${localId}/${id}`)), (snapshot) => {
//             values[i] = snapshot.val();
//             setData({ ...values });
//           });
//         })
//       : onValue(query(ref(database, `${localId}/${id}`)), (snapshot) => {
//           // values[0] = snapshot.val();
//           setData({ ...snapshot.val() });
//         });
//   }, []);
//   console.log(data);
//   // const invoice2 = {
//   //   id: "5df3180a09ea16dc4b95f910",
//   //   invoice_no: ids.ids.toString(),
//   //   balance: "$2,283.74",
//   //   company: data[0].costumerName,
//   //   email: data[0].costumerEmail,
//   //   phone: data[0].costumerMobile,
//   //   address: data[0].costumerAddres,
//   //   trans_date: "2019-09-12",
//   //   due_date: "2019-10-12",
//   //   items: [
//   //     {
//   //       sno: 1,
//   //       desc: "ad sunt culpa occaecat qui",
//   //       qty: 5,
//   //       rate: 405.89,
//   //     },
//   //     {
//   //       sno: 2,
//   //       desc: "cillum quis sunt qui aute",
//   //       qty: 5,
//   //       rate: 373.11,
//   //     },
//   //     {
//   //       sno: 3,
//   //       desc: "ea commodo labore culpa irure",
//   //       qty: 5,
//   //       rate: 458.61,
//   //     },
//   //     {
//   //       sno: 4,
//   //       desc: "nisi consequat et adipisicing dolor",
//   //       qty: 10,
//   //       rate: 725.24,
//   //     },
//   //     {
//   //       sno: 5,
//   //       desc: "proident cillum anim elit esse",
//   //       qty: 4,
//   //       rate: 141.02,
//   //     },
//   //   ],
//   // };

//   return (
//     <PDFViewer style={styles.viewer}>
//       <Document>
//         <Page size="A4" style={styles.page}>
//           {/* <Image style={styles.logo} src={logo} />
//           <InvoiceTitle title="Invoice" />
//           <InvoiceNo invoice={id.toString()} />
//           <BillTo invoice={data} />
//           <InvoiceItemsTable invoice={data} />
//           <InvoiceThankYouMsg /> */}
//         </Page>
//       </Document>
//     </PDFViewer>
//   );
// }
// export default PdfViewer;
