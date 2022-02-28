import { StyleSheet, Text, View } from "@react-pdf/renderer";
const borderColor = "#000";
const stylesTableRow = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  description: {
    width: "40%",
    textAlign: "center",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  qty: {
    width: "10%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "center",
    paddingRight: 8,
  },
  rate: {
    width: "25%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: "center",
    paddingRight: 8,
  },
  amount: {
    width: "25%",
    textAlign: "center",
    paddingRight: 8,
    marginLeft: "1rem",
  },
  tax: {
    width: "15%",
    textAlign: "center",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
});

const InvoiceTableRow = ({ items }) => {
  console.log(items[0]);

  return (
    <View style={stylesTableRow.row}>
      <Text style={stylesTableRow.description}>{items[0].productName}</Text>
      <Text style={stylesTableRow.qty}>{items[0].productQuantity}</Text>
      <Text style={stylesTableRow.rate}>{items[0].productPrice}</Text>
      <Text style={stylesTableRow.tax}>%19</Text>
      <Text style={stylesTableRow.amount}>{items[0].totalAmount}</Text>
    </View>
  );
};
export default InvoiceTableRow;
