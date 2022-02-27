// import { Text, View, StyleSheet, div } from "@react-pdf/renderer";

// const styleTitle = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     marginTop: "24",
//   },
//   reportTitle: {
//     color: "#000",
//     letterSpacing: "4",
//     fontSize: "25",
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
// });

// export const InvoiceTitle = ({ title }) => {
//   return (
//     <View style={styleTitle.titleContainer}>
//       <Text style={styleTitle.reportTitle}>{title}</Text>
//     </View>
//   );
// };

// const styleInvoiceNo = StyleSheet.create({
//   invoiceNoContainer: {
//     flexDirection: "row",
//     marginTop: 36,
//     justifyContent: "flex-end",
//   },
//   invoiceDateContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   invoiceDate: {
//     fontSize: 12,
//     fontStyle: "bold",
//   },
//   label: {
//     width: 60,
//   },
// });

// export const InvoiceNo = ({ invoice }) => (
//   <div>
//     <View style={styleInvoiceNo.invoiceNoContainer}>
//       <Text style={styleInvoiceNo.label}>Invoice No:</Text>
//       <Text style={styleInvoiceNo.invoiceDate}>{invoice.invoice_no}</Text>
//     </View>
//     <View style={styleInvoiceNo.invoiceDateContainer}>
//       <Text style={styleInvoiceNo.label}>Date: </Text>
//       <Text>{invoice.trans_date}</Text>
//     </View>
//   </div>
// );

// const stylesBillTo = StyleSheet.create({
//   headerContainer: {
//     marginTop: 36,
//   },
//   billTo: {
//     marginTop: 20,
//     paddingBottom: 3,
//     fontFamily: "Helvetica-Oblique",
//   },
// });

// export const BillTo = ({ invoice }) => (
//   <View style={stylesBillTo.headerContainer}>
//     <Text style={stylesBillTo.billTo}>Bill To:</Text>
//     <Text>{invoice.company}</Text>
//     <Text>{invoice.address}</Text>
//     <Text>{invoice.phone}</Text>
//     <Text>{invoice.email}</Text>
//   </View>
// );
// const borderColor = "#90e5fc";
// const stylesTableHeader = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     borderBottomColor: "#bff0fd",
//     backgroundColor: "#bff0fd",
//     borderBottomWidth: 1,
//     alignItems: "center",
//     height: 24,
//     textAlign: "center",
//     fontStyle: "bold",
//     flexGrow: 1,
//   },
//   description: {
//     width: "60%",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//   },
//   qty: {
//     width: "10%",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//   },
//   rate: {
//     width: "15%",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//   },
//   amount: {
//     width: "15%",
//   },
// });

// export const InvoiceTableHeader = () => (
//   <View style={stylesTableHeader.container}>
//     <Text style={stylesTableHeader.description}>Item Description</Text>
//     <Text style={stylesTableHeader.qty}>Qty</Text>
//     <Text style={stylesTableHeader.rate}>@</Text>
//     <Text style={stylesTableHeader.amount}>Amount</Text>
//   </View>
// );

// const stylesTableRow = StyleSheet.create({
//   row: {
//     flexDirection: "row",
//     borderBottomColor: "#bff0fd",
//     borderBottomWidth: 1,
//     alignItems: "center",
//     height: 24,
//     fontStyle: "bold",
//   },
//   description: {
//     width: "60%",
//     textAlign: "left",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//     paddingLeft: 8,
//   },
//   qty: {
//     width: "10%",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//     textAlign: "right",
//     paddingRight: 8,
//   },
//   rate: {
//     width: "15%",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//     textAlign: "right",
//     paddingRight: 8,
//   },
//   amount: {
//     width: "15%",
//     textAlign: "right",
//     paddingRight: 8,
//   },
// });

// export const InvoiceTableRow = ({ items }) => {
//   const rows = items.map((item) => (
//     <View style={stylesTableRow.row} key={item.sno.toString()}>
//       <Text style={stylesTableRow.description}>{item.desc}</Text>
//       <Text style={stylesTableRow.qty}>{item.qty}</Text>
//       <Text style={stylesTableRow.rate}>{item.rate}</Text>
//       <Text style={stylesTableRow.amount}>
//         {(item.qty * item.rate).toFixed(2)}
//       </Text>
//     </View>
//   ));
//   return <div>{rows}</div>;
// };

// const stylesBlankSpace = StyleSheet.create({
//   row: {
//     flexDirection: "row",
//     borderBottomColor: "#bff0fd",
//     borderBottomWidth: 1,
//     alignItems: "center",
//     height: 24,
//     fontStyle: "bold",
//     color: "white",
//   },
//   description: {
//     width: "60%",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//   },
//   qty: {
//     width: "10%",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//   },
//   rate: {
//     width: "15%",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//   },
//   amount: {
//     width: "15%",
//   },
// });

// export const InvoiceTableBlankSpace = ({ rowsCount }) => {
//   const blankRows = Array(rowsCount).fill(0);
//   return (
//     <div>
//       {blankRows.map((x, i) => (
//         <View style={stylesBlankSpace.row} key={`BR${i}`}>
//           <Text style={stylesBlankSpace.description}>-</Text>
//           <Text style={stylesBlankSpace.qty}>-</Text>
//           <Text style={stylesBlankSpace.rate}>-</Text>
//           <Text style={stylesBlankSpace.amount}>-</Text>
//         </View>
//       ))}
//     </div>
//   );
// };

// const stylesTableFooter = StyleSheet.create({
//   row: {
//     flexDirection: "row",
//     borderBottomColor: "#bff0fd",
//     borderBottomWidth: 1,
//     alignItems: "center",
//     height: 24,
//     fontSize: 12,
//     fontStyle: "bold",
//   },
//   description: {
//     width: "85%",
//     textAlign: "right",
//     borderRightColor: borderColor,
//     borderRightWidth: 1,
//     paddingRight: 8,
//   },
//   total: {
//     width: "15%",
//     textAlign: "right",
//     paddingRight: 8,
//   },
// });

// export const InvoiceTableFooter = ({ items }) => {
//   const total = items
//     .map((item) => item.qty * item.rate)
//     .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   return (
//     <View style={stylesTableFooter.row}>
//       <Text style={stylesTableFooter.description}>TOTAL</Text>
//       <Text style={stylesTableFooter.total}>
//         {Number.parseFloat(total).toFixed(2)}
//       </Text>
//     </View>
//   );
// };

// const stylesMessage = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     marginTop: 12,
//   },
//   reportTitle: {
//     fontSize: 12,
//     textAlign: "center",
//     textTransform: "uppercase",
//   },
// });

// export const InvoiceThankYouMsg = () => (
//   <View style={stylesMessage.titleContainer}>
//     <Text style={stylesMessage.reportTitle}>Thank you for your business</Text>
//   </View>
// );

// const tableRowsCount = 11;

// const styles = StyleSheet.create({
//   tableContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 24,
//     borderWidth: 1,
//     borderColor: "#bff0fd",
//   },
// });

// export const InvoiceItemsTable = ({ invoice }) => (
//   <View style={styles.tableContainer}>
//     <InvoiceTableHeader />
//     <InvoiceTableRow items={invoice.items} />
//     <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} />
//     <InvoiceTableFooter items={invoice.items} />
//   </View>
// );
